function checkBanner() {
    let banner = document.querySelector(".banner-image");
    let content_des = document.querySelector(".content-des");

    if (banner.getAttribute('src') !== "") {
        console.log("empty")
    } else {
        content_des.style.backgroundColor = "transparent"
    }
}

function changeBanner() {
    let content_des = document.querySelector(".content-des");
    content_des.style.backgroundColor = ""
}