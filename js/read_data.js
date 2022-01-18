$(".json-input").change(function (event) {
    var uploadedFile = event.target.files[0];


    if (uploadedFile) {
        var readFile = new FileReader();
        readFile.onload = function (e) {
            if (e.target.result == null) {
                e.target.result == ""
            }
            var contents = e.target.result;
            var json = JSON.parse(contents);
            alert_data(json);
        };
        readFile.readAsText(uploadedFile);
    } else {
        console.log("Failed to load file");
    }
});

function alert_data(json) {
    let inputfield = document.querySelector(".name-input")
    let profile_pic = document.querySelector(".profile-picture")
    let banner = document.querySelector(".banner-image")
    let roles = [document.querySelector(".role-1"), document.querySelector(".role-2")]
    let description = document.querySelector(".des-content")
    let content_des = document.querySelector(".content-des")

    let rolesContainer = document.querySelector(".roles")

    rolesContainer.style.display = "flex"
    roles[0].style.display = "flex"

    let stats = [
        document.querySelector(".messages"),
        document.querySelector(".featured-content"),
        document.querySelector(".reaction-score"),
        document.querySelector(".points"),
        document.querySelector(".joined-at"),
        document.querySelector(".last-seen"),
    ]

    inputfield.value = json.name.text;
    inputfield.style.color = json.name.color;

    profile_pic.src = json.avatar;

    if (json.banner != null) {
        banner.style.display = ""
        banner.src = json.banner;
        content_des.style.backgroundColor = ""
    } else {
        content_des.style.backgroundColor = "transparent"
        banner.style.display = "none"
    }

    if (json.badges != null) {
        roles[1].style.backgroundColor = json.name.color;
        roles[1].innerHTML = json.badges[1];
    } else {
        rolesContainer.style.display = "none"
    }

    description.innerHTML = json.description.title + " · " + json.description.text;

    stats[0].innerHTML = json.stats.messages;
    stats[1].innerHTML = json.stats.featured_content;
    stats[2].innerHTML = json.stats.reaction_score;
    stats[3].innerHTML = json.stats.points;
    stats[4].innerHTML = json.stats.joined_at;
    stats[5].innerHTML = json.stats.last_seen;
}