document.addEventListener('DOMContentLoaded', function () {
    const stations = [
        { name: "AIR Ananthapur", logo: "https://airdco.pc.cdn.bitgravity.com/images/airanantapur.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio054/playlist.m3u8" },
        { name: "AIR Kadapa", logo: "https://airdco.pc.cdn.bitgravity.com/images/aircuddapah.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio018/playlist.m3u8" },
        { name: "AIR Kurnool", logo: "https://airdco.pc.cdn.bitgravity.com/images/airkurnool.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio052/playlist.m3u8" },
        // ... (rest of the stations from the previous response)
        { name: "Vividh Bharati Vijayawada", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_792040.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio176/playlist.m3u8" },
        { name: "AIR Visakhapatnam", logo: "https://airdco.pc.cdn.bitgravity.com/images/airvisakhapc.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio080/playlist.m3u8" },
        { name: "FM Rainbow Visakhapatnam", logo: "https://airdco.pc.cdn.bitgravity.com/images/airvisakhafm.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio081/playlist.m3u8" },
        { name: "AIR Adilabad", logo: "https://airdco.pc.cdn.bitgravity.com/images/adilabad.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio218/playlist.m3u8" },
        { name: "AIR Telangana", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_705851.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio032/playlist.m3u8" },
        { name: "FM Rainbow Hyderabad", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_212042.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio031/playlist.m3u8" },
        { name: "Vividh Bharati Hyderabad", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_444750.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio034/playlist.m3u8" },
        { name: "AIR Kothagudem", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_509111.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio116/playlist.m3u8" },
        { name: "AIR Nizamabad", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_187368.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio222/playlist.m3u8" },
        { name: "AIR Warangal", logo: "https://airdco.pc.cdn.bitgravity.com/images/airwarangal.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio154/playlist.m3u8" },
        { name: "Telangana FM Siddipet", logo: "https://www.telanganafm.com/img/poster_2.jpg", url: "http://198.178.123.5:12682/;", openInNewTab: true },
        { name: "TORi Radio", logo: "https://www.teluguoneradio.com/images/tori_logo.png", url: "http://173.203.133.187:9700/;", openInNewTab: true },
        { name: "London Telugu Radio", logo: "https://c14.radioboss.fm/stationlogo/33.jpg?r=49", url: "https://c8.radioboss.fm/stream/33" },
        { name: "Melody Radio Telugu", logo: "https://melodyradio.in/mel.png", url: "https://a1.asurahosting.com:9580/radio.mp3" },
        { name: "TORi Radio 2", logo: "https://radiostar.in/wp-content/uploads/2022/09/toriradio.jpg", url: "http://173.203.133.187:9700/stream/1" },
        { name: "Telangana NRI Radio", logo: "https://tnriradio.org.uk/wp-content/uploads/2020/05/tnri-radio-header-logo-image-with-icons.png", url: "https://play.radioking.io/telangananriradio" },
        { name: "Hello Telugu", logo: "https://image.radioking.io/radios/503281/logo/9cc6bee9-bde6-43f6-8d9b-f2138d54a740.png", url: "https://listen.radioking.com/radio/503281/stream/560701" }
    ];

    // DOM Elements
    const stationList = document.getElementById('station-list');
    const audioPlayer = document.getElementById('audio-player');
    const playerBar = document.getElementById('player-bar');
    const nowPlayingLogo = document.getElementById('now-playing-logo');
    const nowPlayingName = document.getElementById('now-playing-name');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const fallbackLogo = 'https://i.imgur.com/p1yVo2R.png';

    // State
    let hls = new Hls();
    let currentIndex = -1;

    // --- Create Station Cards ---
    stations.forEach((station, index) => {
        const card = document.createElement('div');
        card.className = 'station-card';
        card.dataset.index = index;
        // ... (rest of the card creation logic is the same)
        const logo = document.createElement('img');
        logo.src = station.logo;
        logo.alt = `${station.name} Logo`;
        logo.onerror = () => { logo.src = fallbackLogo; };
        const name = document.createElement('div');
        name.className = 'station-name';
        name.textContent = station.name;
        card.appendChild(logo);
        card.appendChild(name);
        stationList.appendChild(card);
    });

    // --- Main Player Function ---
    function playStationByIndex(index) {
        const station = stations[index];

        if (station.openInNewTab) {
            window.open(station.url, '_blank');
            return;
        }

        currentIndex = index;
        const streamUrl = station.url;

        // HLS or Direct Stream Logic
        if (streamUrl.includes('.m3u8')) {
            if (Hls.isSupported()) {
                hls.destroy(); hls = new Hls();
                hls.loadSource(streamUrl);
                hls.attachMedia(audioPlayer);
                hls.on(Hls.Events.MANIFEST_PARSED, () => audioPlayer.play());
            } else if (audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
                audioPlayer.src = streamUrl;
                audioPlayer.addEventListener('loadedmetadata', () => audioPlayer.play());
            }
        } else {
            hls.destroy();
            audioPlayer.src = streamUrl;
            audioPlayer.play();
        }

        // Update UI
        playerBar.classList.add('visible');
        nowPlayingLogo.src = station.logo;
        nowPlayingName.textContent = station.name;
        document.querySelectorAll('.station-card').forEach(c => c.classList.remove('active'));
        document.querySelector(`.station-card[data-index='${index}']`).classList.add('active');
    }

    // --- Event Listeners ---
    stationList.addEventListener('click', (event) => {
        const card = event.target.closest('.station-card');
        if (card) playStationByIndex(parseInt(card.dataset.index));
    });

    playPauseBtn.addEventListener('click', () => {
        if (currentIndex === -1) return; // Do nothing if no station is selected
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
    
    // Update play/pause icon based on audio events
    audioPlayer.addEventListener('play', () => {
        playPauseBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
    });
    audioPlayer.addEventListener('pause', () => {
        playPauseBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
    });

    function playNextStation() {
        if (currentIndex === -1) return;
        let nextIndex = currentIndex;
        do {
            nextIndex = (nextIndex + 1) % stations.length;
        } while (stations[nextIndex].openInNewTab); // Skip stations that open in a new tab
        playStationByIndex(nextIndex);
    }
    
    function playPrevStation() {
        if (currentIndex === -1) return;
        let prevIndex = currentIndex;
        do {
            prevIndex = (prevIndex - 1 + stations.length) % stations.length;
        } while (stations[prevIndex].openInNewTab); // Skip stations that open in a new tab
        playStationByIndex(prevIndex);
    }

    nextBtn.addEventListener('click', playNextStation);
    prevBtn.addEventListener('click', playPrevStation);
    
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });
});