let i,s,m,h,x,startbutton,flagcount,rec
i = s = m = h = flagcount = 0
// momment time with inderline
// memory time with dollar sign
let _i,_s,_m,_h , $i,$s,$m,$h
_i=_s=_m=_h=$i=$s=$m=$h = 0

startbutton = document.getElementsByClassName('start_puase')[0]


function start(){
    x = setInterval(mili,10)
    startbutton.innerHTML='<i class="bi bi-pause"></i>'
    startbutton.setAttribute('onclick','pause()')
}
function pause(){
    clearInterval(x)
    startbutton.innerHTML='<i class="bi bi-play-fill"></i>'
    startbutton.setAttribute('onclick','start()')
}
function reset(){
    clearInterval(x)
    startbutton.innerHTML='<i class="bi bi-play-fill"></i>'
    startbutton.setAttribute('onclick','start()')
    i=s=m=h=0
    document.getElementsByClassName('milis')[0].innerHTML='0'+i
    document.getElementsByClassName('second')[0].innerHTML='0'+s
    document.getElementsByClassName('minute')[0].innerHTML='0'+m
    document.getElementsByClassName('hour')[0].innerHTML='0'+h
    document.getElementsByClassName('record')[0].innerHTML=''
    flagcount = 0
    _i=_s=_m=_h=$i=$s=$m=$h=0
}

function flag(){
    flagcount++
    $i=i - _i; $s=s - _s; $m=m - _m; $h=h - _h
    _i=i; _s=s; _m=m; _h=h
    if($i<0){
        $s--
        $i = $i+100
    }
    if($s<0){
        $m--
        $s = $s+60
    }
    if($m<0){
        $h--
        $m = $m+60
    }
    
    rec = document.createElement('div')
    rec.setAttribute('class','col-4')
    rec.innerHTML=flagcount
    console.log(rec)
    document.getElementsByClassName('record')[0].appendChild(rec)
// --------------------------------
    rec = document.createElement('div')
    rec.setAttribute('class','col-4')
    rec.innerHTML=$h+":"+$m+":"+$s+"."+$i
    console.log(rec)
    document.getElementsByClassName('record')[0].appendChild(rec)
// --------------------------------
    rec = document.createElement('div')
    rec.setAttribute('class','col-4')
    rec.innerHTML=_h+":"+_m+":"+_s+"."+_i
    console.log(rec)
    document.getElementsByClassName('record')[0].appendChild(rec)


}



function mili(){
    i++
    if(i<10){
        document.getElementsByClassName('milis')[0].innerHTML='0'+i
    }else{
        document.getElementsByClassName('milis')[0].innerHTML=i
    }
    if(i==99){
        s++
        i=0
        if(s<10){
            document.getElementsByClassName('second')[0].innerHTML='0'+s
        }else{
            document.getElementsByClassName('second')[0].innerHTML=s
        }
    }
    if(s==59){
        m++
        s=0
        if(m<10){
            document.getElementsByClassName('minute')[0].innerHTML='0'+m
        }else{
            document.getElementsByClassName('minute')[0].innerHTML=m
        }
    }
    if(m==59){
        h++
        m=0
        if(h<10){
            document.getElementsByClassName('hour')[0].innerHTML='0'+h
        }else{
            document.getElementsByClassName('hour')[0].innerHTML=h
        }
    }

    
}