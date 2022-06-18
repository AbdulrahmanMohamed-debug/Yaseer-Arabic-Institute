const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu);

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "a.saeedmohamed455@gmail.com",
        Password: "Saftey is in the fear of Allah",
        To: 'a.saeedmohamed455@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Contact Form Inquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br>Email: " + document.getElementById("email").value
            + "<br>Phone #: " + document.getElementById("phone").value
            + "<br>Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully!")
    );
}