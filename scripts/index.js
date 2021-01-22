
function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

profileButton.addEventListener('click', function (){
    openPopup(popupAddCard);
});

closeCard.addEventListener('click', function() {
    closePopup(popupAddCard);
});

formCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    

    addCard({name: nameFormField.value, link: linkFormField.value });
     
    closePopup(popupAddCard);
    nameFormField.value = '';
    linkFormField.value = '';
});

editButton.addEventListener('click', function() {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    openPopup(popupProfile);
});

popupCloseButton.addEventListener('click', function() {
    closePopup(popupProfile);
});

formProfile.addEventListener('submit', function (evt){
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupProfile);
}); 

function addCard(item) {
    const card = createCard(item);
    elementСontainer.prepend(card);
}

function createCard(item) {
    
    const card = template.content.cloneNode(true);
    const cardImage = card.querySelector('.element__image');
    card.querySelector('.element__title').textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;
    card.querySelector('.element__likes').addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__likes-active');

    });
    card.querySelector('.element__trash-icon').addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        eventTarget.parentNode.remove();
    });
    card.querySelector('.element__image').addEventListener('click', function () {
        showPopupCard(item);
    });
    return card;
}

function showPopupCard(item) {
  popupImgPicture.src = item.link;
  popupImgPicture.alt = item.name;
  popupImg.querySelector('.popup-img__heading').textContent = item.name;
  openPopup(popupImg);
}

popupImgCloseCard.addEventListener('click', function () {
    closePopup(popupImg);
});

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i]);
};
