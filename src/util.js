
const Util = {
    randomTileVal() {
        const randVal = Math.random() * (9);
        if (randVal < 1) {
            return 4;
        } else {
            return 2;
        }
    },

    randomPos() {
        return Math.floor(Math.random() * 4) 
    }

}

module.exports = Util;
