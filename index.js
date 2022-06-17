// https://edwilliams.org/avform147.htm#Crs

module.exports = function (a, b) {
  var lon1 = a[0]*Math.PI/180, lat1 = a[1]*Math.PI/180
  var lon2 = b[0]*Math.PI/180, lat2 = b[1]*Math.PI/180
  var tc = Math.atan2(
    Math.sin(lon1-lon2)*Math.cos(lat2),
    Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(lon1-lon2)
  ) % (2*Math.PI)
  return ((360-tc*180/Math.PI + 180) % 360 + 360) % 360 - 180
}
