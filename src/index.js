import Game from './game'

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.querySelector('canvas');
    
    canvas.width = 500;
    canvas.height = 800;
    
    let ctx = canvas.getContext('2d');
    const game = new Game(ctx);

    game.draw();

});