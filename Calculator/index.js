function insert(number){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + number;
}

function clean(){
    document.getElementById('result').innerHTML = '';
}

function back(){
    var del = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = del.substring(0, del.length -1)
}

function calcular(){
    var resultado = document.getElementById('result').innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('result').innerHTML = "nothing ..."
    }
}

