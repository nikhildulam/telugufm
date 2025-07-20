document.addEventListener('DOMContentLoaded', function () {
    const stations = [
        { name: "AIR Ananthapur", logo: "logos/air-ananthapur.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio054/playlist.m3u8" },
        { name: "AIR Kadapa", logo: "logos/air-kadapa.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio018/playlist.m3u8" },
        { name: "AIR Kurnool", logo: "logos/air-kurnool.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio052/playlist.m3u8" },
        { name: "AIR Markapur", logo: "logos/air-markapur.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio039/playlist.m3u8" },
        { name: "FM Simahapuri Nellore", logo: "logos/fm-simahapuri-nellore.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio168/playlist.m3u8" },
        { name: "AIR Tirupati", logo: "logos/air-tirupati.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio144/playlist.m3u8" },
        { name: "AIR Andhra Pradesh", logo: "logos/air-andhra-pradesh.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio175/playlist.m3u8" },
        { name: "FM Rainbow Vijayawada", logo: "logos/fm-rainbow-vijayawada.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio174/playlist.m3u8" },
        { name: "Vividh Bharati Vijayawada", logo: "logos/vividh-bharati-vijayawada.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio176/playlist.m3u8" },
        { name: "AIR Visakhapatnam", logo: "logos/air-visakhapatnam.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio080/playlist.m3u8" },
        { name: "FM Rainbow Visakhapatnam", logo: "logos/fm-rainbow-visakhapatnam.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio081/playlist.m3u8" },
        { name: "AIR Adilabad", logo: "logos/air-adilabad.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio218/playlist.m3u8" },
        { name: "AIR Telangana", logo: "logos/air-telangana.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio032/playlist.m3u8" },
        { name: "FM Rainbow Hyderabad", logo: "logos/fm-rainbow-hyderabad.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio031/playlist.m3u8" },
        { name: "Vividh Bharati Hyderabad", logo: "logos/vividh-bharati-hyderabad.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio034/playlist.m3u8" },
        { name: "AIR Kothagudem", logo: "logos/air-kothagudem.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio116/playlist.m3u8" },
        { name: "AIR Nizamabad", logo: "logos/air-nizamabad.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio222/playlist.m3u8" },
        { name: "AIR Warangal", logo: "logos/air-warangal.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio154/playlist.m3u8" },
        { name: "Telangana FM Siddipet", logo: "logos/telangana-fm-siddipet.jpg", url: "http://198.178.123.5:12682/;", openInNewTab: true },
        { name: "TORi Radio", logo: "logos/tori-radio-2.jpg", url: "http://173.203.133.187:9700/;", openInNewTab: true },
        { name: "London Telugu Radio", logo: "logos/london-telugu-radio.jpg", url: "https://c8.radioboss.fm/stream/33" },
        { name: "Melody Radio Telugu", logo: "logos/melody-radio-telugu.png", url: "https://a1.asurahosting.com:9580/radio.mp3" },
        { name: "TORi Radio 2", logo: "logos/tori-radio-2.jpg", url: "http://173.203.133.187:9700/stream/1" },
        { name: "Telangana NRI Radio", logo: "logos/telangana-nri-radio.webp", url: "https://play.radioking.io/telangananriradio" },
        { name: "Hello Telugu", logo: "logos/hello-telugu.png", url: "https://listen.radioking.com/radio/503281/stream/560701" }
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
    const fallbackLogo = 'logos/fallback-logo.png'; // A generic fallback logo

    // State
    let hls = new Hls();
    let currentIndex = -1;

    // --- Create Station Cards ---
    stations.forEach((station, index) => {
        const card = document.createElement('div');
        card.className = 'station-card';
        card.dataset.index = index;

        const logo = document.createElement('img');
        logo.src = station.logo;
        logo.alt = `${station.name} Logo`;
        logo.onerror = () => { logo.src = fallbackLogo; }; // Set fallback if original logo fails

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

        if (streamUrl.includes('.m3u8')) {
            if (Hls.isSupported()) {
                hls.destroy(); 
                hls = new Hls();
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
        if (currentIndex === -1) return;
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
    
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
        } while (stations[nextIndex].openInNewTab);
        playStationByIndex(nextIndex);
    }
    
    function playPrevStation() {
        if (currentIndex === -1) return;
        let prevIndex = currentIndex;
        do {
            prevIndex = (prevIndex - 1 + stations.length) % stations.length;
        } while (stations[prevIndex].openInNewTab);
        playStationByIndex(prevIndex);
    }

    nextBtn.addEventListener('click', playNextStation);
    prevBtn.addEventListener('click', playPrevStation);
    
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });
});