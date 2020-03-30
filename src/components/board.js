import Tile from './tile'

class Board {
    constructor(ctx) {
        this.width = 460;
        this.height = 460;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = "50px Comic Sans MS";
        this.ctx.fillText('2048', -40 + this.width/2, 100);
        this.ctx.fillStyle = 'orange';
        this.ctx.fillRect(20, 320, this.width, this.height)
        this.ctx.fillStyle = 'lightyellow';
        let xc = 35;
        let yc = 335;
        for(let i=0; i<4; i++) {
            for(let j=0; j<4; j++) {
                this.ctx.fillRect(xc, yc, 100, 100)
                xc += 110;
            }
            yc += 110;
            xc = 35;
        }
    }
}

export default Board;