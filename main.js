
var count= 1;
var point1=0;
var point2=0;
var flag=false;
let time;
var player1= document.getElementById('pla1').value;
console.log(player1);
var player2= document.getElementById('pla2').value;
console.log(player2);

function point(){
    document.getElementById('p1').innerHTML=point1;
    document.getElementById('p2').innerHTML=point2;
}

function update(){
    document.getElementById('play1').innerHTML= player1 +": O";
    document.getElementById('play2').innerHTML= player2 +": X";
}

function value(box){
    if( document.getElementById(box).innerHTML=='' && count%2!=0 && count<=9 ){
        document.getElementById(box).innerHTML="O";
        check(box);
        if(flag==true){
        point1+=1;
        point();
        setTimeout(win,500,"Player1");
        
        }
        count+=1;
    }

    else if(  document.getElementById(box).innerHTML=='' && count%2==0 && count<=9){
        document.getElementById(box).innerHTML="X";
        check(box);
        if(flag==true){
        point2+=1;
        point();
        setTimeout(win,500,"Player2");
        }
        count+=1;
    }
    
     if(count>9 && flag==false){
      time= setTimeout(reloadW ,800);
    }
}

function reloadW(){
    alert("GAME DRAW");
        document.getElementById('b1').innerHTML='';
        document.getElementById('b2').innerHTML='';
        document.getElementById('b3').innerHTML='';
        document.getElementById('b4').innerHTML='';
        document.getElementById('b7').innerHTML='';
        document.getElementById('b5').innerHTML='';
        document.getElementById('b6').innerHTML='';
        document.getElementById('b9').innerHTML='';
        document.getElementById('b8').innerHTML='';
    count=1;
    flag= false;
}
function reset(){
    if(point1 >point2){
        alert("Player 1"+" WIN");
    }
    else if(point1 < point2){
        alert("Player 2"+" WIN");
    }
    else{
        alert("GAME DRAW");
    }
    
    location.reload();
    count=1;
    flag= false;
    point1=0;
    point2=0;
}

function win(player){
    alert("Win "+player);
        document.getElementById('b1').innerHTML='';
        document.getElementById('b2').innerHTML='';
        document.getElementById('b3').innerHTML='';
        document.getElementById('b4').innerHTML='';
        document.getElementById('b7').innerHTML='';
        document.getElementById('b5').innerHTML='';
        document.getElementById('b6').innerHTML='';
        document.getElementById('b9').innerHTML='';
        document.getElementById('b8').innerHTML='';
    count=1;
    flag= false;
}

function check(box){
    if(box == 'b1'){
        var v1=document.getElementById('b1').innerHTML;
        var v2=document.getElementById('b2').innerHTML;
        var v3=document.getElementById('b3').innerHTML;
        var v4=document.getElementById('b4').innerHTML;
        var v7=document.getElementById('b7').innerHTML;
        var v5=document.getElementById('b5').innerHTML;
        var v9=document.getElementById('b9').innerHTML;
        if((v1==v2 && v1==v3) || (v1==v4 && v1==v7)|| (v1==v5 && v1==v9)){
            flag=true;
            return;
        }
    }
    
    else if(box == 'b2'){
        var v1=document.getElementById('b1').innerHTML;
        var v2=document.getElementById('b2').innerHTML;
        var v3=document.getElementById('b3').innerHTML;   
        var v5=document.getElementById('b5').innerHTML;
        var v8=document.getElementById('b8').innerHTML;
        if((v2==v1 && v2==v3) || (v2==v5 && v2==v8)){
            flag=true;
            return;
        }
    }
    else if(box == 'b3'){
        var v1=document.getElementById('b1').innerHTML;
        var v2=document.getElementById('b2').innerHTML;
        var v3=document.getElementById('b3').innerHTML;
        var v6=document.getElementById('b6').innerHTML;
        var v7=document.getElementById('b7').innerHTML;
        var v5=document.getElementById('b5').innerHTML;
        var v9=document.getElementById('b9').innerHTML;
        if((v3==v1 && v2==v3) || (v3==v5 && v3==v7) || (v3==v6 && v3==v9)){
            flag=true;
            return;
        }
    }
    else if(box == 'b4'){
        var v1=document.getElementById('b1').innerHTML;
        var v4=document.getElementById('b4').innerHTML;
        var v7=document.getElementById('b7').innerHTML;
        var v6=document.getElementById('b6').innerHTML;   
        var v5=document.getElementById('b5').innerHTML;
        if((v4==v1 && v4==v7) || (v4==v5 && v4==v6)){
            flag=true;
            return;
        }
    }
    else if(box == 'b5'){
        var v1=document.getElementById('b1').innerHTML;
        var v2=document.getElementById('b2').innerHTML;
        var v3=document.getElementById('b3').innerHTML;
        var v4=document.getElementById('b4').innerHTML;
        var v7=document.getElementById('b7').innerHTML;
        var v5=document.getElementById('b5').innerHTML;
        var v6=document.getElementById('b6').innerHTML;
        var v9=document.getElementById('b9').innerHTML;
        var v8=document.getElementById('b8').innerHTML;
        if((v5==v1 && v5==v9) || (v2==v5 && v5==v8) || (v5==v3 && v5==v7) || (v5==v4 && v5==v6)){
            flag=true;
            return;
        }
    }
    else if(box == 'b6'){
        var v4=document.getElementById('b4').innerHTML;
        var v3=document.getElementById('b3').innerHTML;
        var v6=document.getElementById('b6').innerHTML;
        var v9=document.getElementById('b9').innerHTML;   
        var v5=document.getElementById('b5').innerHTML;
        if((v6==v3 && v6==v9) || (v6==v5 && v6==v4)){
            flag=true;
            return;
        }
    }
    else if(box == 'b7'){
        var v1=document.getElementById('b1').innerHTML;
        var v8=document.getElementById('b8').innerHTML;
        var v3=document.getElementById('b3').innerHTML;
        var v4=document.getElementById('b4').innerHTML;
        var v7=document.getElementById('b7').innerHTML;
        var v5=document.getElementById('b5').innerHTML;
        var v9=document.getElementById('b9').innerHTML;
        if((v7==v1 && v7==v4) || (v7==v5 && v3==v7) || (v7==v8 && v7==v9)){
            flag=true;
            return;
        }
    }
    else if(box == 'b8'){
        var v7=document.getElementById('b7').innerHTML;
        var v2=document.getElementById('b2').innerHTML;
        var v9=document.getElementById('b9').innerHTML;   
        var v5=document.getElementById('b5').innerHTML;
        var v8=document.getElementById('b8').innerHTML;
        if((v8==v7 && v8==v9) || (v8==v5 && v2==v8)){
            flag=true;
            return;
        }
    }
    else if(box == 'b9'){
        var v1=document.getElementById('b1').innerHTML;
        var v8=document.getElementById('b8').innerHTML;
        var v3=document.getElementById('b3').innerHTML;
        var v6=document.getElementById('b6').innerHTML;
        var v7=document.getElementById('b7').innerHTML;
        var v5=document.getElementById('b5').innerHTML;
        var v9=document.getElementById('b9').innerHTML;
        if((v9==v1 && v9==v5) || (v9==v8 && v9==v7) || (v9==v3 && v9==v6)){
            flag=true;
            return;
        }
    }
    
}