let taskDOM = document.querySelector('#task')
let listDOM =document.querySelector('#list')
let btnDOM = document.querySelector('#liveToast')
let ulConnect= document.getElementsByTagName("li")

for (let i = 0 ; i < ulConnect.length; i++){
    let xButton = document.createElement('span')
    xButton.textContent="\u00D7"
    xButton.classList.add("close");
    xButton.onclick = removeButton; 
    ulConnect[i].append(xButton)
    ulConnect[i].onclick=check;
}

btnDOM.addEventListener('click', elemanEkleme)


function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}

function elemanEkleme (){
    if (taskDOM == value ){
        $(".error").toast("show")
    }else{
        $(".success").toast("show")
    
    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM)
    liDOM.innerHTML = task.value;
    taskDOM.value = "";
    
    liDOM.onclick = check;
        
    let xButton = document.createElement("span");
        xButton.textContent = "\u00D7";
        xButton.classList.add("close");
        xButton.onclick = removeButton;
        
        liDOM.append(xButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
    
}
}