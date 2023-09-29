const firebaseConfig = {
  apiKey: "AIzaSyDM_uQIwPC-5sIizv5__bEVRm8AnLSmPbQ",
  authDomain: "hms-contact-us.firebaseapp.com",
  databaseURL: "https://hms-contact-us-default-rtdb.firebaseio.com",
  projectId: "hms-contact-us",
  storageBucket: "hms-contact-us.appspot.com",
  messagingSenderId: "556869452304",
  appId: "1:556869452304:web:1067274c2c1e8c18648095",
};
//Intialize firebase
firebase.initializeApp(firebaseConfig);

// reference for database
var contactFormdb = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var conatactno = getElementVal('conatactno');
    var msgContent = getElementVal('msgContent');

    saveMessage(name,email,conatactno,msgContent);

    // Enable Alert 
    document.querySelector('.alert').style.display = "block";

    // REMOVE ALERT 
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 5000);

    // reset the form
    document.getElementById("contactForm").reset();
    
}

// This is used for the save message in the database.
const saveMessage = (name,email,conatactno,msgContent) =>{
    var newContactForm = contactFormdb.push();

    newContactForm.set({
        name : name,
        email : email,
        conatactno : conatactno,
        msgContent: msgContent ,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}