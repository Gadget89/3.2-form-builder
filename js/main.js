// Main JS //
document.addEventListener("DOMContentLoaded", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  xhr.addEventListener("load", function(e){
    var xhrData = this.response;
    var formData = JSON.parse(xhrData);

    formData.forEach(function(arrayObject){
      var arraySearch = arrayObject.label;
    
    })
  })
  xhr.send();
})
