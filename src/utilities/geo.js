/**
 * FOUND AT: https://gist.github.com/mkhatib/5641004
 * ALL RIGHTS RESERVED
 * 
 */

/**
* Generates number of random geolocation points given a center and a radius.
* @param  {Object} center A JS object with lat and lng attributes.
* @param  {number} radius Radius in meters.
* @param {number} count Number of points to generate.
* @return {array} Array of Objects with lat and lng attributes.
*/
export const generateRandomPoints = (center, radius, count) => {
    var points = [];
    for (var i=0; i<count; i++) {
      points.push(generateRandomPoint(center, radius));
    }
    return points;
  }
  
  
  /**
  * Generates number of random geolocation points given a center and a radius.
  * Reference URL: http://goo.gl/KWcPE.
  * @param  {Object} center A JS object with lat and lng attributes.
  * @param  {number} radius Radius in meters.
  * @return {Object} The generated random points as JS object with lat and lng attributes.
  */
  function generateRandomPoint(center, radius) {
    var x0 = center.lon;
    var y0 = center.lat;
    // Convert Radius from meters to degrees.
    var rd = radius/111300;
  
    var u = Math.random();
    var v = Math.random();
  
    var w = rd * Math.sqrt(u);
    var t = 2 * Math.PI * v;
    var x = w * Math.cos(t);
    var y = w * Math.sin(t);
  
    var xp = x/Math.cos(y0);
  
    // Resulting point.
    return {'lat': y+y0, 'lon': xp+x0};
  }
  
  /**
   * END GET RANDOM LOCATION FOUND AT  https://gist.github.com/mkhatib/5641004
   */

  /**
   * CALCULATE DISTANCE BETWEEN LAT/LONG
   * https://en.wikipedia.org/wiki/Haversine_formula
   */

  // Converts from degrees to radians.
  function radians(degrees) {
    return degrees * Math.PI / 180;
  };


  //hav(θ) = sin²(θ/2)
  function haversine(latLong2, latLong1) {
    let d = radians(latLong2-latLong1);
    return Math.pow(Math.sin(d/2),2);
  }
  
  //distance = 2*r*arcsin(x¹/²)
  export const distance = (origin, destination) => {
    let lat1 = origin['lat'];
    let lon1 = origin['lon'];
    let lat2 = destination['lat'];
    let lon2 = destination['lon'];
    let radius = 6371 //earth radius

    let havLat = haversine(lat2, lat1);
    let havLon = haversine(lon2, lon1);

    //hav(Θ) = hav(latitudes) + cos(lat1)*cos(lat2)*hav(longitudes)
    let hav = havLat + (Math.cos(radians(lat1)) * Math.cos(radians(lat2))) * havLon;

    //2*r*arcsin(x¹/²)
    let distance = 2 * radius * Math.asin(Math.sqrt(hav));

    return distance;
  }