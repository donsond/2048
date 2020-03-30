/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/components/tile.js\");\n\n\nclass Board {\n    constructor(ctx) {\n        this.width = 460;\n        this.height = 460;\n        this.ctx = ctx;\n    }\n\n    draw() {\n        this.ctx.fillStyle = 'black';\n        this.ctx.font = \"50px Comic Sans MS\";\n        this.ctx.fillText('2048', -40 + this.width/2, 100);\n        this.ctx.fillStyle = 'orange';\n        this.ctx.fillRect(20, 320, this.width, this.height)\n        this.ctx.fillStyle = 'lightyellow';\n        let xc = 35;\n        let yc = 335;\n        for(let i=0; i<4; i++) {\n            for(let j=0; j<4; j++) {\n                this.ctx.fillRect(xc, yc, 100, 100)\n                xc += 110;\n            }\n            yc += 110;\n            xc = 35;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/components/board.js?");

/***/ }),

/***/ "./src/components/tile.js":
/*!********************************!*\
  !*** ./src/components/tile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst DEFAULTS = {\n    COLOR_TWO: 'limegreen',\n}\n\nclass Tile {\n    constructor(ctx, pos, val = _util__WEBPACK_IMPORTED_MODULE_0___default.a.randomTileVal()) {\n        this.ctx = ctx;\n        this.pos = pos;\n        this.xcord = 35 + (110 * pos[0]);\n        this.ycord = 335 + (110 * pos[1]);\n        this.val = val;\n        this.color = DEFAULTS.COLOR_TWO;\n        this.draw();\n    }\n\n    draw() {\n        this.ctx.fillStyle = this.color;\n        this.ctx.fillRect(this.xcord, this.ycord, 100, 100);\n        this.ctx.fillStyle = \"black\";\n        this.ctx.font = \"50px Comic Sans MS\"\n        this.ctx.fillText(this.val, this.xcord +40 , this.ycord +65)\n    }\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/components/tile.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/board */ \"./src/components/board.js\");\n/* harmony import */ var _components_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tile */ \"./src/components/tile.js\");\n\n\n\n\n\nclass Game {\n    constructor(ctx) {\n        this.board = new _components_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n        this.ctx = ctx;\n        this.tiles = [];\n        this.filled = [];\n        this.size = 16;\n    }\n    \n    draw() {\n        this.board.draw();\n        this.addInitialTiles();\n    }\n\n    findTileByPos(x, y) {\n        this.tiles.forEach(tile => {\n            if(tile.pos[0] === x && tile.pos[1] === y) {\n                return tile;\n            }\n        })\n        return null;\n    }\n\n    removeTileByPos(x, y) {\n        this.tiles.forEach((tile, idx) => {\n            if(tile.pos[0] === x && tile.pos[1] === y) {\n                this.tiles.splice(idx,1);\n            }\n        })\n        this.filled.forEach((filledTile, idx) => {\n            if(filledTile[0] === x && filledTile[1] === y) {\n                this.filled.splice(idx,1);\n            }\n        })\n    }\n\n    tileValEquals(tile1, tile2) {\n        if (tile1.val === tile2.val) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    addTwoTiles(tile1, tile2) {\n        this.removeTileByPos(tile1.pos[0], tile2.pos[1]);\n        this.removeTileByPos(tile2.pos[0], tile2.pos[1]);\n        const newVal = tile1.val + tile2.val;\n        const newPos = tile1.pos;\n        const newTile = new _components_tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, newPos, newVal);\n        this.filled.push(newPos)\n        this.tiles.push(newTile);\n    }\n\n    moveTiles(direction) {\n        let tile1 = null;\n        let tile2 = null;\n        switch(direction) {\n            case 'left':\n                for(let y=0; y<4; y++) {\n                    for(let x=1; x<4; x++) {\n                        if(this.positionFilled(x-1, y)) {\n                            if (this.positionFilled(x, y)) {\n                                tile1 = this.findTileByPos(x-1, y);\n                                tile2 = this.findTileByPos(x, y);\n                                if (this.tileValEquals(tile1, tile2)) {\n                                    this.addTwoTiles(tile1, tile2);\n                                }\n                            }\n                        }\n                    }\n                }\n                break;\n            case 'right':\n                break;\n            case 'up':\n                break;\n            case 'down':\n                break;\n        }\n    }\n\n    addInitialTiles() {\n        const tile1 = new _components_tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.randomPos());\n        const tile2 = new _components_tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.randomPos());\n        this.tiles.push(tile1);\n        this.tiles.push(tile2);\n    }\n\n    addRandomTile() {\n        const tile = new _components_tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"] (this.ctx, this.randomPos());\n        this.tiles.push(tile);\n    }\n\n    //get random position\n    randomPos() {\n        let xpos = _util__WEBPACK_IMPORTED_MODULE_0___default.a.randomPos();\n        let ypos = _util__WEBPACK_IMPORTED_MODULE_0___default.a.randomPos();\n        if (this.filled.length === this.size) {\n            return null;\n        }\n        while (this.positionFilled(xpos, ypos)) {\n            xpos = _util__WEBPACK_IMPORTED_MODULE_0___default.a.randomPos();\n            ypos = _util__WEBPACK_IMPORTED_MODULE_0___default.a.randomPos();    \n        }\n        const pos = [xpos, ypos];\n        this.filled.push(pos);\n        return pos;\n    }\n\n    //checks if position is occupied\n    positionFilled(xpos, ypos) {\n        let fill = false;\n        this.filled.forEach(position => {\n            if ((position[0] === xpos) && (position[1] === ypos)) {\n                fill = true;\n            }\n        })\n        return fill;\n    }\n\n    //add/remove positions\n    substitutePos(removePos, addPos) {\n        this.filled.forEach((position, index) => {\n            if ((position[0] === removePos.xpos) && (position[1] === removePos.ypos)) {\n                this.filled.splice(index, 1);\n            }\n        })\n        if (addPos) {\n            if (!this.positionFilled(addPos.xpos, addPos.ypos)) {\n                const pos = [addPos.xpos, addPos.ypos];\n                this.filled.push(pos);\n            }\n        }\n        return this.filled;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    let canvas = document.querySelector('canvas');\n    \n    canvas.width = 500;\n    canvas.height = 800;\n    \n    let ctx = canvas.getContext('2d');\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n\n    game.draw();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n    randomTileVal() {\n        const randVal = Math.random() * (9);\n        if (randVal < 1) {\n            return 4;\n        } else {\n            return 2;\n        }\n    },\n\n    randomPos() {\n        return Math.floor(Math.random() * 4) \n    }\n\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });