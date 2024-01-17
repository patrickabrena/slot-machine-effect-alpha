/*
-create slot machine effect / choosing an item 


-My approach,
    - create for loop to iterate through array of images for x amount time
    - set timeOut or any other method to attach a unit of time to the indexed img
    - make it so that it activates on click
    - Possibly usee javascript es6 promise to offset the slot machine effect
 */
//
//
//
/*Test Code 1 */
// const img_looping_effect = () => {
//   const imageUrls = [
//     "../test-rock-png/imgs/rock-final.png",
//     "../test-rock-png/imgs/hand-final.png",
//     "../test-rock-png/imgs/scissors-final.png",
//   ];

//   const displayImages = () => {
//     const firstbox = document.getElementById("box-first-child");
//     const secondbox = document.getElementById("box-second-child");
//     const thirdbox = document.getElementById("box-third-child");

//     imageContainer = [firstbox, secondbox, thirdbox];

//     const displayTime = 500;

//     //iterate through imageUrls Array
//     for (let i = 0; i < imageUrls.length; i++) {
//       setTimeout(() => {
//         //displays the image
//         for (let j = 0; j < imageContainer.length; j++) {
//           imageContainer[j].innerHTML = `<img src="${
//             imageUrls[i]
//           }" alt="Image ${i + 1}">`;
//         }
//       }, i * displayTime);
//     }
//   };
//   //create loop trigger on button click
//   const loopTrigger = document.getElementById("loop-trigger");
//   loopTrigger.onclick = displayImages;
//   //   window.onload = displayImages;
// };
// img_looping_effect();
/*Test Code 1 */
//
//
//
//
/*Test Code 2 */
/*
Without this document.addEventListener wrapper function, I was getting 
ReferenceError: document is not defined
Probably caused by Javascript code being executed before the HTMLdpcument wasfully loaded
 */
// document.addEventListener("DOMContentLoaded", function () {
//   const img_looping_effect2 = () => {
//     const firstbox = document.getElementById("box-first-child");
//     const secondbox = document.getElementById("box-second-child");
//     const thirdbox = document.getElementById("box-third-child");

//     const imageContainer = [firstbox, secondbox, thirdbox];
//     const offsetTimer = 150;

//     const imageUrls = [
//       "../slot-machine-effect-alpha/imgs/rock-final.png",
//       "../slot-machine-effect-alpha/imgs/hand-final.png",
//       "../slot-machine-effect-alpha/imgs/scissors-final.png",
//     ];
//     const displayTime = 100;
//     const repeatForLoop = () => {
//       for (let i = 0; i < imageContainer.length; i++) {
//         /* imageContainer[i] += offsetTimer * i;
//       was trying to add the offset to imageContainer[i] which is DOM element
//       Was intending to modify the delay for each element in the array
//       to fix, needed to create a variable to store the updated delay */
//         const updatedDelay = offsetTimer * i;

//         //add variable "numLoops" that determine # of loops for each index
//         const numLoops = i + 5;

//         for (let j = 0; j < numLoops * imageUrls.length; j++) {
//           setTimeout(() => {
//             // using modulo operator (%) to cycle through imageUrls arr
//             // declaring variable "imageUrlIndex" to use in place of [j]
//             // ${imageUrls[j]} ---> ${imageUrls[imageUrlIndex]}
//             const imageUrlIndex = j % imageUrls.length;
//             imageContainer[
//               i
//             ].innerHTML = `<img src= "${imageUrls[imageUrlIndex]}">`;
//           }, j * displayTime + updatedDelay);
//         }
//       }
//     };
//     repeatForLoop();
//     //create loop trigger on button click
//   };

//   const loopTrigger = document.getElementById("loop-trigger");
//   loopTrigger.onclick = img_looping_effect2;
// });
/*Test Code 2 */
//
//
//
/*Test Code 3*/

//Commenting possible solution below out for now//

/*
document.addEventListener("DOMContentLoaded", function () {
  const img_looping_effect2 = () => {
    const firstbox = document.getElementById("box-first-child");
    const secondbox = document.getElementById("box-second-child");
    const thirdbox = document.getElementById("box-third-child");

    const imageContainer = [firstbox, secondbox, thirdbox];
    const offsetTimer = 150;

    const imageUrls = [
      "../test-rock-png/imgs/rock-final.png",
      "../test-rock-png/imgs/hand-final.png",
      "../test-rock-png/imgs/scissors-final.png",
    ];
    const displayTime = 100;

    const updateImage = (containerIndex, loopIndex) => {
      const imageUrlIndex = loopIndex % imageUrls.length;
      imageContainer[containerIndex].innerHTML = `<img src="${imageUrls[imageUrlIndex]}">`;
    };

    const loopAsync = (containerIndex, loopIndex, numLoops, updatedDelay) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          updateImage(containerIndex, loopIndex);

          if (loopIndex < numLoops - 1) {
            loopAsync(containerIndex, loopIndex + 1, numLoops, updatedDelay).then(resolve);
          } else {
            resolve();
          }
        }, loopIndex * displayTime + updatedDelay);
      });
    };

    const repeatForLoop = async (containerIndex) => {
      if (containerIndex < imageContainer.length) {
        const updatedDelay = offsetTimer * containerIndex;
        const numLoops = containerIndex + 5;

        for (let j = 0; j < numLoops; j++) {
          await loopAsync(containerIndex, j, numLoops, updatedDelay);
        }

        if (containerIndex < imageContainer.length - 1) {
          repeatForLoop(containerIndex + 1);
        }
      }
    };

    repeatForLoop(0); // Start with the first container
  };

  const loopTrigger = document.getElementById("loop-trigger");
  loopTrigger.onclick = img_looping_effect2;
});
 */
//
//
//
//
/*Test Code 4 */
document.addEventListener("DOMContentLoaded", function () {
  const img_looping_effect4 = () => {
    const firstbox = document.getElementById("box-first-child");
    const secondbox = document.getElementById("box-second-child");
    const thirdbox = document.getElementById("box-third-child");

    const imageContainer = [firstbox, secondbox, thirdbox];
    const offsetTimer = 150;

    const imageUrls = [
      "../slot-machine-effect-alpha/imgs/rock-final.png",
      "../slot-machine-effect-alpha/imgs/hand-final.png",
      "../slot-machine-effect-alpha/imgs/scissors-final.png",
    ];
    const displayTime = 100;
    const repeatForLoop = () => {
      for (let i = 0; i < imageContainer.length; i++) {
        const updatedDelay = offsetTimer * i;

        const numLoops = i + 5;
        const imgArrLength = imageUrls.length;
        const targetIndex = 1;

        for (let j = 0; j < imgArrLength * numLoops; j++) {
          setTimeout(() => {
            const currentImageUrlIndex = j % imgArrLength;
            imageContainer[i].innerHTML = `<img src= "${
              imageUrls[(currentImageUrlIndex + targetIndex) % imgArrLength]
            }">`;
          }, j * displayTime + updatedDelay);
        }
      }
    };
    repeatForLoop();
  };

  const loopTrigger = document.getElementById("loop-trigger");
  loopTrigger.onclick = img_looping_effect4;
});
/*Test Code 4 */
//
//
//
//
