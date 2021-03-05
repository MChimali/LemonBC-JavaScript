(function (App) {
    const users = App.getUsers();
    const nodes = [];
    
    for (let user of users){
        nodes.push(App.getUserNode(user));
    }
    
    window.onload = function() {
        for (let node of nodes) {
        document.getElementById("root").append(node);
        }
    };
})(window.App || (window.App = {}))





   