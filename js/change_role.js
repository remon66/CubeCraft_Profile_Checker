function changeRole(){
    const frame = document.querySelector('.roles')
    const role = document.querySelector('.role-2')
    const name = document.querySelector('.name-input')

    if(frame.value === "Admin"){
        role.style.backgroundColor = "#3AA9FF"
        role.innerHTML = "Admin Team"
    }
}