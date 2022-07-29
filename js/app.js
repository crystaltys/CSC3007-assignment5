Promise.all([d3.json("https://api.data.gov.sg/v1/environment/psi")]).then((data) => {


    let tiles = new L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 18,
    minZoom: 11,
    //Do not remove this attribution
    attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:0px;width:0px;">' +
                'New OneMap | Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
    });
    let map = new L.Map("map", {
        center: [1.347833, 103.809357], 
        zoom: 11,
        maxBounds: L.latLngBounds(L.latLng(1.1, 103.5), L.latLng(1.5, 104.3))
        })
        .addLayer(tiles);
                        
    

    var marker = L.marker([51.5, -0.09]).addTo(map);
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");


})