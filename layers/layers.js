var wms_layers = [];

var format_Cuencas_0 = new ol.format.GeoJSON();
var features_Cuencas_0 = format_Cuencas_0.readFeatures(json_Cuencas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_0.addFeatures(features_Cuencas_0);
var lyr_Cuencas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuencas_0, 
                style: style_Cuencas_0,
                popuplayertitle: 'Cuencas',
                interactive: true,
    title: 'Cuencas<br />\
    <img src="styles/legend/Cuencas_0_0.png" /> Despensa<br />\
    <img src="styles/legend/Cuencas_0_1.png" /> Escorias<br />\
    <img src="styles/legend/Cuencas_0_2.png" /> Lechuzas<br />\
    <img src="styles/legend/Cuencas_0_3.png" /> Tapalcas<br />' });
var format_Cauces_1 = new ol.format.GeoJSON();
var features_Cauces_1 = format_Cauces_1.readFeatures(json_Cauces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cauces_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cauces_1.addFeatures(features_Cauces_1);
var lyr_Cauces_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cauces_1, 
                style: style_Cauces_1,
                popuplayertitle: 'Cauces',
                interactive: true,
                title: '<img src="styles/legend/Cauces_1.png" /> Cauces'
            });

lyr_Cuencas_0.setVisible(true);lyr_Cauces_1.setVisible(true);
var layersList = [lyr_Cuencas_0,lyr_Cauces_1];
lyr_Cuencas_0.set('fieldAliases', {'fid': 'fid', 'VALUE': 'VALUE', 'Cuenca': 'Cuenca', });
lyr_Cauces_1.set('fieldAliases', {'fid': 'fid', 'BASIN': 'BASIN', 'UP_ELEV': 'UP_ELEV', 'DN_ELEV': 'DN_ELEV', 'LENGTH': 'LENGTH', 'AVG_SLOPE': 'AVG_SLOPE', });
lyr_Cuencas_0.set('fieldImages', {'fid': 'TextEdit', 'VALUE': 'TextEdit', 'Cuenca': 'TextEdit', });
lyr_Cauces_1.set('fieldImages', {'fid': '', 'BASIN': '', 'UP_ELEV': '', 'DN_ELEV': '', 'LENGTH': '', 'AVG_SLOPE': '', });
lyr_Cuencas_0.set('fieldLabels', {'fid': 'hidden field', 'VALUE': 'inline label - always visible', 'Cuenca': 'inline label - always visible', });
lyr_Cauces_1.set('fieldLabels', {'fid': 'hidden field', 'BASIN': 'inline label - always visible', 'UP_ELEV': 'inline label - always visible', 'DN_ELEV': 'inline label - always visible', 'LENGTH': 'inline label - visible with data', 'AVG_SLOPE': 'inline label - visible with data', });
lyr_Cauces_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});