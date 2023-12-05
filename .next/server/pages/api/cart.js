"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 7925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./lib/mongoose.js

function mongooseConnect() {
    if ((external_mongoose_default()).connection.readyState === 1) {
        return external_mongoose_default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return external_mongoose_default().connect(uri);
    }
}

;// CONCATENATED MODULE: ./models/Product.js

const ProductSchema = new external_mongoose_namespaceObject.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    category: {
        type: (external_mongoose_default()).Types.ObjectId,
        ref: "Category"
    },
    properties: {
        type: Object
    }
}, {
    timestamps: true
});
const Product = external_mongoose_namespaceObject.models.Product || (0,external_mongoose_namespaceObject.model)("Product", ProductSchema);

;// CONCATENATED MODULE: ./pages/api/cart.js


async function handle(req, res) {
    await mongooseConnect();
    const ids = req.body.ids;
    res.json(await Product.find({
        _id: ids
    }));
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7925));
module.exports = __webpack_exports__;

})();