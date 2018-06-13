// video  1
var videoPlayButton1,
	videoWrapper1 = document.getElementsByClassName('video-wrapper')[0],
    video1 = document.getElementById('video1'),
    videoMethods1 = {
        renderVideoPlayButton: function() {
            if (videoWrapper1.contains(video1)) {
				this.formatVideoPlayButton();
                video1.classList.add('has-media-controls-hidden');
                videoPlayButton1 = document.getElementById('video-overlay-play-button1');
                videoPlayButton1.addEventListener('click', this.hideVideoPlayButton);
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper1.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" id="video-overlay-play-button1" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video1.play();
            $(videoPlayButton1).addClass('is-hidden');
            video1.classList.remove('has-media-controls-hidden');
            video1.setAttribute('controls', 'controls');
        }
	}

videoMethods1.renderVideoPlayButton();


// video  2
var videoPlayButton2,
    videoWrapper2 = document.getElementsByClassName('video-wrapper')[1],
    video2 = document.getElementById('video2'),
    videoMethods2 = {
        renderVideoPlayButton: function() {
            if (videoWrapper2.contains(video2)) {
                this.formatVideoPlayButton();
                video2.classList.add('has-media-controls-hidden');
                videoPlayButton2 = document.getElementById('video-overlay-play-button2');
                videoPlayButton2.addEventListener('click', this.hideVideoPlayButton);
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper2.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" id="video-overlay-play-button2" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video2.play();
            $(videoPlayButton2).addClass('is-hidden');
            video2.classList.remove('has-media-controls-hidden');
            video2.setAttribute('controls', 'controls');
        }
    }

videoMethods2.renderVideoPlayButton();