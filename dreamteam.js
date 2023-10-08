let id = 0;

document.getElementById('add').addEventListener('click', () => { //creates new row when button is clicked
    let table = document.getElementById('list'); //defining parent node
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`); //giving new row id attribute
    row.insertCell(0).innerHTML = document.getElementById('new-name').value; //creating new players, powers, and birthdates
    row.insertCell(1).innerHTML = document.getElementById('new-powers').value;
    row.insertCell(2).innerHTML = document.getElementById('new-birthdate').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++)); //appended to original table
    document.getElementById('new-name').value = ""; //resets field
    document.getElementById('new-powers').value = "";
    document.getElementById('new-birthdate').value = "";
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}