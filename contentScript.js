(() => {
	// document.addEventListener('DOMContentLoaded', () => {
	// 	const currentVideo = document.querySelector(
	// 		'ytd-reel-video-renderer[is-active]'
	// 	);
	// 	console.log(currentVideo);
	// });

    // console.log(document.querySelector('div'))
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        // Check if the message is to set the volume
        if (request.action === 'setVolume') {
          // Set the volume on the YouTube page
          // Example: Set the volume to the value received in the message
          document.querySelector('video').volume = request.volume / 100;
          console.log(request)
        }
      });
	// let currentVideo
	// setTimeout(() => {
	//     updateCurrentVideo()
	// },100)
	// chrome.runtime.onMessage.addListener((obj, sender, response) => {
	//     console.log(obj)
	//     updateCurrentVideo()
	// });

	// const updateCurrentVideo = () => {
	//     currentVideo = document.querySelector(
	//         'ytd-reel-video-renderer[is-active]'
	//     );
	//     createVolumeRange()
	// }

	// const createVolumeRange = () => {
	//     const audioRangeEl = document.createElement('input')
	//     audioRangeEl.type = 'range'

	// }
})();
