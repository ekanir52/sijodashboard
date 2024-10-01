export function startCountdown(targetDate, updateElements) {
    let timerInterval = setInterval(() => {
      let now = new Date().getTime();
      let timeRemaining = targetDate - now;
      if (timeRemaining <= 0) {
        console.log("Countdown finished");
        updateElements({
          days: "TIME",
          hours: "IS",
          minutes: "..",
          seconds: "OVER"
        });
        clearInterval(timerInterval);
        return;
      }
      
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      updateElements({
        days: days.toString(),
        hours: hours.toString(),
        minutes: minutes.toString(),
        seconds: seconds.toString()
      });
    }, 1000);
}
let currentIndex = 0;
let numOfContainers = 5;

export function data(url) {
  return fetch(url)
    .then(response => response.text())
    .then(data => {
      let rows = data.split('\n').map(row => row.split(';'));
      rows.shift();

      let parsedData = rows.map(row => {
        let [nomprenom, imagelink, ligne1, ligne2, ligne3, ligne4] = row;
        return { nomprenom, imagelink, ligne1, ligne2, ligne3, ligne4 };
      });

      rotateData(parsedData);
    })
    .catch(error => {
      console.error('Error fetching CSV:', error);
    });
}

function rotateData(data) {
  updateContainers(data);

  setInterval(() => {
    currentIndex = (currentIndex + numOfContainers) % data.length;
    updateContainers(data);
  }, 46000);
}

function updateContainers(data) {
  for (let i = 0; i < numOfContainers; i++) {
    let dataIndex = (currentIndex + i) % data.length;
    let rowData = data[dataIndex];

    if (i === 0) setContainerData('#cont1img1', '#cont1nom1', '#cont1poste1', '#cont1nbexp1', '#cont1exp1', '#cont1tech1', rowData);
    if (i === 1) setContainerData('#cont1img2', '#cont1nom2', '#cont1poste2', '#cont1nbexp2', '#cont1exp2', '#cont1tech3', rowData);
    if (i === 2) setContainerData('#cont2img1', '#cont2nom1', '#cont2poste1', '#cont2nbexp1', '#cont2exp1', '#cont2tech1', rowData);
    if (i === 3) setContainerData('#cont2img2', '#cont2nom2', '#cont2poste2', '#cont2nbexp2', '#cont2exp2', '#cont2tech2', rowData);
    if (i === 4) setContainerData('#cont2img3', '#cont2nom3', '#cont2poste3', '#cont2nbexp3', '#cont2exp3', '#cont2tech3', rowData);
  }
}

function setContainerData(imgId, nomId, posteId, nbexpId, expId, techId, data) {

  $w(imgId).src = data.imagelink;

  $w(nomId).text = data.nomprenom;
  $w(posteId).text = data.ligne1;
  $w(nbexpId).text = data.ligne2;
  $w(expId).text = data.ligne3;
  $w(techId).text = data.ligne4;
  console.log(data.nomprenom)
  console.log(data.ligne1)
  console.log(data.ligne2)
  console.log(data.ligne3)
  console.log(data.ligne4)
}
