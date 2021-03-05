(function (app) {
    app.hello = function () {
        return "Hola :)";
    }
})(window.app || (window.app = {}));

(function (app) {    
    document.write(app.hello());
})(window.app ||(window.app = {}));



