function changeRole() {
    const frame = document.querySelector('.roleSelect')
    const role1 = document.querySelector('.role-1')
    const role2 = document.querySelector('.role-2')
    const name = document.querySelector('.name-input')
    const roles = document.querySelector('.roles')

    if (roles.style.display === "none") {
        roles.style.display = ""
    }
    if(role1.style.display === "none"){
        roles.style.display = ""
    }

    if (frame.value === "Admin") {
        role2.style.backgroundColor = "#3AA9FF"
        role2.innerHTML = "💙 Admin Team"
    }
    if (frame.value === "Moderator") {
        role2.style.backgroundColor = "#FFAA00"
        role2.innerHTML = "🔨 Moderator"
    }
    if (frame.value === "Senior Moderator") {
        role2.style.backgroundColor = "#FFC44D"
        role2.innerHTML = "🛠️ Sr. Moderator"
    }
    if (frame.value === "Senior Translator") {
        role2.style.backgroundColor = "#F92C34"
        role2.innerHTML = "🌐 Sr. Translator"
    }
    if (frame.value === "Translator") {
        role2.style.backgroundColor = "#AA0000"
        role2.innerHTML = "🌍 Translator"
    }
    if (frame.value === "Designer") {
        role2.style.backgroundColor = "#00AAAA"
        role2.innerHTML = "🎨 Designer"
    }
    if (frame.value === "Senior Designer") {
        role2.style.backgroundColor = "#00FFFF"
        role2.innerHTML = "🖌️ Sr. Designer"
    }
    if (frame.value === "Developer") {
        role2.style.backgroundColor = "#6BBA64"
        role2.innerHTML = "💻 Developer"
    }
    if (frame.value === "Quality Assurance") {
        role2.style.backgroundColor = "#9B59B6"
        role2.innerHTML = "🧪 Quality Assurance"
    }
    if (frame.value === "Customer Support") {
        role2.style.backgroundColor = "#7CC3E0"
        role2.innerHTML = "💌 Customer Support"
    }
    if (frame.value === "Helper") {
        role2.style.backgroundColor = "#FA53FA"
        role2.innerHTML = "🙌 Helper"
    }
    if (frame.value === "Content Creator") {
        role2.style.backgroundColor = "#FF0071"
        role2.innerHTML = "🎥 Content Creator"
        role1.style.display = "none"
    }
    if (frame.value === "Member") {
        role2s.style.display = "none";
        console.log("sdphgueaiohoviaerhveahrypuvi")
    }
}