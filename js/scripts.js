function newItem () {

    // Adding a new to-do list item

    let list = $('#list');
    let li = $('<li></li>');
    let userInput = $('#input');
    let inputValue = userInput.val();
    li.append(inputValue);

    if (!inputValue) {
        alert('You must write something!');
    } else {
        list.append(li);
        userInput.val('');
    }

    // Crossing out items upon double-click
    function crossOut() {
        li.addClass('strike');
    }

    li.on('dblclick', crossOut);

    // Adding a delete button
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);

    // Adding class 'Delete' when clicking delete button
    function deleteListItem() {
        li.addClass('delete');
    }
    crossOutButton.on('click', deleteListItem);

    // Reording the items
    list.sortable();

}