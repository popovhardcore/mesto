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

// 3 итерация 

const elementСontainer = document.querySelector('.elements');

function addCard(item) {
    const template = document.querySelector('#card__element').content;
    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__likes').addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__likes-active');
          
    });
    card.querySelector('.element__trash-icon').addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      eventTarget.parentNode.remove();
    });
    card.querySelector('.element__image').addEventListener('click', function() {
      showPopupCard(item);
      // card.querySelector('.popup-img').classList.add('popup_opened');
    });
    elementСontainer.prepend(card);
    
}

function showPopupCard(item) {
  let popup = document.querySelector('#popup-img');
  popup.querySelector('.popup__image').src = item.link
  popup.querySelector('.popup-img__heading').textContent = item.name;
  popup.classList.add('popup_opened');
  
}

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i]);
}

let popupImgCloseCard = document.querySelector('#closecardimg');
popupImgCloseCard.addEventListener('click', function () {
    document.querySelector('#popup-img').classList.remove('popup_opened');
});