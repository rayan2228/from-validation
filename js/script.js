(function () {
    // all selectors
    const firstNameElm = document.querySelector("#first-name")
    const lastNameElm = document.querySelector("#last-name")
    const firstNameMsgElm = document.querySelector(".name-msg")
    const lastNameMsgElm = document.querySelector(".last-name-msg")
    const userNameElm = document.querySelector("#user-name")
    const userNameMsgElm = document.querySelector(".user-name-msg")
    const passwordElm = document.querySelector("#password")
    // const passwordMsgElm = document.querySelector(".pass-msg")
    const passCopyElm = document.querySelector(".copy")
    const passShowElm = document.querySelector(".show")
    const passHideElm = document.querySelector(".hide")
    const generatePassElm = document.querySelector(".g-pass")
    const confirmPassElm = document.querySelector("#confirm-password")
    const confirmPassMsgElm = document.querySelector(".confirm-pass-msg")
    const numberElm = document.querySelector("#phone-number")
    const numberMsgElm = document.querySelector(".number-msg")
    const copyMsgElm = document.querySelector(".copy-msg")

    // all actions
    const allEvanListener = () => {
        firstNameElm.addEventListener("input", checkName)
        lastNameElm.addEventListener("input", checkName)
        userNameElm.addEventListener("input", checkUserName)
        passCopyElm.addEventListener("click", copyPass)
        passShowElm.addEventListener("click", hidePass)
        passHideElm.addEventListener("click", showPass)
        generatePassElm.addEventListener("click", generatePass)
        confirmPassElm.addEventListener("input", confirmPass)
        numberElm.addEventListener("input", phnNumValid)
    }
    // Check first and last name
    const checkName = () => {
        let regex = /\d/
        let firstNameVal = firstNameElm.value
        let lastNameVal = lastNameElm.value
        let regexCheckFirstName = regex.test(firstNameVal)
        let regexCheckLastName = regex.test(lastNameVal)
        if (firstNameVal === "" || regexCheckFirstName !== true) {
            firstNameMsgElm.innerText = ""
        } else if (regexCheckFirstName === true) {
            firstNameMsgElm.innerText = "Digit Not Allowed"
        }
        if (lastNameVal === "" || regexCheckLastName !== true) {
            lastNameMsgElm.innerText = ""
        } else if (regexCheckLastName === true) {
            lastNameMsgElm.innerText = "Digit Not Allowed"
        }
    }
    // Check user name
    const checkUserName = () => {
        let regex = /[a-z]{5}\d/
        let userNameVal = userNameElm.value
        let regexCheckUserName = regex.test(userNameVal)
        if (userNameVal === "" || regexCheckUserName == true) {
            userNameMsgElm.innerText = ""
        } else if (regexCheckUserName === false) {
            userNameMsgElm.innerText = "Minimum 5 Character and Use Digit"
        }

    }
    // copy password
    const copyPass = () => {
        passwordElm.select()
        navigator.clipboard.writeText(passwordElm.value)
        copyMsgElm.innerText = "copied"
    }
    // Show  password
    const showPass = () => {
        passwordElm.setAttribute("type", "text")
        passHideElm.style.display = "none"
        passShowElm.style.display = "inline-block"
    }
    // Hide  password
    const hidePass = () => {
        passwordElm.setAttribute("type", "password")
        passHideElm.style.display = "inline-block"
        passShowElm.style.display = "none"
    }
    // password generator
    const generatePass = (e) => {
        let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let passLength = 12
        let password = ""
        for (let i = 0; i <= passLength; i++) {
            let randomNumber = Math.floor(Math.random() * char.length)
            password += char.substring(randomNumber, randomNumber + 1)
        }
        passwordElm.value = password
    }
    // confirm password
    const confirmPass = () => {
        if (passwordElm.value === confirmPassElm.value) {
            confirmPassMsgElm.innerText = ""
        } else {
            confirmPassMsgElm.innerText = "Password Doesn't Match"
        }
    }
    // phone number validation
    const phnNumValid = () => {
        let regexTow = /(\+)?(88)?01[3-9]\d{8}/gi
        let numberVal = numberElm.value
        let result = regexTow.test(numberVal)
        if ((result === true || numberVal === "") && numberVal.length < 12) {
            numberMsgElm.innerText = ""
            console.log(result)
        } else {
            numberMsgElm.innerText = "Not A Valid Phone Number"
        }
    }
    // call all functions
    allEvanListener()
}())