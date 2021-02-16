import db from './db.js'

window.register = (data)=>{

    const {username, email, phone, address, birthday, age} = data

    db.transaction(function (tx) {
        //   tx.executeSql('CREATE TABLE IF NOT EXIST foo (id unique, text)');
        tx.executeSql('CREATE TABLE users (username unique, email unique, phone, address, birthday, age)');
        //   tx.executeSql('DROP TABLE users');

    });

    db.transaction(function async (tx) {
        tx.executeSql(`INSERT INTO users (username , email, phone, address, birthday, age) VALUES("${username}", "${email}", "${phone}", "${address}", "${birthday}", "${age}")`,[], (tx, result)=>{
            if(result.rowsAffected === 1){
                console.log('registrasi berhasil')
                console.log(result)
                return result.rowsAffected
            }else{
                console.log('error');
                return result.rowsAffected
            }
            
        });
    });
}

window.getAllUsers = ()=>{
    
    db.transaction((tx)=>{
        tx.executeSql(`SELECT * FROM users`,[],(tx, result)=>{
            console.log(result.rows)
        })
    })
}


//buat sebuah method/function
window.handleSubmit = (event)=>{
    //kita buat form static
    event.preventDefault()

    //tangkap nilai input dari user
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value
    let birthday = document.getElementById('birthday').value
    
    let data = {
    username : username,
    email : email,
    phone : phone,
    address : address,
    birthday : birthday,
    age : 2021 - parseInt(birthday.split("-")[0]) + " Years Old"
        }

    //check if localStorage availablel
        
    register(data)
  
    // window.location.reload()

}

const storeToLocal = async (data)=>{
    const isStoredData = localStorage.getItem('data')
    if(isStoredData){
        let prevData = localStorage.getItem('data')
        let ps = JSON.parse(prevData)
        ps.push(data)
        localStorage.setItem('data', JSON.stringify(ps))
        // console.log(localStorage.getItem('data'))
        // window.location.reload()

    }else{
        localStorage.setItem('data',JSON.stringify([data]))
        console.log(localStorage.getItem('data'))
        // window.location.reload()

    }
}