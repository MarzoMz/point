function createPoint(x, y) {
  this.offset = function (dx, dy) {
    return {
      x : x + dx,
      y : y + dy,

      toArray : function () {
        var arr = [];
        arr.push(this.x , this.y);
        return arr;
      },
    }
  }

  this.toArray = function () {
    var arr = [];
    arr.push(x , y);
    return arr;
    }
}

var point = new createPoint(3, 4);
var destination = point.offset(2, 1);

console.log(point.toArray());
console.log(destination.toArray());
