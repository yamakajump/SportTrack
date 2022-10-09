(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });
})(jQuery);

//form signUp
function valideSingUp() {
    // Sélectionner l'élément input et récupérer sa valeur
    var ret = false;

    var singUp_Nom = document.getElementById("singUp_Nom").value;
    var singUp_Prenom = document.getElementById("singUp_Prenom").value;
    var singUp_Date = document.getElementById("singUp_Date").value;
    var singUp_Sexe = document.getElementById("singUp_Sexe").value;
    var singUp_Taille = document.getElementById("singUp_Taille").value;
    var singUp_Poids = document.getElementById("singUp_Poids").value;
    var singUp_Email = document.getElementById("singUp_Email").value;
    var singUp_Password = document.getElementById("singUp_Password").value

    var text = "Bonjour " + singUp_Nom + " " + singUp_Prenom + "\rVoici les informations sur vous :\rDate de naissance : " + singUp_Date + "\rSexe : " + singUp_Sexe + "\rTaille : " + singUp_Taille + "\rPoids : " + singUp_Poids + "\r\rIdentifiant :\rMail : " + singUp_Email + "\rMot de passe : " + singUp_Password + "\r\rPoru vous inscrire appuyez sur \"Ok\""
    var conf = confirm(text);
    if (conf) {
        alert("Votre inscription a bien été pris en compte, vous pouvez maintenant vous connecté");
        document.location.href="signin.html";
        ret = true;
    } else {
        alert("Votre inscription n'a pas été faite comme à votre demande");
    }
    return ret;
}

//vérifiction mot de passe identique
var singUp_Password = document.getElementById("singUp_Password");
var singUp_confirmPassword = document.getElementById("singUp_confirmPassword");

function validatePassword() {
    if (singUp_Password.value != singUp_confirmPassword.value) {
        singUp_confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        singUp_confirmPassword.setCustomValidity('');
    }
}

singUp_Password.onkeyup = validatePassword;
singUp_confirmPassword.onkeyup = validatePassword;