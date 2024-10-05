const darkMode = () => {
  const modeBtn = document.getElementById('mode-btn');
  const body = document.body;

  modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      modeBtn.classList.remove('uil-sun');
      modeBtn.classList.add('uil-moon');
    } else {
      modeBtn.classList.remove('uil-moon');
      modeBtn.classList.add('uil-sun');
    }
  });
}

darkMode();