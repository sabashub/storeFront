"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproducts_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fproducts_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/products.js
var products_namespaceObject = {};
__webpack_require__.r(products_namespaceObject);
__webpack_require__.d(products_namespaceObject, {
  "default": () => (ProductsPage),
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5221);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(6219);
// EXTERNAL MODULE: ./components/ProductBox.js
var ProductBox = __webpack_require__(1690);
;// CONCATENATED MODULE: ./components/ProductsGrid.js



const StyledProductsGrid = external_styled_components_default().div.withConfig({
    componentId: "sc-a2ea1e34-0"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
function ProductsGrid({ products }) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledProductsGrid, {
        children: products?.length > 0 && products.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(ProductBox/* default */.Z, {
                ...product
            }, product._id))
    });
}

;// CONCATENATED MODULE: ./components/SearchBar.js



const SearchBarWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-e0fa80a3-0"
})`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const SearchInput = external_styled_components_default().input.withConfig({
    componentId: "sc-e0fa80a3-1"
})`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
function SearchBar({ products }) {
    function levenshteinDistance(str1, str2) {
        const dp = Array.from({
            length: str1.length + 1
        }, (_, i)=>[
                i
            ]);
        for(let j = 1; j <= str2.length; j++){
            dp[0][j] = j;
        }
        for(let i = 1; i <= str1.length; i++){
            for(let j = 1; j <= str2.length; j++){
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
            }
        }
        return dp[str1.length][str2.length];
    }
    function isAssociated(productName, searchWord) {
        if (productName.toLowerCase().includes(searchWord.toLowerCase())) {
            return true;
        }
        const maxAllowedDistance = 2;
        const distance = levenshteinDistance(productName.toLowerCase(), searchWord.toLowerCase());
        return distance <= maxAllowedDistance;
    }
    const [searchTerm, setSearchTerm] = (0,external_react_.useState)("");
    const handleChange = (e)=>{
        const value = e.target.value;
        setSearchTerm(value);
        for (const product of products){
            if (!isAssociated(product.title, value)) {
                const elements = document.querySelectorAll(`[value="${product._id}"]`);
                elements.forEach((element)=>{
                    element.style.display = "none";
                });
            } else {
                const elements = document.querySelectorAll(`[value="${product._id}"]`);
                elements.forEach((element)=>{
                    element.style.display = "block";
                });
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(SearchBarWrapper, {
        children: /*#__PURE__*/ jsx_runtime.jsx(SearchInput, {
            type: "text",
            placeholder: "Search products...",
            value: searchTerm,
            onChange: handleChange
        })
    });
}

;// CONCATENATED MODULE: ./pages/products.js








 // Import the updated SearchBar component
const products_SearchBarWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-5d4d1873-0"
})`
  margin-bottom: 20px; /* Add margin between the search bar and other elements */
  margin-top:20px;
`;
function ProductsPage({ products }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Center/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(products_SearchBarWrapper, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(SearchBar, {
                            products: products
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ProductsGrid, {
                        products: products
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    await (0,mongoose/* mongooseConnect */.I)();
    const products = await Product/* Product */.x.find({}, null, {
        sort: {
            _id: -1
        }
    });
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproducts&preferredRegion=&absolutePagePath=private-next-pages%2Fproducts.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproducts_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(products_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(products_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(products_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fproducts_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(products_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(products_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(products_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/products","pathname":"/products","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: products_namespaceObject,
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
var __webpack_exports__ = __webpack_require__.X(0, [207,664,947,57,97,690], () => (__webpack_exec__(7895)));
module.exports = __webpack_exports__;

})();