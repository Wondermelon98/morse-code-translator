let englishForm = document.querySelector(".container__input--english");
let morseForm = document.querySelector(".container__input--morse");

let translateFunc = (form, langObj, oppForm) => {
    let raw = form.value;
    let text;
    form === morseForm ? text = raw.split(" ") : text = raw.split("");
    let oppChar = text.map(char => {
       return langObj[char] ? langObj[char] : char;
    });
    form === morseForm 
    ? oppForm.value = oppChar.join("") 
    : oppForm.value = oppChar.join(" ");
}

export default translateFunc;