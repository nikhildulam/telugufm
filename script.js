document.addEventListener('DOMContentLoaded', function () {
    // Array of radio station objects
    const stations = [
        { name: "AIR Ananthapur", logo: "https://airdco.pc.cdn.bitgravity.com/images/airanantapur.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio054/playlist.m3u8" },
        { name: "AIR Kadapa", logo: "https://airdco.pc.cdn.bitgravity.com/images/aircuddapah.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio018/playlist.m3u8" },
        { name: "AIR Kurnool", logo: "https://airdco.pc.cdn.bitgravity.com/images/airkurnool.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio052/playlist.m3u8" },
        { name: "AIR Markapur", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_789049.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio039/playlist.m3u8" },
        { name: "FM Simahapuri Nellore", logo: "https://airdco.pc.cdn.bitgravity.com/images/RADIO_436373.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio168/playlist.m3u8" },
        { name: "AIR Tirupati", logo: "https://airdco.pc.cdn.bitgravity.com/images/airtirupati.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio144/playlist.m3u8" },
        { name: "AIR Andhra Pradesh", logo: "https://airdco.pc.cdn.bitgravity.com/images/airvijayawada.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio175/playlist.m3u8" },
        { name: "FM Rainbow Vijayawada", logo: "https://airdco.pc.cdn.bitgravity.com/images//fmrainvijayawada.jpg", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio174/playlist.m3u8" },
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
        { name: "Telangana FM Siddipet", logo: "https://www.telanganafm.com/img/poster_2.jpg", url: "http://198.178.123.5:12682/" },
        { name: "London Telugu Radio", logo: "https://c14.radioboss.fm/stationlogo/33.jpg?r=49", url: "https://c8.radioboss.fm/stream/33" },
        { name: "Melody Radio Telugu", logo: "https://melodyradio.in/mel.png", url: "https://a1.asurahosting.com:9580/radio.mp3" },
        { name: "TORi Radio", logo: "https://www.teluguoneradio.com/images/tori_logo.png", url: "http://173.203.133.187:9700/" },
        { name: "Telangana NRI Radio", logo: "https://tnriradio.org.uk/wp-content/uploads/2020/05/tnri-radio-header-logo-image-with-icons.png", url: "https://play.radioking.io/telangananriradio" },
        { name: "Hello Telugu", logo: "https://image.radioking.io/radios/503281/logo/9cc6bee9-bde6-43f6-8d9b-f2138d54a740.png", url: "https://listen.radioking.com/radio/503281/stream/560701" }
    ];

    const stationList = document.getElementById('station-list');
    const audioPlayer = document.getElementById('audio-player');
    const nowPlayingLogo = document.getElementById('now-playing-logo');
    const nowPlayingName = document.getElementById('now-playing-name');
    const playerBar = document.getElementById('player-bar');
    const fallbackLogo = 'https://i.imgur.com/p1yVo2R.png'; // A generic fallback logo
    let hls = new Hls();

    // Function to populate the station list
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

    // Event listener for clicks on station cards
    stationList.addEventListener('click', (event) => {
        const card = event.target.closest('.station-card');
        if (card) {
            const stationIndex = card.dataset.index;
            const station = stations[stationIndex];
            playStation(station);

            // Update active state for cards
            document.querySelectorAll('.station-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        }
    });

    function playStation(station) {
        // Update the "Now Playing" bar
        nowPlayingLogo.src = station.logo;
        nowPlayingName.textContent = station.name;
        playerBar.classList.add('visible');
        
        nowPlayingLogo.onerror = () => { nowPlayingLogo.src = fallbackLogo; };

        const streamUrl = station.url;

        // Check for HLS stream (.m3u8)
        if (streamUrl.includes('.m3u8')) {
            if (Hls.isSupported()) {
                hls.destroy(); // Destroy previous instance
                hls = new Hls();
                hls.loadSource(streamUrl);
                hls.attachMedia(audioPlayer);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    audioPlayer.play();
                });
            } else if (audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
                // For Safari on iOS/macOS which has native HLS support
                audioPlayer.src = streamUrl;
                audioPlayer.play();
            }
        } else {
            // For regular MP3/AAC streams
            hls.destroy(); // Ensure HLS is not attached
            audioPlayer.src = streamUrl;
            audioPlayer.play();
        }
    }
});