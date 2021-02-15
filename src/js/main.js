
//buat sebuah method/function
const handleSubmit = (event)=>{
    //kita buat form static
    event.preventDefault()

    //tangkap nilai input dari user
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value
    let birthday = document.getElementById('birthday').value

    console.log(`
username : ${username}
email : ${email}
phone : ${phone}
address : ${address}
birthday : ${birthday}
age : ${2021 - parseInt(birthday.split("-")[0]) + " Years Old"}
    `)
}

