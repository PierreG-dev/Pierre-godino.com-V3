/*=============================================
                   GENERAL
===============================================*/

// 0 -> fr
// 1 -> en
var language;
var headerState = 0;

function setup() {
    let temp = readCookie("language");
    if (temp != "") {
        language = parseInt(temp);
        languageSwitch();
        languageSwitch();
    }
    else {
        language = 0;
        createCookie("language", language);
        languageSwitch();
        languageSwitch();
    }
}

function updateAll() {
    navbarUpdate();
    titlesUpdate();
    headerUpdate();
    portfolioUpdate();
    skillsUpdate();
    contactUpdate();
    footerUpdate();
    formUpdate();
    cookieUpdate();

    return 0;
}

function createCookie(name, value, seconds) {
    if (seconds) {
        var expires = "; max-age=" + seconds;
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

/*=============================================
                FONCTIONNALITES
===============================================*/

/* WAYPOINTS */
var $skillsDisplayEVT = $('.informatique');

$skillsDisplayEVT.waypoint(function (direction) {
    $('.skillDetail').addClass('skillDisplayAnimation');
    $('.skillUnder').addClass('skillDisplayAnimationUnder');
    $('.skillColumn').addClass('shadowRisingAnimation');

    
}, { offset: '50%' });

/* PARALLAX */
var image_para = document.getElementsByClassName('thumbnail');
new simpleParallax(image_para, {
    scale: 1.4,
    orientation: 'down',
    transition: 'cubic-bezier(0,0,0,1)',
    delay: .0
});

/* LOADING SCREEN */
function displaySite() {
    let evt = setTimeout(function() {
        document.querySelector('.loadingScreen').style.opacity = '0';
        document.body.style.overflowY = "visible";
        let evt2 = setTimeout(function () { document.querySelector('.loadingScreen').style.display = 'none'; }, 1000)
    }, 1500);
    

}
window.onload = displaySite;

/* LANGUAGE */
const languageBtn = document.querySelector('.navbar_language');
const languageflags = document.querySelector('.navbar .flags');
languageBtn.onclick = languageSwitch;
function languageSwitch() {
    switch(language) {
        case 1: //anglais
            languageflags.style.transform = 'translate3d(0,0,0)';
            language = 0;
            createCookie("language", language);
            updateAll();
            break;
        default: //francais
            languageflags.style.transform = 'translate3d(0,-50%,0)';
            language = 1;
            createCookie("language", language);
            updateAll();
            break;
    }
}

/* TITRES DE SECTION */
const titleSkills = document.querySelector('.competences h2');
const titleDesign = document.querySelector('.design h3');
const titleResponsive = document.querySelector('.responsive h3');
const titleComputing = document.querySelector('.informatique h3');
const titlePortfolio = document.querySelector('.portfolio h2');
const titleContact = document.querySelector('.contact h2');

function titlesUpdate() {
    switch(language) {
        case 1: //anglais
            titleSkills.innerHTML = `<span><i class="fa fa-cogs" aria-hidden="true"></i></span> ${titleData[0].english[0]}`;
            titleDesign.innerHTML = `<span><i class="fa fa-paint-brush" aria-hidden="true"></i></span> ${titleData[0].english[1]}`;
            titleResponsive.innerHTML = `<span><i class="fa fa-desktop" aria-hidden="true"></i></span> ${titleData[0].english[2]}`;
            titleComputing.innerHTML = `<span><i class="fa fa-terminal" aria-hidden="true"></i></span> ${titleData[0].english[3]}`;
            titlePortfolio.innerHTML = `${titleData[1].english}`;
            titleContact.innerHTML = `${titleData[2].english}`;
            break;

        default: //francais
            titleSkills.innerHTML = `<span><i class="fa fa-cogs" aria-hidden="true"></i></span> ${titleData[0].francais[0]}`;
            titleDesign.innerHTML = `<span><i class="fa fa-paint-brush" aria-hidden="true"></i></span> ${titleData[0].francais[1]}`;
            titleResponsive.innerHTML = `<span><i class="fa fa-desktop" aria-hidden="true"></i></span> ${titleData[0].francais[2]}`;
            titleComputing.innerHTML = `<span><i class="fa fa-terminal" aria-hidden="true"></i></span> ${titleData[0].francais[3]}`;
            titlePortfolio.innerHTML = `${titleData[1].francais}`;
            titleContact.innerHTML = `${titleData[2].francais}`;
            break;
    }
}




/* COOKIE ALERT */
const cookieAlertWindow = document.querySelector('#cookieAlert');
const cookieAlertClose = document.querySelector('#cookieAlertClose');
const cookieAlertMsg = document.querySelector('#cookieAlertMsg');
const cookieAlertInfo = document.querySelector('#cookieAlertInfo');
cookieAlertClose.onclick = () => {
    cookieAlertWindow.style.transform = "translate3d(0,100%,0)";
}
function cookieUpdate() {
    switch(language) {
        case 1: 
            cookieAlertMsg.innerHTML = cookieAlertData[0].english;
            cookieAlertClose.innerHTML = cookieAlertData[1].english;
            cookieAlertInfo.innerHTML = cookieAlertData[2].english;
            break;

        default:
            cookieAlertMsg.innerHTML = cookieAlertData[0].francais;
            cookieAlertClose.innerHTML = cookieAlertData[1].francais;
            cookieAlertInfo.innerHTML = cookieAlertData[2].francais;
            break;
    }
}

/*=============================================
                    NAVBAR
===============================================*/
const navbarList = document.querySelector('#navbar_list');

//Met à jour la langue de la navbar
function navbarUpdate() {
    navbarList.innerHTML = '';
    for (let i = 0; i < navbarData.length; ++i) {
        switch (language) {
            case 1: // cas 1
                navbarList.innerHTML += `<li><a href="${navbarData[i].href_id}" class="navbar_element">${navbarData[i].english}</a></li>`
                break;

            default: // cas 0
                navbarList.innerHTML += `<li><a href="${navbarData[i].href_id}" class="navbar_element">${navbarData[i].francais}</a></li>`
                break;
        }
    }

    return 0;
}

//---------- Pour les petits écrans -----------
var deployed = false; //false si menu caché / true si menu déployé
const navBurger = document.querySelector('.navBurger');
const navbar = document.querySelector('.navbar');
const blackScreen = document.querySelector('.blackScreen');


blackScreen.onclick = function() {
    if(deployed == true) {
        navbar.style.transform = 'translate3d(0,0,0)';
        blackScreen.style.opacity = '0.3';
        navBurger.style.opacity = '1';
        blackScreen.style.zIndex = '-1';
        document.body.style.overflowY = 'visible';
        deployed = false;
    }

}
navBurger.onclick = function() {
    deployed = true;
    navBurger.style.opacity = '0';
    navbar.style.transform = 'translate3d(100%,0,0)';
    blackScreen.style.opacity = '0.8'
    blackScreen.style.cursor = 'pointer';
    blackScreen.style.zIndex = '3';
    document.body.style.overflowY = 'hidden';
}

navbarUpdate();

var $navbar = $('.navbar');

$navbar.waypoint(function(direction) {
    if (direction == 'down') {
        $navbar.addClass('reduced_navbar');
        $('.competences').addClass('navbar_fix');
    }
    else {
        $navbar.removeClass('reduced_navbar');
        $('.competences').removeClass('navbar_fix');
    }
}, {offset:'6vh'});



/*=============================================
                    HEADER
===============================================*/
const headerContent = document.querySelector('.mainContainer');


//Mise en place des images de fond
function headerBackgroundSetup() {
    for(let i = 0; i < headerData.length; ++i) {
        document.querySelector('header .container').innerHTML += `<img src="${headerData[i].img_src}" alt="${headerData[i].img_alt}"></img>`;
    }
}

//Met à jour la langue du header
function headerSetup() {
    headerContent.innerHTML = '';
    for (let i = 0; i < headerData.length; ++i) {
        switch (language) {
            case 1: // anglais
                headerContent.innerHTML += `<div class="main_element">
                                                <h5 class="title">
                                                    ${headerData[i].english[0]}
                                                </div>
                                                <p class="description">
                                                    ${headerData[i].english[1]}
                                                </div>
                                            </div>`;
                break;

            default: // francais
                headerContent.innerHTML += `<div class="main_element">
                                                <h5 class="title">
                                                    ${headerData[i].francais[0]}
                                                </h5>
                                                <p class="description">
                                                    ${headerData[i].francais[1]}
                                                </p>
                                            </div>`;
                break;
        }
    }
    return 0;
}

function headerAnimationSetup() {
    let elements = document.querySelectorAll('header .main_element');
    let headerBackgrounds = document.querySelectorAll('header .container img');

    elements[headerState].style.opacity = '1';
    headerBackgrounds[headerState].style.opacity = '1';
    headerBackgrounds[headerState].style.animation = 'headerImgMotion 12000ms linear infinite';

    for (let i = 1; i < elements.length; ++i) {
        elements[i].style.opacity = '0';
        headerBackgrounds[i].style.opacity = '0';
    }
    
}


//Alterne les contenus du header
function headerAnimation() {
    let elements = document.querySelectorAll('header .main_element');
    let headerBackgrounds = document.querySelectorAll('header .container img');

    elements[headerState].style.opacity = '0';
    headerBackgrounds[headerState].style.opacity = '0';
    headerState = (headerState + 1) % elements.length;
    headerBackgrounds[headerState].style.animation = 'none';
    void headerBackgrounds[headerState].offsetWidth;

    if ((rand = Math.random()) < 0.5) {
        headerBackgrounds[headerState].style.animation = 'headerImgMotion 12000ms linear infinite';
    }
    else {
        headerBackgrounds[headerState].style.animation = 'headerImgMotion 12000ms linear infinite reverse';
    }    
    elements[headerState].style.opacity = '1';
    headerBackgrounds[headerState].style.opacity = '1';

    return 0;
}


headerSetup();
headerBackgroundSetup();
headerAnimationSetup()
var animation = setInterval(headerAnimation, 10000);

const headerTitles = document.querySelectorAll('.main_element .title');
const headerDescription = document.querySelectorAll('.main_element .description');
//Change le language du header
function headerUpdate() {
    for(let i = 0; i < headerData.length; ++i) {
        headerTitles[i].innerHTML = '';
        headerDescription[i].innerHTML = '';
        switch(language) {
            case 1: //anglais
                headerTitles[i].innerHTML = `${headerData[i].english[0]}`;
                headerDescription[i].innerHTML = `${headerData[i].english[1]}`;
                break;
            default: //francais
                headerTitles[i].innerHTML = `${headerData[i].francais[0]}`;
                headerDescription[i].innerHTML = `${headerData[i].francais[1]}`;
                break;

        }
    }
}



/*=============================================
                    PORTFOLIO
===============================================*/

function portfolioUpdate() {
    let portfolioContainer = document.querySelector('.portfolio .container .row');
    portfolioContainer.innerHTML = '';
    let sizeRegulator = 0;

    for (let i = 0; i < portfolioData.length; ++i) {
        switch (language) {
            case 1: //anglais
                if (i % 2 != 0) {
                    portfolioContainer.innerHTML += `<div class="col-sm-0 col-md-1 col-lg-1"></div>`;
                    sizeRegulator = (sizeRegulator + 1) % 2;
                }
                if(sizeRegulator == 1)
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-5 col-lg-5 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].english}</h4>
                                                            <img src="${portfolioData[i].img_src}" alt="${portfolioData[i].english}">
                                                        </div>
                                                     </a>`;
                else
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-6 col-lg-6 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].english}</h4>
                                                            <img src="${portfolioData[i].img_src}" alt="${portfolioData[i].english}">
                                                        </div>
                                                     </a>`;          
                break;

            default: //francais
                if (i % 2 != 0) {
                    portfolioContainer.innerHTML += `<div class="col-sm-0 col-md-1 col-lg-1 "></div>`;
                    sizeRegulator = (sizeRegulator + 1) % 2;
                }
                if (sizeRegulator == 1)
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-5 col-lg-5 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].francais}</h4>
                                                            <img src="${portfolioData[i].img_src}" alt="${portfolioData[i].francais}">
                                                        </div>
                                                     </a>`;
                else
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-6 col-lg-6 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].francais}</h4>
                                                            <img src="${portfolioData[i].img_src}" alt="${portfolioData[i].francais}">
                                                        </div>
                                                     </a>`;
                break;
        }
    }
}

portfolioUpdate();

/*=============================================
                   COMPETENCES
===============================================*/

const skillsContent = document.querySelectorAll('.skillDetail');
const skillText = document.querySelectorAll('.competences .textBox');

function skillsUpdate() {

    /* ---------- IT PART ---------- */
    for (let i = 0; i < skillsContent.length; ++i) {
        skillsContent[i].innerHTML = '';
    }
    for (let i = 0; i < skillText.length; ++i) {
        skillText[i].innerHTML = '';
    }

    for (let i = 0; i < skillData.length; ++i) {
        switch(skillData[i].category) {
            case "front-end" : 
                switch(language) {
                    case 1: //anglais
                        skillsContent[0].innerHTML += `<div class="soloSkill"><img src="${skillData[i].img_src}" alt="${skillData[i].english}"><span>${skillData[i].english}</span></div>`;
                        break;

                    default: //francais
                        skillsContent[0].innerHTML += `<div class="soloSkill"><img src="${skillData[i].img_src}" alt="${skillData[i].francais}"><span>${skillData[i].francais}</span></div>`;
                        break;
                    
                }
                break;

            case "back-end" : 
                switch(language) {
                    case 1: //anglais
                        skillsContent[1].innerHTML += `<div class="soloSkill"><img src="${skillData[i].img_src}" alt="${skillData[i].english}"><span>${skillData[i].english}</span></div>`;
                        break;

                    default: //francais
                        skillsContent[1].innerHTML += `<div class="soloSkill"><img src="${skillData[i].img_src}" alt="${skillData[i].francais}"><span>${skillData[i].francais}</span></div>`;
                        break;
                    
                }
                break;

            case "dev-ops" : 
                switch(language) {
                    case 1: //anglais
                        skillsContent[2].innerHTML += `<div class="soloSkill"><img src="${skillData[i].img_src}" alt="${skillData[i].english}"><span>${skillData[i].english}</span></div>`;
                        break;

                    default: //francais
                        skillsContent[2].innerHTML += `<div class="soloSkill"><img src="${skillData[i].img_src}" alt="${skillData[i].francais}"><span>${skillData[i].francais}</span></div>`;
                        break;
                    
                }
                break;
        }
    }


    /* ---------- TEXTUAL PART ---------- */
    for(let i = 0; i < skillTextData.length; ++i) {
        switch(language) {
            case 1: //anglais
                skillText[i].innerHTML += `<p><span>${skillTextData[i].english[0]}</span><br>${skillTextData[i].english[1]}<br></p>`;
                break;

            default: //francais
                skillText[i].innerHTML += `<p><span>${skillTextData[i].francais[0]}</span><br>${skillTextData[i].francais[1]}<br></p>`;
                break;
        }
    }


}

skillsUpdate();
/*=============================================
                    A PROPOS
===============================================*/

/*=============================================
                    CONTACT
===============================================*/

const contactInfobox = document.querySelector('.infoBox');

function hrSupplier(i) {
    if (i == 0)
        return '';
    return '<hr>'
}

function contactUpdate() {
    let contactButton = document.querySelector('.contactButton');
    contactInfobox.innerHTML = '';

    for(let i =0; i < contactData.length; ++i) {
        switch(language) {
            case 1: //anglais
                contactInfobox.innerHTML += `${hrSupplier(i)}
                                             <h5>${contactData[i].english[0]}</h5>
                                             <a href="${contactData[i].href}" target="_blank" rel="noopener">${contactData[i].english[1]}</a>`;
                break;
                

            default: //francais
                contactInfobox.innerHTML += `${hrSupplier(i)}
                                             <h5>${contactData[i].francais[0]}</h5>
                                             <a href="${contactData[i].href}" target="_blank" rel="noopener">${contactData[i].francais[1]}</a>`;
                break;
        }
    }
    switch(language) {
        case 1:
            contactButton.innerHTML = formData[9].english;
            break;
        
        default:
            contactButton.innerHTML = formData[9].francais;
            break;
    }
}

contactUpdate();


const blackScreenForm = document.querySelector('#formBS');
const form = document.querySelector('#formulaire');

function formUpdate() {
    form.innerHTML = '';
    switch (language) {
        case 1:
            form.innerHTML = `<i class="fa fa-times" aria-hidden="true" id="formClose"></i>

                            <h4>${formData[0].english}</h4>
                            
                            <label for="name">${formData[1].english}</label>
                            <input type="text" size="50" placeholder="${formData[2].english}" name="nom" maxlength="25">
                            <label for="phone">${formData[3].english}</label>
                            <input type="tel" size="50" placeholder="${formData[4].english}" name="telephone" maxlength="12">
                            <label for="mail">${formData[5].english}</label>
                            <input type="email" size="50" placeholder="${formData[6].english}" name="email" maxlength="35">
                            <input type="text" id="temoin" style="display:none;">
                            <textarea name="Content" id="content" cols="60" rows="10" placeholder="${formData[7].english}" maxlength="500"></textarea>
                            <div class="btn btn-success" id="mailBtn">${formData[8].english}</div>
            `;
            break;

        default:
            form.innerHTML = `<i class="fa fa-times" aria-hidden="true" id="formClose"></i>

                            <h4>${formData[0].francais}</h4>
                            
                            <label for="name">${formData[1].francais}</label>
                            <input type="text" size="50" placeholder="${formData[2].francais}" name="nom" maxlength="25">
                            <label for="phone">${formData[3].francais}</label>
                            <input type="tel" size="50" placeholder="${formData[4].francais}" name="telephone" maxlength="12">
                            <label for="mail">${formData[5].francais}</label>
                            <input type="email" size="50" placeholder="${formData[6].francais}" name="email" maxlength="35">
                            <input type="text" id="temoin" style="display:none;">
                            <textarea name="Content" id="content" cols="60" rows="10" placeholder="${formData[7].francais}" maxlength="500"></textarea>
                            <div class="btn btn-success" id="mailBtn">${formData[8].francais}</div>
            `;
            break;

    }

    let contactButton = document.querySelector('.contactButton');
    
    contactButton.onclick = () => {
        form.style.display = "flex";
        form.style.opacity = "1";
        blackScreenForm.style.opacity = '0.8';
        blackScreenForm.style.cursor = 'pointer';
        blackScreenForm.style.zIndex = '12';
        document.body.style.overflowY = 'hidden';
        blackScreenForm.onclick = () => {
            blackScreenForm.style.opacity = '0.3';
            blackScreenForm.style.zIndex = '-1';
            document.body.style.overflowY = 'visible';
            form.style.display = "none";
            form.style.opacity = "0";
            for (let i = 0; i < 4; ++i) {
                inputs[i].value = "";
            }
            contentArea.value = "";
        }
    }

    /* MAIL */
    let mailButton = document.querySelector('#mailBtn');
    let inputs = document.querySelectorAll('input');
    let contentArea = document.querySelector('textarea');
    let formClose = document.querySelector('#formClose');
    mailButton.onclick = mailRequest
    formClose.onclick = () => {
        blackScreenForm.click();
    }
    
}

function inputsCheck() {
    let mailButton = document.querySelector('#mailBtn');
    let inputs = document.querySelectorAll('input');
    let contentArea = document.querySelector('textarea');
    let formClose = document.querySelector('#formClose');

    let state = true;
    for (let i = 0; i < inputs.length - 1; ++i) {
        inputs[i].style.boxShadow = "";
        if (inputs[i].value == "") {
            state = false;
            inputs[i].style.boxShadow = "0px 0px 10px 0px red";
        }
    }
    contentArea.style.boxShadow = "";
    if (contentArea.value == "") {
        state = false;
        contentArea.style.boxShadow = "0px 0px 10px 0px red";
    }

    return state;
}
function mailRequest() {
    let mailButton = document.querySelector('#mailBtn');
    let inputs = document.querySelectorAll('input');
    let contentArea = document.querySelector('textarea');
    let formClose = document.querySelector('#formClose');

    if (!(readCookie("mailProtect") == "active")) {
        if (inputsCheck()) {
            if (inputs[3].value == "") {
                sendMail(0, inputs[0].value, inputs[1].value, inputs[2].value, contentArea.value);
                blackScreenForm.click();
                createCookie("mailProtect", 'active', 720);
            }
        }
    }
    else {
        alert("Il est trop tôt pour envoyer un autre message !");
    }
}








/*=============================================
                     FOOTER
===============================================*/

const footerNav = document.querySelector('footer .footnav ul');
const footerLegalMentions = document.querySelector('footer .lowerPart a .legal');

function footerUpdate() {
    footerNav.innerHTML = '';

    for(let i = 0; i < navbarData.length; ++i) {
        switch(language) {

            case 1: //anglais
                footerNav.innerHTML += `<li><a href="${navbarData[i].href_id}" class="footerElement">${navbarData[i].english}</a></li>`;
                break;
            
            default: //francais
                footerNav.innerHTML += `<li><a href="${navbarData[i].href_id}" class="footerElement">${navbarData[i].francais}</a></li>`;
                break;
        }
    }

    switch(language) {
        case 1: //anglais
            footerLegalMentions.innerHTML = legalData.english;
            break;
        default: //francais
            footerLegalMentions.innerHTML = legalData.francais;
            break;
    }
}

footerUpdate();
setup();