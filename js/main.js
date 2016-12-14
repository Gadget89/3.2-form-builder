// Main JS //
document.addEventListener("DOMContentLoaded", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  xhr.addEventListener("load", function(e){
    //var xhrData = this.response;
    var formData = JSON.parse(this.response);

    var inputElement = document.querySelector("[data-js='form']");

    var allInputData = "";

    formData.forEach(function(arrayObject){
      var arrayObjectPin = "";
      if (arrayObject.type === "select"){
        arrayObjectPin += `<select class="selector">`;
          arrayObject.options.forEach(function(optionData){
            arrayObjectPin += `<option label="${optionData.label}" value="${optionData.value}"</option>`;
        })
    }else{
      arrayObjectPin += `<input class="textInput" placeholder="${arrayObject.label}" type="${arrayObject.type}" id="${arrayObject.id}" icon="${arrayObject.icon}">`;
    }
    allInputData += arrayObjectPin;
  });
  inputElement.innerHTML += allInputData;
});
xhr.send();
});
