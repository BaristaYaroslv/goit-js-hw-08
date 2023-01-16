import throttle from "lodash.throttle";

const FEEDBACK_KEY = 'feedback-form-state';
const localData ={
    email: "",
    message: "",
};

const formFeedback = document.querySelector(".feedback-form");
const inputEmail = formFeedback.querySelector('.feedback-form input');
const textarea = document.querySelector(".feedback-form textarea");


getLocalStorageText();

formFeedback.addEventListener('input', throttle(onInputListener, 500))

function onInputListener()
 {
  localData.email =  inputEmail.value ;
  localData.message=  textarea.value ;
localStorage.setItem(FEEDBACK_KEY, JSON.stringify(localData));
};


formFeedback.addEventListener('submit', onFormSubmit);
function onFormSubmit (event){
event.preventDefault();
console.log(localData);
event.target.reset();
localStorage.removeItem(FEEDBACK_KEY);

}


function getLocalStorageText() {
    let saveObject;
    try {
      saveObject = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    } catch {
      saveObject = localData;
    }
  
    if (saveObject === null) saveObject = localData;

    inputEmail.value = saveObject.email;

    textarea.value = saveObject.message;
  }