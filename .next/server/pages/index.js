"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (HomePage),
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
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5221);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ButtonLink.js




const StyledLink = (0,external_styled_components_.styled)((link_default()))`
${Button/* ButtonStyle */.Z}
`;
function ButtonLink(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledLink, {
        ...props
    });
}

// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
;// CONCATENATED MODULE: ./components/Featured.js








const Bg = external_styled_components_default().div.withConfig({
    componentId: "sc-327c16df-0"
})`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Desc = external_styled_components_default().p.withConfig({
    componentId: "sc-327c16df-1"
})`
    color: #aaa;
    font-size: 0.8rem;
`;
const ColumnsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-327c16df-2"
})`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
    img {
        max-width: 100%;
    }
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-327c16df-3"
})`
    margin: 0;
    font-weight: normal;
    font-size:3rem;
`;
const Column = external_styled_components_default().div.withConfig({
    componentId: "sc-327c16df-4"
})`
    display:flex;
    align-items:center;
    
`;
const ButtonsWrapper = external_styled_components_default().data.withConfig({
    componentId: "sc-327c16df-5"
})`
    display:flex;
    gap:10px;
    margin-top:25px;
`;
function Featured({ product }) {
    const { addProduct } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    function addFeaturedToCart() {
        addProduct(product._id);
    }
    return /*#__PURE__*/ jsx_runtime.jsx(Bg, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnsWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Column, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Title, {
                                    children: product?.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(Desc, {
                                    children: product?.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonsWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(ButtonLink, {
                                            href: "/products/" + product?._id,
                                            outline: 1,
                                            white: 1,
                                            children: "erad More"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.C, {
                                            white: true,
                                            onClick: addFeaturedToCart,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {}),
                                                "Add to cart"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Column, {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "https://www.investopedia.com/thmb/vbqJtFiJHnvoqwSpDRgArlgcBDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_Product-Line-Final-58870113a3ca4770a85cabf3549894bb.jpg",
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(6219);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./components/ProductBox.js
var ProductBox = __webpack_require__(1690);
;// CONCATENATED MODULE: ./components/NewProducts.js




const ProductGrid = external_styled_components_.styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:30px;
    padding-top:30px;
`;
const NewProducts_Title = external_styled_components_.styled.h2`
    font-size:2rem;
    margin:30px 0 20px;
    font-weight:500;
`;
function NewProducts({ products }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Center/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                children: "New Arrivals"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ProductGrid, {
                children: products?.length > 0 && products.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(ProductBox/* default */.Z, {
                        ...product
                    }, product.id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js






function HomePage({ featuredProduct, newProducts }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Featured, {
                product: featuredProduct
            }),
            /*#__PURE__*/ jsx_runtime.jsx(NewProducts, {
                products: newProducts
            })
        ]
    });
}
async function getServerSideProps() {
    const featuredProductId = "64bedb6ee7a23a6ed32d1c8c";
    await (0,mongoose/* mongooseConnect */.I)();
    const featuredProduct = await Product/* Product */.x.findById(featuredProductId).exec();
    const newProducts = await Product/* Product */.x.find({}, null, {
        sort: {
            "_id": -1
        },
        limit: 10
    });
    return {
        props: {
            featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts))
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: pages_namespaceObject,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [207,664,947,57,97,690], () => (__webpack_exec__(7174)));
module.exports = __webpack_exports__;

})();