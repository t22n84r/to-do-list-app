const newItem = () => {

    //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    li.append(document.createTextNode($('input:text').val()));

    if (($('input:text').val()) === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //2. Crossing out an item from the list of items:
    const crossOut = () => {
        li.toggleClass("strike");
    }

    li.on("dblclick",crossOut);

    //3(i). Adding the delete button "X": 
    let deleteButton = $('<button>X</button>');
    li.append(deleteButton);

    //3(ii). Removing the list item 
    const deleteListItem = () => {
        li.remove();
    }
    
    deleteButton.on("click", deleteListItem);

    // 4. Reordering the items: 
    $('#list').sortable();

}