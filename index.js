
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value == ""){
        alert("please write something...")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.append(span)
        listContainer.appendChild(li) 
    }
   
    inputBox.value = ""
    saveData()
}
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName==="SPAN"){
   e.target.parentElement.remove()
   saveData()
    }
} , false)

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}
function loadData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
loadData()