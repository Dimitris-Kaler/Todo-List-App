let input = document.getElementById("input");
let button = document.querySelector("button");
let ul = document.querySelector("#toDoUl");
let lists = document.getElementsByTagName("li");
// let flists = document.getElementsByClassName("createdLi");
let delBtn = document.querySelectorAll("#createdBtn");
let reset = document.getElementById("reset");
let completeBtn = document.getElementById("complete")
let finishedList = document.getElementById("doneUl")
       console.log(completeBtn.innerHTML)

function inputValue() {
    return input.value.length
}

function createList() {

    let li = document.createElement("li");
    let text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li)

    input.value = ""

    let btn = document.createElement("button");
    btn.id = "createdBtn"
    let btnText = document.createTextNode("X")
    btn.appendChild(btnText)
    li.appendChild(btn)
    btn.onclick = deleteList  


}


addLi = () => {
    if (inputValue() > 0) {
        createList()

    }


}


function addLiKeypress(event) {
    if (inputValue() > 0 && event.keyCode === 13) {
        createList()
    }

}



function deleteList(event) {
    event.target.parentNode.remove();
}

ul.onclick = doneList



function doneList(event) {

    event.target.classList.toggle("done")
}


resetList = () => {
    ul.innerHTML = ""
    finishedList.innerHTML = ""

}

displayDoneList = () => {
    let doneArr = []

    finishedList.classList.toggle("show")
   console.log(finishedList.style.display)
   
    

    if (finishedList.classList.contains("show")) {
        completeBtn.innerHTML = "To Do List";
        ul.style.display="none";
        button.disabled=true;


    for (let i = 0; i < lists.length; i++) {

        if (lists[i].classList.contains("done")) {
            doneArr.push(lists[i])

        }


    }

    for (let j in doneArr) {
        let donelist = document.createElement("li");
        let rightText = doneArr[j].innerText.slice(0, -1)
        let doneText = document.createTextNode(rightText)
        // console.log(typeof doneArr[j].innerText)
        // console.log(typeof doneText)

        // console.log(doneArr[j].innerText.length)

        // let righText =doneText.slice(0,-1)
        donelist.appendChild(doneText);
        donelist.innerHTML.slice(0, -2)
        finishedList.appendChild(donelist);

    }
}
if(!(finishedList.classList.contains("show"))){
         ul.style.display = "block"
        completeBtn.innerHTML ="Completed Tasks"
        finishedList.innerHTML=""
        button.disabled=false;

    }


}








button.addEventListener("click", addLi)
input.addEventListener("keypress", addLiKeypress)
reset.addEventListener("click", resetList)
completeBtn.addEventListener("click", displayDoneList)
