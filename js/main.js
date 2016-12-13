// Main JS //
document.addEventListener("DOMContentLoaded", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  xhr.addEventListener("load", function(e){
    var xhrData = this.response;
    var formData = JSON.parse(xhrData);

    var inputElement = document.querySelector("[data-js='body']");

    formData.forEach(function(arrayObject){
      //var arraySearch = arrayObject.label;
      var finalForm = "";

      if (arrayObject.type === "text"{
        finalForm += `<text>`;
      })

      if (formData.type === "select"){
        finalForm += `<select>`;
        formData.options.forEach(function(optionData){
          finalForm += `<option label="${optionData.label}"
          value="${optionData.id}" icon="${options.icon}">`;
        });
        console.log();
      }else {
        return"it works";
      }

      var eachObject = `<input type="${arrayObject.type}" id="${arrayObject.id}">`;
      console.log(eachObject);
    })
  })
  xhr.send();
})
