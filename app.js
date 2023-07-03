let sbtn = document.querySelector(".sbtn");

let response = document.querySelector(".response");

let firststart = document.querySelector(".firststart");

let randomtext = document.querySelector(".randomtext");

let textarea = document.querySelector("textarea");

let checkbtn = document.querySelector(".checkbtn");

let resultdiv = document.querySelector(".resultdiv");

let reset = document.querySelector(".reset")

let apikey = `ICmAlfuDID6Y0y56hXiupw==RF2150NowQIHRrZa`;



let apiurl = `https://api.api-ninjas.com/v1/quotes`;
   
let errorbox = document.querySelector(".errorbox");



const randomGen = async(api)=>{

randomtext.innerHTML = "data load please wait.."
let apirep =  await fetch(api, {
    headers:{'X-Api-Key': apikey}
}).then(resp=>resp.json()).then(function(res){
    show(res)
}).catch(function(er){
      
      error.style.display="block";
      errortext.innerHTML = "internet connection required";  
      quateres.innerHTML ="";
      authors.innerHTML="";
   
      
  });
  
  
  let data  = apirep.json();
  

}

let acurat;

 let d = randomGen(apiurl);
 
 
 
 const show = (result)=>{
    
    
    console.log(result[0]) 
     let {quote} = result[0];
     
 randomtext.innerHTML = quote;  
   
    acurat = quote.split(" ");
   
   let textarearesult = textarea.value.trim();
   
 
  
 }

sbtn.addEventListener("click", (t)=>{
 response.classList.add("show")
    firststart.style.display= "none";
    
})


var count=0;

var seen; 
 
 
 
 

textarea.addEventListener("focus", ()=>{


 
   
    seen =  setInterval(()=>{
      count++; 
    
      
      if(count == 59){
          clearInterval(seen);
          resultdiv.innerHTML = "timed out!"
     textarea.disabled = true;
      }
      
    },1000)

     
  
 
 
})


textarea.addEventListener("blur", ()=>{
  
      
     if(textarea.value !="") {
          clearInterval(seen);
       
   textarea.disabled = true;
     }else{
          clearInterval(seen);
         textarea.disabled=false;
         count = 0;
     }
})


 



checkbtn.addEventListener("click", ()=>{
   
let textresponse = textarea.value.trim();
     
  
   if(textarea.value!=""){
  
  errorbox.style.display="none";
  
  let wordcount = textresponse.split(" ").length;
 
 
let usergivenword = textresponse.split(" ");

let correct =0;
let incorrect =0;


for(let i in acurat){
    if(usergivenword[i] == acurat[i])
    {
      correct++;
    }else{
        incorrect++;
    }
}  



console.log(`correct word ${correct} / outof word ${acurat.length}`)
 
 
    textarea.disabled = true;

let typingspeed = (wordcount / count) * 60;
   typingspeed = Math.floor(typingspeed);
    
  resultdiv.innerHTML= `  
 <p> your typing speed  <b> ${typingspeed} </b>  words per minutes </p>
  
 <p>  correct words <b> ${correct} 
  </b>  outof  <span id="pending">  ${acurat.length}  words </span> </p>
  
  <p> wrong words <span id="wrong"> ${incorrect} </span> 
  time taken <b> ${count}s </b>  </p>`;
    
    reset.style.display="block"
 

  
  
  checkbtn.style.display="none"
   }else{
       errorbox.style.display="block";
       
       errorbox.innerHTML = " <span class='error'>Please fill the blank </span>";
   }
})




reset.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location ="typingspeed.html"
})