import Util from '../util'

const DEFAULTS = {
    COLOR_TWO: 'limegreen',
}

class Tile {
    constructor(ctx, pos, val = Util.randomTileVal()) {
        this.ctx = ctx;
        this.pos = pos;
        this.xcord = 35 + (110 * pos[0]);
        this.ycord = 335 + (110 * pos[1]);
        this.val = val;
        this.color = DEFAULTS.COLOR_TWO;
        this.draw();
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.xcord, this.ycord, 100, 100);
        this.ctx.fillStyle = "black";
        this.ctx.font = "50px Comic Sans MS"
        this.ctx.fillText(this.val, this.xcord +40 , this.ycord +65)
    }
    
}

export default Tile;