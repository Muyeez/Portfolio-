const menuIcon = document.querySelector('#menu-icon');
const navLinks= document.querySelector('.nav-links');

menuIcon.onclick =()=> {
    navLinks.classList.toggle('active');
}

// js function to send mail from contact section
function sendMail()
{
    let param ={
        email : document.getElementById("email").value,
        messege : document.getElementById("messege").value,

    }

    emailjs.send("service_qy72tye","template_bmn26fa",param).then(alert("Email sent Successfully"));
}