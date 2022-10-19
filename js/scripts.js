function getAndSetShoutingMachineValues(){
  let colorType = document.getElementById("colorType").value;
  let animalType = document.getElementById("animalType").value;
  let foodType = document.getElementById("foodType").value;

  colorType = colorType.toUpperCase();
  animalType = animalType.toUpperCase();
  foodType = foodType.toUpperCase();

  document.querySelector("span#color").innerText = colorType;
  document.querySelector("span#animal").innerText = animalType;
  document.querySelector("span#food").innerText = foodType;
}

function setFormSubmissionEventHandler(){
  let form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();
    getAndSetShoutingMachineValues();
    document.querySelector("div#result").removeAttribute("class");
  }
}

window.onload = function() {
  setFormSubmissionEventHandler();
}