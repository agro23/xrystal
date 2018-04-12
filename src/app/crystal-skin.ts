export class CrystalSkin {
  public colors: Array<any>=[];
  public points: Array<any>=[];
  // public rgbaColors: string[];
  public paramArr: string[];
  constructor(
    public hash: string
  ){
    this.hash = hash;

    this.reduce();
  }

  reduce() {
    let object = this.mostUsed(this.hash);
    let mostUsed = object[1];
    // console.log("output of reduce() " +object[0][1] + " is the most used character, used "+object[0][0] + " times");
    let paramArr = this.hash.split(object[0][1]);
    let hexColors = this.getHexColors(paramArr);
    let rgbaColors = this.getRGBAColors(paramArr);
    this.colors.push(hexColors);
    this.colors.push(rgbaColors);
    // console.log("colors " + hexColors);
    this.paramArr = paramArr;
    this.points = this.getPoints(paramArr,this.hash);
    return paramArr;
  }

  getPoints(arr,hash) {
    let numberOfPoints = arr.length;
    let pointsX = [];
    let pointsY = [];
    let points = [];
    //
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 3){
          pointsX.push(arr[i].substr(0,2));
          pointsY.push(arr[i].substr(2,2));
        } else {
          pointsX.push(hash.substr(i,2));
          pointsY.push(hash.substr(i++,2));
        }
      }
      // pointsX = pointsX.sort();
      for (let q = 0; q < pointsX.length; q++) {
        let coord = pointsX[q]+","+pointsY[q];
        points.push(coord);
        // console.log(coord);
      }

      console.log(points.join(" "));
      return points;
  }



  // getPoints(arr,hash) {
  //   let numberOfPoints = arr.length;
  //   let pointsX = [];
  //   let pointsY = [];
  //   let points = [];
  //   console.log("number of points " + arr.length);
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i].length >= 3){
  //         pointsX.push(arr[i].substr(0,2));
  //         pointsY.push(arr[i].substr(2,2));
  //       } else {
  //         pointsX.push(hash.substr(i,2));
  //         pointsY.push(hash.substr(i++,2));
  //       }
  //     }
  //     pointsX.sort();
  //     pointsY.sort();
  //     console.log(pointsX);
  //     for (let q = 0; q < pointsX.length; q++) {
  //       let coord = pointsX[q]+","+pointsY[q];
  //       points.push(coord);
  //       console.log(coord);
  //     }
  //     // points.sort();
  //   return points;
  // }
  getHexColors(arr) {
    let colors = [];
    for (let i=0;i<arr.length;i++) {
      if (arr[i].length == 6) {
        colors.push("#"+arr[i]);
      }
    }
    if (colors.length == 0) {
      colors.push('#' + this.hash.substr(0,5));
    }
    return colors;
  }

  getRGBAColors(arr) {
    let colors = [];
    for (let i=0;i<arr.length;i++) {
      if (arr[i].length == 8) {
        colors.push("fill:rgba(1"+arr[i].substr(0,2)+",1"+arr[i].substr(2,2)+",1"+arr[i].substr(4,2)+",0."+arr[i].substr(6,2)+");");
      }
    }
    if(colors.length == 0) {
      colors.push("rgba(255,255,255,0.5)")
    }
    console.log(colors);
    return colors;
  }

  mostUsed(hash) {
    let array = [];
    for (let i = 0; i < 10; i++) {
      let num = this.count(hash,i);
      // console.log("num = " + num);
      array.push(num);
    }
    let sortedArr = array.sort().reverse();
    return sortedArr;
  }


  count(hash, digit) {
    let count = 0;
    for (let i = 0; i <255; i++) {
      if (hash.charAt(i) == digit) {
        count++;
      }
    }
    return [count, digit];
  }



}
