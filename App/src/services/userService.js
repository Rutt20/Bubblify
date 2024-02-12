let userItems = [];

function addUserItem(value) {
    userItems = getAllUserItems();
    let curr_user = userItems.find((ci) => ci.telephone == value.telephone);
    if(!curr_user){
        userItems.push(value);
        localStorage.setItem('user',JSON.stringify(userItems));
    };
}

function getUserItem(key) {
    userItems = getAllUserItems();
    const item = userItems.find((ci) => ci.telephone == key);
    return item ? item : null;
}

function getAllUserItems() {
    const value = localStorage.getItem('user');
    return value ? JSON.parse(value) : [];
}

function clearAllUsers(){
    localStorage.removeItem('user');
    
}


module.exports = {
   addUserItem, 
   getUserItem,
   getAllUserItems,
   clearAllUsers
}