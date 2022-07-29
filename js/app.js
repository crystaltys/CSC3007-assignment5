Promise.all([d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"), d3.csv("https://raw.githubusercontent.com/crystaltys/CSC3007-project/main/infection.csv"),d3.json("https://raw.githubusercontent.com/eesur/country-codes-lat-long/master/country-codes-lat-long-alpha3.json"),
d3.csv("https://raw.githubusercontent.com/crystaltys/CSC3007-project/main/daily_cases.csv")]).then((data) => {

    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);


})