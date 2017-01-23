function createPoint(x, y) {
  this.x = x;
  this.y = y;
  this.offset = function (dx, dy) {
    this.x = x + dx;
    this.y = y + dy;
  }
  this.toArray = function () {
    var arr = [];
    arr.push(this.x , this.y);
    return arr;
  }
}

var point = new createPoint(1, 2),
    coordinates;

console.log('x = ' + point.x); // 1
console.log('y = ' + point.y); // 2

point.offset(2, 3);

console.log('x = ' + point.x); // 3
console.log('y = ' + point.y); // 5

coordinates = point.toArray();

console.log(coordinates); // [3, 5]
