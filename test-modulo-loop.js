function moduloLoopExample() {
  const numberOfIterations = 8; // Change this to your desired number of iterations
  const targetIndex = 3; // Change this to your desired target index

  for (let i = 0; i < numberOfIterations * 3; i++) {
    const currentIndex = i % numberOfIterations;

    // Check if the curernt index matches the target index
    if (currentIndex === targetIndex) {
      console.log(
        `Reached target index ${targetIndex} after ${i + 1} iterations`
      );
      break;
    }
  }
}
// moduloLoopExample(); not what I wanted

function javaScriptModulo101() {
  const x = 7;
  const y = 3;

  const result = x % y;
  // console.log(result);

  //

  //
  const array = [1, 2, 3, 4, 5];
  const length = array.length;
  //   const targetIndex = 0;

  for (let i = 0; i < length * 2; i++) {
    console.log(array[i % length]);
  }
  console.log("why it works:");
  console.log("5%5", 5 % 5);
  console.log("6%5", 6 % 5);
  console.log("7%5", 7 % 5);
}
// javaScriptModulo101();

function moduloLoopTarget() {
  const array = [1, 2, 3, 4, 5];
  const length = array.length;
  const targetIndex = 3;

  //attempting to loop over array 2 times plus one more loop up to target index
  for (let i = 0; i < length * 2; i++) {
    console.log(array[(i % length) + array[targetIndex]]);
  }
}
// moduloLoopTarget();

//

//

//
function testModuloTarget1() {
  const array = [1, 2, 3, 4, 5];
  const length = array.length;
  const targetIndex = 0;

  for (let i = 0; i < length * 2; i++) {
    const currentIndex = i % length;
    console.log(array[(currentIndex + targetIndex) % length]);
  }
}
testModuloTarget1();
