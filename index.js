async function myFetch(ur) {
  let response = await fetch(ur);

  if (!response.ok) {
    throw alert(`This Dog does not exist :( ${response.status}`);
  } else {
    let myBlob = await response.json();
    let containerDog = document.createElement("div");
    let image = document.createElement("img");
    let buttonDelete = document.createElement("button");

    buttonDelete.innerHTML = "X";

    containerDog.classList.add("container-dog");
    image.classList.add("image");
    buttonDelete.classList.add("button-delete");

    image.src = myBlob.message;
    document.querySelector(".breed-container").appendChild(containerDog);
    containerDog.appendChild(image);
    containerDog.appendChild(buttonDelete);
  }
}

const handleClick = () => {
  let inpuBreed = document.querySelector("#input-breed");
  let inputNumberDogs = document.querySelector("#input-number");
  let url = `https://dog.ceo/api/breed/${inpuBreed.value}/images/random`;

  if (!inpuBreed.value) {
    alert("please type your breed on the input field");
  } else {
    myFetch(url);
    inpuBreed.value = "";
  }
};

const handleClickClear = () => {
  document.querySelector(".breed-container").innerHTML = "";
};
