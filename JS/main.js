let MatchPage = document.getElementById("MatchPage");
let NewsPage = document.getElementById("NewsPage");
let RankPage = document.getElementById("RankPage");
let SettingPage = document.getElementById("SettingPage");
let MatchPageBtn = document.getElementById("MatchPageBtn");
let NewsPageBtn = document.getElementById("NewsPageBtn");
let RankPageBtn = document.getElementById("RankPageBtn");
let SettingPageBtn = document.getElementById("SettingPageBtn");
let header = document.getElementById("header");
let UserName = document.getElementById("UserName");
let UserEmail = document.getElementById("UserEmail");
let UserNameSetting = document.getElementById("UserNameSetting");
let UserEmailSetting = document.getElementById("UserEmailSetting");
let SaveBtn = document.getElementById("SaveBtn");
let LoginBox = document.getElementById("LoginBox");
let Lodding = document.getElementById("Lodding");
let WelcomeBox = document.getElementById("WelcomeBox");
let FileinputLabel = document.getElementById("FileinputLabel");
let CSSLinker = document.getElementById("CSSLinker");
let AddMassageBtn = document.getElementById("AddMassageBtn");
let savedImageUrl = localStorage.getItem('savedImage');
let fileInput = document.getElementById('file-input');
let selectedImage = document.getElementById('selected-image');
let checkbox2 = document.getElementById('notificationcheckbox');
let checked2 = localStorage.getItem('notificationcheckbox') === 'true';
let checkbox = document.getElementById('DarkModecheckbox');
let checked = localStorage.getItem('checkboxChecked') === 'true';
let MatchHeaderBox = document.getElementById("MatchHeaderBox");
let WadgetBtn = document.getElementById("WadgetBtn");
let MenuBtnMatchHeader = document.getElementById("MenuBtnMatchHeader");
let WadgetBtnClose = document.getElementById("WadgetBtnClose");
let languagebox = document.getElementById("languagebox");
let languageBtn = document.getElementById("languageBtn");
let languageBtnclose = document.getElementById("languageBtnclose");
let FontSizebox = document.getElementById("FontSizebox");
let FontSizeBtn = document.getElementById("FontSizeBtn");
let FontSizeBtnclose = document.getElementById("FontSizeBtnclose");
let biginput = document.getElementById("biginput");
let normalinput = document.getElementById("normalinput");
let smallinput = document.getElementById("smallinput");
let capeweblinkmassage = document.getElementById("capeweblinkmassage");
let contactmebox = document.getElementById("contactmebox");
let contactmeboxClose = document.getElementById("contactmeboxClose");
let contactmeboxbtn = document.getElementById("contactmeboxbtn");
let ratewebsite = document.getElementById("ratewebsite");
let ratewebsiteClose = document.getElementById("ratewebsiteClose");
let ratewebsiteCloseS = document.getElementById("ratewebsiteCloseS");
let ratewebsitebtn = document.getElementById("ratewebsitebtn");
let ratewebsitemassage = document.getElementById("ratewebsitemassage");
let starone = document.getElementById("starone");
let startwo = document.getElementById("startwo");
let starthree = document.getElementById("starthree");
let starfour = document.getElementById("starfour");
let starfive = document.getElementById("starfive");
let SignOut = document.getElementById("SignOut");
let AddMassageBox = document.getElementById("AddMassageBox");
let Massageclosebtnfull = document.getElementById("Massageclosebtnfull");
let massageImage = document.getElementById("massageImage");
let Massageclosebtn = document.getElementById("Massageclosebtn");
let SettingUserInfo = document.getElementById("SettingUserInfo");
let LoginBtn = document.getElementById("LoginBtn");

LoginBtn.onclick = function () {
    LoginBox.style.display = "flex";
}

SaveBtn.onclick = function () {
    if (UserName.value.trim() !== '' && UserEmail.value.trim() !== '') {
        LoginBox.style.display = "none";
        UserNameSetting.innerHTML = UserName.value;
        UserEmailSetting.innerHTML = UserEmail.value;
        window.localStorage.setItem("UserName", UserName.value)
        window.localStorage.setItem("UserEmail", UserEmail.value)
        window.localStorage.setItem("UserLogin", "true")
        window.localStorage.setItem("bigfont", "false")
        window.localStorage.setItem("normalfont", "true")
        window.localStorage.setItem("smallfont", "false")
        Lodding.style.display = "flex";
        setTimeout(function () {
            window.location.reload();
        }, 4000);
    }
}

UserNameSetting.innerHTML = UserName.value = window.localStorage.getItem("UserName");
UserEmailSetting.innerHTML = UserEmail.value = window.localStorage.getItem("UserEmail");

if (window.localStorage.getItem("UserLogin") === "true") {
    SignOut.style.display = "flex";
    SettingUserInfo.style.display = "flex";
    SettingUserSuggest.style.display = "none";
    LoginBox.style.display = "none";
    setTimeout(function () {
        WelcomeBox.style.display = "none";
    }, 3000);
} else {
    WelcomeBox.style.display = "none";
}

MatchPageBtn.onclick = function () {
    MatchPage.style.display = "block";
    header.style.display = "flex";
    NewsPage.style.display = "none";
    RankPage.style.display = "none";
    SettingPage.style.display = "none";
    MatchPageBtn.style.color = "rgba(57 219 191)";
    NewsPageBtn.style.color = "rgba(118 120 132)";
    RankPageBtn.style.color = "rgba(118 120 132)";
    SettingPageBtn.style.color = "rgba(118 120 132)";
}

NewsPageBtn.onclick = function () {
    MatchPage.style.display = "none";
    NewsPage.style.display = "block";
    header.style.display = "flex";
    RankPage.style.display = "none";
    SettingPage.style.display = "none";
    NewsPageBtn.style.color = "rgba(57 219 191)";
    MatchPageBtn.style.color = "rgba(118 120 132)";
    RankPageBtn.style.color = "rgba(118 120 132)";
    SettingPageBtn.style.color = "rgba(118 120 132)";
}

RankPageBtn.onclick = function () {
    MatchPage.style.display = "none";
    NewsPage.style.display = "none";
    RankPage.style.display = "block";
    header.style.display = "flex";
    SettingPage.style.display = "none";
    RankPageBtn.style.color = "rgba(57 219 191)";
    MatchPageBtn.style.color = "rgba(118 120 132)";
    NewsPageBtn.style.color = "rgba(118 120 132)";
    SettingPageBtn.style.color = "rgba(118 120 132)";
}

SettingPageBtn.onclick = function () {
    MatchPage.style.display = "none";
    NewsPage.style.display = "none";
    RankPage.style.display = "none";
    header.style.display = "none";
    SettingPage.style.display = "block";
    SettingPageBtn.style.color = "rgba(57 219 191)";
    NewsPageBtn.style.color = "rgba(118 120 132)";
    RankPageBtn.style.color = "rgba(118 120 132)";
    MatchPageBtn.style.color = "rgba(118 120 132)";
}

checkbox.checked = checked;
checkbox.addEventListener('change', () => {
    localStorage.setItem('checkboxChecked', checkbox.checked);
    Lodding.style.display = "flex";
    setTimeout(function () {
        window.location.reload();
    }, 3000);
});

checkbox2.checked = checked2;
checkbox2.addEventListener('change', () => {
    localStorage.setItem('notificationcheckbox', checkbox2.checked);
    Lodding.style.display = "flex";
    setTimeout(function () {
        window.location.reload();
    }, 3000);
});

if (localStorage.getItem('checkboxChecked') === 'true') {
    CSSLinker.href = "CSS/Light.css";
}

if (localStorage.getItem('checkboxChecked') === 'false') {
    CSSLinker.href = "CSS/Dark.css";
}

function updateDateHeading() {
    let days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let formattedDate = days[day] + ',  ' + today.getFullYear() + '/' + months[month] + '/' + today.getDate();
    let dateHeading = document.getElementById('dateHeading');
    dateHeading.textContent = formattedDate;
}
updateDateHeading();

fileInput.addEventListener('change', function (e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let imageUrl = e.target.result;
        selectedImage.src = imageUrl;
        localStorage.setItem('savedImage', imageUrl);
        localStorage.setItem('YourImage', "true");
        setTimeout(function () {
            window.location.reload();
        }, 300);
    }
    reader.readAsDataURL(file);
});

if (savedImageUrl) {
    selectedImage.src = savedImageUrl;
    massageImage.src = savedImageUrl;
}

if (window.localStorage.getItem("YourImage") === "true") {
    FileinputLabel.style.backgroundColor = "transparent";
    FileinputLabel.style.color = "transparent";
} else {
    FileinputLabel.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    FileinputLabel.style.color = "rgba(14 16 25)";
}

MenuBtnMatchHeader.onclick = function () {
    MatchHeaderBox.style.display = "flex";
}

WadgetBtn.onclick = function () {
    MatchHeaderBox.style.display = "none";
    SettingMassage.style.top = "40px";
    setTimeout(function () {
        SettingMassage.style.top = "-40px";
    }, 2000)
}

WadgetBtnClose.onclick = function () {
    MatchHeaderBox.style.display = "none";
}

languageBtn.onclick = function () {
    languagebox.style.display = "block";
}

languageBtnclose.onclick = function () {
    languagebox.style.display = "none";
}

function changeLanguage(language) {
    const heading = document.getElementById('heading');
    if (language === 'arabic') {
        heading.innerText = 'السلام عليكم';
    } else if (language === 'english') {
        heading.innerText = 'Hello';
    }
    localStorage.setItem('languageChoice', language);
}
const savedChoice = localStorage.getItem('languageChoice');
if (savedChoice) {
    const radio = document.querySelector(`input[value="${savedChoice}"]`);
    if (radio) {
        radio.checked = true;
        changeLanguage(savedChoice);
    }
}

FontSizeBtn.onclick = function () {
    FontSizebox.style.display = "block";
}

FontSizeBtnclose.onclick = function () {
    FontSizebox.style.display = "none";
}

function bigfont() {
    document.body.style.fontSize = "20px";
    FontSizebox.style.display = "none";
    window.localStorage.setItem("bigfont", "true")
    window.localStorage.setItem("normalfont", "false")
    window.localStorage.setItem("smallfont", "false")
    biginput.checked = true;
    Lodding.style.display = "flex";
    setTimeout(function () {
        window.location.reload();
    }, 3000);
}

function normalfont() {
    document.body.style.fontSize = "15px";
    FontSizebox.style.display = "none";
    Lodding.style.display = "flex";
    normalinput.checked = true;
    window.localStorage.setItem("bigfont", "false")
    window.localStorage.setItem("normalfont", "true")
    window.localStorage.setItem("smallfont", "false")
    setTimeout(function () {
        window.location.reload();
    }, 3000);
}

function smallfont() {
    document.body.style.fontSize = "12px";
    FontSizebox.style.display = "none";
    smallinput.checked = true;
    Lodding.style.display = "flex";
    window.localStorage.setItem("bigfont", "false")
    window.localStorage.setItem("normalfont", "false")
    window.localStorage.setItem("smallfont", "true")
    setTimeout(function () {
        window.location.reload();
    }, 3000);
}

if (window.localStorage.getItem("bigfont") === "true") {
    document.body.style.fontSize = "20px";
    biginput.checked = true;
} else if (window.localStorage.getItem("normalfont") === "true") {
    document.body.style.fontSize = "15px";
    normalinput.checked = true;
} else if (window.localStorage.getItem("smallfont") === "true") {
    document.body.style.fontSize = "12px";
    smallinput.checked = true;
} else {
    document.body.style.fontSize = "15px";
}


document.getElementById('capyweblinkbtn').addEventListener('click', function () {
    const textToCopy = 'https://loginweb11.github.io/contest/';
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            capeweblinkmassage.style.top = "40px";
            setTimeout(function () {
                capeweblinkmassage.style.top = "-40px";
            }, 2000)
        })
        .catch(err => {
            alert("فشل عملية النسخ حاول مره اخري");
        });
});

contactmeboxbtn.onclick = function () {
    contactmebox.style.display = "flex";
}
contactmeboxClose.onclick = function () {
    contactmebox.style.display = "none";
}

document.getElementById('capynumber').addEventListener('click', function () {
    const textToCopy = '01095077036';
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            contactmebox.style.display = "none";
            capeweblinkmassage.style.top = "40px";
            setTimeout(function () {
                capeweblinkmassage.style.top = "-40px";
            }, 2000)
        })
        .catch(err => {
            alert("فشل عملية النسخ حاول مره اخري");
        });
});

ratewebsitebtn.onclick = function () {
    ratewebsite.style.display = "flex";
}

ratewebsiteClose.onclick = function () {
    ratewebsite.style.display = "none";
    starone.style.color = "rgba(191 195 212)";
    startwo.style.color = "rgba(191 195 212)";
    starthree.style.color = "rgba(191 195 212)";
    starfour.style.color = "rgba(191 195 212)";
    starfive.style.color = "rgba(191 195 212)";
}
ratewebsiteCloseS.onclick = function () {
    ratewebsite.style.display = "none";
    ratewebsitemassage.style.top = "40px";
    starone.style.color = "rgba(191 195 212)";
    startwo.style.color = "rgba(191 195 212)";
    starthree.style.color = "rgba(191 195 212)";
    starfour.style.color = "rgba(191 195 212)";
    starfive.style.color = "rgba(191 195 212)";
    setTimeout(function () {
        ratewebsitemassage.style.top = "-40px";
    }, 2000)
}

starone.onclick = function () {
    starone.style.color = "rgba(57 219 191)";
    startwo.style.color = "rgba(191 195 212)";
    starthree.style.color = "rgba(191 195 212)";
    starfour.style.color = "rgba(191 195 212)";
    starfive.style.color = "rgba(191 195 212)";
}

startwo.onclick = function () {
    startwo.style.color = "rgba(57 219 191)";
    starone.style.color = "rgba(57 219 191)";
    starthree.style.color = "rgba(191 195 212)";
    starfour.style.color = "rgba(191 195 212)";
    starfive.style.color = "rgba(191 195 212)";
}

starthree.onclick = function () {
    starthree.style.color = "rgba(57 219 191)";
    startwo.style.color = "rgba(57 219 191)";
    starone.style.color = "rgba(57 219 191)";
    starfour.style.color = "rgba(191 195 212)";
    starfive.style.color = "rgba(191 195 212)";
}

starfour.onclick = function () {
    starthree.style.color = "rgba(57 219 191)";
    startwo.style.color = "rgba(57 219 191)";
    starone.style.color = "rgba(57 219 191)";
    starfour.style.color = "rgba(57 219 191)";
    starfive.style.color = "rgba(191 195 212)";
}

starfive.onclick = function () {
    starthree.style.color = "rgba(57 219 191)";
    startwo.style.color = "rgba(57 219 191)";
    starone.style.color = "rgba(57 219 191)";
    starfour.style.color = "rgba(57 219 191)";
    starfive.style.color = "rgba(57 219 191)";
}

SignOut.onclick = function () {
    window.localStorage.clear();
    window.location.reload();
}

AddMassageBtn.onclick = function () {
    AddMassageBox.style.display = "flex";
}

Massageclosebtnfull.onclick = function () {
    AddMassageBox.style.display = "none";
}

Massageclosebtn.onclick = function () {
    AddMassageBox.style.display = "none";
}