// content.js
const videos = document.getElementsByTagName("video");

for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    let selectedQuality = 0;
    let highestQuality = 0;

    for (let j = 0; j < video.getVideoTracks().length; j++) {
        const track = video.getVideoTracks()[j];
        const width = track.getSettings().width;
        if (width >= 1080 && width > selectedQuality) {
            selectedQuality = width;
        }
        if (width > highestQuality) {
            highestQuality = width;
        }
    }

    if (selectedQuality === 0) {
        selectedQuality = highestQuality;
    }

    for (let j = 0; j < video.getVideoTracks().length; j++) {
        const track = video.getVideoTracks()[j];
        if (track.getSettings().width === selectedQuality) {
            track.enabled = true;
        } else {
            track.enabled = false;
        }
    }
}
