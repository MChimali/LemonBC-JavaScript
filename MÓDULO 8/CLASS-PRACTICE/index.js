const users = getUsers();

const nodes = [];

for (let user of users){
    nodes.push(getUserNode(user))
}

window.onload = function() {
    for (let node of nodes){
        document.getElementById("root").append(node)
    }
}