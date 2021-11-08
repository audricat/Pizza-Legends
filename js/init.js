//function to execute at html console if the code works.
(function () {
    
    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    });
    overworld.init();

})();