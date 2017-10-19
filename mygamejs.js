var scores,activePlayer,roundScore,game;


init();  
//console.log(dice);

//document.querySelector('#current-'+activePlayer).textContent=dice;

//adding eventListener for click on 'ROLL BUTTON'.

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(game){
        
    //roll dice
    var dice=Math.ceil(Math.random()*6);
    
    //display result
   var diceDOM=document.querySelector('.dice');
   diceDOM.style.display='block';
   diceDOM.src='dice-'+dice+'.png';
    
    var tempDOM=document.getElementById('current-'+activePlayer);
    if(dice=='1'){
        setTimeout(next,700);
    }
    else{
        roundScore+=dice;
        tempDOM.textContent=roundScore;
        /*MY WAY--------------------------------
        var sum=new Number(tempDOM.textContent);
        sum+=new Number(dice);
        tempDOM.textContent=sum;
        console.log(sum);
        --------------------------------MY WAY*/
    }
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(game){
    /*MY WAY--------------------------------
    var tempDOM=document.getElementById('current-'+activePlayer);
    var temp=new Number(tempDOM.textContent);
    var temp2=new Number(document.getElementById('score-'+activePlayer).textContent);
    temp2+=temp;
    document.getElementById('score-'+activePlayer).textContent=temp2;
    
    if(temp2>=100){
        document.getElementById('name-'+activePlayer).textContent='WINNER!';
    }
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    document.querySelector('.dice').style.display='none';
    --------------------------------MY WAY*/
    scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=50){
        document.getElementById('name-'+activePlayer).textContent='WINNER!'
        document.querySelector('.dice').style.display='none';
        //document.querySelector('.player-'+activePlayer+'-panel').classList.add('player-name');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        game=false;
    }
    else{
        next();
    }
    }
});
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    roundScore=0;
    scores=[0,0];
    activePlayer=0;
    game=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;  
    document.getElementById('name-0').textContent='p-One';  
    document.getElementById('name-1').textContent='p-Two'; 
    //document.querySelector('.player-0-panel').classList.remove('player-name');
    //document.querySelector('.player-1-panel').classList.remove('player-name');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
function next(){
    document.getElementById('current-'+activePlayer).textContent=0;
    roundScore=0;
    activePlayer=(activePlayer+1)%2;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}
