import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker");
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

btnStart.setAttribute('disabled', 'true');

let selectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
    window.alert("Please choose a date in the future")
    }
    else {
      btnStart.removeAttribute('disabled');
       }
    selectedTime = selectedDates[0];
   },
};

flatpickr(myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

btnStart.addEventListener("click", onBtnStart);

function onBtnStart() {
  btnStart.setAttribute('disabled', 'true');
  myInput.setAttribute('disabled', 'true');
  const timerId = setInterval(() => {
  const timeDifference = Date.parse(selectedTime) - Date.parse(new Date());
  const timeDifferenceSec = convertMs(timeDifference);
      
    days.textContent = addLeadingZero(timeDifferenceSec.days);
    hours.textContent = addLeadingZero(timeDifferenceSec.hours);
    minutes.textContent = addLeadingZero(timeDifferenceSec.minutes);
    seconds.textContent = addLeadingZero(timeDifferenceSec.seconds);
    
    if (timeDifference <= 0) {
      window.alert("The timer is over")
      clearInterval(timerId)
    }

  }, 1000)
}
