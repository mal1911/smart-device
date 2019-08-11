'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var noJsElement = document.querySelector('.no-js');
  noJsElement.classList.remove('no-js');

  var footerElement = document.querySelector('footer');
  var onFooterClick = function (evt) {
    var toggleElement = evt.target.closest('.toggle');

    if (toggleElement.classList.contains('toggle--opened')) {
      toggleElement.classList.remove('toggle--opened');
      toggleElement.classList.add('toggle--closed');
    } else {
      toggleElement.classList.remove('toggle--closed');
      toggleElement.classList.add('toggle--opened');
    }
    evt.preventDefault();
  };

  footerElement.addEventListener('click', onFooterClick);

  var overlayElement = document.querySelector('.overlay');
  var modalElement = document.querySelector('.modal');
  var modalFormElement = document.querySelector('.modal__form');
  var modalCloseElement = document.querySelector('.modal__close');
  var headerButtonElement = document.querySelector('.header__button');

  var onKeyPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
      evt.preventDefault();
    }
  };

  var openModal = function () {
    overlayElement.classList.add('overlay--show');
    modalElement.classList.add('modal--opened');
    document.querySelector('body').style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyPress);
  };

  var closeModal = function () {
    overlayElement.classList.remove('overlay--show');
    modalElement.classList.remove('modal--opened');
    document.querySelector('body').style.overflow = 'auto';
    document.removeEventListener('keydown', onKeyPress);
  };

  var onHeaderButtonClick = function (evt) {
    openModal();
    evt.preventDefault();
  };

  var onModalCloseClick = function (evt) {
    closeModal();
    evt.preventDefault();
  };

  var onFormSubmit = function (evt) {
    closeModal();
    evt.preventDefault();
    //
  };

  modalFormElement.addEventListener('submit', onFormSubmit);
  modalCloseElement.addEventListener('click', onModalCloseClick);
  headerButtonElement.addEventListener('click', onHeaderButtonClick);
})();
