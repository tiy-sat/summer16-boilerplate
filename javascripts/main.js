"use strict";

document.addEventListener("DOMContentLoaded", function(){

  var mainElement = document.querySelector("[data-js='main']");
  var navElement = document.querySelector("[data-js='nav']");

  var navItems = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "about",
      link: "/about"
    },
    {
      name: "contact",
      link: "/contact"
    }
  ]

  var articleData = {
    title: "Great Article Title!",
    author: "Robin and Batman",
    date: "July 1st, 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }

  var navItemsHTML = "";
  navItems.forEach(function(navItem){
    // Creating HTML inside of this loop
    var navItemHTML = `
      <a href="${navItem.link}">${navItem.name}</a>
    `;
    // "target" is only with events... so inside of
    //   callback functions for addEventListener
    // navElement.target.innerHTML = navItemHTML;

    // Concat to variabled defined before and outside
    //   of loop in order to have entire string
    //   built before we add to the page.
    navItemsHTML += navItemHTML;
  })


  // Creating much more readable templates.
  // Reusable HTML with JS is happyfuntimes
  var headingHTML = `
    <article>
      <h2>${articleData.title}</h2>
      <h3>${articleData.author}</h3>
      <time datetime="">${articleData.date}</time>
      <p>${articleData.description}</p>
    </article>
  `;



  mainElement.innerHTML = headingHTML;
  navElement.innerHTML = navItemsHTML;
});
