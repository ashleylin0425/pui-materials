// Try console.log
// console.log("start implementation")


// To do: create an updateElement () function
function updateElement () {
    const noteImageElement = notecard.element.querySelector ('.notecard-thumbnail'); 
    const noteTitleElement = notecard.element.querySelector ("note-title");
    const noteBodyElement = notecard.element.querySelector (".note-body")

    noteImageElement.src = notecard.noteImageURL
    noteTitleElement.innerText = notecard.noteTitle
    noteBodyElement.innerText = notecard.noteBody
    
    console.log(noteImageElement)
    // change the image
}


// Todo: create a submitNote() function
function submitNote(){
    const editorTitleElement = document.querySelector("#note-editor-title");
    const editorBodyElement = document.querySelector(              )
    notecard.noteTitle = editorTitleElement;
    notecard.noteBody = editorBodyElement;

    updateElement()

}

updateElement()


// create an object

let notecard = {
    noteTitle: "This is the Title of the Note!",
    noteBody: "And here is the body of the note",
    noteImageURL: "assets/warhol-frog.png",
}

// grab a specific notecard element
notecard.element = document.querySelector ("#notecard-one")



// add a click event

const btnSubmit = document.querySelector("#btn-submit")
btnSubmit.onclick = submitNote; 
// want to call this function on click, but not now so no parentheses