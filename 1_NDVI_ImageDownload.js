function cloudMasking(image){
  var qa = image.select('QA60');
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0).and(qa.bitwiseAnd(cirrusBitMask).eq(0));
  return image.updateMask(mask);
}

function ndviCalc(image){
  return image.expression('(NIR-RED)/(NIR+RED)',{'NIR':image.select('B8'),'RED':image.select('B4')}).round();
}

var point = ee.Geometry.Point([102.665,17.775]);
// var region = ee.Geometry.Rectangle([102.5,17.5,103,18]);
var region = ee.Geometry.Rectangle([102.605,17.715,102.725,17.835]);

// Oct
var Oct = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2018-10-01','2018-10-31')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Oct = ndviCalc(Oct);
// Map.addLayer(NDVI_Oct,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Oct');

Export.image.toDrive({
  image:NDVI_Oct.reproject('EPSG:4326',null,10),
  description:'NDVI_10_Oct',
  dimensions:1024,
  folder:'NDVI',
  region:region
});



// Nov
var Nov = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2018-11-01','2018-11-30')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Nov = ndviCalc(Nov);
// Map.addLayer(NDVI_Nov,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Nov');
Export.image.toDrive({image:NDVI_Nov.reproject('EPSG:4326',null,10),description:'NDVI_11_Nov',dimensions:1024,folder:'NDVI',region:region});

// Dec
var Dec = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2018-12-01','2018-12-31')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Dec = ndviCalc(Dec);
// Map.addLayer(NDVI_Dec,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Dec');
Export.image.toDrive({image:NDVI_Dec.reproject('EPSG:4326',null,10),description:'NDVI_12_Dec',dimensions:1024,folder:'NDVI',region:region});

// Jan
var Jan = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2019-01-01','2019-01-31')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Jan = ndviCalc(Jan);
// Map.addLayer(NDVI_Jan,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Jan');
Export.image.toDrive({image:NDVI_Jan.reproject('EPSG:4326',null,10),description:'NDVI_01_Jan',dimensions:1024,folder:'NDVI',region:region});

// Feb
var Feb = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2019-02-01','2019-02-28')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Feb = ndviCalc(Feb);
// Map.addLayer(NDVI_Feb,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Feb');
Export.image.toDrive({image:NDVI_Feb.reproject('EPSG:4326',null,10),description:'NDVI_02_Feb',dimensions:1024,folder:'NDVI',region:region});

// Mar
var Mar = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2019-03-01','2019-03-31')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Mar = ndviCalc(Mar);
// Map.addLayer(NDVI_Mar,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Mar');
Export.image.toDrive({image:NDVI_Mar.reproject('EPSG:4326',null,10),description:'NDVI_03_Mar',dimensions:1024,folder:'NDVI',region:region});

// Apr
var Apr = ee.ImageCollection('COPERNICUS/S2')
  .filterBounds(point)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',30)
  .filterDate('2019-04-01','2019-04-30')
  .map(cloudMasking)
  .select(['B4','B8'])
  .median();
var NDVI_Apr = ndviCalc(Apr);
// Map.addLayer(NDVI_Apr,{min:0,max:255,palette:['red','blue','yellow','green']},'NDVI_Apr');
Export.image.toDrive({image:NDVI_Apr.reproject('EPSG:4326',null,10),description:'NDVI_04_Apr',dimensions:1024,folder:'NDVI',region:region});

