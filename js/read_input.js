function readPfp(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        let profile_picture = document.querySelector(".profile-picture")

        reader.onload = function (e) {
            profile_picture.src = e.target.result
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readBanner(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        let banner = document.querySelector(".banner-image")

        reader.onload = function (e) {
            banner.src = e.target.result
        };

        reader.readAsDataURL(input.files[0]);
    }
}