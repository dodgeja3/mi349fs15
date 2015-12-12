document.getElementById("homeButton").onclick = function () {
    location.href = "http://dodgeja3.github.io/FInalSite.html";
};

document.getElementById("resumeButton").onclick = function () {
    location.href = "http://dodgeja3.github.io/ResumePage.html";
};

document.getElementById("gitHubButton").onclick = function () {
    location.href = "https://github.com/dodgeja3";
};

document.getElementById("contactButton").onclick = function () {
    location.href = "http://dodgeja3.github.io/ContactPage.html";
};

document.getElementById("socialMediaButton").onclick = function () {
    location.href = "http://dodgeja3.github.io/SocialMediaPage.html";
};



$('.navToggle').on('click', function() {
	 $('div').toggleClass('show-navbar');
});

$('.portfolioToggle').on('click', function() {
	 $('div').toggleClass('show-portfolio');
});
