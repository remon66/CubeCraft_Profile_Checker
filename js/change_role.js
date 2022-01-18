function changeRole() {
    const frame = document.querySelector('.roleSelect')
    const role1 = document.querySelector('.role-1')
    const role2 = document.querySelector('.role-2')
    const name = document.querySelector('.name-input')
    const roles = document.querySelector('.roles')

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://raw.githubusercontent.com/KristN1/CubeCraft_Profile_Checker/main/js/roles.json", false );
    xmlHttp.send( null );
    let roleData = JSON.parse(xmlHttp.responseText)[frame.value];

    role2.style.backgroundColor = roleData["color"]
    role2.innerHTML = roleData["text"]
    name.style.color = roleData["color"]

    console.log(roleData)

    if (roleData["staff"] != null) {
        role1.style.display = "none";
    } else {
        role1.style.display = "flex";
    }

    if (roles.style.display === "none" || role1.style.display === "none") {
        roles.style.display = "flex"
    }
}