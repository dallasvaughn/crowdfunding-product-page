const hamburger = document.querySelector('.open');
const hamburgerClose = document.querySelector('.close');
const menuModal = document.querySelector('.menu-modal');
const openPledgeModal = document.querySelector('.intro__buttons-cta');
const closePledgeModal = document.querySelector('.pledge__close');
const pledgeModal = document.querySelector('.pledge');
const radioOne = document.querySelector('.r-1');
const radioTwo = document.querySelector('.r-2');
const radioThree = document.querySelector('.r-3');
const selectedOne = document.querySelector('.s-1');
const selectedTwo = document.querySelector('.s-2');
const selectedThree = document.querySelector('.s-3');

hamburger.onclick = () => {
  hamburger.classList.toggle('close');
  hamburgerClose.classList.remove('close');
  hamburgerClose.classList.add('open');

  menuModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

hamburgerClose.onclick = () => {
  hamburgerClose.classList.toggle('close');
  hamburger.classList.remove('close');
  hamburger.classList.add('open');

  menuModal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

window.onclick = (event) => {
  if (event.target === menuModal) {
    hamburgerClose.classList.toggle('close');
    hamburger.classList.remove('close');
    hamburger.classList.add('open');
    menuModal.style.display = 'none';
  }

  if (event.target === pledgeModal) {
    pledgeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

openPledgeModal.onclick = () => {
  pledgeModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

closePledgeModal.onclick = () => {
  pledgeModal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

radioOne.onclick = () => {
  selectedOne.style.display = 'block';

  if (
    selectedTwo.style.display === 'block' ||
    selectedThree.style.display === 'block'
  ) {
    selectedTwo.style.display = 'none';
    selectedThree.style.display = 'none';
  }
};

radioTwo.onclick = () => {
  selectedTwo.style.display = 'block';

  if (
    selectedOne.style.display === 'block' ||
    selectedThree.style.display === 'block'
  ) {
    selectedOne.style.display = 'none';
    selectedThree.style.display = 'none';
  }
};

radioThree.onclick = () => {
  selectedThree.style.display = 'block';

  if (
    selectedOne.style.display === 'block' ||
    selectedTwo.style.display === 'block'
  ) {
    selectedOne.style.display = 'none';
    selectedTwo.style.display = 'none';
  }
};
