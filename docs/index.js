async function myFetch(ur, breed) {
  let response = await fetch(ur);
  console.log(response);

  if (!response.ok) {
    throw alert(`This Dog does not exist :( ${response.status}`);
  } else {
    let myBlob = await response.json();
    console.log(myBlob);
    let containerDog = document.createElement("div");
    let image = document.createElement("img");

    containerDog.classList.add("container-dog");

    document.querySelector(".breed-container").appendChild(containerDog);
    containerDog.appendChild(image);

    containerDog.innerHTML = `<h1>Breed: ${breed}</h1>
    <img class="image "src=${myBlob.message}>
    <button class="button-delete"id=${Math.floor(
      Math.random() * 5000
    )} onClick="deleteOneDogsss()" >X</button>`;
  }
}

const handleClick = () => {
  let inpuBreed = document.querySelector("#input-breed");
  let inputNumberDogs = document.querySelector("#input-number");
  let url = `https://dog.ceo/api/breed/${inpuBreed.value}/images/random`;

  if (!inpuBreed.value) {
    alert("please type your breed on the input field");
  } else {
    myFetch(url, inpuBreed.value);
    inpuBreed.value = "";
  }
};

const handleClickClear = () => {
  document.querySelector(".breed-container").innerHTML = "";
};

const deleteOneDogsss = (e) => {
  if (e.target.classList.value === "button-delete") {
    e.target.parentNode.remove();
  }
};

document.body.addEventListener("click", deleteOneDogsss);
document.addEventListener("keydown", (e) => {
  let inpuBreed = document.querySelector("#input-breed");
  let inputNumberDogs = document.querySelector("#input-number");
  let url = `https://dog.ceo/api/breed/${inpuBreed.value}/images/random`;
  if (e.code === "Enter") {
    myFetch(url, inpuBreed.value);
    inpuBreed.value = "";
  }
});
