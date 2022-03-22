const colors = ['green', 'blue', 'red', 'orange', 'purple', 'yellow;'];
let colorNum = Math.floor(Math.random() * colors.length);

const positions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
const positionNum = Math.floor(Math.random() * positions.length);
const additionEnemies = [
// array at 0 index is very easy
  [
  {
  operator: '+',
  topNum: 2,
  botNum: 2,
  answer: 4,
  array: [3, 4, 5],
  color: colors[colorNum],
  left: 200
  // topPos:
  },
  {
    operator: '+',
    topNum: 2,
    botNum: 1,
    answer: 3,
    array: [3, 2, 5],
    color: colors[colorNum],
    left: 300
    // topPos:
    },
    {
    operator: '+',
    topNum: 2,
    botNum: 0,
    answer: 2,
    array: [0, 2, 1],
    color: colors[colorNum],
    left: 700
    // topPos:
    },
    {
    operator: '+',
    topNum: 1,
    botNum: 0,
    answer: 1,
    array: [1, 0, 2],
    color: colors[colorNum],
    left: 350
    // topPos:
    },
    {
    operator: '+',
    topNum: 3,
    botNum: 3,
    answer: 6,
    array: [5, 6, 7],
    color: colors[colorNum],
    left: 670
    // topPos:
    },
    {
    operator: '+',
    topNum: 2,
    botNum: 3,
    answer: 5,
    array: [5, 7, 6],
    color: colors[colorNum],
    left: 180
    // topPos:
    },
    {
    operator: '+',
    topNum: 3,
    botNum: 0,
    answer: 3,
    array: [3, 0, 2],
    color: colors[colorNum],
    left: 930
    // topPos:
    },
    {
    operator: '+',
    topNum: 1,
    botNum: 4,
    answer: 5,
    array: [4, 6, 5],
    color: colors[colorNum],
    left: 500
    // topPos:
    },
    {
    operator: '+',
    topNum: 2,
    botNum: 4,
    answer: 6,
    array: [5, 7, 6],
    color: colors[colorNum],
    left: 200
    // topPos:
    },
  {
  operator: '+',
  topNum: 1,
  botNum: 1,
  answer: 2,
  array: [2, 3, 4],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: '+',
  topNum: 1,
  botNum: 2,
  answer: 3,
  array: [3, 4, 5],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: '+',
  topNum: 3,
  botNum: 2,
  answer: 5,
  array: [6, 4, 5],
  color: colors[colorNum],
  left: 800
  }
],
// array at index of 1 is easy
[
  {
  operator: '+',
  topNum: 4,
  botNum: 4,
  answer: 8,
  array: [7, 8, 9],
  color: colors[colorNum],
  left: 200
  },
  {
  operator: '+',
  topNum: 4,
  botNum: 3,
  answer: 7,
  array: [7, 9, 5],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: '+',
  topNum: 5,
  botNum: 4,
  answer: 9,
  array: [7, 11, 9],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: '+',
  topNum: 5,
  botNum: 5,
  answer: 10,
  array: [13, 8, 10],
  color: colors[colorNum],
  left: 900
  },
  {
  operator: '+',
  topNum: 6,
  botNum: 5,
  answer: 11,
  array: [11, 8, 10],
  color: colors[colorNum],
  left: 300
  },
  {
  operator: '+',
  topNum: 7,
  botNum: 2,
  answer: 9,
  array: [10, 8, 9],
  color: colors[colorNum],
  left: 700
  },
  {
  operator: '+',
  topNum: 5,
  botNum: 3,
  answer: 8,
  array: [6, 8, 9],
  color: colors[colorNum],
  left: 180
  },
  {
  operator: '+',
  topNum: 3,
  botNum: 6,
  answer: 9,
  array: [9, 8, 10],
  color: colors[colorNum],
  left: 660
  },  {
    operator: '+',
    topNum: 9,
    botNum: 2,
    answer: 11,
    array: [13, 11, 10],
    color: colors[colorNum],
    left: 450
    },
    {
    operator: '+',
    topNum: 3,
    botNum: 7,
    answer: 10,
    array: [11, 9, 10],
    color: colors[colorNum],
    left: 900
  },
  {
  operator: '+',
  topNum: 6,
  botNum: 6,
  answer: 12,
  array: [11, 12, 10],
  color: colors[colorNum],
  left: 250
},
{
operator: '+',
topNum: 5,
botNum: 7,
answer: 12,
array: [11, 12, 10],
color: colors[colorNum],
left: 700
},
{
operator: '+',
topNum: 10,
botNum: 2,
answer: 12,
array: [12, 10, 11],
color: colors[colorNum],
left: 400
},
{
operator: '+',
topNum: 3,
botNum: 10,
answer: 13,
array: [11, 3, 12],
color: colors[colorNum],
left: 600
}
],
[  {
  operator: '+',
  topNum: 6,
  botNum: 7,
  answer: 13,
  array: [11, 13, 12],
  color: colors[colorNum],
  left: 200
},
{
operator: '+',
topNum: 7,
botNum: 7,
answer: 14,
array: [14, 13, 15],
color: colors[colorNum],
left: 800
},
{
operator: '+',
topNum: 5,
botNum: 8,
answer: 13,
array: [12, 14, 13],
color: colors[colorNum],
left: 300
},
{
operator: '+',
topNum: 5,
botNum: 9,
answer: 14,
array: [14, 15, 13],
color: colors[colorNum],
left: 900
},
{
operator: '+',
topNum: 8,
botNum: 7,
answer: 15,
array: [16, 15, 14],
color: colors[colorNum],
left: 200
},
{
operator: '+',
topNum: 8,
botNum: 8,
answer: 16,
array: [16, 15, 17],
color: colors[colorNum],
left: 520
},
{
operator: '+',
topNum: 9,
botNum: 8,
answer: 17,
array: [11, 9, 17],
color: colors[colorNum],
left: 300
},
{
operator: '+',
topNum: 9,
botNum: 7,
answer: 16,
array: [15, 16, 17],
color: colors[colorNum],
left: 800
},
{
operator: '+',
topNum: 9,
botNum: 6,
answer: 15,
array: [15, 14, 17],
color: colors[colorNum],
left: 900
},
{
operator: '+',
topNum: 6,
botNum: 8,
answer: 14,
array: [11, 14, 13],
color: colors[colorNum],
left: 400
},
{
operator: '+',
topNum: 9,
botNum: 9,
answer: 18,
array: [17, 19, 18],
color: colors[colorNum],
left: 600
},
{
operator: '+',
topNum: 10,
botNum: 9,
answer: 19,
array: [17, 19, 18],
color: colors[colorNum],
left: 600
},
{
operator: '+',
topNum: 10,
botNum: 8,
answer: 18,
array: [18, 19, 17],
color: colors[colorNum],
left: 500
},
{
operator: '+',
topNum: 10,
botNum: 7,
answer: 17,
array: [16, 17, 19],
color: colors[colorNum],
left: 200
},
{
operator: '+',
topNum: 10,
botNum: 6,
answer: 16,
array: [18, 5, 16],
color: colors[colorNum],
left: 900
},
{
operator: '+',
topNum: 5,
botNum: 10,
answer: 15,
array: [14, 13, 15],
color: colors[colorNum],
left: 300
},
{
operator: '+',
topNum: 10,
botNum: 4,
answer: 14,
array: [14, 12, 15],
color: colors[colorNum],
left: 600
},
]];


const subtractionEnemies = [
// array at 0 index is very easy
  [
  {
  operator: '-',
  topNum: 4,
  botNum: 2,
  answer: 2,
  array: [3, 2, 1],
  color: colors[colorNum],
  left: 200
  // topPos:
  },
  {
    operator: '-',
    topNum: 3,
    botNum: 1,
    answer: 2,
    array: [1, 2, 3],
    color: colors[colorNum],
    left: 300
    // topPos:
    },
    {
    operator: '-',
    topNum: 2,
    botNum: 0,
    answer: 2,
    array: [0, 2, 1],
    color: colors[colorNum],
    left: 700
    // topPos:
    },
    {
    operator: '-',
    topNum: 1,
    botNum: 0,
    answer: 1,
    array: [1, 0, 2],
    color: colors[colorNum],
    left: 350
    // topPos:
    },
    {
    operator: '-',
    topNum: 6,
    botNum: 3,
    answer: 3,
    array: [2, 4, 3],
    color: colors[colorNum],
    left: 670
    // topPos:
    },
    {
    operator: '-',
    topNum: 5,
    botNum: 3,
    answer: 2,
    array: [3, 1, 2],
    color: colors[colorNum],
    left: 180
    // topPos:
    },
    {
    operator: '-',
    topNum: 3,
    botNum: 0,
    answer: 3,
    array: [3, 0, 2],
    color: colors[colorNum],
    left: 930
    // topPos:
    },
    {
    operator: '-',
    topNum: 5,
    botNum: 4,
    answer: 1,
    array: [1, 2, 0],
    color: colors[colorNum],
    left: 500
    // topPos:
    },
    {
    operator: '-',
    topNum: 6,
    botNum: 4,
    answer: 2,
    array: [1, 2, 3],
    color: colors[colorNum],
    left: 200
    // topPos:
    },
  {
  operator: '-',
  topNum: 2,
  botNum: 1,
  answer: 1,
  array: [2, 0, 1],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: '-',
  topNum: 3,
  botNum: 2,
  answer: 1,
  array: [2, 1, 0],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: '-',
  topNum: 5,
  botNum: 2,
  answer: 3,
  array: [3, 2, 1],
  color: colors[colorNum],
  left: 800
  }
],
// array at index of 1 is medium
[
  {
  operator: '-',
  topNum: 8,
  botNum: 4,
  answer: 4,
  array: [4, 3, 5],
  color: colors[colorNum],
  left: 200
  },
  {
  operator: '-',
  topNum: 7,
  botNum: 3,
  answer: 4,
  array: [3, 4, 2],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: '-',
  topNum: 9,
  botNum: 4,
  answer: 5,
  array: [6, 4, 5],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: '-',
  topNum: 10,
  botNum: 5,
  answer: 5,
  array: [5, 4, 6],
  color: colors[colorNum],
  left: 900
  },
  {
  operator: '-',
  topNum: 11,
  botNum: 5,
  answer: 6,
  array: [5, 6, 7],
  color: colors[colorNum],
  left: 300
  },
  {
  operator: '-',
  topNum: 9,
  botNum: 2,
  answer: 7,
  array: [6, 8, 7],
  color: colors[colorNum],
  left: 700
  },
  {
  operator: '-',
  topNum: 8,
  botNum: 3,
  answer: 5,
  array: [5, 4, 6],
  color: colors[colorNum],
  left: 180
  },
  {
  operator: '-',
  topNum: 9,
  botNum: 6,
  answer: 3,
  array: [4, 3, 2],
  color: colors[colorNum],
  left: 660
  },  {
    operator: '-',
    topNum: 11,
    botNum: 2,
    answer: 9,
    array: [8, 7, 9],
    color: colors[colorNum],
    left: 450
    },
    {
    operator: '-',
    topNum: 10,
    botNum: 7,
    answer: 3,
    array: [3, 2, 4],
    color: colors[colorNum],
    left: 900
  },
  {
  operator: '-',
  topNum: 12,
  botNum: 6,
  answer: 6,
  array: [7, 6, 5],
  color: colors[colorNum],
  left: 250
},
{
operator: '-',
topNum: 12,
botNum: 7,
answer: 5,
array: [7, 6, 5],
color: colors[colorNum],
left: 700
},
{
operator: '-',
topNum: 12,
botNum: 2,
answer: 10,
array: [10, 9, 11],
color: colors[colorNum],
left: 400
},
{
operator: '-',
topNum: 13,
botNum: 10,
answer: 3,
array: [2, 3, 4],
color: colors[colorNum],
left: 600
}
],
// index of 2 is hard

[  {
operator: '-',
  topNum: 13,
  botNum: 7,
  answer: 6,
  array: [6, 5, 7],
  color: colors[colorNum],
  left: 200
},
{
operator: '-',
topNum: 14,
botNum: 7,
answer: 7,
array: [8, 7, 6],
color: colors[colorNum],
left: 800
},
{
operator: '-',
topNum: 13,
botNum: 8,
answer: 5,
array: [4, 7, 5],
color: colors[colorNum],
left: 300
},
{
operator: '-',
topNum: 14,
botNum: 9,
answer: 5,
array: [5, 6, 4],
color: colors[colorNum],
left: 900
},
{
operator: '-',
topNum: 15,
botNum: 7,
answer: 8,
array: [9, 8, 6],
color: colors[colorNum],
left: 200
},
{
operator: '-',
topNum: 16,
botNum: 8,
answer: 8,
array: [9, 7, 8],
color: colors[colorNum],
left: 520
},
{
operator: '-',
topNum: 17,
botNum: 8,
answer: 9,
array: [9, 8, 10],
color: colors[colorNum],
left: 300
},
{
operator: '-',
topNum: 16,
botNum: 7,
answer: 9,
array: [8, 9, 7],
color: colors[colorNum],
left: 800
},
{
operator: '-',
topNum: 15,
botNum: 6,
answer: 9,
array: [10, 7, 9],
color: colors[colorNum],
left: 900
},
{
operator: '-',
topNum: 14,
botNum: 8,
answer: 6,
array: [6, 7, 5],
color: colors[colorNum],
left: 400
},
{
operator: '-',
topNum: 18,
botNum: 9,
answer: 9,
array: [10, 9, 8],
color: colors[colorNum],
left: 600
},
{
operator: '-',
topNum: 19,
botNum: 9,
answer: 10,
array: [9, 11, 10],
color: colors[colorNum],
left: 600
},
{
operator: '-',
topNum: 18,
botNum: 8,
answer: 10,
array: [10, 9, 11],
color: colors[colorNum],
left: 500
},
{
operator: '-',
topNum: 17,
botNum: 7,
answer: 10,
array: [9, 10, 8],
color: colors[colorNum],
left: 200
},
{
operator: '-',
topNum: 16,
botNum: 6,
answer: 10,
array: [9, 11, 10],
color: colors[colorNum],
left: 900
},
{
operator: '-',
topNum: 15,
botNum: 10,
answer: 5,
array: [5, 7, 4],
color: colors[colorNum],
left: 300
},
{
operator: '-',
topNum: 14,
botNum: 4,
answer: 10,
array: [19, 11, 10],
color: colors[colorNum],
left: 600
},
]];







const divisionEnemies = [
// array at 0 index is very easy
  [
  {
  operator: '/',
  topNum: 1,
  botNum: 1,
  answer: 1,
  array: [3, 2, 1],
  color: colors[colorNum],
  left: 200
  // topPos:
  },
  {
    operator: '/',
    topNum: 2,
    botNum: 1,
    answer: 2,
    array: [1, 2, 3],
    color: colors[colorNum],
    left: 300
    // topPos:
    },
    {
    operator: '/',
    topNum: 3,
    botNum: 1,
    answer: 3,
    array: [3, 2, 1],
    color: colors[colorNum],
    left: 700
    // topPos:
    },
    {
    operator: '/',
    topNum: 4,
    botNum: 1,
    answer: 4,
    array: [3, 4, 5],
    color: colors[colorNum],
    left: 350
    // topPos:
    },
    {
    operator: '/',
    topNum: 5,
    botNum: 1,
    answer: 5,
    array: [5, 4, 3],
    color: colors[colorNum],
    left: 670
    // topPos:
    },
    {
    operator: '/',
    topNum: 4,
    botNum: 2,
    answer: 2,
    array: [2, 1, 3],
    color: colors[colorNum],
    left: 180
    // topPos:
    },
    {
    operator: '/',
    topNum: 6,
    botNum: 3,
    answer: 2,
    array: [2, 3, 1],
    color: colors[colorNum],
    left: 930
    // topPos:
    },
    {
    operator: '/',
    topNum: 8,
    botNum: 2,
    answer: 4,
    array: [3, 5, 4],
    color: colors[colorNum],
    left: 500
    // topPos:
    },
    {
    operator: '/',
    topNum: 10,
    botNum: 2,
    answer: 5,
    array: [5, 6, 4],
    color: colors[colorNum],
    left: 200
    // topPos:
    },
  {
  operator: '/',
  topNum: 12,
  botNum: 6,
  answer: 2,
  array: [3, 2, 1],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: '/',
  topNum: 9,
  botNum: 3,
  answer: 3,
  array: [4, 3, 2],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: '/',
  topNum: 12,
  botNum: 3,
  answer: 4,
  array: [3, 5, 4],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: '/',
  topNum: 15,
  botNum: 5,
  answer: 3,
  array: [3, 4, 5],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: '/',
  topNum: 18,
  botNum: 3,
  answer: 6,
  array: [6, 5, 7],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: '/',
  topNum: 16,
  botNum: 4,
  answer: 4,
  array: [5, 4, 6],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: '/',
  topNum: 20,
  botNum: 5,
  answer: 4,
  array: [5, 6, 4],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: '/',
  topNum: 24,
  botNum: 4,
  answer: 6,
  array: [6, 8, 7],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: '/',
  topNum: 28,
  botNum: 4,
  answer: 28,
  array: [8, 6, 7],
  color: colors[colorNum],
  left: 800
  }
],
// array at index of 1 is medium
[
  {
  operator: '/',
  topNum: 25,
  botNum: 5,
  answer: 5,
  array: [5, 7, 6],
  color: colors[colorNum],
  left: 200
  },
  {
  operator: '/',
  topNum: 30,
  botNum: 6,
  answer: 5,
  array: [6, 5, 7],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: '/',
  topNum: 35,
  botNum: 5,
  answer: 7,
  array: [6, 5, 7],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: '/',
  topNum: 40,
  botNum: 5,
  answer: 8,
  array: [8, 7, 9],
  color: colors[colorNum],
  left: 900
  },
  {
  operator: '/',
  topNum: 36,
  botNum: 6,
  answer: 6,
  array: [5, 7, 6],
  color: colors[colorNum],
  left: 300
  },
  {
  operator: '/',
  topNum: 42,
  botNum: 7,
  answer: 6,
  array: [6, 7, 5],
  color: colors[colorNum],
  left: 700
  },
  {
  operator: '/',
  topNum: 46,
  botNum: 6,
  answer: 8,
  array: [9, 7, 8],
  color: colors[colorNum],
  left: 180
  },
  {
  operator: '/',
  topNum: 57,
  botNum: 9,
  answer: 6,
  array: [6, 9, 8],
  color: colors[colorNum],
  left: 660
  },
  {
    operator: '/',
    topNum: 49,
    botNum: 7,
    answer: 7,
    array: [8, 9, 7],
    color: colors[colorNum],
    left: 450
    },
    {
    operator: '/',
    topNum: 56,
    botNum: 7,
    answer: 8,
    array: [11, 6, 8],
    color: colors[colorNum],
    left: 900
  },
  {
  operator: '/',
  topNum: 63,
  botNum: 9,
  answer: 7,
  array: [7, 9, 13],
  color: colors[colorNum],
  left: 250
},
{
operator: '/',
topNum: 70,
botNum: 10,
answer: 7,
array: [6, 7, 11],
color: colors[colorNum],
left: 700
},
{
operator: '/',
topNum: 64,
botNum: 8,
answer: 8,
array: [9, 12, 8],
color: colors[colorNum],
left: 400
},
{
operator: '/',
topNum: 72,
botNum: 9,
answer: 8,
array: [7, 9, 8],
color: colors[colorNum],
left: 400
},
{
operator: '/',
topNum: 80,
botNum: 10,
answer: 8,
array: [8, 9, 7],
color: colors[colorNum],
left: 400
},
{
operator: '/',
topNum: 88,
botNum: 11,
answer: 8,
array: [9, 8, 11],
color: colors[colorNum],
left: 600
}
],
// index of 2 is hard

[  {
  operator: '/',
  topNum: 81,
  botNum: 9,
  answer: 9,
  array: [12, 7, 9],
  color: colors[colorNum],
  left: 200
},
{
operator: '/',
topNum: 90,
botNum: 10,
answer: 9,
array: [8, 9, 11],
color: colors[colorNum],
left: 800
},
{
operator: '/',
topNum: 99,
botNum: 9,
answer: 11,
array: [12, 13, 11],
color: colors[colorNum],
left: 300
},
{
operator: '/',
topNum: 108,
botNum: 9,
answer: 12,
array: [12, 11, 14],
color: colors[colorNum],
left: 900
},
{
operator: '/',
topNum: 100,
botNum: 10,
answer: 10,
array: [11, 10, 15],
color: colors[colorNum],
left: 200
},
{
operator: '/',
topNum: 110,
botNum: 11,
answer: 10,
array: [11, 10, 12],
color: colors[colorNum],
left: 520
},
{
operator: '/',
topNum: 120,
botNum: 10,
answer: 12,
array: [11, 13, 12],
color: colors[colorNum],
left: 300
},
{
operator: '/',
topNum: 130,
botNum: 13,
answer: 10,
array: [11, 14, 10],
color: colors[colorNum],
left: 800
},
{
operator: '/',
topNum: 121,
botNum: 11,
answer: 11,
array: [11, 12, 13],
color: colors[colorNum],
left: 900
},
{
operator: '/',
topNum: 132,
botNum: 12,
answer: 11,
array: [12, 11, 13],
color: colors[colorNum],
left: 400
},
{
operator: '/',
topNum: 143,
botNum: 11,
answer: 13,
array: [14, 15, 13],
color: colors[colorNum],
left: 600
},
{
operator: '/',
topNum: 154,
botNum: 14,
answer: 11,
array: [12, 14, 11],
color: colors[colorNum],
left: 600
},
{
operator: '/',
topNum: 144,
botNum: 12,
answer: 12,
array: [14, 16, 12],
color: colors[colorNum],
left: 500
},
{
operator: '/',
topNum: 152,
botNum: 12,
answer: 13,
array: [15, 13, 14],
color: colors[colorNum],
left: 200
},
{
operator: '/',
topNum: 168,
botNum: 14,
answer: 12,
array: [12, 16, 15],
color: colors[colorNum],
left: 900
},
{
operator: '/',
topNum: 180,
botNum: 12,
answer: 15,
array: [14, 16, 15],
color: colors[colorNum],
left: 300
}
]];





const multiplicationEnemies = [
// array at 0 index is very easy
  [
  {
  operator: 'x',
  topNum: 1,
  botNum: 1,
  answer: 1,
  array: [3, 2, 1],
  color: colors[colorNum],
  left: 200
  // topPos:
  },
  {
    operator: 'x',
    topNum: 1,
    botNum: 2,
    answer: 2,
    array: [1, 2, 3],
    color: colors[colorNum],
    left: 300
    // topPos:
    },
    {
    operator: 'x',
    topNum: 1,
    botNum: 3,
    answer: 3,
    array: [3, 2, 1],
    color: colors[colorNum],
    left: 700
    // topPos:
    },
    {
    operator: 'x',
    topNum: 1,
    botNum: 4,
    answer: 4,
    array: [3, 4, 5],
    color: colors[colorNum],
    left: 350
    // topPos:
    },
    {
    operator: 'x',
    topNum: 1,
    botNum: 5,
    answer: 5,
    array: [5, 4, 3],
    color: colors[colorNum],
    left: 670
    // topPos:
    },
    {
    operator: 'x',
    topNum: 2,
    botNum: 2,
    answer: 4,
    array: [3, 4, 5],
    color: colors[colorNum],
    left: 180
    // topPos:
    },
    {
    operator: 'x',
    topNum: 2,
    botNum: 3,
    answer: 6,
    array: [4, 7, 6],
    color: colors[colorNum],
    left: 930
    // topPos:
    },
    {
    operator: 'x',
    topNum: 2,
    botNum: 4,
    answer: 8,
    array: [8, 7, 5],
    color: colors[colorNum],
    left: 500
    // topPos:
    },
    {
    operator: 'x',
    topNum: 2,
    botNum: 5,
    answer: 10,
    array: [12, 10, 8],
    color: colors[colorNum],
    left: 200
    // topPos:
    },
  {
  operator: 'x',
  topNum: 2,
  botNum: 6,
  answer: 12,
  array: [10, 12, 14],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: 'x',
  topNum: 3,
  botNum: 3,
  answer: 9,
  array: [9, 10, 8],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: 'x',
  topNum: 3,
  botNum: 4,
  answer: 12,
  array: [10, 12, 13],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: 'x',
  topNum: 3,
  botNum: 5,
  answer: 15,
  array: [14, 16, 15],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: 'x',
  topNum: 3,
  botNum: 6,
  answer: 18,
  array: [18, 16, 19],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: 'x',
  topNum: 4,
  botNum: 4,
  answer: 16,
  array: [16, 18, 20],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: 'x',
  topNum: 4,
  botNum: 5,
  answer: 20,
  array: [18, 20, 24],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: 'x',
  topNum: 4,
  botNum: 6,
  answer: 24,
  array: [23, 24, 22],
  color: colors[colorNum],
  left: 800
  },
  {
  operator: 'x',
  topNum: 4,
  botNum: 7,
  answer: 28,
  array: [28, 26, 30],
  color: colors[colorNum],
  left: 800
  }
],
// array at index of 1 is medium
[
  {
  operator: 'x',
  topNum: 5,
  botNum: 5,
  answer: 25,
  array: [25, 28, 30],
  color: colors[colorNum],
  left: 200
  },
  {
  operator: 'x',
  topNum: 5,
  botNum: 6,
  answer: 30,
  array: [25, 30, 34],
  color: colors[colorNum],
  left: 400
  },
  {
  operator: 'x',
  topNum: 5,
  botNum: 7,
  answer: 35,
  array: [30, 40, 35],
  color: colors[colorNum],
  left: 600
  },
  {
  operator: 'x',
  topNum: 5,
  botNum: 8,
  answer: 40,
  array: [40, 35, 45],
  color: colors[colorNum],
  left: 900
  },
  {
  operator: 'x',
  topNum: 6,
  botNum: 6,
  answer: 36,
  array: [31, 36, 39],
  color: colors[colorNum],
  left: 300
  },
  {
  operator: 'x',
  topNum: 6,
  botNum: 7,
  answer: 42,
  array: [36, 45, 42],
  color: colors[colorNum],
  left: 700
  },
  {
  operator: 'x',
  topNum: 6,
  botNum: 8,
  answer: 48,
  array: [48, 42, 53],
  color: colors[colorNum],
  left: 180
  },
  {
  operator: 'x',
  topNum: 6,
  botNum: 9,
  answer: 57,
  array: [49, 57, 53],
  color: colors[colorNum],
  left: 660
  },  {
  operator: 'x',
    topNum: 7,
    botNum: 7,
    answer: 49,
    array: [49, 51, 45],
    color: colors[colorNum],
    left: 450
    },
    {
    operator: 'x',
    topNum: 7,
    botNum: 8,
    answer: 56,
    array: [51, 56, 64],
    color: colors[colorNum],
    left: 900
  },
  {
  operator: 'x',
  topNum: 7,
  botNum: 9,
  answer: 63,
  array: [59, 65, 63],
  color: colors[colorNum],
  left: 250
},
{
operator: 'x',
topNum: 7,
botNum: 10,
answer: 70,
array: [70, 74, 68],
color: colors[colorNum],
left: 700
},
{
operator: 'x',
topNum: 8,
botNum: 8,
answer: 64,
array: [62, 64, 66],
color: colors[colorNum],
left: 400
},
{
operator: 'x',
topNum: 8,
botNum: 9,
answer: 72,
array: [68, 74, 72],
color: colors[colorNum],
left: 400
},
{
operator: 'x',
topNum: 8,
botNum: 10,
answer: 80,
array: [80, 83, 88],
color: colors[colorNum],
left: 400
},
{
operator: 'x',
topNum: 8,
botNum: 11,
answer: 88,
array: [86, 88, 92],
color: colors[colorNum],
left: 600
}
],
// index of 2 is hard

[  {
  operator: 'x',
  topNum: 9,
  botNum: 9,
  answer: 81,
  array: [81, 72, 79],
  color: colors[colorNum],
  left: 200
},
{
operator: 'x',
topNum: 9,
botNum: 10,
answer: 90,
array: [88, 90, 99],
color: colors[colorNum],
left: 800
},
{
operator: 'x',
topNum: 9,
botNum: 11,
answer: 99,
array: [96, 89, 99],
color: colors[colorNum],
left: 300
},
{
operator: 'x',
topNum: 9,
botNum: 12,
answer: 108,
array: [108, 106, 109],
color: colors[colorNum],
left: 900
},
{
operator: 'x',
topNum: 10,
botNum: 10,
answer: 100,
array: [110, 100, 105],
color: colors[colorNum],
left: 200
},
{
operator: 'x',
topNum: 10,
botNum: 11,
answer: 110,
array: [110, 100, 120],
color: colors[colorNum],
left: 520
},
{
operator: 'x',
topNum: 10,
botNum: 12,
answer: 120,
array: [110, 100, 120],
color: colors[colorNum],
left: 300
},
{
operator: 'x',
topNum: 10,
botNum: 13,
answer: 130,
array: [130, 140, 120],
color: colors[colorNum],
left: 800
},
{
operator: 'x',
topNum: 11,
botNum: 11,
answer: 121,
array: [111, 121, 101],
color: colors[colorNum],
left: 900
},
{
operator: 'x',
topNum: 11,
botNum: 12,
answer: 132,
array: [121, 133, 132],
color: colors[colorNum],
left: 400
},
{
operator: 'x',
topNum: 11,
botNum: 13,
answer: 143,
array: [131, 133, 143],
color: colors[colorNum],
left: 600
},
{
operator: 'x',
topNum: 11,
botNum: 14,
answer: 154,
array: [154, 144, 140],
color: colors[colorNum],
left: 600
},
{
operator: 'x',
topNum: 12,
botNum: 12,
answer: 144,
array: [154, 144, 142],
color: colors[colorNum],
left: 500
},
{
operator: 'x',
topNum: 12,
botNum: 13,
answer: 156,
array: [153, 150, 156],
color: colors[colorNum],
left: 200
},
{
operator: 'x',
topNum: 12,
botNum: 14,
answer: 168,
array: [168, 160, 165],
color: colors[colorNum],
left: 900
},
{
operator: 'x',
topNum: 12,
botNum: 15,
answer: 180,
array: [170, 187, 180],
color: colors[colorNum],
left: 300
}
]];



 // let chosenEnemies = localStorage.getItem('chosenEnemies');
 // let chosenEnemies = additionEnemies;

// let gameMode = localStorage.getItem('gameMode');
function testing () {
  if (localStorage.getItem('chosenEnemies') === 'additionEnemies') {
    return additionEnemies;
  } else if (localStorage.getItem('chosenEnemies') === 'subtractionEnemies') {
      return subtractionEnemies;
    } else if (localStorage.getItem('chosenEnemies') === 'divisionEnemies') {
        return divisionEnemies;
      } else if (localStorage.getItem('chosenEnemies') === 'multiplicationEnemies') {
          return multiplicationEnemies;
        } return additionEnemies;
}
let chosenEnemies = testing();


function chooseAddition () {
  // gameMode = "addition";
  // chooseGameMode();


  localStorage.setItem('chosenEnemies', 'additionEnemies');
    console.log(chosenEnemies);
  // console.log(chosenEnemies);
}


function chooseSubtraction () {
  // gameMode = "subtraction";
  // chooseGameMode();
  console.log(chosenEnemies);
  // closeGmMenu();
  localStorage.setItem('chosenEnemies', 'subtractionEnemies');
  // console.log(chosenEnemies)
};

function chooseDivision () {
  // gameMode = "Division";
  // chooseGameMode();
  // closeGmMenu();
  // console.log(chosenEnemies)
  // chosenEnemies = divisionEnemies;
  localStorage.setItem('chosenEnemies', 'divisionEnemies');
  console.log(chosenEnemies);
};

function chooseMultiplication () {
  // gameMode = "Multiplication";


  // closeGmMenu();
  // chosenEnemies = multiplicationEnemies;
  localStorage.setItem('chosenEnemies', 'multiplicationEnemies');
  console.log(chosenEnemies);

}


// function chooseGameMode () {
// // let chosenEnemies = subtractionEnemies;
// // console.log(gameMode);
//
//   if (gameMode === "addition") {
//     chosenEnemies = additionEnemies;
//   } else if (gameMode === "subtraction") {
//     chosenEnemies = subtractionEnemies;
//   } else if (gameMode === "division") {
//     chosenEnemies = divisionEnemies;
//   } else if (gameMode === "multiplication") {
//     chosenEnemies = multiplicationEnemies;
//   }
// }



let enemySelectorNum = Math.floor(Math.random() * chosenEnemies[change].length);
let Enemies = [

  ];


  function createEnemy () {
    // hits = 0;
    enemySelectorNum = Math.floor(Math.random() * chosenEnemies[0].length);
    colorNum = Math.floor(Math.random() * colors.length);
    if (Enemies.length < 1) {
          console.log('hits ' + hits);
  Enemies.push({
    operator: chosenEnemies[change][enemySelectorNum].operator,
    top: -80,
    left: chosenEnemies[change][enemySelectorNum].left,
    // color: colors[colorNum],
    // backgroundImage: url('../images/Enemies/enemyRed3.png'),
    topNum: chosenEnemies[change][enemySelectorNum].topNum,
    botNum: chosenEnemies[change][enemySelectorNum].botNum,
    answer: chosenEnemies[change][enemySelectorNum].answer,
    array: chosenEnemies[change][enemySelectorNum].array
  })
// } else if (Enemies.length < 1 && change === 1) {
//   enemySelectorNum = Math.floor(Math.random() * chosenEnemies[1].length);
//   console.log('change ' + change);
//   Enemies.push({
//   top: 5,
//   left: chosenEnemies[1][enemySelectorNum].left,
//   color: colors[colorNum],
//   topNum: chosenEnemies[1][enemySelectorNum].topNum,
//   botNum: chosenEnemies[1][enemySelectorNum].botNum,
//   answer: chosenEnemies[1][enemySelectorNum].answer,
//   array: chosenEnemies[1][enemySelectorNum].array
//   })
}

  }
  createEnemy();
         // background-color:${Enemies[enemy].color};'></div>;
  function drawEnemy () {
    document.getElementById('enemies').innerHTML = "";
    for (let enemy = 0; enemy < Enemies.length; enemy += 1) {
      document.getElementById('enemies').innerHTML +=
        `<div class='enemy' style='left:${Enemies[enemy].left}px;
         top:${Enemies[enemy].top}px;
         backgroundImage:url('../images/Enemies/enemyRed3.png');'></div>`;

      let x = document.querySelectorAll('.enemy');
      for (let i = 0; i < x.length; i++) {
        if (x[i].hasChildNodes() === false)
      x[i].innerHTML += `<h2>${Enemies[enemy].topNum}</h2>
       <h2>${Enemies[enemy].operator}</h2> <h2>${Enemies[enemy].botNum}</h2>`;
     }
    }
  }

  function moveEnemy () {
    for (var enemy = 0; enemy < Enemies.length; enemy += 1) {
      // console.log(Enemies[enemy].top);
      if (Enemies[enemy].top < 600) {
        Enemies[enemy].top = Enemies[enemy].top + 3;
        // document.querySelector('.enemy').top += 1;
      }
    }
  }
