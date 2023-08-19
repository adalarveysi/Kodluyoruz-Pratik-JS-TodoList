//Elementleri Seçme
const todoForm  = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const listGroup = document.querySelector(".list-group");
const editTodos = document.querySelector("#edit-todos");
const CardBody = document.querySelectorAll(".card-body")[1];

//Tüm Eventleri Dinleme
eventListeners();
function eventListeners(){
    todoForm.addEventListener("submit",listenaddTodo);
    CardBody.addEventListener("click",deleteTodo);
    CardBody.addEventListener("click",listenEditTodo);
}
//Todo Ekleme Fonksiyonu
function listenaddTodo(e) {
    const newTodo = todoInput.value.trim(); 
    const newSpan =document.createElement("span")
    newSpan.innerHTML = newTodo
    //Todoyu UI Gönderdim.
    addTodo(newSpan);
    e.preventDefault();
}
//Ekranda gözükebilmesi için addTodoUI Fonksiyonunu oluşturdum.
function addTodo(newSpan){
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a")
    linkItem.href = "#";
    linkItem.className = "delete-item"
    linkItem.innerHTML ="<button type='button' style ='margin-right:10px;' class='btn btn-info'>Todo Düzenle</button></i><i class='fa-solid fa-trash'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    listItem.appendChild(newSpan)
    listItem.appendChild(linkItem);
    //Todoları Listeye Ekleme

    listGroup.appendChild(listItem)
    //Todo Ekleme işlemi bittikten sonra Input Alanını İçini Temizledik.
    todoInput.value = ""
}
//Seçilen Todoyu dinledik deleteTodo Fonksiyonuna gonderdik.
function listendeleteTodo(e){
    const target =e.target.className
    if(target ==="fa-solid fa-trash"){
        deleteTodo(target)
    }
}
//Todo değerini aldık ve parent elementlerine gidip sildik.
function deleteTodo(selectedTodo){
    const deleteTodo = selectedTodo.target.parentElement.parentElement.remove()
}
//listenEditTodo Fonksiyonu tıklanılan butonun iki üst elementine gitti ve Kullanıcından yeni değeri aldı ve editTodoUI Gönderdi
function listenEditTodo(e){
    if(e.target.className ==="btn btn-info"){
        const selectTodo = e.target.parentElement.parentElement
        const editedTodo = prompt("Yeni Değer")
        editTodo(selectTodo,editedTodo)
    }
}
 function editTodo(selectTodo,promptTodo){
    const editSpan = selectTodo.querySelector("span")
    editSpan.textContent =  promptTodo    
}
