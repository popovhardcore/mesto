




let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let nameInput = document.getElementById('popup__form-nameinput');
let jobInput = document.getElementById('popup__form-jobinput');
let form = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    // 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
});

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
   // console.log(jobInput.value);
});

function handleFormSubmit(evt){
    evt.preventDefault();
     
     profileName.textContent = nameInput.value;
     profileDescription.textContent = jobInput.value;
     popup.classList.remove('popup_opened');
};

form.addEventListener('submit', handleFormSubmit); 


