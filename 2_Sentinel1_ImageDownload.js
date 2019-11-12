var point = ee.Geometry.Point([102.665,17.775]);
var region = ee.Geometry.Rectangle([102.605,17.715,102.725,17.835]);
var Sentinel1 = ee.ImageCollection('COPERNICUS/S1_GRD')
  .filterBounds(point)
  .filterDate('2018-08-01','2019-07-31');
  // .select(['VV','VH']);

// print(Sentinel1)
var imageList = Sentinel1.toList(200);
// print(imageList)

for(var i = 0; i < imageList.size().getInfo(); i++){
  var imageOri = ee.Image(imageList.get(i));
  var imageFinal = ee.Image([imageOri.select('VV'), imageOri.select('VH')]);
  Export.image.toDrive({image:imageFinal.reproject('EPSG:4326',null,10),description:imageFinal.get('system:index').getInfo(),folder:'NongKhai_Sentinel1',dimensions:1024,region:region});
}

