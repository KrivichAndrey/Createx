export function popaps() {
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__inner');
  const modalOpenTrigger = document.querySelectorAll('[data-open-modal-cv]');
  const modalCloseTrigger = document.querySelectorAll('[data-close-modal-cv]');

  function openModal() {
    modal.classList.add('modal_visible');
    modal.classList.remove('modal_hidden');
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    modal.classList.add('modal_hidden');
    modal.classList.remove('modal_visible');
    document.body.style.overflowY = '';
  }

  modalOpenTrigger.forEach((element) => {
    element.addEventListener('click', openModal);
  });

  modalCloseTrigger.forEach((element) => {
    element.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  });
}
