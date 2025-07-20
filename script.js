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
    
    // UPDATED LINKS: Using a proxy to bypass browser CORS security policy.
    { name: "Telangana FM Siddipet", logo: "https://www.telanganafm.com/img/poster_2.jpg", url: "https://corsproxy.io/?http%3A%2F%2F198.178.123.5%3A12682%2F%3B" },
    { name: "TORi Radio", logo: "https://www.teluguoneradio.com/images/tori_logo.png", url: "https://corsproxy.io/?http%3A%2F%2F173.203.133.187%3A9700%2F" },
    
    { name: "London Telugu Radio", logo: "https://c14.radioboss.fm/stationlogo/33.jpg?r=49", url: "https://c8.radioboss.fm/stream/33" },
    { name: "Melody Radio Telugu", logo: "https://melodyradio.in/mel.png", url: "https://a1.asurahosting.com:9580/radio.mp3" },
    { name: "Telangana NRI Radio", logo: "https://tnriradio.org.uk/wp-content/uploads/2020/05/tnri-radio-header-logo-image-with-icons.png", url: "https://play.radioking.io/telangananriradio" },
    { name: "Hello Telugu", logo: "https://image.radioking.io/radios/503281/logo/9cc6bee9-bde6-43f6-8d9b-f2138d54a740.png", url: "https://listen.radioking.com/radio/503281/stream/560701" }
];