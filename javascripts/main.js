"use strict";

document.addEventListener("DOMContentLoaded", function(){
  // Code here!

  var request = new XMLHttpRequest();
  var formElement = document.querySelector("[data-js='formF']");

  request.addEventListener('load', function(e) {
    var formItems = JSON.parse(e.target.response)
    console.log(formItems)

    var formHTML = "";
    formHTML += "<form>";
    formItems.forEach(function(item){
      if (item.type === "text" || item.type === "email" || item.type === "tel"){
        formHTML += `<input type="text" name="${item.id}" value="${item.label}">`;
      }else if (item.type === "select"){
        formHTML += `<select name="${item.id}">`;
          item.options.forEach(function(opt){
            formHTML += `<option value="${opt.value}">${opt.label}</option>`;
          });
        formHTML += `</select>`;
      }else{
        formHTML += `<textarea name="${item.id}" rows="4" cols="40">${item.label}</textarea>`;
      }
    })
    formHTML += "</form>";
    console.log(formHTML);
    formElement.innerHTML = formHTML;
  })

  request.open("GET", "http://json-data.herokuapp.com/forms");
  request.send(null);
});
