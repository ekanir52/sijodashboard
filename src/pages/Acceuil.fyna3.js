$w.onReady(function () {
  // Array of section element selectors (without the `#`)
  let sections = ['section2', 'section1', 'section3', 'section4', 'section6'];
  let currentSectionIndex = 0;
  const rotationInterval = 5000; // Section rotation every 5 seconds

  // Set the target date and time for the countdown
  let targetDate = new Date("Dec 31, 2024 23:59:59").getTime();

  // Function to update the countdown timer
  function updateCountdown() {
      let now = new Date().getTime(); // Current time
      let timeRemaining = targetDate - now; // Time difference

      if (timeRemaining <= 0) {
          // If countdown is over, set all values to 0
          $w("#text42").text = "0"; // Days
          $w("#text43").text = "0"; // Hours
          $w("#text44").text = "0"; // Minutes
          $w("#text45").text = "0"; // Seconds
          clearInterval(timerInterval); // Stop the countdown
          return;
      }

      // Time calculations for days, hours, minutes, and seconds
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the text elements with the remaining time
      $w("#text42").text = days.toString(); // Days
      $w("#text43").text = hours.toString(); // Hours
      $w("#text44").text = minutes.toString(); // Minutes
      $w("#text45").text = seconds.toString(); // Seconds
  }

  // Function to rotate sections automatically
  function rotateSections() {
      // Collapse (hide) all sections
      sections.forEach(sectionID => {
          $w('#${sectionID}').collapse();  // Collapse the sections (use collapse to hide them)
      });

      // Show the current section with a fade effect
      $w(`#${sections[currentSectionIndex]}`).expand("fade");

      // Move to the next section, loop back if necessary
      currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  }

  // Start the countdown timer and section rotation
  let timerInterval = setInterval(updateCountdown, 1000);  // Countdown updates every 1 second
  let sectionInterval = setInterval(rotateSections, rotationInterval);  // Section rotates every 5 seconds

  // Initially hide all sections except the first one
  sections.forEach((sectionID, index) => {
      if (index !== 0) {
          $w(`#${sectionID}`).collapse(); // Collapse (hide) all sections except the first one on load
      }
  });

  // Images for the different members of the teams
  var mickael = "https://static.wixstatic.com/media/c74864_f7cd73f99a664025a6c5c232e75f7191~mv2.png";
  var myriam = "https://static.wixstatic.com/media/c74864_3bda08d821c547d18d95360268b80f52~mv2.png";
  var elona = "https://static.wixstatic.com/media/c74864_1dae05740c2a4989be2e515c5d80dec9~mv2.png";
  var ethan = "https://static.wixstatic.com/media/c74864_610985d6c7f04cd28e22736b71fd02b3~mv2.png";
  var jonathan = "https://static.wixstatic.com/media/c74864_0c7b86836a1e4d5482c275cfafa2dcb4~mv2.png";
  var titouan = "https://static.wixstatic.com/media/c74864_d92df1bab4f04afa93ae18f41f00d3a4~mv2.png";
  var ruben = "https://static.wixstatic.com/media/c74864_5b2b48c585f04a5997c454e42a047e9b~mv2.png";
  var ilan = "https://static.wixstatic.com/media/c74864_4a719cefd4e94b82b128c073759955f2~mv2.png";
  var jules = "https://static.wixstatic.com/media/c74864_10053edf2fb746d3951fe727928b2e12~mv2.png";

  // Set team images for 1st, 2nd, and 3rd place
  // 1st place: Ilan, Jules
  $w('#image52').src = ilan;
  $w('#image53').src = jules;
  $w('#image54').hide(); // Hide any extra placeholders if not needed
  $w('#image55').hide();

  // 2nd place: Jonathan, Ruben, Titouan
  $w('#image56').src = jonathan;
  $w('#image57').src = ruben;
  $w('#image58').src = titouan;
  $w('#image59').hide(); // Hide extra placeholder

  // 3rd place: Mickael, Myriam, Elona, Ethan
  $w('#image60').src = mickael;
  $w('#image61').src = myriam;
  $w('#image62').src = elona;
  $w('#image63').src = ethan;
});
