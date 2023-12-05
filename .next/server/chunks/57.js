"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Button),
/* harmony export */   Z: () => (/* binding */ ButtonStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration:none;
  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props)=>props.block && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    display:block;
    width:100%;
  `}

  ${(props)=>props.white && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: #fff;
      color: #000;
    `}

  ${(props)=>props.white && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}

      ${(props)=>props.black && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
          background-color: #000;
          color: #fff;
        `}
    
      ${(props)=>props.black && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
          background-color: transparent;
          color: #000;
          border: 1px solid #000;
        `}
  
  ${(props)=>props.primary && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: #5542F6;
      border: 1px solid #5542F6;
      color: #fff;
    `}

    ${(props)=>props.primary && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
        background-color: transparent;
        border: 1px solid #5542F6;
        color: #5542F6;
      `}

  ${(props)=>props.size === "l" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
    componentId: "sc-6accea55-0"
})`
      ${ButtonStyle}
`;
function Button({ children, ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Center)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div`
    max-width:800px;
    margin:0 auto;
    padding: 0 20px;
`;
function Center({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        children: children
    });
}


/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2758);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8551);






const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
    componentId: "sc-fc7bb61d-0"
})`
    background-color: #222;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-fc7bb61d-1"
})`
    color: #fff;
    text-decoration: none;
`;
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2___default().nav.withConfig({
    componentId: "sc-fc7bb61d-2"
})`
    display: flex; /* Corrected typo */
    gap: 15px;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-fc7bb61d-3"
})`
    display: flex; /* Corrected typo */
    justify-content: space-between;
    padding: 20px 0;
`;
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-fc7bb61d-4"
})`
    color: #aaa;
    text-decoration: none;
`;
function Header() {
    const { cartProducts } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_CartContext__WEBPACK_IMPORTED_MODULE_5__/* .CartContext */ .A);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledHeader, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Center__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                        href: "/",
                        children: "Ecommerce"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledNav, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: "/products",
                                children: "All products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: "/categories",
                                children: "Categories"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: "/account",
                                children: "Account"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavLink, {
                                href: "/cart",
                                children: [
                                    "Cart (",
                                    cartProducts.length,
                                    ")"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;