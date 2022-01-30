"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ButtonSendSticker.js":
/*!*********************************************!*\
  !*** ./src/components/ButtonSendSticker.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '50%',\n                    padding: '0 3px 0 0',\n                    minWidth: '40px',\n                    minHeight: '40px',\n                    fontSize: '20px',\n                    marginBottom: '8px',\n                    marginRight: '15px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300],\n                    filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                    hover: {\n                        filter: 'grayscale(0)'\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'auto'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTTSxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsTUFBTSw2RUFDSEMscURBQUc7UUFDRlUsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVU7UUFDdEIsQ0FBQzs7d0ZBRUFWLHdEQUFNO2dCQUNMUyxVQUFVLEVBQUUsQ0FBQztvQkFDWEUsWUFBWSxFQUFFLENBQUs7b0JBQ25CQyxPQUFPLEVBQUUsQ0FBVztvQkFDcEJDLFFBQVEsRUFBRSxDQUFNO29CQUNoQkMsU0FBUyxFQUFFLENBQU07b0JBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsV0FBVyxFQUFFLENBQU07b0JBQ25CQyxVQUFVLEVBQUUsQ0FBRztvQkFDZkMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLFVBQVUsRUFBRSxDQUFRO29CQUNwQkMsY0FBYyxFQUFFLENBQVE7b0JBQ3hCQyxlQUFlLEVBQUVuQixvRUFBb0M7b0JBQ3JEdUIsTUFBTSxFQUFFbkIsTUFBTSxHQUFHLENBQWMsZ0JBQUcsQ0FBYztvQkFDaERvQixLQUFLLEVBQUUsQ0FBQzt3QkFDTkQsTUFBTSxFQUFFLENBQWM7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDREUsS0FBSyxFQUFDLENBQUc7Z0JBQ1RDLE9BQU8sRUFBRSxRQUFRO29CQUFGckIsTUFBTSxDQUFOQSxZQUFZLEVBQUVELE1BQU07Ozs7Ozs7WUFFcENBLE1BQU0sZ0ZBQ0pSLHFEQUFHO2dCQUNGVSxVQUFVLEVBQUUsQ0FBQztvQkFDWFUsT0FBTyxFQUFFLENBQU07b0JBQ2ZXLGFBQWEsRUFBRSxDQUFRO29CQUN2Qm5CLFlBQVksRUFBRSxDQUFLO29CQUNuQkQsUUFBUSxFQUFFLENBQVU7b0JBQ3BCWSxlQUFlLEVBQUVuQixvRUFBb0M7b0JBQ3JENEIsS0FBSyxFQUFFLENBQUM7d0JBQ05DLEVBQUUsRUFBRSxDQUFPO3dCQUNYQyxFQUFFLEVBQUUsQ0FBTztvQkFDYixDQUFDO29CQUNEQyxNQUFNLEVBQUUsQ0FBTztvQkFDZkMsS0FBSyxFQUFFLENBQU07b0JBQ2JDLE1BQU0sRUFBRSxDQUFNO29CQUNkeEIsT0FBTyxFQUFFLENBQU07b0JBQ2Z5QixTQUFTLEVBQUUsQ0FBeUU7Z0JBQ3RGLENBQUM7Z0JBQ0RSLE9BQU8sRUFBRSxRQUFRO29CQUFGckIsTUFBTSxDQUFOQSxZQUFZLENBQUMsS0FBSzs7O2dHQUVoQ1Asc0RBQUk7d0JBQ0hRLFVBQVUsRUFBRSxDQUFDOzRCQUNYNkIsS0FBSyxFQUFFbkMsc0VBQXFDOzRCQUM1Q29DLFVBQVUsRUFBRSxDQUFNO3dCQUNwQixDQUFDO2tDQUNGLENBRUQ7Ozs7OztnR0FDQ3hDLHFEQUFHO3dCQUNGeUMsR0FBRyxFQUFDLENBQUk7d0JBQ1IvQixVQUFVLEVBQUUsQ0FBQzs0QkFDWFUsT0FBTyxFQUFFLENBQU07NEJBQ2ZzQixRQUFRLEVBQUUsQ0FBTTs0QkFDaEJwQixjQUFjLEVBQUUsQ0FBZTs0QkFDL0JxQixJQUFJLEVBQUUsQ0FBQzs0QkFDUEMsVUFBVSxFQUFFLENBQU07NEJBQ2xCQyxRQUFRLEVBQUUsQ0FBTTt3QkFDbEIsQ0FBQztrQ0FFQXpDLHNEQUFzQixDQUFDLFFBQVEsQ0FBUDRDLE9BQU87MENBQzlCLE1BQU0sK0RBQUw5QyxzREFBSTtnQ0FDSDRCLE9BQU8sRUFBRSxRQUFRLEdBQUYsQ0FBQztvQ0FDZCxFQUFxRTtvQ0FDckUsRUFBRSxFQUFFbUIsT0FBTyxDQUFDM0MsS0FBSyxDQUFDNEMsY0FBYyxHQUFHLENBQUM7d0NBQ2xDNUMsS0FBSyxDQUFDNEMsY0FBYyxDQUFDRixPQUFPO29DQUM5QixDQUFDO2dDQUNILENBQUM7Z0NBQ0RQLEdBQUcsRUFBQyxDQUFJO2dDQUNSL0IsVUFBVSxFQUFFLENBQUM7b0NBQ1hzQixLQUFLLEVBQUUsQ0FBSztvQ0FDWnBCLFlBQVksRUFBRSxDQUFLO29DQUNuQkMsT0FBTyxFQUFFLENBQU07b0NBQ2ZzQyxLQUFLLEVBQUUsQ0FBQzt3Q0FDTjVCLGVBQWUsRUFBRW5CLG9FQUFvQztvQ0FDdkQsQ0FBQztvQ0FDRHdCLEtBQUssRUFBRSxDQUFDO3dDQUNOTCxlQUFlLEVBQUVuQixvRUFBb0M7b0NBQ3ZELENBQUM7Z0NBQ0gsQ0FBQztzSEFFQUQsdURBQUs7b0NBQUNpRCxHQUFHLEVBQUVKLE9BQU87Ozs7OzsrQkFiTEEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnJDLENBQUM7R0FuR2UzQyxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcz9lODRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uU2VuZFN0aWNrZXIocHJvcHMpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgcGFkZGluZzogJzAgM3B4IDAgMCcsXHJcbiAgICAgICAgICBtaW5XaWR0aDogJzQwcHgnLFxyXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMCcsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgZmlsdGVyOiBpc09wZW4gPyAnZ3JheXNjYWxlKDApJyA6ICdncmF5c2NhbGUoMSknLFxyXG4gICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgZmlsdGVyOiAnZ3JheXNjYWxlKDApJyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIGxhYmVsPVwi8J+Yi1wiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKCFpc09wZW4pfVxyXG4gICAgICAvPlxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgICB4czogJzIwMHB4JyxcclxuICAgICAgICAgICAgICBzbTogJzI5MHB4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxyXG4gICAgICAgICAgICByaWdodDogJzMwcHgnLFxyXG4gICAgICAgICAgICBib3R0b206ICczMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDQsIDQsIDUsIDAuMTUpIDBweCAwcHggMHB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLikgMHB4IDhweCAxNnB4IDBweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGlja2Vyc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthcHBDb25maWcuc3RpY2tlcnMubWFwKChzdGlja2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tERU5UUk8gRE8gQ09NUE9ORU5URV0gQ2xpY291IG5vIHN0aWNrZXI6Jywgc3RpY2tlcik7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKHByb3BzLm9uU3RpY2tlckNsaWNrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uU3RpY2tlckNsaWNrKHN0aWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIiBrZXk9e3N0aWNrZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBmb2N1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N0aWNrZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwic3R5bGVTaGVldCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImZpbHRlciIsImhvdmVyIiwibGFiZWwiLCJvbkNsaWNrIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwieHMiLCJzbSIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwiYm94U2hhZG93IiwiY29sb3IiLCJmb250V2VpZ2h0IiwidGFnIiwiZmxleFdyYXAiLCJmbGV4IiwicGFkZGluZ1RvcCIsIm92ZXJmbG93Iiwic3RpY2tlcnMiLCJtYXAiLCJzdGlja2VyIiwiQm9vbGVhbiIsIm9uU3RpY2tlckNsaWNrIiwiZm9jdXMiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});