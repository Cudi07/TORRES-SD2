let friends = [];

function showfriends() {
    if (friends.length <= 0) {
        console.log("You have no friends yet.");
    } else {
        console.log(friends);
    }
}

function addfriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());

    if (checkFriend == true) {
        console.log(`${name.toUpperCase()} is already in your friends list.`);
    } else {
        friends.push(name.toUpperCase());
        console.log(`${name.toUpperCase()} has been added to your friends list.`);
    }
}

// Remove specific friend -> using their name
function removefriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());

    friends.forEach((friend, index) => {

        if (checkFriend == true) {
            friends.splice(index, 1);
            console.log(`${name.toUpperCase()} has been removed from your friends list.`);
        }
    });
        console.log(`${name.toUpperCase()} is not in your friends list.`);
    }


