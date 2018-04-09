var svg = document.querySelector('svg'),
  regenerate = document.querySelector('#regenerate'),
  pointGroup = document.querySelector('#points'),
  polygons = document.querySelector('#polygons'),
  dashboard = document.querySelector('.dashboard'),
  noOfPoints = document.querySelector('#noOfPoints'),
  polygonEdges = document.querySelector('#polygonEdges'),
  showCircle = document.querySelector('#showCircle'),
  edgeWidth = document.querySelector('#edgeWidth'),
  btnGetSVG = document.querySelector('#getSVG'),
  ctrlSpeed = document.querySelector('#ctrlSpeed'),
  doAnimate = document.querySelector('#doAnimate'),
  colorfull = document.querySelector('#colorfull'),
  bg = document.querySelector('#bg'),
  svgNS = svg.namespaceURI,
  points = [],
  themes = [],
  theme = [],
  padding = 20,
  width, height, rr, gg, bb;

function setColor() {
  rr = parseInt(Math.random() * 200 + 55);
  gg = parseInt(Math.random() * 200 + 55);
  bb = parseInt(Math.random() * 200 + 55);
	// Disabled Adobe Kuler color
  // var c = theme.swatches[parseInt(Math.random() * theme.swatches.length)];
  // rr = c.r;
  // gg = c.g;
  // bb = c.b;
}

function drawPolygons(pointID, reset) {
  pointID = pointID || 0;
  if (!!reset) {
    polygons.innerHTML = "";
  }
  var poly = [],
    activePoint = points[pointID];
  points.forEach(function(p, i) {
    p.distance = getDistance(activePoint, p);
  });
  var temp = points.map(function(e, i) {
    if (i !== pointID) return e;
  });
  temp.sort(function(a, b) {
    return (a.distance > b.distance) ? 1 : -1;
  });

  temp = temp.filter(function(e, i) {
    if (i < polygonEdges.value) {
      e.angle = getAngleFromPoint(e, activePoint);
      return e;
    }
  });

  temp.sort(function(a, b) {
    return (a.angle > b.angle) ? 1 : -1;
  });

  //temp.splice(0,1);

  var d = " ";
  for (var i = 0; i < temp.length; i++) {
    d += (i === 0) ? "M " : ((i === 1) ? "L " : " ");
    d += temp[i].X + " " + temp[i].Y + " ";
  }
  d += " L " + temp[0].X + " " + temp[0].Y + " ";
  var currentPath = d + " Z";
  if (!!colorfull.checked) {
    setColor();
  }
  var polygon = document.createElementNS(svgNS, "path");
  polygon.setAttribute("d", currentPath);
  polygon.setAttribute("stroke", "rgba(" + rr + "," + gg + "," + bb + ",.2)");
  polygon.setAttribute("stroke-width", edgeWidth.value + "px");
  polygon.setAttribute("fill", "rgba(" + rr + "," + gg + "," + bb + ",.2)");
  polygons.appendChild(polygon);
}

function setSVG() {
  var dashboardDimentions = getElementHeight(dashboard);

  width = Math.abs(dashboardDimentions.width); // window.innerWidth;
  width = Math.abs((width > window.screen.availWidth) ? window.screen.availWidth : width);
  height = Math.abs(window.innerHeight - dashboardDimentions.height);
  height = Math.abs((height > window.screen.availHeight) ? window.screen.availHeight : height);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  bg.setAttribute("width", width);
  bg.setAttribute("height", height);
  svg.setAttribute("viewbox", "0 0 " + width + " " + height);
}

function toFloat(styleValue) {
  return parseFloat(styleValue.replace(/\D/g, ""));
}

function getElementHeight(ele) {
  var cs = window.getComputedStyle(ele);
  var height = toFloat(cs.height);
  height += toFloat(cs.paddingTop);
  height += toFloat(cs.paddingBottom);
  var width = toFloat(cs.width);
  width += toFloat(cs.paddingRight);
  width += toFloat(cs.paddingLeft);

  return {
    height: height,
    width: width
  };
}

function generateNew() {
  delete points;
  points = [];
  for (var i = 0; i < noOfPoints.value; i++) {
    points.push(new Point(parseInt(Math.random() * (width - padding) + padding / 2), parseInt(Math.random() * (height - padding) + padding / 2), i))
  };
  drawCircles();
  pointGroup.innerHTML = '';
  polygons.innerHTML = "";
  drawAll();
  animate();
}

function drawAll() {
  polygons.innerHTML = '';
  for (var i = 0; i < points.length; i++) {
    drawPolygons(i);
  };
}

function animate() {
  if (!!doAnimate.checked) {
    for (var i = 0; i < points.length; i++) {
      points[i].move(ctrlSpeed.value);
    };
    drawAll();
    drawCircles();
  }
  requestAnimationFrame(animate)
}

function drawCircles() {
  pointGroup.innerHTML = "";
  if (!!showCircle.checked) {
    points.map(function(e, i) {
      var point = document.createElementNS(svgNS, "circle");
      point.setAttribute("cx", e.X + "px");
      point.setAttribute("cy", e.Y + "px");
      point.setAttribute("r", "5px");
      point.setAttribute("title", i);
      point.setAttribute("stroke", "rgba(" + rr + "," + gg + "," + bb + ",.6)");
      point.setAttribute("stroke-width", "2px");
      point.setAttribute("fill", "none");
      pointGroup.appendChild(point);
    });
  }
}

function Point(x, y, id) {
  return {
    move: function(speed) {
      this.X += this.dx * speed;
      this.Y += this.dy * speed;
      if (this.X < 0 || this.X > width) {
        this.X -= this.dx * speed;
        this.dx = -this.dx;
      }
      if (this.Y < 0 || this.Y > height) {
        this.Y -= this.dy * speed;
        this.dy = -this.dy;
      }
    },
    "X": x,
    "Y": y,
    "distance": -1,
    "id": id,
    "angle": -1,
    "dx": Math.random() - Math.random(),
    "dy": Math.random() - Math.random()
  };
}

// Credits goes to http://snipplr.com/view/47207/
function getDistance(point1, point2) {
  var xs = 0;
  var ys = 0;

  xs = point2.X - point1.X;
  xs = xs * xs;

  ys = point2.Y - point1.Y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

// Credits goes to Stackoverflow: http://stackoverflow.com/a/14413632
function getAngleFromPoint(point, centerPoint) {
  var dy = (point.Y - centerPoint.Y),
    dx = (point.X - centerPoint.X);
  var theta = Math.atan2(dy, dx);
  var angle = (((theta * 180) / Math.PI)) % 360;
  angle = (angle < 0) ? 360 + angle : angle;
  return angle;
}

function getSVG() {
  var w = window.open();
  w.document.write("<h1>Copy SVG into say Affinity Designer</h1><textarea style='width: 100%; height: " + window.outerHeight + "px'>" + svg.outerHTML + "</textarea>");
}

setSVG();
window.onresize = setSVG;
regenerate.onclick = noOfPoints.oninput = polygonEdges.oninput = edgeWidth.oninput = generateNew;
showCircle.onchange = drawCircles;
colorfull.onchange = function() {
	// Disabled Adobe Kuler color
  // getKulerTheme();
  drawAll();
};
setSVG();
btnGetSVG.onclick = getSVG;



// Disabled Adobe Kuler color
/**Adding Kuler colors */
// function Kuler(kulerObj) {
//   var me = this;
//   me.title = kulerObj.querySelector("themeTitle").textContent;
//   me.id = kulerObj.querySelector("themeID").textContent;
//   me.link = kulerObj.querySelector("guid").textContent;
//   me.editLink = "https: //color.adobe.com/en/%name%-color-theme-%id%/edit/?copy=true"
//     .replace(/%name%/ig, me.title.split(" ").join("-"))
//     .replace(/%id%/ig, me.id)
//     .replace(/ /ig, "");
//   me.swatches = [];
//   forEach(kulerObj.querySelectorAll("swatch"), function(e, i) {
//     var alpha = parseInt(Math.random() * 100) / 100;
//     alpha = 1;
//     var r = parseInt(parseFloat(e.querySelector('swatchRGB1').textContent) * 255);
//     var g = parseInt(parseFloat(e.querySelector('swatchRGB2').textContent) * 255);
//     var b = parseInt(parseFloat(e.querySelector('swatchRGB3').textContent) * 255);
//     var col = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
//     me.swatches.push({
//       rgb: col,
//       r: r,
//       g: g,
//       b: b
//     });
//   });
//   return this;
// }

function forEach(domNodes, cb) {
  return Array.prototype.forEach.call(domNodes, function(item, i) {
    cb(item, i);
  });
}

// Disable Adobe Kuler
// function getThemes(noOfSets, cb) {
//   noOfSets = (typeof noOfSets !== "undefined") ? noOfSets : parseInt(sets.textContent);
//   var me = this;
//   me.cb = cb;

//   function reqListener(resp) {
//     var dom = document.createElement('div');
//     dom.innerHTML = oReq.responseText.replace(/kuler:/gi, '');
//     forEach(dom.querySelectorAll("item"), function(ele) {
//       themes.push(new Kuler(ele));
//     });
//     cb();
//   }
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener('load', reqListener);
//   oReq.open('GET', 'https://kuler-api.adobe.com/rss/get.cfm?listType=popular&itemsPerPage=' + noOfSets + '&key=mykey');
//   oReq.send();
// }

// function getKulerTheme() {
//   theme = themes[parseInt(Math.random() * themes.length)];
//   colorfull.setAttribute("title", "Using " + theme.title)
// }

// Disable Adobe Kuler
// getThemes(30, function() {
//   getKulerTheme();
//   setColor();
//   generateNew();
// })

function aRun() {
	setColor();
	generateNew();
}


document.querySelector('svg').addEventListener('click', aRun);
aRun();
