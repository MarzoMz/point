function createPoint(x, y) {

  this.offset = function (dx, dy) {
    x = x + dx;
    y = y + dy;
  }
  this.toArray = function () {
    var arr = [];
    arr.push(x , y);
    return arr;
  }
  this.getX = function () {
    return x;
  }
  this.getY = function () {
    return y;
  }
}

var point = new createPoint(3, 4),
    coordinates;


console.log(point.x); // undefined

point.x = 1;
console.log(point.x); // 1

point.offset(2, 1);

console.log(point.x); // 1
console.log(point.getY()); /

coordinates = point.toArray();
console.log(coordinates);
