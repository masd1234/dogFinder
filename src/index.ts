
 
async function myFetch(url: string, breed?: string) {
    let response = await fetch(url);
  
    if (!response.ok) {
      throw alert(`This Dog does not exist :( ${response.status}`);
    } else {
      let myBlob = await response.json();
      let msg = myBlob.message;
      let dog = msg.split("/");
  
      const breedContainerSelector = document.querySelector(".breed-container") as HTMLElement;
      const newDiv = document.createElement("div");
  
      newDiv.classList.add("indvidual-dog");
  
      newDiv.innerHTML = `<div class="container-dog"><h1>Breed: ${dog[4]}.</h1>
      <img class="image "src=${myBlob.message}>
      <button class="button-delete"id=${Math.floor(
        Math.random() * 5000
      )} onClick="deleteOneDogsss()" >X</button></div>`;
  
      breedContainerSelector.appendChild(newDiv);

    
    }
  }
  
  const handleClick = () => {
    let inpuBreed = document.querySelector("#input-breed") as HTMLInputElement;
    let url = `https://dog.ceo/api/breed/${inpuBreed.value}/images/random`;
  
    if (!inpuBreed.value) {
      alert("please type your breed on the input field");
    } else {
      myFetch(url, inpuBreed.value);
      inpuBreed.value = "";
    }
  };
  
  const handleClickRandom = () => {
    let url = `https://dog.ceo/api/breeds/image/random`;
  
    myFetch(url);
  };
  
  const handleClickClear = () => {

    (<HTMLElement>document.querySelector(".breed-container")).innerHTML = "";
  };
  
  const deleteOneDogsss = (e: Event) => {
      let targetE = e.target as HTMLElement
    if (targetE.classList.value === "button-delete") {
      (<HTMLElement>targetE.parentNode).remove();
    }
  };

  document.body.addEventListener("click", deleteOneDogsss);
  document.addEventListener("keydown", (e) => {
    let inpuBreed = document.querySelector("#input-breed") as HTMLInputElement;
    let url = `https://dog.ceo/api/breed/${inpuBreed.value}/images/random`;
    if (e.code === "Enter") {
      myFetch(url, inpuBreed.value);
      inpuBreed.value = "";
    }
  });
  