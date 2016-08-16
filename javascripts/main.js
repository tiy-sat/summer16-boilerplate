"use strict";

document.addEventListener("DOMContentLoaded", function(){
  var dropdownSearchElement = document.querySelector("[data-js='dropdown--search']");
  var inputSearchElement = document.querySelector("[data-js='input__search']");

  var dropdownData = ["Squirrel gifs", "Squirrel gifs tumblr", "Squirrel gifts", "Squirrel gifts gifs?"];

  // After I have typed more than 2 chars i want to see the dropdown
  inputSearchElement.addEventListener("keydown", function(e){
    var inputTextValue = e.target.value;
    if(inputTextValue.length > 2){
      // Show me the dropdown!
      var searchResultsHTML = "";
      dropdownData.forEach(function(result){
        // concat with RETURN value from function
        var returnedHTML = createSearchDropdownItem(result);
        searchResultsHTML += returnedHTML;
      });
      dropdownSearchElement.innerHTML = searchResultsHTML;
      dropdownSearchElement.className = "dropdown--search dropdown--visible";
    }else{
      dropdownSearchElement.className = "dropdown--search";
    }
  });

  function createSearchDropdownItem(text){
    return `
      <li class="dropdown__item">
        ${text}
      </li>
    `;
  }

});
