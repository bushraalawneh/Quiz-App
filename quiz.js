//select elements
let countSpan=document.querySelector(".quiz-info .que-count span");
let bulletsContainer=document.querySelector(".bullets .spans");
let thebullet=document.querySelector(".bullets");
let quizArea=document.querySelector(".quiz-area");
let answersArea=document.querySelector(".answers-area");
let theSubmitDiv=document.querySelector(".submit");
let theResult=document.querySelector(".que-res");
let countDown=document.querySelector(".countdown");
let mathbutton=document.querySelector(".section .math");
let physicsbutton=document.querySelector(".section .physics");
let htmlbutton=document.querySelector(".section .html");
 let sum=5; 
 let currentIndex=0;
 let i=0;
 let x=0; 
 let q;
 let TheCorrectAnswers=0;
 let theButton;
 mathbutton.addEventListener('click', function getquestions() {
    let request = new XMLHttpRequest();
     request.onreadystatechange=function (){
        
         if(this.readyState === 4 && this.status === 200){
             //console.log(this.responseText);
             let thequestions=JSON.parse(this.responseText);
             let questionsCount=thequestions.length;
             let qAr=Array.from({length:questionsCount},(i,y)=>y);
             //console.log(qAr);
              newArray=randomQ(qAr,sum);
              console.log("currentindex:",newArray);
              q=newArray[x];
              console.log("q:",q);

             //console.log(thequestions);
             //console.log(thequestions[currentIndex].title)
             //console.log("math:",questionsCount);
             createbullets(sum);
             addQuestion(thequestions[q],sum);
             submitbutton();
             countdown(4,sum);
             physicsbutton.setAttribute('disabled', true);
             htmlbutton.setAttribute('disabled', true);
             mathbutton.setAttribute('disabled', true);

             theButton.onclick = ()=>{
                 if(x < sum){
                     let theRightAnswer=thequestions[q].correct;
                 checkAnswers(theRightAnswer,sum);
                 x++;
                 q=newArray[x];
                 quizArea.innerHTML="";
                 answersArea.innerHTML="";
                 addQuestion(thequestions[q],sum);
                 handlebullets(x,sum);
                 showresult(sum);
                 clearInterval(countDownInterval);
                 countdown(4,sum-1);
                  

             }
  }              
         }
     };
    request.open("GET","quiz.json",true);
    request.send();
 });
 physicsbutton.addEventListener('click', function getquestions() {
    let request = new XMLHttpRequest();
     request.onreadystatechange=function (){
        
         if(this.readyState === 4 && this.status === 200){
             //console.log(this.responseText);
             let thequestions=JSON.parse(this.responseText);
             let questionsCount=thequestions.length;
             let qAr=Array.from({length:questionsCount},(i,y)=>y);
             //console.log(qAr);
              newArray=randomQ(qAr,sum);
              console.log("currentindex:",newArray);
              q=newArray[x];
              console.log("q:",q);

             //console.log(thequestions);
             //console.log(thequestions[currentIndex].title)
             //console.log("math:",questionsCount);
             createbullets(sum);
             addQuestion(thequestions[q],sum);
             submitbutton();
             countdown(4,sum);
             physicsbutton.setAttribute('disabled', true);
             htmlbutton.setAttribute('disabled', true);
             mathbutton.setAttribute('disabled', true);

             theButton.onclick = ()=>{
                 if(x < sum){
                     let theRightAnswer=thequestions[q].correct;
                 checkAnswers(theRightAnswer,sum);
                 x++;
                 q=newArray[x];
                 quizArea.innerHTML="";
                 answersArea.innerHTML="";
                 addQuestion(thequestions[q],sum);
                 handlebullets(x,sum);
                 showresult(sum);
                 clearInterval(countDownInterval);
                 countdown(4,sum-1);
                  

             }
  }              
         }
     };
    request.open("GET","physics.json",true);
    request.send();
 });
 htmlbutton.addEventListener('click', function getquestions() {
    let request = new XMLHttpRequest();
     request.onreadystatechange=function (){
        
         if(this.readyState === 4 && this.status === 200){
             //console.log(this.responseText);
             let thequestions=JSON.parse(this.responseText);
             let questionsCount=thequestions.length;
             let qAr=Array.from({length:questionsCount},(i,y)=>y);
             //console.log(qAr);
              newArray=randomQ(qAr,sum);
              console.log("currentindex:",newArray);
              q=newArray[x];
              console.log("q:",q);

             //console.log(thequestions);
             //console.log(thequestions[currentIndex].title)
             //console.log("math:",questionsCount);
             createbullets(sum);
             addQuestion(thequestions[q],sum);
             submitbutton();
             countdown(4,sum);
             physicsbutton.setAttribute('disabled', true);
             htmlbutton.setAttribute('disabled', true);
             mathbutton.setAttribute('disabled', true);

             theButton.onclick = ()=>{
                 if(x < sum){
                     let theRightAnswer=thequestions[q].correct;
                 checkAnswers(theRightAnswer,sum);
                 x++;
                 q=newArray[x];
                 quizArea.innerHTML="";
                 answersArea.innerHTML="";
                 addQuestion(thequestions[q],sum);
                 handlebullets(x,sum);
                 showresult(sum);
                 clearInterval(countDownInterval);
                 countdown(4,sum-1);
                  

             }
  }              
         }
     };
    request.open("GET","html.json",true);
    request.send();
 });

 
  function submitbutton(){
       theButton=document.createElement("button");
      theButton.className="submit-button";
      let text=document.createTextNode("submit");
      theButton.appendChild(text);
      theSubmitDiv.appendChild(theButton);
  }

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
    }}

 function addQuestion(obj,count){
     if (x < count){
         //create h2 question
     let questiontitle=document.createElement("h2");
     let qtext=document.createTextNode(obj.title);
     questiontitle.appendChild(qtext);
     quizArea.appendChild(questiontitle); 
     //create the answers
     for (let i = 1 ;i <= 4 ; i++){
         let mainDiv=document.createElement("div");
         mainDiv.className='answer';
         let radioInput=document.createElement("input");
         radioInput.type='radio';
         radioInput.name='answer';
         radioInput.id=`answer${i}`;
         radioInput.dataset.answer=obj[`answer${i}`];
         if(i===1) {
             radioInput.checked=true;
             
         }
         let labelinput=document.createElement("label");
         labelinput.htmlFor=`answer${i}`;
         let labelText=document.createTextNode(obj[`answer${i}`])
         labelinput.appendChild(labelText);
         mainDiv.appendChild(radioInput);
         mainDiv.appendChild(labelinput);
         answersArea.appendChild(mainDiv);
     }
   }
     }
     
       function checkAnswers(righrAnswer,count){
           let theAnswers=document.getElementsByName("answer");
           let theChoosen;
           for(let i=0;i<4 ;i++){
               if(theAnswers[i].checked){
                   theChoosen=theAnswers[i].dataset.answer;
                   //console.log(theChoosen);
                   //console.log(righrAnswer);
                   if(righrAnswer===theChoosen){
                       TheCorrectAnswers++;
                       
                       
                
                   }
               }
               

           }
       }
       function handlebullets(index,count){
           if( x < count){ 
               if(x == index){
               let thespans=document.querySelectorAll(".bullets .spans span");
               thespans[index].className="on";
       }}

          }
        function  showresult(count){
            let result;
            if(currentIndex === count){
                 
                quizArea.remove();
                answersArea.remove();
                thebullet.remove();
                theButton.remove();
                if (TheCorrectAnswers > (count/2) && TheCorrectAnswers < count) {
                    
                    result=` YOU ARE <span class="good">GOOD</span> YOU ANSWERED ${TheCorrectAnswers} OUT OF ${count}`
                }
            
                else if ( TheCorrectAnswers < (count/2)) {
                    
                    result=` YOU ARE <span class="bad">BAD</span> YOU ANSWERED ${TheCorrectAnswers} OUT OF ${count}`
                   
                }
                
                else {
                    result=` YOU ARE <span class="perfect" >PERFECT</span> YOU ANSWERED ${TheCorrectAnswers} OUT OF ${count}`
                    
                }

                theResult.innerHTML= result;
                theResult.style.margin= "20px 10px";
                 theResult.style.padding="10px"
                theResult.style.backgroundColor="white"
                }
                
            }
            function countdown(duration,count){
                if (x < count){
                    countDownInterval=setInterval(function(){
                    let minutes= parseInt(duration / 60);
                    let seconds= parseInt(duration % 60);
                    minutes <10 ?minutes=`0${minutes}` :minutes=minutes;
                     seconds <10 ?seconds=`0${seconds}` :seconds=seconds;   
                    
                    countDown.innerHTML=`${minutes}:${seconds}`
                    duration--;
                    if (duration<0){
                        clearInterval(countDownInterval);
                        theButton.click();
                    }
                    },1000)
                }
                
            }
             function randomQ(arr,sum){
                 let newArray=[];
                 let x;
                 while(sum> newArray.length ){
                     x=Math.floor(Math.random()*sum);
                     if(newArray.includes(x)==false){
                         newArray.push(x)
                
                     } 
                 }
                 return newArray;
                }
                
                


             

            
               