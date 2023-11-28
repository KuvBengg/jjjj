var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.localtion.href = '../index.html';
}

function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://www.mecallapi.com/api/login")
    xhttp.setRequestHeader("Conten-Type","application/json;charset=UFT-8");
    xhttp.send(JSON.stringify({
        "username":username,
        "password":password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
        }
    }
}