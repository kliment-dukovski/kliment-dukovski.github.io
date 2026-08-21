const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  });
});

const promoBanner = document.querySelector('[data-promo-end]');
const promoEnd = Date.parse(promoBanner?.dataset.promoEnd ?? '');

if (promoBanner && !Number.isNaN(promoEnd) && Date.now() >= promoEnd) {
  promoBanner.remove();
}

document.querySelector('#year').textContent = new Date().getFullYear();
