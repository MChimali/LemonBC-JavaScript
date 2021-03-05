(function (App) {
    App.getUserNode = function (user) {
        const node = document.createElement("div");
        node.appendChild(App.getAvatar(user));    
        node.append(user.first_name + " " + user.last_name + " - " + user.email);
    
        return node;
    }
})(window.App || (window.App = {}))