const container1 = document.querySelector(".sub-container-1");
const container2 = document.querySelector(".sub-container-2");

const form = document.getElementById("cardForm");

const cardDigits = document.getElementById("cardDigits");
const digit_input = document.getElementById("digits");

const cardHolder_name = document.getElementById("cardHolder_name");
const name_input = document.getElementById("name");

const month = document.getElementById("month");
const month_input = document.getElementById("month_input");

const year = document.getElementById("year");
const year_input = document.getElementById("year_input");

const cvc = document.getElementById("cvc");
const cvc_input = document.getElementById("cvc_input");

const wrongFormat = document.getElementById("wrongformat");
const nBlank = document.getElementById("n_blank");
const dBlank = document.getElementById("d_blank");
const mBlank = document.getElementById("m_blank");
const yBlank = document.getElementById("y_blank");
const cBlank = document.getElementById("c_blank");

const monthYearInput = document.getElementById("monthYearInput");
const wrongYearInput = document.getElementById("wrongYearInput");



const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

form.addEventListener("submit", e=> {
   previewCard();

    checkDigitsInput();

    // Error
    blank(name_input, nBlank);
    blank(digit_input, dBlank);
    blank(cvc_input, cBlank);
    blank(month_input, mBlank);
    blank(year_input, yBlank);

    incorrectMonth(month_input, wrongMonthInput);
    incorrectYear(year_input, wrongYearInput);

    const isValid = form.checkValidity();
    if(isValid && blank(name_input, nBlank) && blank(digit_input, dBlank) && checkDigitsInput() && blank(cvc_input, cBlank) && blank(month_input, mBlank) && blank(year_input, yBlank) && incorrectMonth(month_input, wrongMonthInput) && incorrectYear(year_input, wrongYearInput)){
        container1.style.display = "none";
        container2.style.display = "block";
    }

    e.preventDefault();
})

function previewCard () {
    cardHolder_name.innerText = name_input.value;
    cardDigits.innerText = digit_input.value;
    month.innerText = month_input.value;
    year.innerText = year_input.value;
    cvc.innerText = cvc_input.value;
}
 
digits.addEventListener('input', function() {
    let rawValue = this.value;
    rawValue = rawValue.replace( / \D/g, ' ');
  
    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.value = formattedValue;
});

function checkDigitsInput () {
    const value = digit_input.value;
    const containsLetters = /[a-zA-Z]/.test(value);
    const falseInput = /^\s*$/.test(value);

    if(containsLetters) {
        wrongFormat.style.display = "block";

        return false;
    } else {
        wrongFormat.style.display = "none";

        return true;
    }

    if(falseInput) {
        nBlank.style.display = "block";
    } else {
        nBlank.style.display = "none";
    }
}

function blank (input, blank) {
    const value = input.value;
    const falseInput = /^\s*$/.test(value);

    if(falseInput) {
        blank.style.display = "block";
    } else {
        blank.style.display = "none";

        return true;
    }
}

function incorrectYear(input, wrongInput) {
    let value = input.value;
    value = parseInt(value);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    console.log(currentYear)

    if(value < currentYear) {
        wrongInput.style.display = "block";
    } else {
        wrongInput.style.display = "none";

        return true;
    }
}

function incorrectMonth(input, wrongInput) {
    let value = input.value;
    value = parseInt(value);

    if(value > 12) {
        wrongInput.style.display = "block";
    } else {
        wrongInput.style.display = "none";

        return true;
    }
}

btn2.addEventListener("click", e=> {
    container1.style.display = "block";
    container2.style.display = "none";

    form.reset();
})