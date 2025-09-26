//Get all needed DOM elements
//Final

const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxCount = 50;

//Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); //Prevent default form submission

  //Get input values.
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  //Returns values to the console
  console.log(name, team, teamName);

  //Increment count
  count++;
  //Update attendee count display
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  //Set progress bar width
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  //Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show welcome message above form and below progress bar
  const message = `Welcome, ${name} from ${teamName}!`;
  const welcomeSection = document.getElementById("welcomeMessageSection");
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = message;
  welcomeSection.style.display = "block";

  form.reset(); //Reset form fields
});
