import Util from './util'
import Board from './components/board'
import Tile from './components/tile'


class Game {
    constructor(ctx) {
        this.board = new Board(ctx);
        this.ctx = ctx;
        this.tiles = [];
        this.filled = [];
        this.size = 16;
    }
    
    draw() {
        this.board.draw();
        this.addInitialTiles();
    }

    findTileByPos(x, y) {
        this.tiles.forEach(tile => {
            if(tile.pos[0] === x && tile.pos[1] === y) {
                return tile;
            }
        })
        return null;
    }

    removeTileByPos(x, y) {
        this.tiles.forEach((tile, idx) => {
            if(tile.pos[0] === x && tile.pos[1] === y) {
                this.tiles.splice(idx,1);
            }
        })
        this.filled.forEach((filledTile, idx) => {
            if(filledTile[0] === x && filledTile[1] === y) {
                this.filled.splice(idx,1);
            }
        })
    }

    tileValEquals(tile1, tile2) {
        if (tile1.val === tile2.val) {
            return true;
        } else {
            return false;
        }
    }

    addTwoTiles(tile1, tile2) {
        this.removeTileByPos(tile1.pos[0], tile2.pos[1]);
        this.removeTileByPos(tile2.pos[0], tile2.pos[1]);
        const newVal = tile1.val + tile2.val;
        const newPos = tile1.pos;
        const newTile = new Tile(this.ctx, newPos, newVal);
        this.filled.push(newPos)
        this.tiles.push(newTile);
    }

    moveTiles(direction) {
        let tile1 = null;
        let tile2 = null;
        switch(direction) {
            case 'left':
                for(let y=0; y<4; y++) {
                    for(let x=1; x<4; x++) {
                        if(this.positionFilled(x-1, y)) {
                            if (this.positionFilled(x, y)) {
                                tile1 = this.findTileByPos(x-1, y);
                                tile2 = this.findTileByPos(x, y);
                                if (this.tileValEquals(tile1, tile2)) {
                                    this.addTwoTiles(tile1, tile2);
                                }
                            }
                        }
                    }
                }
                break;
            case 'right':
                break;
            case 'up':
                break;
            case 'down':
                break;
        }
    }

    addInitialTiles() {
        const tile1 = new Tile(this.ctx, this.randomPos());
        const tile2 = new Tile(this.ctx, this.randomPos());
        this.tiles.push(tile1);
        this.tiles.push(tile2);
    }

    addRandomTile() {
        const tile = new Tile (this.ctx, this.randomPos());
        this.tiles.push(tile);
    }

    //get random position
    randomPos() {
        let xpos = Util.randomPos();
        let ypos = Util.randomPos();
        if (this.filled.length === this.size) {
            return null;
        }
        while (this.positionFilled(xpos, ypos)) {
            xpos = Util.randomPos();
            ypos = Util.randomPos();    
        }
        const pos = [xpos, ypos];
        this.filled.push(pos);
        return pos;
    }

    //checks if position is occupied
    positionFilled(xpos, ypos) {
        let fill = false;
        this.filled.forEach(position => {
            if ((position[0] === xpos) && (position[1] === ypos)) {
                fill = true;
            }
        })
        return fill;
    }

    //add/remove positions
    substitutePos(removePos, addPos) {
        this.filled.forEach((position, index) => {
            if ((position[0] === removePos.xpos) && (position[1] === removePos.ypos)) {
                this.filled.splice(index, 1);
            }
        })
        if (addPos) {
            if (!this.positionFilled(addPos.xpos, addPos.ypos)) {
                const pos = [addPos.xpos, addPos.ypos];
                this.filled.push(pos);
            }
        }
        return this.filled;
    }


}

export default Game;