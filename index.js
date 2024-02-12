// Hello world console log VERY IMPORTANT DO NOT DELETE
console.log("Hello world!");

// Automatically update the date
function updateDate() {
  const now = new Date(); // Get current date and time

  // Create an options object that specifies the parts of the date to include
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // Format the date according to the current locale and the specified options
  const dateString = new Intl.DateTimeFormat("en-US", options).format(now);

  // Update the content of the element with the ID 'date' with the formatted date string
  document.getElementById("date").innerText = dateString;
}

// Call updateDate function to set the initial date
updateDate();

// Optionally, set an interval to update the date automatically if needed
// This sets the interval to update the date every 24 hours (86400000 milliseconds)
setInterval(updateDate, 86400000);
