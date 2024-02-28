class Range {
	constructor(selector, cb, min = 0, max = 100, currValue = min, step = 1) {
		this.rangeEl = document.querySelector(selector);
		this.minValue = min;
		this.maxValue = max;
		this.currentValue = currValue;
		this.step = step;
        this.cb = cb
		this._initRange();
	}

	_initRange() {
		const drag = (e) => {
			this.dot = this.rangeEl.querySelector('.range__dot');
			const { left } = this.rangeEl.getBoundingClientRect();
			this.currentValue = Math.floor(
				Math.max(
					0,
					Math.min(100, ((e.clientX - left) / this.rangeEl.offsetWidth) * 100)
				)
			);
			this.cb(this.currentValue);
			this.dot.style.left = `${this.currentValue}%`;
		};
		const startDragging = (e) => {
			e.preventDefault();
			console.log(this.dot);
			document.addEventListener('mousemove', drag);
		};

		const stopDragging = () => {
			document.removeEventListener('mousemove', drag);
		};

		this.rangeEl.addEventListener('mousedown', startDragging);
		document.addEventListener('mouseup', stopDragging);
	}
}

function setVolume(volume) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: 'setVolume',
			volume: volume,
		});
	});
}

// const cb = (e) => {
//     console.log(e)
// }

document.addEventListener('DOMContentLoaded', () => {
	const volumeRange = new Range('#volume', setVolume);

	document.addEventListener('click', () => {
		console.log(volumeRange);
	});
});
