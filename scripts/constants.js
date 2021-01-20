const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const profileButton = document.querySelector('.profile__button');
const popupAddCard = document.getElementById('addcard');
const closeCard = document.getElementById('closecard');
const formCard = document.getElementById('form-card');
const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.getElementById('popup__form-nameinput');
const jobInput = document.getElementById('popup__form-jobinput');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupCloseButton = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const popupImgCloseCard = document.querySelector('#closecardimg');
const elementСontainer = document.querySelector('.elements');