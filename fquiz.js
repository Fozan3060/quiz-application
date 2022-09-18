// all changing questions logic i have used eventlistener on buttons
const button1 =document.querySelectorAll('.qstart')[1]
const button2=document.querySelectorAll('.qstart')[2]
const button3=document.querySelectorAll('.qstart')[3]
const button4=document.querySelectorAll('.qstart')[4]
const para1=document.querySelectorAll('.qstart')[0]
// all questions logic as follows
const question2 = document.querySelector('.qstart2')
const question3 = document.querySelector('.qstart3')
const question4 = document.querySelector('.qstart4')
const question5 = document.querySelector('.qstart5')
// all questionsMCQS logic as follows WITH TOTAL CORRECT ANSWER AND WRONG 
const question2ans = document.querySelector('.qdiv2')
const question3ans = document.querySelector('.qdiv3')
const question4ans = document.querySelector('.qdiv4')
const question5ans = document.querySelector('.qdiv5')
const correctAnswers= document.querySelector('.correct')
const wrongAnswers= document.querySelector('.wrong')
const img=document.querySelector('.gameimg')
const body1= document.querySelector('.body1')
// indivisual correct correctAnswers of question
const q2 =document.getElementsByName('question2')[1]
const q3 =document.getElementsByName('question3')[0]
const q4 =document.getElementsByName('question4')[0]
const fq3=document.getElementsByName('question3')
const fq2 =document.getElementsByName('question2')
let totalq=0
let fotalq=0



button1.addEventListener('click', function() {
    button1.style.display='none'
    para1.style.display='none'
    question2.style.display='block'
    question2ans.style.display='block'
    body1.style.height='65vh'
    
})
button2.addEventListener('click',function() {
for(i=0;i<3;i++){
if(fq2[i].checked){
    question2.style.display='none'
    question2ans.style.display='none'
    question3.style.display='block'
    question3ans.style.display='block'
    body1.style.height='68vh'
    if(q2.checked===true){ totalq+=1}
    else {fotalq+=1}
     }}
    
})

button3.addEventListener('click',function() {
for(i=0;i<3;i++){
    if(fq3[i].checked){
         question3.style.display='none'
    question3ans.style.display='none'
    question4.style.display='block'
    question4ans.style.display='block'
    img.style.justifyContent='center'
    body1.style.height='70vh'
img.style.display='flex'
if(q3.checked===true){ totalq+=1} 
else {fotalq+=1}   
    }
}

})

button4.addEventListener('click',function() {
    for(i=0;i<3;i++){
        if(fq3[i].checked){
                 question4.style.display='none'
    question4ans.style.display='none'
    // question.style.display='block'
    question5ans.style.display='block'
    body1.style.height='45vh'
    img.style.display='none'   
if(q4.checked){totalq+=1}
else{fotalq+=1}
correctAnswers.innerHTML=totalq
wrongAnswers.innerHTML=fotalq
        }
    }
    
   

    

    

})

