function addItemList(){
    let itemToAdd = document.getElementById('articleToAdd').value
    console.log(itemToAdd)

    if(itemToAdd){
        let newItem = document.createElement('li');
        newItem.textContent = ' - ' + itemToAdd;
        document.getElementById('shoppingList').append(newItem);
        document.getElementById('articleToAdd').value = '';
        return;
    }
    else{
        return alert('rien a rajouter')
    }

}