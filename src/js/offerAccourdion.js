export const offerAccourdions = () => {
  'use strict';

  if (document.querySelectorAll('.offerAccourdion')) {
    const accourdion = document.querySelectorAll('.offerAccourdion');

    accourdion.forEach((el) => {
      el.addEventListener('click', (e) => {
        const control = e.currentTarget.querySelector('.offerAccourdion__control');
        const content = e.currentTarget.querySelector('.offerAccourdion__content');
        e.currentTarget.classList.toggle('offerAccourdion_open');

        if (e.currentTarget.classList.contains('offerAccourdion_open')) {
          control.setAttribute('aria-expanded', true);

          content.setAttribute('aria-expanded', false);

          content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-expanded', true);
          content.style.maxHeight = null;
        }
      });
    });
  }
};
