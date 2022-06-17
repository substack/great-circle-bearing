var test = require('tape')
var gcb = require('../')

test('bearing', function (t) {
  var a = [-147.7,64.8] // fairbanks
  var b = [139.7,35.7] // tokyo
  t.ok(Math.abs(gcb(a,b)-(-87.87704328893989)) < 1e-8)
  t.ok(Math.abs(gcb(b,a)-31.5972438661438) < 1e-8)
  t.end()
})
