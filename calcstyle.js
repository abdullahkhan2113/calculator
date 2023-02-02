function calc(){
    var opr1=document.getElementById('first').value;
    var opr2=document.getElementById('second').value;
    var opt=document.getElementById('opt').value;
    
    if(opt=='"Plus"'){
        var res=parseInt(opr1)+parseInt(opr2)
    }
    if(opt=='"Minus"'){
        var res=parseInt(opr1)-parseInt(opr2)
    }
    if(opt=='"Multiply"'){
        var res=parseInt(opr1)*parseInt(opr2)
    }
    if(opt=='"Devide"'){
        var res=parseInt(opr1)/parseInt(opr2)
    }
    var res= document.getElementById('result').value=res;
}

function act(){
    var act=document.getElementById('opt').value;
    act=document.getElementById('active').innerHTML='Selected Operator Is '+ act
}