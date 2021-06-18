//select elements
let countSpan=document.querySelector(".quiz-info .que-count span");
let bulletsContainer=document.querySelector(".bullets .spans");










function getquestions(){
    let request = new XMLHttpRequest();
     request.onreadystatechange=function (){
        
         if(this.readyState === 4 && this.status === 200){
             console.log(this.responseText);
             let thequestions=JSON.parse(this.responseText);
             let questionsCount=thequestions.length;
             
             console.log(thequestions);
             console.log(questionsCount);
             createbullets(questionsCount);

         }
     };
    request.open("GET","quiz.json",true);
    request.send();
}
 getquestions()


 function createbullets(num){
     countSpan.innerHTML=num;
    //create bullets
    for (let i=0;i<num;i++){
        //create span
        let theBullet=document.createElement("span");
        if(i===0){
            theBullet.className="on";
        }
        bulletsContainer.appendChild(theBullet);
    }

 }

