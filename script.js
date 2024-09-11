function myfun(){
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value 
    if (username=="admin" && password=="admin"){
        window.location="home.html"
    }
    else{
        document.getElementById('para').innerHTML="Invalid"
    }
}