"use strict";
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 1690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4759);
/* harmony import */ var _icons_CartIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8777);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8551);







const ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div``;
const WhiteBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)((next_link__WEBPACK_IMPORTED_MODULE_4___default()))`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;
const Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)((next_link__WEBPACK_IMPORTED_MODULE_4___default()))`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;
const ProductInfoBox = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div`
  margin-top: 5px;
`;
const PriceRow = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div`
  display: flex; /* Corrected 'dispay' to 'display' */
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const CartButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .C)`
  /* Applying styles from ButtonStyle to the CartButton */
  ${_Button__WEBPACK_IMPORTED_MODULE_2__/* .ButtonStyle */ .Z}
`;
function ProductBox({ _id, title, description, price, images }) {
    const { addProduct } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_CartContext__WEBPACK_IMPORTED_MODULE_6__/* .CartContext */ .A);
    const url = "/products/" + _id;
    return /* eslint-disable react/jsx-key */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProductWrapper, {
        value: _id,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WhiteBox, {
                href: url,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: images[0],
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProductInfoBox, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        href: url,
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PriceRow, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Price, {
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartButton, {
                                onClick: ()=>addProduct(_id),
                                primary: true,
                                outline: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CartIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            })
        ]
    }, _id);
}


/***/ })

};
;