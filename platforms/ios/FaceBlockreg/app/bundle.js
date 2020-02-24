require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./app.ts": "./app.ts",
	"./home/home-page.css": "./home/home-page.css",
	"./home/home-page.js": "./home/home-page.js",
	"./home/home-page.ts": "./home/home-page.ts",
	"./home/home-page.xml": "./home/home-page.xml",
	"./home/home-view-model.js": "./home/home-view-model.js",
	"./home/home-view-model.ts": "./home/home-view-model.ts",
	"./observable-property-decorator.js": "./observable-property-decorator.js",
	"./observable-property-decorator.ts": "./observable-property-decorator.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"home/home-page\"></Frame>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".home-panel"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"margin","value":"15"}]},{"type":"rule","selectors":[".description-label"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app = __webpack_require__("tns-core-modules/application");
app.run({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/


/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["run"]({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.ts" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".form"],"declarations":[{"type":"declaration","property":"margin-left","value":"30"},{"type":"declaration","property":"margin-right","value":"30"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":[".header"],"declarations":[{"type":"declaration","property":"font-size","value":"60"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"color","value":"red"},{"type":"declaration","property":"font-weight","value":"100"},{"type":"declaration","property":"margin-bottom","value":"80"},{"type":"declaration","property":"border-color","value":"black"}]},{"type":"rule","selectors":[".input-field"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".input"],"declarations":[{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"font-weight","value":"60"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"red"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"25%"},{"type":"declaration","property":"font-weight","value":"90"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./home/home-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = __webpack_require__("./home/home-view-model.ts");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
}
exports.pageLoaded = pageLoaded;


/***/ }),

/***/ "./home/home-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./home/home-view-model.ts");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new _home_view_model__WEBPACK_IMPORTED_MODULE_0__["HomeViewModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xlms=\"http://schemas.nativescript.org/tns.xsd\"\n    navigatingTo=\"navigatingTo\" class=\"page\">\n    <Page.actionBar>\n        <ActionBar title=\"FaceBlock\" icon=\"\" class=\"action-bar\">\n        </ActionBar>\n    </Page.actionBar>\n\n    <flexboxLayout class=\"page\">\n\n        <StackLayout class=\"form\">\n            <Label class=\"header\" text=\"FaceBlock\"></Label>\n\n            <StackLayout class=\"input-field\">\n                <TextField class=\"input\" hint=\"Username\" text=\"{{ username}}\">\n                </TextField>\"\n                <StackLayout class=\"hr-light\"></StackLayout>\n            </StackLayout>\n\n            <StackLayout class=\"input-field\">\n                <TextField class=\"input\" secure=\"true\" hint=\"Password\"\n                    text=\"{{ password }}\"></TextField>\n                <StackLayout class=\"hr-light\"></StackLayout>\n            </StackLayout>\n\n            <Button text=\"Login\" tap=\"submit()\" class=\"btn btn-primary\">\n            </Button>\n\n\n        </StackLayout>\n\n    </flexboxLayout>\n\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./home/home-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__("tns-core-modules/data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        return _super.call(this) || this;
    }
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;


/***/ }),

/***/ "./home/home-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);

var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        return _super.call(this) || this;
    }
    return HomeViewModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./observable-property-decorator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.ObservableProperty = ObservableProperty;


/***/ }),

/***/ "./observable-property-decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableProperty", function() { return ObservableProperty; });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./observable-property-decorator.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./observable-property-decorator.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXBhZ2UueG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS12aWV3LW1vZGVsLnRzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSjs7Ozs7Ozs7QUNqQ0Esb0U7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDUkEsK0dBQWlFLG1CQUFPLENBQUMsa0RBQWtDO0FBQzNHLGdFQUFnRSxtQkFBTyxDQUFDLGtEQUFrQztBQUMxRyxvRUFBb0UsbUJBQU8sQ0FBQyxxREFBcUM7QUFDakgsbUVBQW1FLG1CQUFPLENBQUMscURBQXFDLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLCtEQUErRCxFQUFFLGtFQUFrRSxFQUFFLG9EQUFvRCx5REFBeUQsRUFBRSxFQUFFLDJEQUEyRCxrRUFBa0UsRUFBRSx5REFBeUQsRUFBRSxzREFBc0QsRUFBRSxFQUFFLGtFQUFrRSw2REFBNkQsRUFBRSx3QjtBQUM1eEIsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlELEtBQUs7QUFDTCxDOzs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFVBQVUsbUJBQU8sQ0FBQyw4QkFBOEI7QUFDaEQsU0FBUyx5QkFBeUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1BvRDtBQUFBO0FBQUE7QUFBQTtBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsc0JBQVUsMEVBQWdCO0FBQ3BDOzs7RUFHRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xGLGdFQUFrQixrQ0FBa0MsVUFBVSxxREFBcUQsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsdURBQXVELEVBQUUsRUFBRSxxREFBcUQsK0RBQStELEVBQUUsRUFBRSx1REFBdUQseURBQXlELEVBQUUsOERBQThELEVBQUUsc0RBQXNELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUsK0RBQStELEVBQUUsRUFBRSw0REFBNEQsNkRBQTZELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSw0REFBNEQsc0RBQXNELEVBQUUsaUVBQWlFLEVBQUUsd0RBQXdELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsd0I7QUFDbCtDLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQywyQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQWtEO0FBRTNDLFNBQVMsVUFBVSxDQUFDLElBQWU7SUFDdEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksOERBQWEsRUFBRSxDQUFDO0FBQzlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQsZ2hCQUFnaEIsV0FBVywrUkFBK1IsWUFBWSxxUjtBQUN0MEIsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQStDO0FBQzFFLEtBQUs7QUFDTCxDOzs7Ozs7Ozs7QUNSYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGtDQUFrQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQThEO0FBRTlEO0lBQW1DLGlDQUFVO0lBQ3pDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBSmtDLDJFQUFVLEdBSTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTtBQUFBO0FBQU8sU0FBUyxrQkFBa0I7SUFDOUIsT0FBTyxVQUFDLE1BQWtCLEVBQUUsV0FBbUI7UUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3ZDLEdBQUc7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFDRCxHQUFHLFlBQUMsS0FBSztnQkFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssS0FBSyxFQUFFO29CQUNuQyxPQUFPO2lCQUNWO2dCQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENELHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC50c1wiLFxuXHRcIi4vaG9tZS9ob21lLXBhZ2UuY3NzXCI6IFwiLi9ob21lL2hvbWUtcGFnZS5jc3NcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLmpzXCI6IFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiLFxuXHRcIi4vaG9tZS9ob21lLXBhZ2UudHNcIjogXCIuL2hvbWUvaG9tZS1wYWdlLnRzXCIsXG5cdFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIjogXCIuL2hvbWUvaG9tZS1wYWdlLnhtbFwiLFxuXHRcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIjogXCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC50c1wiOiBcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwudHNcIixcblx0XCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLmpzXCI6IFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci5qc1wiLFxuXHRcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IudHNcIjogXCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJob21lL2hvbWUtcGFnZVxcXCI+PC9GcmFtZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhvbWUtcGFuZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVzY3JpcHRpb24tbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmFwcC5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbiIsImltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmFwcC5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbiIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb3JtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJlZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjgwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXQtZmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjUlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI5MFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBob21lX3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2hvbWUtdmlldy1tb2RlbFwiKTtcbmZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJncykge1xuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBob21lX3ZpZXdfbW9kZWxfMS5Ib21lVmlld01vZGVsKCk7XG59XG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xuIiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBIb21lVmlld01vZGVsIH0gZnJvbSAnLi9ob21lLXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhsbXM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiIGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRmFjZUJsb2NrXFxcIiBpY29uPVxcXCJcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcblxcbiAgICA8ZmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJGYWNlQmxvY2tcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJVc2VybmFtZVxcXCIgdGV4dD1cXFwie3sgdXNlcm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxcXCJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IHBhc3N3b3JkIH19XFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTG9naW5cXFwiIHRhcD1cXFwic3VibWl0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxcblxcblxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgPC9mbGV4Ym94TGF5b3V0PlxcblxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xudmFyIEhvbWVWaWV3TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhvbWVWaWV3TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSG9tZVZpZXdNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBIb21lVmlld01vZGVsO1xufShvYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5Ib21lVmlld01vZGVsID0gSG9tZVZpZXdNb2RlbDtcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gT2JzZXJ2YWJsZVByb3BlcnR5KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuT2JzZXJ2YWJsZVByb3BlcnR5ID0gT2JzZXJ2YWJsZVByb3BlcnR5O1xuIiwiLyoqXG5UaGlzIGZpbGUgZGVmaW5lcyBhIGRlY29yYXRvciB5b3UgY2FuIHVzZSB0byBlbmFibGUgdHdvLXdheVxuYmluZGluZyBvbiB2aWV3LW1vZGVsIHByb3BlcnRpZXMuXG5cbkZvciBleGFtcGxlOlxuXG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcblxuQE9ic2VydmFibGVQcm9wZXJ0eSgpIG15UHJvcGVydHk6IGJvb2xlYW4gPSB0cnVlO1xuXG5SZWFkIG1vcmUgYXQgaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9ibG9nL25hdGl2ZXNjcmlwdC1vYnNlcnZhYmxlLW1hZ2ljLXN0cmluZy1wcm9wZXJ0eS1uYW1lLWJlLWdvbmVcbioqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmFibGVQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JzZXJ2YWJsZSwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UocHJvcGVydHlLZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9