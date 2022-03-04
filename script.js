var slideIndex = 1;
var slideIndex2 = 0;

showSlidesAutomatic();

function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlides(n) {
    showSlides(slideIndex = n)
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}
function showSlidesAutomatic(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;

    if (slideIndex2 > slides.length) {
        slideIndex2 = 1
    }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlidesAutomatic, 3000)
}

function validaDados() {
    var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //expressao regular 
    var invalidtel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im //expressao regular
    var nome = document.getElementById('txtnome');
    var email = document.getElementById('txtemail');
    var telefone = document.getElementById('txttelefone')

    if (nome.value.length == 0) {
        caixa_nome = document.querySelector('.msg-nome');
        caixa_nome.innerHTML = "Nome não informado";
        return false;
    }
   if (email.value.length == 0) {
        caixa_email = document.querySelector('.msg-email');
        caixa_email.innerHTML = "Email não informado";
        return false;
    }
    if (invalid.test(email.value) == false) {
        alert("Endereço de e-mail inválido");
        return false;
    }
    if (invalidtel.test(telefone.value) == false) {
        alert("Telefone inválido");
        return false;
    }

}
