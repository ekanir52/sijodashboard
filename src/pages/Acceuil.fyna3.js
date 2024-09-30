import { startCountdown } from 'public/utils.js';
let sections = ['boxSijolympics', 'box1profil', 'box2profil'];
let currentSectionIndex = 0;
const rotationInterval = 15000;

function updateImages() {
  const images = {
    ilan: "https://static.wixstatic.com/media/c74864_9e7f12f7a9064ca8be582f63634f6e69~mv2.webp",
    jules: "https://static.wixstatic.com/media/c74864_14aa221c5a7f4c87aa4b65201e03619e~mv2.webp",
    jonathan: "https://static.wixstatic.com/media/c74864_376b5a32ee8f438aa36b87b1c68d1dbe~mv2.webp",
    ruben: "https://static.wixstatic.com/media/c74864_44a121aa0c82464399aa555d0244c268~mv2.webp",
    titouan: "https://static.wixstatic.com/media/c74864_ba69791174ab4358aee0604394d2d278~mv2.webp",
    mickael: "https://static.wixstatic.com/media/c74864_1afe37c50a41484ea7f5cf1deaaeb4a4~mv2.webp",
    myriam: "https://static.wixstatic.com/media/c74864_7962851638c34fc2ad5c03dc7dc8ac9f~mv2.webp",
    elona: "https://static.wixstatic.com/media/c74864_1811080024244f18b93143a70e4ea11c~mv2.webp",
    ethan: "https://static.wixstatic.com/media/c74864_b18a8b2f30d24e9d881dfe101a484b4c~mv2.webp",
  };

  // Set team images for 1st, 2nd, and 3rd placee
  // 1st place: Ilan, Jules
  $w('#firstImage1').src = images.ilan;
  $w('#firstImage2').src = images.jules;
  $w('#firstImage3').src = images.jonathan;
  $w('#firstImage4').src = images.ruben;
  $w('#firstImage5').src = images.titouan;

  // 3rd place: Mickael, Myriam, Elona, Ethan
  $w('#secondImage1').src = images.mickael;
  $w('#secondImage2').src = images.myriam;
  $w('#secondImage3').src = images.elona;
  $w('#secondImage4').src = images.ethan;
}

$w.onReady(function () {
  let targetDate = new Date("Dec 31, 2024 23:59:59").getTime();

  let lastTime = {};

  function rotateSections() {
    sections.forEach((sectionID) => {
      $w(`#${sectionID}`).hide();
    });
    $w(`#${sections[currentSectionIndex]}`).show("fade");
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  }
  let sectionInterval = setInterval(rotateSections, rotationInterval);
  sections.forEach((sectionID, index) => {
    if (index !== 0) {
      $w(`#${sectionID}`).hide();
    } else {
      $w(`#${sections[0]}`).show();
    }
  });

  function updateCountdownDisplay({ days, hours, minutes, seconds }) {
    if (lastTime.days !== days) $w("#cddays").text = days;
    if (lastTime.hours !== hours) $w("#cdhours").text = hours;
    if (lastTime.minutes !== minutes) $w("#cdminutes").text = minutes;
    if (lastTime.seconds !== seconds) $w("#cdseconds").text = seconds;
  
    lastTime = { days, hours, minutes, seconds };
  }  
  setTimeout(() => {
    startCountdown(targetDate, updateCountdownDisplay);
  }, 500);

  setTimeout(updateImages, 500);
});
