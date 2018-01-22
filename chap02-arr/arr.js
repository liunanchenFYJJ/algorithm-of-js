// 不生成新数组的迭代器方法
function square(num) {
  console.log(num, num * num)
}

function isEven(num) {
  return num % 2 == 0
}

var nums = [1, 2, 3, 4, 5, 6]
nums.forEach(square)

// var even = nums.every(isEven)
var even = nums.some(isEven)

if (even) {
  console.log('nums is Even')
} else {
  console.log('not all Even')
}

// 生成新数组的迭代器方法
console.log('-------生成新数组的迭代器方法----------')
function getnew(a) {
  return a[0]
}
var names = ['chen', 'liu', 'nan']

var newname = names.map(getnew).join('')
console.log(newname)

console.log('-------二维数组----------')
// var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
var grades = [[77],[76, 82, 81],[91, 94, 89, 99]];

var total = 0
var average = 0.0

for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col]
  }
  average = total / grades[row].length
  console.log("Student " + parseInt(row+1) + " average: " +
  average.toFixed(2))
  total = 0
  average = 0.0
}

// 读取不规则二维数组？
// for (var col = 0; col < grades.length; ++col) {
//   for (var row = 0; row < grades[col].length; ++row) {
//     // console.log(grades[col])
//     if (grades[row][col] === NaN || grades[row][col] === undefined) {
//       continue
//       total += grades[row][col]
//     } else {
//       total += grades[row][col]      
//     }
//   }
//   average = total / grades[col].length
//   console.log("Test " + parseInt(col+1) + " average: " +
//   average.toFixed(2))
//   total = 0
//   average = 0.0
// }

console.log('------对象数组----')
function Point(x,y) {
  this.x = x
  this.y = y
}
function displayPts(arr) {
  for (var i = 0; i < arr.length; ++i) {
    console.log(arr[i].x + ", " + arr[i].y)
  }
}
var p1 = new Point(1,2)
// console.log(p1) //是对象
var p2 = new Point(3,5)
var p3 = new Point(2,8)
var p4 = new Point(4,4)
var points = [p1,p2,p3,p4]
console.log(points)
for (var i = 0; i < points.length; ++i) {
  console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " + points[i].y)
}
displayPts(points)