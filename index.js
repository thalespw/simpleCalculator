function outcome() {
    let num1 = Number(document.getElementById('num-one').value) 
    let num2 = Number(document.getElementById('num-two').value) 
    let res = 0

    if (document.getElementById('box1').checked) 
        res = num1 + num2
        else if (document.getElementById('box2').checked)
            res = num1 - num2
        else if (document.getElementById('box3').checked)
            res = num1 * num2
        else if (document.getElementById('box4').checked)
            res = num1 / num2
    
    


    
    document.getElementById('resultArea').innerHTML = String(res)
}


