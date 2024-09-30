export function startCountdown(targetDate, updateElements) {
    let timerInterval = setInterval(() => {
      let now = new Date().getTime();
      let timeRemaining = targetDate - now;
      if (timeRemaining <= 0) {
        console.log("Countdown finished");  // Log when the countdown finishes
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
        days: days.toString() + "D",
        hours: hours.toString() + "H",
        minutes: minutes.toString() + "M",
        seconds: seconds.toString() + "S"
      });
    }, 1000);
}
