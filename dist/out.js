/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/index.js":
/*!*********************************!*\
  !*** ./src/controller/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ProductModel } = __webpack_require__(/*! ../mongo/model */ \"./src/mongo/model/index.js\");\n\nconst getAll = async (_req, res) => {\n  const allProducts = await ProductModel.find({});\n  console.log(allProducts);\n  res.json(allProducts);\n};\n\nconst getOne = async (req, res) => {\n  const prodId = req.params.id;\n\n  const oneProd = await ProductModel.find({ id: prodId });\n\n  res.json(oneProd);\n};\n\nconst addOne = async (req, res) => {\n  const prodInfo = req.body;\n  const addProd = new ProductModel({\n    name: prodInfo.name,\n    description: prodInfo.description,\n    price: prodInfo.price,\n    quantity: prodInfo.quantity,\n    category: prodInfo.category,\n  });\n\n  await addProd.save();\n\n  res.sendStatus(200);\n};\n\nconst updateOne = (req, res) => {};\n\nconst deleteOne = (req, res) => {};\n\nconst deleteAll = (req, res) => {};\n\nconst getByKeyword = (req, res) => {};\n\nmodule.exports = {\n  getAll,\n  getOne,\n  addOne,\n  updateOne,\n  deleteAll,\n  deleteOne,\n  getByKeyword,\n};\n\n\n//# sourceURL=webpack://assg2/./src/controller/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! dotenv/config */ \"dotenv/config\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst app = express();\nconst PORT = process.env.PORT || 4000;\nconst router = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\nconst api = __webpack_require__(/*! ./routes/api */ \"./src/routes/api/index.js\");\n\napp.use(cors());\napp.use(bodyParser.json());\napp.use(\"/\", router);\napp.use(\"/api\", api);\n\n(async () => {\n  await mongoose.connect(process.env.MONGO_URL).then(() => {\n    console.log(\"DB_CONNECTED!\");\n  });\n})();\n\napp.listen(PORT, () => {\n  console.log(`Server is Up! http://localhost:${PORT}`);\n});\n\n\n//# sourceURL=webpack://assg2/./src/index.js?");

/***/ }),

/***/ "./src/mongo/model/index.js":
/*!**********************************!*\
  !*** ./src/mongo/model/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { CategorySchema, ProductSchema } = __webpack_require__(/*! ../schema */ \"./src/mongo/schema/index.js\");\n\nconst CategoryModel = new mongoose.model(\"Category\", CategorySchema);\nconst ProductModel = new mongoose.model(\"Product\", ProductSchema);\n\nmodule.exports = {\n  CategoryModel,\n  ProductModel,\n};\n\n\n//# sourceURL=webpack://assg2/./src/mongo/model/index.js?");

/***/ }),

/***/ "./src/mongo/schema/index.js":
/*!***********************************!*\
  !*** ./src/mongo/schema/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Schema, Model } = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst CategorySchema = new Schema({\n  name: String,\n});\n\nconst ProductSchema = new Schema({\n  name: String,\n  description: String,\n  price: Number,\n  quantity: Number,\n  category: String,\n});\n\nmodule.exports = { CategorySchema, ProductSchema };\n\n\n//# sourceURL=webpack://assg2/./src/mongo/schema/index.js?");

/***/ }),

/***/ "./src/routes/api/index.js":
/*!*********************************!*\
  !*** ./src/routes/api/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  getAll,\n  getOne,\n  addOne,\n  updateOne,\n  deleteOne,\n  deleteAll,\n  getByKeyword,\n} = __webpack_require__(/*! ../../controller */ \"./src/controller/index.js\");\n\nconst router = (__webpack_require__(/*! express */ \"express\").Router)();\n\nrouter.get(\"/products\", getAll);\n\nrouter.get(\"/products/:id\", getOne);\n\nrouter.post(\"/products\", addOne);\n\nrouter.put(\"/products/:id\", updateOne);\n\nrouter.delete(\"/products/:id\", deleteOne);\n\nrouter.delete(\"/products\", deleteAll);\n\nrouter.get(\"/products?name=[kw]\", getByKeyword);\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://assg2/./src/routes/api/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const router = (__webpack_require__(/*! express */ \"express\").Router)();\n\nrouter.get(\"/\", (_req, res) => {\n  res.json({\n    message: \"Welcome to DressStore application.\",\n  });\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://assg2/./src/routes/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;