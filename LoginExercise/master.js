let togglecount = 0
function togglepass(){
    let passbox = document.getElementById('password')
    if(togglecount%2==0){
        passbox.setAttribute('type','text')
    }else{
        passbox.setAttribute('type','password')
    }
    togglecount++
}

let Truepass = 'arash12345'
let attempt = 5

function loginAttempt(){
    if(attempt > 0){
        let username , password
        username = document.getElementById('username').value
        password = document.getElementById('password').value
        if(username != ''){
            if(password == Truepass){
                alert('Access granted, Welcome '+ username)
                attempt == 5
            }
            else{
                attempt--
                alert('Incorect Password. '+attempt+' attempts Left!')
            }
        }
        else{
            alert('No Username entered!')
        }
    }else{
        document.getElementsByTagName('button')[0].setAttribute('disabled',"")
        document.getElementsByTagName('button')[0].style.cursor='block'
    }
}