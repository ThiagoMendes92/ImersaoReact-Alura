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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(param) {\n    var onStickerClick = param.onStickerClick;\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    var styles = Styles(isOpen);\n    var sendStikes = function(sticker) {\n        if (Boolean(onStickerClick)) {\n            onStickerClick(sticker);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: styles.panel,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: styles.sendButton,\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: styles.panelOptions,\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: styles.panelOptionsText,\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: styles.stykesList,\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                tag: \"li\",\n                                onClick: function() {\n                                    return sendStikes(sticker);\n                                },\n                                styleSheet: styles.stykesListLine,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Stycker, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documentos\\\\GitHub\\\\ImersaoReact-Alura\\\\aluracord\\\\src\\\\components\\\\ButtonSendSticker.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar Styles = function(isOpen) {\n    return {\n        panel: {\n            position: 'relative'\n        },\n        sendButton: {\n            borderRadius: '50%',\n            padding: '0 3px 0 0',\n            minWidth: '50px',\n            minHeight: '50px',\n            fontSize: '20px',\n            marginBottom: '8px',\n            lineHeight: '0',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: isOpen ? style.theme.colors.primary[500] : style.theme.colors.primary[600],\n            hover: {\n                backgroundColor: style.theme.colors.primary[600]\n            }\n        },\n        panelOptions: {\n            display: 'flex',\n            flexDirection: 'column',\n            borderRadius: '5px',\n            position: 'absolute',\n            backgroundColor: style.theme.colors.neutrals[800],\n            width: {\n                xs: '200px',\n                sm: '290px'\n            },\n            height: '300px',\n            right: '30px',\n            bottom: '30px',\n            padding: '10px',\n            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n        },\n        panelOptionsText: {\n            color: style.theme.colors.neutrals[\"000\"],\n            fontWeight: 'bold'\n        },\n        stykesList: {\n            display: 'flex',\n            flexWrap: 'wrap',\n            justifyContent: 'space-between',\n            flex: 1,\n            paddingTop: '16px',\n            overflowY: 'scroll'\n        },\n        stykesListLine: {\n            width: '50%',\n            borderRadius: '5px',\n            padding: '10px',\n            focus: {\n                backgroundColor: style.theme.colors.neutrals[600]\n            },\n            hover: {\n                backgroundColor: style.theme.colors.neutrals[600]\n            }\n        }\n    };\n};\n_c1 = Styles;\nvar _c, _c1;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n$RefreshReg$(_c1, \"Styles\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixRQUFRLENBQUNNLGlCQUFpQixDQUFDLEtBQWdCLEVBQUUsQ0FBQztRQUFsQkMsY0FBYyxHQUFmLEtBQWdCLENBQWZBLGNBQWM7OztJQUN2RCxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsR0FBSyxDQUFDVyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0gsTUFBTTtJQUU1QixHQUFLLENBQUNJLFVBQVUsR0FBRyxRQUFRLENBQVBDLE9BQU8sRUFBRyxDQUFDO1FBQzdCLEVBQUUsRUFBRUMsT0FBTyxDQUFDUixjQUFjLEdBQUcsQ0FBQztZQUM1QkEsY0FBYyxDQUFDTyxPQUFPO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSGIscURBQUc7UUFBQ2UsVUFBVSxFQUFFTCxNQUFNLENBQUNNLEtBQUs7O3dGQUMxQmYsd0RBQU07Z0JBQUNjLFVBQVUsRUFBRUwsTUFBTSxDQUFDTyxVQUFVO2dCQUFFQyxLQUFLLEVBQUMsQ0FBRztnQkFBQ0MsT0FBTyxFQUFFLFFBQVE7b0JBQUZWLE1BQU0sQ0FBTkEsWUFBWSxFQUFFRCxNQUFNOzs7Ozs7O1lBQ25GQSxNQUFNLGdGQUNKUixxREFBRztnQkFBQ2UsVUFBVSxFQUFFTCxNQUFNLENBQUNVLFlBQVk7Z0JBQUVELE9BQU8sRUFBRSxRQUFRO29CQUFGVixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Z0dBQ3BFUCxzREFBSTt3QkFBQ2EsVUFBVSxFQUFFTCxNQUFNLENBQUNXLGdCQUFnQjtrQ0FBRyxDQUU1Qzs7Ozs7O2dHQUNDckIscURBQUc7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QUFDLEdBQUc7WUFDbEQsQ0FBQztZQUNERixLQUFLLEVBQUUsQ0FBQztnQkFDTkwsZUFBZSxFQUFFQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSSxRQUFRLENBQUMsR0FBRztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDO01BakVLcEMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcz9lODRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25TZW5kU3RpY2tlcih7b25TdGlja2VyQ2xpY2t9KSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3BlblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gU3R5bGVzKGlzT3Blbik7XHJcblxyXG4gIGNvbnN0IHNlbmRTdGlrZXMgPSAoc3RpY2tlcik9PntcclxuICAgIGlmIChCb29sZWFuKG9uU3RpY2tlckNsaWNrKSkge1xyXG4gICAgICBvblN0aWNrZXJDbGljayhzdGlja2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN0eWxlU2hlZXQ9e3N0eWxlcy5wYW5lbH0gPlxyXG4gICAgICA8QnV0dG9uIHN0eWxlU2hlZXQ9e3N0eWxlcy5zZW5kQnV0dG9ufSBsYWJlbD1cIvCfmItcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9IC8+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxCb3ggc3R5bGVTaGVldD17c3R5bGVzLnBhbmVsT3B0aW9uc30gb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZVNoZWV0PXtzdHlsZXMucGFuZWxPcHRpb25zVGV4dH0gPlxyXG4gICAgICAgICAgICBTdGlja2Vyc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJveCB0YWc9XCJ1bFwiIHN0eWxlU2hlZXQ9e3N0eWxlcy5zdHlrZXNMaXN0fT5cclxuICAgICAgICAgICAge2FwcENvbmZpZy5zdGlja2Vycy5tYXAoKHN0aWNrZXIpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJsaVwiIGtleT17c3RpY2tlcn0gb25DbGljaz17KCkgPT4gc2VuZFN0aWtlcyhzdGlja2VyKX0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXtzdHlsZXMuc3R5a2VzTGlzdExpbmV9ID5cclxuICAgICAgICAgICAgICAgIDxTdHlja2VyIHNyYz17c3RpY2tlcn0gLz5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBTdHlsZXMgPSAoaXNPcGVuKT0+eyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYW5lbDp7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbmRCdXR0b246e1xyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMCAzcHggMCAwJyxcclxuICAgICAgICAgICAgbWluV2lkdGg6ICc1MHB4JyxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcwJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3BlbiA/IHN0eWxlLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0gOiBzdHlsZS50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdHlsZS50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYW5lbE9wdGlvbnM6e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3R5bGUudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgeHM6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgc206ICcyOTBweCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICAgICAgcmlnaHQ6ICczMHB4JyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzBweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoNCwgNCwgNSwgMC4xNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHggMTZweCAwcHgnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhbmVsT3B0aW9uc1RleHQ6IHtcclxuICAgICAgICAgICAgY29sb3I6IHN0eWxlLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN0eWtlc0xpc3Q6e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcclxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdHlrZXNMaXN0TGluZTp7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICBmb2N1czoge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3R5bGUudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdHlsZS50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJvblN0aWNrZXJDbGljayIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwic3R5bGVzIiwiU3R5bGVzIiwic2VuZFN0aWtlcyIsInN0aWNrZXIiLCJCb29sZWFuIiwic3R5bGVTaGVldCIsInBhbmVsIiwic2VuZEJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsInBhbmVsT3B0aW9ucyIsInBhbmVsT3B0aW9uc1RleHQiLCJ0YWciLCJzdHlrZXNMaXN0Iiwic3RpY2tlcnMiLCJtYXAiLCJzdHlrZXNMaXN0TGluZSIsIlN0eWNrZXIiLCJzcmMiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImhvdmVyIiwiZmxleERpcmVjdGlvbiIsIm5ldXRyYWxzIiwid2lkdGgiLCJ4cyIsInNtIiwiaGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmbGV4V3JhcCIsImZsZXgiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3dZIiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});