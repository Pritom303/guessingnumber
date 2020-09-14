let start_btn=document.getElementById("start");
start_btn.addEventListener("click",function(){
    let result=document.getElementById("result");
    result.style.color="purple";
    result.innerHTML="Wait for a while.";
    setTimeout(() => {
        //Taking the range
    let min=10,max=20;
    
    let result=document.getElementById("result");
    result.innerHTML="";
    
    var lose=false; 
    
    //Generate a random number between range
    const random_number=Math.floor(Math.random()*(max-min+1)+min);
    
    //Prompt Message
    var msg="Enter a number.";
    for(let i=0;i<3;i++){
        var a=prompt(msg);
        a=parseInt(a);
        
        if(isNaN(a)==true){
            result.innerHTML="You have entered an invalid value."; 
            result.style.color="red";    
            break;
        }
        else if(a>20 || a<10){
            result.innerHTML="Your entered value is out of range.";
            result.style.color="red";
            break;
        }
       
        else if(a>random_number){
            msg="Your entered number is greater than the correct answer.Try Again.";
            lose=true;
        }
        else if(a<random_number){
            msg="Your entered number is lesser than the correct answer.Try Again.";
            lose=true;
        }
        else {
            result.innerHTML="You Won.";
            result.style.color="green";
            lose=false;
            break;
        }
         
    }
    
    
    if(lose==true){
        result.innerHTML="You Lose.Correct answer is "+random_number;
        result.style.color="red";
    }
    
    
    }, 2000);
});
