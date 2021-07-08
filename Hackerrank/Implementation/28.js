/*
function jumpingOnClouds(c, k) {
  let energy = 100;
  let jump;

  for (let i = 0; i < c.length; i++) {
    --energy;
    jump = c[i % c.length];

    console.log((i + k) % c.length);
    //console.log(jump);
    if (jump !== 0) energy -= 2;
  }

  //console.log(energy);
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2));
*/

function tested(arr) {
  let len = arr.length;
  console.log(len);
  let count = -1;

  for (let i = 0; i < len; ) {
    if (i + 2 < len && arr[i + 2] == 0) {
      i += 2;
    } else {
      i++;
    }

    count++;
    console.log(count, i);
  }

  return count;
}

console.log(tested([0, 0, 1, 0, 1, 0, 1, 0]));
