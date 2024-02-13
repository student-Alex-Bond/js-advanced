const month = document.querySelector('.cont-months');
const days = document.querySelector('.cont-days');
const hour = document.querySelector('.cont-hour');
const minute = document.querySelector('.cont-minute');
const second = document.querySelector('.cont-second');

function updateCounter() {
  const currentTime = new Date();
  const nextYear = new Date(`01-01-${currentTime.getFullYear() + 1} 00:00`);
  
  const diff  = nextYear.getTime() - currentTime.getTime();
  
  const monthLeft = Math.floor(diff / 1000 / 60 / 60 / 24 / 30  % 12 )
  const daysLeft = Math.floor(diff / 1000 / 60 / 60  / 24 % 30)
  const hourLeft = Math.floor(diff / 1000 / 60 / 60 % 24 )
  const minuteLeft = Math.floor(diff / 1000 / 60 % 60 )
  const secondLeft = Math.floor(diff / 1000  % 60 )

  month.innerText = `${monthLeft} месяцев`;
  days.innerText = `${daysLeft} дней`;
  hour.innerText = `${hourLeft} часов`;
  minute.innerText = `${minuteLeft} минут`;
  second.innerText = `${secondLeft} секунд`;
 
}


setInterval(updateCounter, 1000);