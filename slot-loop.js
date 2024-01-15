/*
-create slot machine effect / choosing an item 


-My approach,
    - create for loop to iterate through array of images for x amount time
    - set timeOut or any other method to attach a unit of time to the indexed img
    - make it so that it activates on click
    - Possibly usee javascript es6 promise to offset the slot machine effect
 */

const img_looping_effect = () => {
  const imageUrls = [
    "../test-rock-png/imgs/rock-final.png",
    "../test-rock-png/imgs/hand-final.png",
    "../test-rock-png/imgs/scissors-final.png",
  ];

  const displayImages = () => {
    const firstbox = document.getElementById("box-first-child");
    const secondbox = document.getElementById("box-second-child");
    const thirdbox = document.getElementById("box-third-child");

    imageContainer = [firstbox, secondbox, thirdbox];

    const displayTime = 500;
    //iterate through imageUrls Array
    for (let i = 0; i < imageUrls.length; i++) {
      setTimeout(() => {
        //displays the image
        for (let j = 0; j < imageContainer.length; j++) {
          imageContainer[j].innerHTML = `<img src="${
            imageUrls[i]
          }" alt="Image ${i + 1}">`;
        }
      }, i * displayTime);
    }
  };
  window.onload = displayImages;
};
img_looping_effect();
