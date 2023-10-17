# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

My solution to the Results Summary Challenge on frontendmentor.io. This is my first attempt at a frontendmentor challenge.

### The challenge

I had to build out the results summary component and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Use the local JSON data to dynamically populate the content

### Screenshot

./screenshot.png

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Built with Semantic HTML, CSS and vanilla JS. BEM naming convention was used for naming classes. The JSON Data was populated dynamically. A forEach loop was used to iterate through the JSON file. The necessary DOM elements were created in the JS file, and added from there to the DOM.

### Built with

- Semantic HTML5 markup
- BEM naming convention for CSS classes
- Flexbox
- Mobile-first workflow

### What I learned

I learned the importance of using organised CSS class naming like BEM. Also how inpotant it is to plan out the HTML structure.

````html - using BEM naming convention
<section class="result-section">
  <h3 class="result-section__heading">Your Result</h3>
  <div class="result-section__container">
    <p class="result__section__result">
      <span class="result-section__score"></span> of 100
    </p>
  </div>
  <p class="result-section__comment">Great</p>
  <p class="result-section__description">
    ```css background-image: linear-gradient(to bottom, hsl(241, 81%, 54%),
    transparent);
  </p>
</section>
````

```js
document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      // display the data in the HTML
      displayData(data);
    })
    .catch((error) => console.error("Error fetching JSON: ", error));
});
```

### Continued development

Focus on planning HTML structure before starting to code. Use BEM. COntinue to practice FLexbox and until mastered and then move on tho GRID.

## Author

- Frontend Mentor - [@Gunner40](https://www.frontendmentor.io/profile/Gunner40)
