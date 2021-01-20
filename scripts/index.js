
function popupOpen(popup) {
    popup.classList.add('popup_opened');
};

function popupClose(popup) {
    popup.classList.remove('popup_opened');
};

profileButton.addEventListener('click', function (){
    popupOpen(popupAddCard);
});

closeCard.addEventListener('click', function() {
    popupClose(popupAddCard);
});

formCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let name = document.getElementById("popup__form-nameinput-card").value;
    let link = document.getElementById("popup__form-link").value;

    addCard({name: name, link: link });
     
    popupClose(popupAddCard);
    name.value = '';
    link.value = '';
});

editButton.addEventListener('click', function() {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupOpen(popup);
});

popupCloseButton.addEventListener('click', function() {
    popupClose(popup);
});

form.addEventListener('submit', function (evt){
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClose(popup);
}); 

function addCard(item) {
    const template = document.querySelector('#card__element').content;
    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__image').alt = item.name;
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
    });
    elementСontainer.prepend(card);
}

function showPopupCard(item) {
  const popupImg = document.querySelector('#popup-img');
  popupImg.querySelector('.popup-img__image').src = item.link;
  popupImg.querySelector('.popup-img__image').alt = item.name;
  popupImg.querySelector('.popup-img__heading').textContent = item.name;
  popupOpen(popupImg);
}

popupImgCloseCard.addEventListener('click', function () {
    const popupImg = document.querySelector('#popup-img');
    popupClose(popupImg);
});

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i]);
};
