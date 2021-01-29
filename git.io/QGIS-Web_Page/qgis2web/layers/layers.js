var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Boundry_0 = new ol.format.GeoJSON();
var features_Boundry_0 = format_Boundry_0.readFeatures(json_Boundry_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundry_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Boundry_0.addFeatures(features_Boundry_0);var lyr_Boundry_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundry_0, 
                style: style_Boundry_0,
                title: '<img src="C:/Users/shree/Documents/Stp-2-OpenLayers-3/Page Creative/QGIS-Web_Page/qgis2web/styles/legend/Boundry_0.png" /> Boundry'
            });var format_Streams_1 = new ol.format.GeoJSON();
var features_Streams_1 = format_Streams_1.readFeatures(json_Streams_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Streams_1.addFeatures(features_Streams_1);var lyr_Streams_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Streams_1, 
                style: style_Streams_1,
                title: '<img src="C:/Users/shree/Documents/Stp-2-OpenLayers-3/Page Creative/QGIS-Web_Page/qgis2web/styles/legend/Streams_1.png" /> Streams'
            });var format_TrainingCenter2_2 = new ol.format.GeoJSON();
var features_TrainingCenter2_2 = format_TrainingCenter2_2.readFeatures(json_TrainingCenter2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrainingCenter2_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TrainingCenter2_2.addFeatures(features_TrainingCenter2_2);var lyr_TrainingCenter2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrainingCenter2_2, 
                style: style_TrainingCenter2_2,
                title: '<img src="C:/Users/shree/Documents/Stp-2-OpenLayers-3/Page Creative/QGIS-Web_Page/qgis2web/styles/legend/TrainingCenter2_2.png" /> Training Center - 2'
            });var format_TrainingCenter1_3 = new ol.format.GeoJSON();
var features_TrainingCenter1_3 = format_TrainingCenter1_3.readFeatures(json_TrainingCenter1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrainingCenter1_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TrainingCenter1_3.addFeatures(features_TrainingCenter1_3);var lyr_TrainingCenter1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrainingCenter1_3, 
                style: style_TrainingCenter1_3,
                title: '<img src="C:/Users/shree/Documents/Stp-2-OpenLayers-3/Page Creative/QGIS-Web_Page/qgis2web/styles/legend//TrainingCenter1_3.png" /> Training Center - 1'
            });var format_KSRDPRUUniversityNagavi_4 = new ol.format.GeoJSON();
var features_KSRDPRUUniversityNagavi_4 = format_KSRDPRUUniversityNagavi_4.readFeatures(json_KSRDPRUUniversityNagavi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSRDPRUUniversityNagavi_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KSRDPRUUniversityNagavi_4.addFeatures(features_KSRDPRUUniversityNagavi_4);var lyr_KSRDPRUUniversityNagavi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KSRDPRUUniversityNagavi_4, 
                style: style_KSRDPRUUniversityNagavi_4,
                title: '<img src="C:/Users/shree/Documents/Stp-2-OpenLayers-3/Page Creative/QGIS-Web_Page/qgis2web/styles/legend//KSRDPRUUniversityNagavi_4.png" /> KSRDPRU University, Nagavi'
            });var format_KSRDPRUUniversityRaithaBhavan_5 = new ol.format.GeoJSON();
var features_KSRDPRUUniversityRaithaBhavan_5 = format_KSRDPRUUniversityRaithaBhavan_5.readFeatures(json_KSRDPRUUniversityRaithaBhavan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSRDPRUUniversityRaithaBhavan_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KSRDPRUUniversityRaithaBhavan_5.addFeatures(features_KSRDPRUUniversityRaithaBhavan_5);var lyr_KSRDPRUUniversityRaithaBhavan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KSRDPRUUniversityRaithaBhavan_5, 
                style: style_KSRDPRUUniversityRaithaBhavan_5,
                title: '<img src="C:/Users/shree/Documents/Stp-2-OpenLayers-3/Page Creative/QGIS-Web_Page/qgis2web/styles/legend//KSRDPRUUniversityRaithaBhavan_5.png" /> KSRDPRU University,Raitha Bhavan'
            });

lyr_Boundry_0.setVisible(true);lyr_Streams_1.setVisible(true);lyr_TrainingCenter2_2.setVisible(true);lyr_TrainingCenter1_3.setVisible(true);lyr_KSRDPRUUniversityNagavi_4.setVisible(true);lyr_KSRDPRUUniversityRaithaBhavan_5.setVisible(true);
var layersList = [baseLayer,lyr_Boundry_0,lyr_Streams_1,lyr_TrainingCenter2_2,lyr_TrainingCenter1_3,lyr_KSRDPRUUniversityNagavi_4,lyr_KSRDPRUUniversityRaithaBhavan_5];
lyr_Boundry_0.set('fieldAliases', { 'Name': 'Name', });
lyr_Streams_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_TrainingCenter2_2.set('fieldAliases', {'id': 'id', 'Name_': 'Name_', });
lyr_TrainingCenter1_3.set('fieldAliases', {'id': 'id', 'Name_': 'Name_', });
lyr_KSRDPRUUniversityNagavi_4.set('fieldAliases', {'id': 'id', 'Name_': 'Name_', });
lyr_KSRDPRUUniversityRaithaBhavan_5.set('fieldAliases', {'id': 'id', 'Name_': 'Name_', });
lyr_Boundry_0.set('fieldImages', {'Name': 'TextEdit', });
lyr_Streams_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_TrainingCenter2_2.set('fieldImages', {'id': 'TextEdit', 'Name_': 'TextEdit', });
lyr_TrainingCenter1_3.set('fieldImages', {'id': 'TextEdit', 'Name_': 'TextEdit', });
lyr_KSRDPRUUniversityNagavi_4.set('fieldImages', {'id': 'TextEdit', 'Name_': 'TextEdit', });
lyr_KSRDPRUUniversityRaithaBhavan_5.set('fieldImages', {'id': 'TextEdit', 'Name_': 'TextEdit', });
lyr_Boundry_0.set('fieldLabels', { 'Name': 'header label', });
lyr_Streams_1.set('fieldLabels', {'id': 'no label', 'Name': 'header label', });
lyr_TrainingCenter2_2.set('fieldLabels', {'id': 'no label', 'Name_': 'header label', });
lyr_TrainingCenter1_3.set('fieldLabels', {'id': 'no label', 'Name_': 'header label', });
lyr_KSRDPRUUniversityNagavi_4.set('fieldLabels', {'id': 'no label', 'Name_': 'header label', });
lyr_KSRDPRUUniversityRaithaBhavan_5.set('fieldLabels', {'id': 'no label', 'Name_': 'header label', });
lyr_KSRDPRUUniversityRaithaBhavan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});