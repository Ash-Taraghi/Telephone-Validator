const checkBtn = document.getElementById("check-btn")

function empty(){
   if (checkBtn.value === ""){
    alert("Please provide a phone number")
}
 
}



checkBtn.addEventListener("click",empty)