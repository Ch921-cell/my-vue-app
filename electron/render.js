console.log('render')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById("btn3")
const input = document.getElementById('input')


btn1.onclick = () =>{
    alert(myAPI.version)
}

btn2.onclick =()=>{
    myAPI.saveFile(input.value)
}

btn3.onclick = async() => {
    let res = await myAPI.readFile()
    alert(res)
}