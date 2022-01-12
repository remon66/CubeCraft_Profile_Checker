function checkBanner() {
    let banner = document.querySelector(".banner-image");
    let content_des = document.querySelector(".content-des");
    let profile = document.querySelector(".profile")

    if (banner.getAttribute('src') !== "") {
        console.log("empty")
    } else {
        content_des.style.backgroundColor = "transparent"
        profile.style.backgroundColor = "#313742"
    }
}

function changeBanner() {
    let content_des = document.querySelector(".content-des");
    let profile = document.querySelector(".profile")

    content_des.style.backgroundColor = ""
    profile.style.backgroundColor = "transparent"
}