const nav = document.getElementById('mainNav');
if(window.screen.width > 639){
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}


const hamburgerInput = document.getElementById('hamburger-input')
const navMenu = document.querySelector('.navMenu')

hamburgerInput.addEventListener('change', () => {
    if (hamburgerInput.checked) {
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = 'none'
    }
})
const form      = document.getElementById('reserveForm');
const submitBtn = form.querySelector('.reserve-submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    name:       document.getElementById('name').value,
    familyName: document.getElementById('familyName').value,
    date:       document.getElementById('date').value,
    guests:     document.getElementById('guests').value,
    email:      document.getElementById('email').value,
    phone:      document.getElementById('phone').value
  };

  const originalHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span class="btn-text">Sending…</span>';
  submitBtn.disabled = true;

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbzpT6GFQDenoaQejFpDHmcU6b7GwQwLuq0r0fSw96OwTTVB5Rdg13SX07FljDIJxasBIQ/exec',
      { method: 'POST', mode: 'no-cors', body: JSON.stringify(payload) }
    );
    submitBtn.innerHTML = '<span class="btn-text">Reservation confirmed!</span>';
    form.reset();
    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 4000);
  } catch (err) {
    console.error('Reservation fetch failed:', err);
    submitBtn.innerHTML = '<span class="btn-text">Error — please call us</span>';
    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 4000);
  }
});

const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}