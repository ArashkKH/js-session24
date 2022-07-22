creatTable()
function creatTable(){
    let columns = prompt('Enter columns:')
    let rows= prompt('Enter rows:')

    for(i=1;i<=rows;i++){
        let addRow = document.createElement('div')
        document.getElementsByTagName('main')[0].appendChild(addRow)
        for(j=1;j<=columns;j++){
            let addCol = document.createElement('div')
            document.querySelector('main>div:nth-child('+i+')').    appendChild(addCol)
            document.querySelector('main>div:nth-child('+i+')   >div:nth-child('+j+')').innerHTML=i*j
        }
    }
}
function reset(){
    document.getElementsByTagName('main')[0].innerHTML=''
    creatTable()
}