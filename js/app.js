Promise.all([d3.json("https://api.data.gov.sg/v1/environment/psi")]).then((data) => {

    
    var center = L.bounds([1.56073, 104.11475], [1.16, 103.502]).getCenter();
    var map = L.map('map').setView([center.x, center.y], 12);
    
    var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
        detectRetina: true,
        maxZoom: 18,
        minZoom: 11
      });

    map.setMaxBounds([[1.56073, 104.1147], [1.16, 103.502]]);

    basemap.addTo(map);
    var metrics = Object.values(data[0].region_metadata); 
    var lenOfData = metrics.length;
    west = 0;
    national = 0;
    east = 0;
    central = 0;
    south = 0;
    north = 0;
    psi_type = ["pm25_sub_index"]
    psi_type.forEach(element => {
        console.log(data[0].items[0].readings[element])
        west = (data[0].items[0].readings[element]).west
        national = (data[0].items[0].readings[element]).national
        east = (data[0].items[0].readings[element]).east
        central = (data[0].items[0].readings[element]).central
        south = (data[0].items[0].readings[element]).south
        north = (data[0].items[0].readings[element]).north
    });
    region = []
    region.push(west)
    region.push(national)
    region.push(east)
    region.push(central)
    region.push(south)
    region.push(north)
    for (var i=0; i<lenOfData; i++){
        var coords =  metrics[i].label_location;
        console.log(coords)
        var circle = L.circle([coords.latitude, coords.longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 800,
        }).addTo(map);
        circle.bindPopup("PSI 24HR Readings : " + region[i]);
    }
})