$w.onReady(function () {
  let timerInterval;
  let targetDate = new Date("Dec 31, 2024 23:59:59").getTime();
  let sections = ['boxSijolympics', 'box1'];
  let currentSectionIndex = 0;
  const rotationInterval = 5000; // Rotation toutes les 15 secondes

  // ... Votre code pour le compte à rebours et les images ...

  // Fonction pour faire tourner les sections
  function rotateSections() {
    sections.forEach((sectionID) => {
      $w(`#${sectionID}`).collapse();
    });
    $w(`#${sections[currentSectionIndex]}`).expand("fade");

    // Passer à la section suivante
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  }

  // Démarrer la rotation des sections
  let sectionInterval = setInterval(rotateSections, rotationInterval);

  // Initialiser en effondrant toutes les Bandes ou Boîtes sauf la première
  sections.forEach((sectionID, index) => {
    if (index !== 0) {
      $w(`#${sectionID}`).collapse();
    } else {
      $w(`#${sections[0]}`).expand();
    }
  });

  function updateCountdown() {
    let now = new Date().getTime(); // Current time
    let timeRemaining = targetDate - now; // Time difference

    console.log(timeRemaining)

    if (timeRemaining <= 0) {
      $w("#cddays").text = "TIME";
      $w("#cdhours").text = "IS";
      $w("#cdminutes").text = "..";
      $w("#cdseconds").text = "OVER";
      clearInterval(timerInterval);
      return;
    }

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $w("#cddays").text = days.toString();
    $w("#cdhours").text = hours.toString();
    $w("#cdminutes").text = minutes.toString();
    $w("#cdseconds").text = seconds.toString();
  }
  function updateImages() {
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
    $w('#firstImage1').src = ilan;
    $w('#firstImage2').src = jules;
    $w('#firstImage3').hide(); 
    $w('#firstImage4').hide();

    // 2nd place: Jonathan, Ruben, Titouan
    $w('#secondImage1').src = jonathan;
    $w('#secondImage2').src = ruben;
    $w('#secondImage3').src = titouan;
    $w('#secondImage4').hide();

    // 3rd place: Mickael, Myriam, Elona, Ethan
    $w('#thirdImage1').src = mickael;
    $w('#thirdImage2').src = myriam;
    $w('#thirdImage3').src = elona;
    $w('#thirdImage4').src = ethan;
  }

  updateImages();
  timerInterval = setInterval(updateCountdown, 1000);
});
