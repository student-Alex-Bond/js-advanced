const count = document.querySelector('.count');
const buttons = document.querySelectorAll('button');
const buttonsWrap = document.querySelector('.buttons');
let counter = 0;

buttonsWrap.addEventListener('click', (event) => {
  const el = event.target;

  buttons.forEach(btn =>  {
    btn.classList.remove('active')
    btn.textContent = 'Нажми меня';
  })

  el.classList.add('active');
  el.textContent = 'Нажата!'
  ++counter;
  count.textContent = counter;
  }
)