(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    modal: document.querySelector('[data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('scroll-hidden');
    refs.modal.classList.toggle('is-hidden');
  }

  document.querySelector('.modal__form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
    e.currentTarget.reset();
  });
})();
