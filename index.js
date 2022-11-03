function newGame() {
  for (let index = 0; index < 64; index++) {
    let box = document.getElementById(`box-${index}`);
    box.remove();
  }
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
    result.innerHTML = "You lose";
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
  for (let index = 0; index < numberPos.length; index++) {
    const element = numberPos[index];
    
  }

  for (let index = 0; index < amoutOfBoxes; index++) {
    if (bombPosIndex.includes(index)) {
      let box = document.getElementById(`box-${index}`);
      box.innerHTML = "x";
    } else {
      let box = document.getElementById(`box-${index}`);
      if (box.innerHTML !== "x") {
        // let random = getRandomNumber(1, 9);
        numberPos[index]
        box.innerHTML = numberPos[index];
      }  
    }
  }
  // for (let index = 0; index < amoutOfBoxes; index++) {
  //   let box = document.getElementById(`box-${index}`);
  //   if (box.innerHTML !== "x") {
  //     let random = getRandomNumber(1, 9);
  //     box.innerHTML = random;
  //   }
  // }
}
function getNumberPos(boxContentArr, bombPosIndex) {
  console.log("hej: ", boxContentArr, bombPosIndex);
  const topLine = [0,1,2,3,4,5,6,7]
  const rightLine = [7,15,23,31,39,47,55,63]
  const leftLine = [0,8,16,24,32,40,48,56]
  const bottomLine = [56,57,58,59,60,61,62,63]
  for (let index = 0; index < bombPosIndex.length; index++) {
    const indexOfBomb = bombPosIndex[index];
    if(rightLine.includes(index) === false) {
      boxContentArr[indexOfBomb + 1] = boxContentArr[indexOfBomb + 1] + 1;
    }
    if(topLine.includes(index) === false) {
      boxContentArr[indexOfBomb + 8] = boxContentArr[indexOfBomb + 8] + 1;
      boxContentArr[indexOfBomb + 9] = boxContentArr[indexOfBomb + 9] + 1;
      boxContentArr[indexOfBomb + 7] = boxContentArr[indexOfBomb + 7] + 1;
    }
    if(leftLine.includes(index) === false) {
      boxContentArr[indexOfBomb - 1] = boxContentArr[indexOfBomb - 1] + 1;
    }
    if(bottomLine.includes(index) === false) {
      boxContentArr[indexOfBomb - 8] = boxContentArr[indexOfBomb - 8] + 1;
      boxContentArr[indexOfBomb - 9] = boxContentArr[indexOfBomb - 9] + 1;
      boxContentArr[indexOfBomb - 7] = boxContentArr[indexOfBomb - 7] + 1;
    }
    if(rightLine.includes(index) === false && bottomLine.includes(index) === false) {
      
    }
    if(rightLine.includes(index) === false && bottomLine.includes(index) === false) {

    }
  }
  return boxContentArr
}
function getOnlyNewNomber(arr) {
  let val = getRandomNumber(1, 65);
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
