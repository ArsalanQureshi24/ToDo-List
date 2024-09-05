let toDoList = [

];
function addToDo() {
    let inputElement = document.querySelector('#To-Do');
    let inputDate = document.querySelector('#To-Do-date');  
    let taskAdd = inputElement.value;
    let dateAdd = inputDate.value;
    toDoList.push({item : taskAdd , dueDate: dateAdd});
    displayItems();
    inputElement.value = '';
    inputDate.value = '';
    
    
}
function displayItems (){
    let displayElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < toDoList.length; i++) {
        let {item , dueDate} = toDoList[i];
        newHtml += `<span class="item">${item}</span>
        <span class="item">${dueDate}</span>
        <button class="btn-delete "onclick ="toDoList.splice(${i},1); displayItems();">Delete</button>`       
    }
    displayElement.innerHTML = newHtml;
}