//Initiating Map
var map = new ol.Map({
   
    target:'mymap',
    view : new ol.View({
        center:[8416720.68860842, 1732040.3156953386],
        zoom:15.4
    }),

    layers:[
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
       
    ]


})

var province = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio:1,
        url:'http://localhost:8080/geoserver/KSRDPRU/wms',
        params:{Layers:'KSRDPRU:boundry'}
    })
})


var province1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio:1,
        url:'http://localhost:8080/geoserver/KSRDPRU/wms',
        params:{Layers:'KSRDPRU:streams'}
    })


})

var province2 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio:1,
        url:'http://localhost:8080/geoserver/KSRDPRU/wms',
        params:{Layers:'KSRDPRU:tank'}
    })
})

map.addLayer(province);
map.addLayer(province1);
map.addLayer(province2);


map.on('click',function(e){
    console.log(e.coordinate);
})


