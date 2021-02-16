
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
    let age = 2021 - birthday.split("-")[0]


    //kita akan check apakah cukup usia
    if(age >= 20 && age <= 35){
        alert("Terimakasih sudah mendaftar..")
    }else{
        alert("Usia kamu tidak sesuai..")
    }

    console.log(`
username : ${username}
email : ${email}
phone : ${phone}
address : ${address}
birthday : ${birthday}
age : ${2021 - parseInt(birthday.split("-")[0]) + " Years Old"}
    `)
}

