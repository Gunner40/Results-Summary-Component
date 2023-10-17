document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      // display the data in the HTML
      displayData(data);
    })
    .catch((error) => console.error("Error fetching JSON: ", error));
});

// element to add newly created skill elements before
const summarySection = document.querySelector(".summary-section");
const summaryButton = document.querySelector(".summary__button");
let scoreTotal = 0;
let averageScore = 0;

// function to iterate through JSON data and then create and add elements to the DOM
function displayData(dataArray) {
  dataArray.forEach((data, index) => {
    // index is at 0, i need it to start at 1
    ++index;

    // create outer div
    const summaryContent = document.createElement("div");
    summaryContent.classList.add(
      "summary-section__content",
      `summary-section__content--${index}`
    );

    // create container div for icon
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("summary-section__content");

    // create img element for icon
    const icon = document.createElement("img");
    icon.setAttribute("src", data.icon);
    icon.setAttribute("alt", `${data.category} icon`);
    icon.classList.add(
      "summary-section__icon",
      `summary-section__icon--${index}`
    );

    // create paragraph for name
    const skillName = document.createElement("p");
    skillName.classList.add(
      "summary-section__name",
      `summary-section__name--${index}`
    );
    skillName.innerHTML = `${data.category}`;

    // add icon and skillname to container div
    containerDiv.appendChild(icon);
    containerDiv.appendChild(skillName);

    // add containerDiv to summaryContent div
    summaryContent.appendChild(containerDiv);

    // create paragraph and span elements to display skill score
    let scoreParagraph = document.createElement("p");
    const score = document.createElement("span");
    score.classList.add(
      `summary-section__score`,
      `summary-section__score--${index}`
    );
    score.textContent = data.score;

    // append score to scoreParagraph and add the text to the end
    scoreParagraph.appendChild(score);
    scoreParagraph.innerHTML += " / 100";

    // add scoreParagraph to summaryContent
    summaryContent.appendChild(scoreParagraph);

    // add summary content div to summary section before the summary button
    summarySection.insertBefore(summaryContent, summaryButton);

    // add all scores together
    scoreTotal += data.score;
  });
  calculateAverageScore(dataArray.length);
}

// function to calculate averageScore and add it to the DOM
function calculateAverageScore(dataLength) {
  console.log(dataLength);
  let averageScore = Math.round(scoreTotal / dataLength);
  const result = document.querySelector(".result-section__score");
  result.textContent = averageScore;
}
