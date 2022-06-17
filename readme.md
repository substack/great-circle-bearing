# great-circle-bearing

bearing in degrees for the initial course along a great circle for two lon,lat points

Note that the bearing will change along the route over a great circle.
If you want a constant course (and are ok to spiral around the poles),
use [rhumb line navigation][].

[rhumb line navigation]: https://edwilliams.org/avform147.htm#Rhumb

# example

``` js
var gcb = require('great-circle-bearing')
var a = [-147.7,64.8] // fairbanks
var b = [139.7,35.7] // tokyo
console.log(gcb(a,b)) // -87.87704328893989
console.log(gcb(b,a)) // 31.5972438661438
```

# api

```
var gcb = require('great-circle-bearing')
```

## var course = gcb(a,b)

Return the `course` in degrees for the route from `a` to `b` where each coordinate pair is a
`[lon,lat]` for longitude and latitude in degrees.

# install

```
npm install great-circle-bearing
```

# license

bsd
