const result = document.getElementById("result");

function newGame() {
  for (let index = 0; index < 64; index++) {
    let box = document.getElementById(`box-${index}`);
    box.remove();
  }
  result.innerHTML = 0
  populateGame();
}
function select(index) {
  let box = document.getElementById(`box-${index}`);
  let result = document.getElementById("result");
  box.style.fontSize = "30px";
  if (result.innerHTML === "You lose") {
    console.log("shit");
  }
  if (box.innerHTML === "x") {
    if(result.innerHTML !== "0") {
      result.innerHTML = "You lose";
    }
  } else {
    let prev = parseInt(result.innerHTML);
    let selected = parseInt(box.innerHTML);
    if (result.innerHTML === "You lose") {
      result.innerHTML = selected;
    } else {
      result.innerHTML = prev + selected;
    }
  }
}
function populateGame() {
  const amoutOfBoxes = 64;
  const boxContentArr = [];
  const container = document.getElementById("mainContainer");
  for (let index = 0; index < 64; index++) {
    let box = document.createElement("div");
    box.onclick = () => select(index);
    box.className = `box-${index} hidden`;
    box.id = `box-${index}`;
    container.appendChild(box);
    boxContentArr.push(0);
  }
  let bombArr = [];
  for (let index = 0; index < 10; index++) {
    let number = getOnlyNewNomber(bombArr);
    bombArr.push(number);
  }
  let bombPosIndex = bombArr;

  let numberPos = getNumberPos(boxContentArr, bombPosIndex);

  for (let index = 0; index < amoutOfBoxes; index++) {
    if (bombPosIndex.includes(index)) {
      let box = document.getElementById(`box-${index}`);
      box.innerHTML = "x";
    } else {
      let box = document.getElementById(`box-${index}`);
      if (box.innerHTML !== "x") {
        numberPos[index];
        box.innerHTML = numberPos[index];
      }
    }
  }
}
function getNumberPos(boxContentArr, bombPosIndex) {
  console.log("hej: ", boxContentArr, bombPosIndex);
  let newArr = boxContentArr;
  // const topLine = [0, 1, 2, 3, 4, 5, 6, 7];
  // const rightLine = [7, 15, 23, 31, 39, 47, 55, 63];
  // const leftLine = [0, 8, 16, 24, 32, 40, 48, 56];
  // const bottomLine = [56, 57, 58, 59, 60, 61, 62, 63];
  // const borderPos = [0, 1, 2, 3, 4, 5, 6, 7, 15, 23, 31, 39, 47, 55, 63, 8, 16, 24, 32, 40, 48, 56, 57, 58, 59, 60, 61, 62, 63]
  for (let index = 0; index < bombPosIndex.length; index++) {
    const indexOfBomb = bombPosIndex[index];
    // if(index === 10) {
    //   console.log('included in rightLine: ', rightLine.includes(index))
    //   console.log('included in leftLine: ', leftLine.includes(index))
    //   console.log('included in topLine: ', topLine.includes(index))
    //   console.log('included in bottomLine: ', bottomLine.includes(index))
    // }
    // if(rightLine.includes(index)) {
    //   newArr[indexOfBomb - 1] = newArr[indexOfBomb - 1] + 1; // left
    //   if(topLine.includes(index)) {
    //     newArr[indexOfBomb + 8] = newArr[indexOfBomb + 8] + 1; // bottom
    //     newArr[indexOfBomb + 7] = newArr[indexOfBomb + 7] + 1; // bottom left            
    //   }
    //   if(bottomLine.includes(index)) {
    //     newArr[indexOfBomb - 8] = newArr[indexOfBomb - 8] + 1; // top
    //     newArr[indexOfBomb - 7] = newArr[indexOfBomb - 7] + 1; // top left  
    //   }
    // }
    // if(topLine.includes(index)) {
    //   newArr[indexOfBomb + 1] = newArr[indexOfBomb + 1] + 1; // right
    //   if(rightLine.includes(index)) {
    //     newArr[indexOfBomb - 1] = newArr[indexOfBomb - 1] + 1; // left
    //     newArr[indexOfBomb + 7] = newArr[indexOfBomb + 7] + 1; // bottom left       
    //   }
    //   if(leftLine.includes(index)) {
    //     newArr[indexOfBomb + 8] = newArr[indexOfBomb + 8] + 1; // bottom
    //     newArr[indexOfBomb + 9] = newArr[indexOfBomb + 9] + 1; // bottom right  
    //   }
    // }
    // if(leftLine.includes(index)) {
    //   newArr[indexOfBomb + 1] = newArr[indexOfBomb + 1] + 1; // right
    //   if(topLine.includes(index)) {
    //     newArr[indexOfBomb + 8] = newArr[indexOfBomb + 8] + 1; // bottom
    //     newArr[indexOfBomb + 9] = newArr[indexOfBomb + 9] + 1; // bottom right
    //   }
    //   if(bottomLine.includes(index)) {
    //     newArr[indexOfBomb - 8] = newArr[indexOfBomb - 8] + 1; // top
    //     newArr[indexOfBomb - 9] = newArr[indexOfBomb - 9] + 1; // top right  
    //   }
    // }
    // if(bottomLine.includes(index)) {
    //   newArr[indexOfBomb - 8] = newArr[indexOfBomb - 8] + 1; // top
    //   if(rightLine.includes(index)) {
    //     newArr[indexOfBomb - 1] = newArr[indexOfBomb - 1] + 1; // left
    //     newArr[indexOfBomb - 7] = newArr[indexOfBomb - 7] + 1; // top left
    //   }
    //   if(leftLine.includes(index)) {
    //     newArr[indexOfBomb + 1] = newArr[indexOfBomb + 1] + 1; // right
    //     newArr[indexOfBomb - 9] = newArr[indexOfBomb - 9] + 1; // top right
    //   }
    // }
    // if(borderPos.includes(index) === false) {
    //   console.log('center: ',index)
    // }
    newArr[indexOfBomb + 1] = newArr[indexOfBomb + 1] + 1; // right
    newArr[indexOfBomb - 1] = newArr[indexOfBomb - 1] + 1; // left
    newArr[indexOfBomb + 8] = newArr[indexOfBomb + 8] + 1; // bottom
    newArr[indexOfBomb - 8] = newArr[indexOfBomb - 8] + 1; // top
    newArr[indexOfBomb + 9] = newArr[indexOfBomb + 9] + 1; // bottom right
    newArr[indexOfBomb - 9] = newArr[indexOfBomb - 9] + 1; // top right
    newArr[indexOfBomb - 7] = newArr[indexOfBomb - 7] + 1; // top left
    newArr[indexOfBomb + 7] = newArr[indexOfBomb + 7] + 1; // bottom left
  }
  return newArr;
}
function getOnlyNewNomber(arr) {
  let val = getRandomNumber(1, 64);
  if (arr.includes(val)) {
    val = newTry(arr);
  }
  return val;
}
function newTry(arr) {
  let val = getOnlyNewNomber(arr);
  return val;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
