var container=document.createElement("div");
container.classList.add("container");
var formHeading=document.createElement("h1");
formHeading.classList.add("f_heading");
formHeading.innerText="The Quiz App";
var counter;

var index=0;
var ansName;
var ansArray={};
var num;

var form=document.createElement("form");
form.method="post";
form.classList.add("form_div");

var questionDiv=document.createElement("div");
var myData=new XMLHttpRequest();
$.ajax({
         url: "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
         method: "GET",
       success: function (data) {
        myData=data;
        var count=1;
        var score=0;
        for (var i = 0; i < data.length; i++) 
        {
            var p=document.createElement("p");
            p.classList.add("para");
            p.innerText="Q"+count+"."+data[i].question;
            var arrOPtion=[];
            for(var j=0;j<data.length;j++)
            {
                arrOPtion[j]=(data[j].options);
            }
          
            var buttonDiv=document.createElement("div")
            buttonDiv.classList.add("radio_div");
            var idCounter=1;
        for( var j=0;j< arrOPtion.length-1;j++)
        {
             var optionDiv=document.createElement("div");
            optionDiv.classList.add("option_div");
          
            var optionBtn=document.createElement("input");
            var aLable=document.createElement("label");
            var btnId=""+count+idCounter;
            optionBtn.classList.add("radio_btn");
            optionBtn.type="radio";
            optionBtn.setAttribute("id", btnId);
            optionBtn.name="q"+count; 
            aLable.name= "q"+count;      
           
           
            aLable.setAttribute("for", btnId); 
            
            aLable.innerText=arrOPtion[i][j];
            
            optionDiv.append(optionBtn,aLable);
        
            buttonDiv.append(optionDiv);
        
            optionDiv.addEventListener("click",saveAnswer);
            idCounter++;
        }
       count++;
       var elem = document. createElement("hr");
        elem. setAttribute("width", "100%");
        elem.setAttribute("color","fad744");
        questionDiv.append(p,buttonDiv,elem);

           
    
        } 
       },
       error: function (error) {
         alert("Something went wrong, please try agian after sometime!");
       },
     });
     
     var btn=document.createElement("button");  
    btn.innerText="Submit";
    btn.classList.add("f_btn");
    btn.addEventListener("click",formValidation);
    form.append(questionDiv,btn);
     
function formValidation(e){
    e.preventDefault();
   
     score=0;
    var c=1;
    for(var a=0; a < 5 ;a++)
    {   
        var num=""+c+myData[a].answer;
        
        if(ansArray[a]==num)
        {
           score++;
        }
        c++;
   }
    
    scoreHeading.innerText=score+"/"+5;
   form.reset();
}

function saveAnswer(e){
       counter=e.target.name;
       
       ansName=e.target.id;
     
       switch(counter)
       {
            case "q1":
                ansArray[index]=ansName; 
            break;
            
            case "q2":
                ansArray[index+1]=ansName; 
            break;

            
            case "q3":
                ansArray[index+2]=ansName; 
            break;

            case "q4":
                ansArray[index+3]=ansName; 
            break;

            case "q5":
                ansArray[index+4]=ansName; 
            break;

        }
    
        
    }
var formDiv=document.createElement("div");
formDiv.classList.add("main_form_div");

var scoreDiv=document.createElement("div");
scoreDiv.classList.add("score_div");
var scoreHeading=document.createElement("span");
scoreHeading.innerText="0/5";
scoreHeading.setAttribute("id","score_heading");
scoreDiv.innerText="Score:"+"\n";
scoreDiv.append(scoreHeading);
formDiv.append(form,scoreDiv);
container.append(formHeading,formDiv);
document.body.append(container);



