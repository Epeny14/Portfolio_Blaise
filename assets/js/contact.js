/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_4zj7lkm', 'template_cpgxy5y', '#contact-form', 'njok7wb8MQQLq4G7-')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message à été bien envoyé  ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message n\'a pas été envoyé (vérifier bien les champs) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)