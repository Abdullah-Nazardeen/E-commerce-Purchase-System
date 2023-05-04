const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")
const isExpressDelivery = document.querySelector("#delivery")
const form1 = document.querySelector(".form-1")
const quantity1 = document.querySelector("#quantity1")
const quantity2 = document.querySelector("#quantity2")
const quantity3 = document.querySelector("#quantity3")
const quantity4 = document.querySelector("#quantity4")
const nameDiv = document.querySelector(".nameDiv")
const emailDiv = document.querySelector(".emailDiv")
const listContainer = document.querySelector(".order-list")
const totalPrice = document.querySelector(".total-price")
const clearBtn = document.querySelector(".clear")
const submitBtn = document.querySelector(".submit")
const confirmBtn = document.querySelector(".confirm")
const form2 = document.querySelector(".form-2")
// part 2
const totalDiv = document.querySelector(".summary-total")
const deliveryDiv = document.querySelector(".summary-delivery")
const contactDiv =document.querySelector(".contact-info-email")
const paymentForm = document.querySelector("#payment-form")
const billingForm = document.querySelector("#billing-form")
const contactForm = document.querySelector("#contact-form")
const successDiv = document.querySelector(".success")
const makePaymentBtn = document.querySelector(".make-payment")
const billingDiv = document.querySelector(".billing-container")
const contactContainer = document.querySelector(".contact-details")
const switchBill = document.querySelector(".switch-bill")
const switchPay = document.querySelector(".switch-pay")
const cardNo = document.querySelector("#card-no")
const cardName = document.querySelector("#card-name")
const month = document.querySelector("#ex-date-m")
const year = document.querySelector("#ex-date-y")
const securityCode = document.querySelector("#code")
const address1 = document.querySelector("#address-1")
const address2 = document.querySelector("#address-2")
const address3 = document.querySelector("#address-3")
const city = document.querySelector("#city")
const state = document.querySelector("#state")
const zipCode = document.querySelector("#zip-code")
const country = document.querySelector("#country")
const phoneNo = document.querySelector("#phone-no")
const cancelBill = document.querySelector(".cancel-bill")
const cancelContact = document.querySelector(".cancel-contact")
const cancelForm = document.querySelector(".cancel-form")
const cancelPay = document.querySelector(".cancel-pay")
const receivedDiv = document.querySelector(".received") 

let messageName = ""
let messageEmail = ""
form1.addEventListener("submit",function(event){
    event.preventDefault()
    validate()
    list()
    formData.isExpressDelivery = isExpressDelivery.checked
    verifyOrder()
})

const formData = {Name:"",Email:"",Total:"",isExpressDelivery:""}
function isValidEmail(info) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(info).toLowerCase());
}


function validate() {
    const name = inputName.value.trim()
    const email = inputEmail.value.trim()

    if (name === "") {
        messageName = "*Name is Required"
        message()
    } else {
        messageName = ""
        message()
        formData.Name = name
    }
    if ( email === "") {
        messageEmail = "*Email is Required."
        message()
    } else if ( !isValidEmail(email)) {
        messageEmail = "*Email is Not Valid."
        message()
    } else {
        messageEmail = ""
        message()
        formData.Email = email
    }

}

function message() {
    const errorN = messageName ? `<h5 class="errorN">${messageName}</h5>` : `<h5></h5>`
    const errorE = messageEmail ? `<h5 class="errorE">${messageEmail}</h5>` : `<h5></h5>`
    nameDiv.innerHTML = errorN
    emailDiv.innerHTML = errorE
}

function list() {
    listContainer.innerHTML = ""
    totalPrice.innerHTML = ""
    const qty1 = quantity1.value
    const qty2 = quantity2.value
    const qty3 = quantity3.value
    const qty4 = quantity4.value
    let price1 = qty1*17
    let price2 = qty2*12
    let price3 = qty3*20
    let price4 = qty4*18
    let total = price1 + price2 + price3 + price4
    const list1 = qty1 == "0" ? `<h4></h4>` : `<h4>Basketball:...............................................£${price1}</h4>`
    const list2 = qty2 == "0" ? `<h4></h4>` : `<h4>Cricket Ball:............................................£${price2}</h4>`
    const list3 = qty3 == "0" ? `<h4></h4>` : `<h4>Cricket Bat:.............................................£${price3}</h4>`
    const list4 = qty4 == "0" ? `<h4></h4>` : `<h4>Football:...................................................£${price4}</h4>`
    const totalEl = total ? `<h4>£${total}</h4>` :  `<h4></h4>`
    listContainer.innerHTML += list1
    listContainer.innerHTML += list2
    listContainer.innerHTML += list3
    listContainer.innerHTML += list4
    totalPrice.innerHTML = totalEl
    formData.Total = total

}

function verifyOrder() {
    if (formData.Email && formData.Name && formData.Total !== 0) {
        confirmBtn.disabled = false
        console.log(confirmBtn.disabled)
    } else {
        confirmBtn.disabled = true
        console.log(confirmBtn.disabled)
    }
}

clearBtn.addEventListener("click",function(){
    listContainer.innerHTML = ""
    totalPrice.innerHTML = ""
    formData.Total = ""
})

confirmBtn.addEventListener("click",function(){
    form1.classList.add("deactivated")
    form2.classList.remove("deactivated")
    displayInfo() 
})

// part 2

let isPaymentFilled = false
let isBillingFilled = false

const paymentData = {}

console.log(paymentData)
function displayInfo() {
    const totalEl = `<h5>£${formData.Total}</h5>`
    const deliveryEl = formData.isExpressDelivery ? `<h5>Yes</h5>` : `<h5>No</h5>`
    const renderEmail = `<h5>${formData.Email}</h5>`
    totalDiv.innerHTML += totalEl
    deliveryDiv.innerHTML += deliveryEl
    contactDiv.innerHTML += renderEmail
}

paymentForm.addEventListener("submit",function(event){
    event.preventDefault()
    isPaymentFilled = true
    if (isBillingFilled & isPaymentFilled) {
        makePaymentBtn.disabled = false
    } else {
        makePaymentBtn.disabled = true
    }
    success()
    paymentData.CardNumber = cardNo.value
    paymentData.CardName = cardName.value
    paymentData.Month = month.value
    paymentData.Year = year.value
    paymentData.SecurityCode = securityCode.value
    console.log(paymentData)

})
billingForm.addEventListener("submit",function(event){
    event.preventDefault()
    isBillingFilled = true
    if (isBillingFilled & isPaymentFilled) {
        makePaymentBtn.disabled = false
    } else {
        makePaymentBtn.disabled = true
    }
    paymentData.Address1 = address1.value
    paymentData.Address2 = address2.value
    paymentData.Address3 = address3.value
    paymentData.City = city.value
    paymentData.State = state.value
    paymentData.ZipCode = zipCode.value
    paymentData.Country = country.value
    console.log(paymentData)
})
contactForm.addEventListener("submit",function(event){
    event.preventDefault()
    paymentData.PhoneNo = phoneNo.value
})
function success() {
    const successEl =`<i class="tick">🗸</i>`
    successDiv.innerHTML += successEl
}
cancelPay.addEventListener("click",function(){
    paymentForm.reset()
    paymentData.CardNumber = ""
    paymentData.CardName = ""
    paymentData.Month = ""
    paymentData.Year = ""
    paymentData.SecurityCode = ""

})
cancelBill.addEventListener("click",function(){
    billingForm.reset()
    paymentData.Address1 = ""
    paymentData.Address2 = ""
    paymentData.Address3 = ""
    paymentData.City = ""
    paymentData.State = ""
    paymentData.ZipCode = ""
    paymentData.Country = ""

})
cancelContact.addEventListener("click",function(){
    contactForm.reset()
    paymentData.PhoneNo = ""
})
cancelForm.addEventListener("click",function(){
    paymentForm.reset()
    billingForm.reset()
    contactForm.reset()
})

makePaymentBtn.addEventListener("click",function() {
    form2.classList.add("deactivated")
    receivedDiv.classList.remove("deactivated")
    const receivedEl = `<span class="material-symbols-outlined">check_circle</span>
    <h1>Payment Received</h1>
    <h3>Hi,${formData.Name}</h3>
    <h3>Payment Details:</h3>
    <h3>Amount: £${formData.Total}</h3>
    <h3>Account Number: ${paymentData.CardNumber}</h3>

    <h4>We advise to keep a screenshot of this recite for future reference.</h4>
    `
    receivedDiv.innerHTML = receivedEl
})



