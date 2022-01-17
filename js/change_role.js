function changeRole() {
    const frame = document.querySelector('.roleSelect')
    const role1 = document.querySelector('.role-1')
    const role2 = document.querySelector('.role-2')
    const name = document.querySelector('.name-input')
    const roles = document.querySelector('.roles')

    if (roles.style.display === "none") {
        roles.style.display = "flex"
    }
    if (role1.style.display === "none") {
        role1.style.display = "flex"
    }

    if (frame.value === "Admin") role2.style.backgroundColor = "#3AA9FF"; role2.innerHTML = "💙 Admin Team" ;name.style.color = "#3AA9FF"

    if (frame.value === "Moderator") {
        role2.style.backgroundColor = "#FFAA00"
        role2.innerHTML = "🔨 Moderator"
        name.style.color = "#FFAA00"
    }
    if (frame.value === "Senior Moderator") {
        role2.style.backgroundColor = "#FFC44D"
        role2.innerHTML = "🛠️ Sr. Moderator"
        name.style.color = "#FFC44D"
    }
    if (frame.value === "Senior Translator") {
        role2.style.backgroundColor = "#F92C34"
        role2.innerHTML = "🌐 Sr. Translator"
        name.style.color = "#F92C34"
    }
    if (frame.value === "Translator") {
        role2.style.backgroundColor = "#AA0000"
        role2.innerHTML = "🌍 Translator"
        name.style.color = "#AA0000"
    }
    if (frame.value === "Designer") {
        role2.style.backgroundColor = "#00AAAA"
        role2.innerHTML = "🎨 Designer"
        name.style.color = "#00AAAA"
    }
    if (frame.value === "Senior Designer") {
        role2.style.backgroundColor = "#00FFFF"
        role2.innerHTML = "🖌️ Sr. Designer"
        name.style.color = "#00FFFF"
    }
    if (frame.value === "Developer") {
        role2.style.backgroundColor = "#6BBA64"
        role2.innerHTML = "💻 Developer"
        name.style.color = "#6BBA64"
    }
    if (frame.value === "Quality Assurance") {
        role2.style.backgroundColor = "#9B59B6"
        role2.innerHTML = "🧪 Quality Assurance"
        name.style.color = "#9B59B6"
    }
    if (frame.value === "Customer Support") {
        role2.style.backgroundColor = "#7CC3E0"
        role2.innerHTML = "💌 Customer Support"
        name.style.color = "#7CC3E0"
    }
    if (frame.value === "Helper") {
        role2.style.backgroundColor = "#FA53FA"
        role2.innerHTML = "🙌 Helper"
        name.style.color = "#FA53FA"
    }
    if (frame.value === "Content Creator") {
        role2.style.backgroundColor = "#FF0071"
        role2.innerHTML = "🎥 Content Creator"
        role1.style.display = "none"
        name.style.color = "#FF0071"
    }
    if (frame.value === "Member") {
        roles.style.display = "none";
        console.log("sdphgueaiohoviaerhveahrypuvi")
        name.style.color = "#3D4B56"
    }
}