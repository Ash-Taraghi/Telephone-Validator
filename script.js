const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const input = document.getElementById("user-input")
const result = document.getElementById("results-div")

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
function check(){
   if (input.value === ""){
    alert("Please provide a phone number")
    }
    else{
        result.textContent = regex.test(input.value) ? `Valid US Number: ${input.value}` : `Invalid US Number: ${input.value}`
    }
}

function clear(){
    result.textContent= "";
}



checkBtn.addEventListener("click",check)
clearBtn.addEventListener("click", clear)