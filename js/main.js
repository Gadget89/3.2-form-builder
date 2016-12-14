// Main JS //
// Create listener which waits for page content to load
document.addEventListener("DOMContentLoaded", function(){
  var xhr = new XMLHttpRequest();
  // Get API from a specific URL
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  // Listen for the load event
  xhr.addEventListener("load", function(e){
    // Change string to an object
    var formData = JSON.parse(this.response);
    // Finds elements to be modified later
    var inputElement = document.querySelector("[data-js='form']");
    // Parent level placeholder for all data after the loops
    var allInputData = "";
    // For loop to search data for objects by class
    formData.forEach(function(arrayObject){
      // From this point forward help from David gave me direction
        // on where I needed to go. I had a general idea of what I
        // needed to do, but was not sure how to go about it.
      // placeholder for elements used within the for loop
      var arrayObjectPin = "";
      // Begin looking for data type of "select" with if statement
      if (arrayObject.type === "select"){
        // Begin "select" backtick IF it is "select" data
        arrayObjectPin += `<select class="selector">`;
          // For loop to search for "option" in "select" data
          arrayObject.options.forEach(function(optionData){
            // Not exactly sure I would have come to this on my own
              // but it does make sense afer I saw it
            // concat with html for "option" data
            arrayObjectPin += `<option label="${optionData.label}" value="${optionData.value}"</option>`;
        })
    // Else statement for all other inputs that are not "select"
    }else{
      // Concat with html for all other inputs that are not "select"
      arrayObjectPin += `<input class="textInput" placeholder="${arrayObject.label}" type="${arrayObject.type}" id="${arrayObject.id}" icon="${arrayObject.icon}">`;
    }
    // Concat all input into placeholder outside of loops
    allInputData += arrayObjectPin;
  });
  // Integrate elements into HTML
  inputElement.innerHTML += allInputData;
});
// Send to HTML
xhr.send();
});
