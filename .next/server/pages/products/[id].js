"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 1309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/products/[id].js
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (ProductPage),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(6088);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5221);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Title.js

const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-aa9cfb0-0"
})`
  font-size: 1.5em;
`;
/* harmony default export */ const components_Title = (Title);

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(6219);
;// CONCATENATED MODULE: ./components/WhiteBox.js

const WhiteBox = external_styled_components_default().div.withConfig({
    componentId: "sc-e6c674a0-0"
})`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
/* harmony default export */ const components_WhiteBox = (WhiteBox);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ProductImages.js



const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-c08b31a0-0"
})`
    max-width: 100%;
    max-height: 100%;
  `;
const BigImage = external_styled_components_default().img.withConfig({
    componentId: "sc-c08b31a0-1"
})`
  max-width: 100%;
  max-height: 200px;
`;
const ImageButtons = external_styled_components_default().div.withConfig({
    componentId: "sc-c08b31a0-2"
})`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = external_styled_components_default().div.withConfig({
    componentId: "sc-c08b31a0-3"
})`
    border: 2px solid #ccc;
    ${(props)=>props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-c08b31a0-4"
})`
  text-align: center;
`;
function ProductImages({ images }) {
    const [activeImage, setActiveImage] = (0,external_react_.useState)(images?.[0]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(BigImageWrapper, {
                children: /*#__PURE__*/ jsx_runtime.jsx(BigImage, {
                    src: activeImage
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ImageButtons, {
                children: images.map((image)=>/*#__PURE__*/ jsx_runtime.jsx(ImageButton, {
                        active: image === activeImage,
                        onClick: ()=>setActiveImage(image),
                        children: /*#__PURE__*/ jsx_runtime.jsx(Image, {
                            src: image,
                            alt: ""
                        })
                    }, image))
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
;// CONCATENATED MODULE: ./pages/products/[id].js













const ColWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-69154ce3-0"
})`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = external_styled_components_default().div.withConfig({
    componentId: "sc-69154ce3-1"
})`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = external_styled_components_default().span.withConfig({
    componentId: "sc-69154ce3-2"
})`
  font-size: 1.4rem;
`;
function ProductPage({ product }) {
    const { addProduct } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColWrapper, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components_WhiteBox, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(ProductImages, {
                                images: product.images
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(components_Title, {
                                    children: product.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: product.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(PriceRow, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Price, {
                                                children: [
                                                    "$",
                                                    product.price
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.C, {
                                                primary: true,
                                                onClick: ()=>addProduct(product._id),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {}),
                                                    "Add to cart"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    await (0,mongoose/* mongooseConnect */.I)();
    const { id } = context.query;
    const product = await Product/* Product */.x.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproducts%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproducts%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproducts_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fproducts_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/products/[id]","pathname":"/products/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _id_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [207,664,947,57,97], () => (__webpack_exec__(1309)));
module.exports = __webpack_exports__;

})();