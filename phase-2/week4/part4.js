let notes = [];

// content is string
// id is a number 
// maybe check for typeOf
function addNote(content, id) {
    if (typeof id !== 'number') {
        return "id has to be of type number";
    }
    if (typeof content !== 'string') {
        return "content has to be of type string";
    }
    //const obj = {
    //    content: content,
    //    id: id
    //};
    // same as:
    const obj = {
        content,
        id
    };

    notes.push(obj);
}

function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
    return 'Item with id ' + id +' not found';
}

function returnNotes() {
    return notes;
}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id: " + notes[i].id +", has the following note text: " + notes[i].content);
    }
}
console.log(notes);
addNote('this is content', 1);
addNote('this is another content', 2);
console.log(notes);
logOutNotesFormatted();