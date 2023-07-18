var createButton = document.getElementById("createButton");
var inputContainer = document.getElementById("inputContainer");
var closeButton = document.getElementById("closeButton");
var addButton = document.getElementById("addButton");
var notesContainer = document.getElementById("notesContainer");
var noteInput = document.getElementById("noteInput");
var clearButton = document.getElementById("clearButton");

createButton.addEventListener('click', function(){
    inputContainer.style.display = "block";

});

clearButton.addEventListener("click", function(){
    notesContainer.innerHTML = "";
})

closeButton.addEventListener('click', function(){
    inputContainer.style.display = "none";
});

addButton.addEventListener("click", noteAdded);

function noteAdded(){
    var stickyNote = document.createElement("p");
    stickyNote.innerHTML = noteInput.value;

    notesContainer.insertAdjacentElement("beforeend", stickyNote);
noteInput.value = "";

stickyNote.addEventListener("dblclick", function(){
    this.remove();
})
}
