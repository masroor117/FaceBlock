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
	"./@nativescript/theme/css/default.css": "./@nativescript/theme/css/default.css",
	"./advice/advice.css": "./advice/advice.css",
	"./advice/advice.js": "./advice/advice.js",
	"./advice/advice.xml": "./advice/advice.xml",
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./faq/faq.css": "./faq/faq.css",
	"./faq/faq.js": "./faq/faq.js",
	"./faq/faq.xml": "./faq/faq.xml",
	"./home/home-page.css": "./home/home-page.css",
	"./home/home-page.js": "./home/home-page.js",
	"./home/home-page.ts": "./home/home-page.ts",
	"./home/home-page.xml": "./home/home-page.xml",
	"./home/home-view-model.js": "./home/home-view-model.js",
	"./home/home-view-model.ts": "./home/home-view-model.ts",
	"./login/login-page.css": "./login/login-page.css",
	"./login/login-page.js": "./login/login-page.js",
	"./login/login-page.xml": "./login/login-page.xml",
	"./login/login-view-model.js": "./login/login-view-model.js",
	"./map/map.css": "./map/map.css",
	"./map/map.js": "./map/map.js",
	"./map/map.xml": "./map/map.xml",
	"./services/backend-service.js": "./services/backend-service.js",
	"./services/user-service.js": "./services/user-service.js"
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

/***/ "./@nativescript/theme/css/default.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./@nativescript/theme/css/default.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./@nativescript/theme/css/default.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./advice/advice.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./advice/advice.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./advice/advice.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./advice/advice.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./advice/advice.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./advice/advice.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./advice/advice.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = ""; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./advice/advice.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./advice/advice.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"login/login-page\"></Frame>\r\n"; 
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
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"rgb(10, 10, 10)"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};; 
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

/* WEBPACK VAR INJECTION */(function(global) {
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
        const application = __webpack_require__("tns-core-modules/application");
const backendService = __webpack_require__("./services/backend-service.js");

backendService.setup(); // Initialize Kinvey Backend

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./faq/faq.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./faq/faq.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./faq/faq.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./faq/faq.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./faq/faq.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./faq/faq.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./faq/faq.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = ""; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./faq/faq.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./faq/faq.xml" });
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

/* WEBPACK VAR INJECTION */(function(global) {const HomeViewModel = __webpack_require__("./home/home-view-model.js");
const homeViewModel = new HomeViewModel();

exports.pageLoaded = function(args) {
  const page = args.object;
  page.bindingContext = homeViewModel;
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.ts":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (6:31)\nYou may need an appropriate loader to handle this file type.\n| import { HomeViewModel } from './home-view-model';\r\n| \r\n> export function pageLoaded(args: EventData) {\r\n|     let page = <Page>args.object;\r\n|     page.bindingContext = new HomeViewModel();\r");

/***/ }),

/***/ "./home/home-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xlms=\"http://schemas.nativescript.org/tns.xsd\"\r\n    navigatingTo=\"navigatingTo\" class=\"page\">\r\n    <Page.actionBar>\r\n        <ActionBar title=\"FaceBlock\" icon=\"\" class=\"action-bar\">\r\n        </ActionBar>\r\n    </Page.actionBar>\r\n\r\n    <flexboxLayout class=\"page\">\r\n\r\n        <StackLayout class=\"form\">\r\n            <Label class=\"header\" text=\"FaceBlock\"></Label>\r\n\r\n            <StackLayout class=\"input-field\">\r\n                <TextField class=\"input\" hint=\"Username\" text=\"{{ username}}\">\r\n                </TextField>\"\r\n                <StackLayout class=\"hr-light\"></StackLayout>\r\n            </StackLayout>\r\n\r\n            <StackLayout class=\"input-field\">\r\n                <TextField class=\"input\" secure=\"true\" hint=\"Password\"\r\n                    text=\"{{ password }}\"></TextField>\r\n                <StackLayout class=\"hr-light\"></StackLayout>\r\n            </StackLayout>\r\n\r\n            <Button text=\"Login\" tap=\"submit()\" class=\"btn btn-primary\">\r\n            </Button>\r\n\r\n\r\n        </StackLayout>\r\n\r\n    </flexboxLayout>\r\n\r\n</Page>"; 
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

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");
const dialogsModule = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

function HomeViewModel() {
  const viewModel = observableModule.fromObject({
    message: "You have successfully authenticated. This is where you build your core application functionality."
  });

  return viewModel;
}


module.exports = HomeViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);


class HomeViewModel extends tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    constructor() {
        super();
    }
}

/***/ }),

/***/ "./login/login-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"flex-direction","value":"column"}]},{"type":"rule","selectors":[".form"],"declarations":[{"type":"declaration","property":"margin-left","value":"30"},{"type":"declaration","property":"margin-right","value":"30"},{"type":"declaration","property":"flex-grow","value":"2"},{"type":"declaration","property":"vertical-align","value":"middle"}]},{"type":"rule","selectors":[".logo"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"12"},{"type":"declaration","property":"height","value":"90"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".header"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"font-size","value":"25"},{"type":"declaration","property":"font-weight","value":"600"},{"type":"declaration","property":"margin-bottom","value":"70"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"color","value":"rgb(12, 12, 12)"}]},{"type":"rule","selectors":[".page .input-field"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".input-field .input"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"placeholder-color","value":"#A8A8A8"}]},{"type":"rule","selectors":[".input:disabled"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"margin","value":"30 5 15 5"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".login-label"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"color","value":"#A8A8A8"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".sign-up-label"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".bold"],"declarations":[{"type":"declaration","property":"color","value":"#000000"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./login/login-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./login/login-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./login/login-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const LoginViewModel = __webpack_require__("./login/login-view-model.js");

const loginViewModel = new LoginViewModel();

exports.pageLoaded = function (args) {
    const page = args.object;
    page.bindingContext = loginViewModel;
}

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./login/login-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./login/login-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./login/login-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\" actionBarHidden=\"true\" xmlns=\"http://www.nativescript.org/tns.xsd\">\r\n    <FlexboxLayout class=\"page\">\r\n        <StackLayout class=\"form\">\r\n            <Image class=\"logo\" src=\"~/images/logo.png\" />\r\n            <Label class=\"header\" text=\"FaceBlock\" />\r\n\r\n            <GridLayout rows=\"auto, auto, auto\">\r\n                <StackLayout row=\"0\" class=\"input-field\">\r\n                    <TextField class=\"input\" text=\"{{ email }}\" hint=\"email\"\r\n                        keyboardType=\"email\" autocorrect=\"false\"\r\n                        autocapitalizationType=\"none\" returnKeyType=\"next\" />\r\n                    <Label class=\"hr-light\" />\r\n                </StackLayout>\r\n\r\n                <StackLayout row=\"1\" class=\"input-field\">\r\n                    <TextField id=\"password\" class=\"input\" text=\"{{ password }}\"\r\n                        hint=\"Password\" secure=\"true\" returnKeyType=\"{{ isLoggingIn ? 'done' : 'next' }}\" />\r\n                    <Label class=\"hr-light\" />\r\n                </StackLayout>\r\n\r\n                <StackLayout row=\"2\" class=\"input-field\" visibility=\"{{ !isLoggingIn ? 'visible' : 'collapse' }}\">\r\n                    <TextField id=\"confirmPassword\" class=\"input\" text=\"{{ confirmPassword }}\"\r\n                        hint=\"Confirm password\" secure=\"true\" returnKeyType=\"done\" />\r\n                    <Label class=\"hr-light\" />\r\n                </StackLayout>\r\n\r\n                <ActivityIndicator rowSpan=\"3\" busy=\"{{ processing }}\"></ActivityIndicator>\r\n            </GridLayout>\r\n\r\n            <Button text=\"{{ isLoggingIn ? 'Log In' : 'Sign Up' }}\" tap=\"{{ submit }}\" isEnabled=\"{{ !processing }}\"\r\n                class=\"btn btn-primary m-t-20\" />\r\n            <Label visibility=\"{{ isLoggingIn ? 'visible' : 'collapse' }}\"\r\n                text=\"Forgot your password?\" class=\"login-label\" tap=\"{{ forgotPassword }}\" />\r\n        </StackLayout>\r\n\r\n        <Label class=\"login-label sign-up-label\" tap=\"{{ toggleForm }}\">\r\n            <FormattedString>\r\n                <Span text=\"{{ isLoggingIn ? 'Don’t have an account? ' : 'Back to Login' }}\" />\r\n                <Span text=\"{{ isLoggingIn ? 'Sign up' : '' }}\" class=\"bold\" />\r\n            </FormattedString>\r\n        </Label>\r\n    </FlexboxLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./login/login-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./login/login-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./login/login-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__("tns-core-modules/data/observable");
const dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
const topmost = __webpack_require__("tns-core-modules/ui/frame").topmost;

const userService = __webpack_require__("./services/user-service.js");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "Email",
        password: "",
        confirmPassword: "",
        isLoggingIn: true,
        processing: false,

        toggleForm() {
            this.isLoggingIn = !this.isLoggingIn;
        },
        submit() {
            if (this.email.trim() === "" || this.password.trim() === "") {
                alert("Please provide both an email address and password.");
                return;
            }

            this.set("processing", true);
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.register();
            }
        },
        login() {
            userService.login({
                email: this.email,
                password: this.password
            }).then(() => {
                this.set("processing", false);
                topmost().navigate({
                    moduleName: "/home/home-page",
                    clearHistory: true
                });
            }).catch((e) => {
                this.set("processing", false);
                console.log(e);
                alert("Unfortunately we could not find your account.");
            });
        },
        register() {
            if (this.password != this.confirmPassword) {
                alert("Your passwords do not match.");
                return;
            }
            userService.register({
                email: this.email,
                password: this.password
            }).then(() => {
                this.set("processing", false);
                alert("Your account was successfully created. You can now login.");
                this.isLoggingIn = true;
            })
                .catch(() => {
                    this.set("processing", false);
                    alert("Unfortunately we were unable to create your account.");
                });
        },
        forgotPassword() {
            dialogsModule.prompt({
                title: "Forgot Password",
                message: "Enter the email address you used to register for APP NAME to reset your password.",
                inputType: "email",
                defaultText: "",
                okButtonText: "Ok",
                cancelButtonText: "Cancel"
            }).then((data) => {
                if (data.result) {
                    userService.resetPassword(data.text.trim())
                        .then(() => {
                            alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                        }).catch(() => {
                            alert("Unfortunately, an error occurred resetting your password.");
                        });
                }
            });
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./login/login-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./login/login-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map/map.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map/map.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./map/map.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map/map.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map/map.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./map/map.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map/map.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = ""; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map/map.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./map/map.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"app.js","name":"tns-template-blank","version":"3.1.1"};

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const init = __webpack_require__("kinvey-nativescript-sdk").init;
const kinveyAppKey = "kid_Skp1Jox4L";
const kinveyAppSecret = "dc49afc894c24bb797d4e52d3287a0a5";
const kinveyUsername = "admin";
const kinveyPassword = "admin";

exports.setup = function () {
    init({
        appKey: kinveyAppKey,
        appSecret: kinveyAppSecret
    });
};
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/backend-service.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./services/backend-service.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./services/user-service.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Kinvey = __webpack_require__("kinvey-nativescript-sdk");

function handleErrors(error) {
    console.log("error?");
    console.error(error.message);
}

exports.register = function (user) {
    return new Promise((resolve, reject) => {
        Kinvey.User.logout()
            .then(() => {
                Kinvey.User.signup({ username: user.email, password: user.password })
                    .then(resolve)
                    .catch((error) => { handleErrors(error); reject(); })
            })
            .catch((error) => { handleErrors(error); reject(); })
    });
};

exports.login = function (user) {
    return new Promise((resolve, reject) => {
        Kinvey.User.logout()
            .then(() => {
                Kinvey.User.login(user.email, user.password)
                    .then(resolve)
                    .catch((error) => { handleErrors(error); reject(); })
            })
            .catch((error) => { handleErrors(error); reject(); })
    });
};

exports.resetPassword = function (email) {
    return Kinvey.User.resetPassword(email)
        .catch(handleErrors);
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/user-service.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./services/user-service.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "kinvey-nativescript-sdk":
/***/ (function(module, exports) {

module.exports = require("kinvey-nativescript-sdk");

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

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWR2aWNlL2FkdmljZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWR2aWNlL2FkdmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hZHZpY2UvYWR2aWNlLnhtbCIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZmFxL2ZhcS5jc3MiLCJ3ZWJwYWNrOi8vLy4vZmFxL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9mYXEvZmFxLnhtbCIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXBhZ2UueG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS12aWV3LW1vZGVsLnRzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLXBhZ2UuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL21hcC9tYXAueG1sIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7QUMvQ0EsZ0VBQWtCLGtDQUFr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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnREFBZ0Q7QUFDcEY7QUFDQSx1Q0FBdUMscUJBQXFCLFVBQVUsRUFBRTtBQUN4RSxhQUFhO0FBQ2IsK0JBQStCLHFCQUFxQixVQUFVLEVBQUU7QUFDaEUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxxQkFBcUIsVUFBVSxFQUFFO0FBQ3hFLGFBQWE7QUFDYiwrQkFBK0IscUJBQXFCLFVBQVUsRUFBRTtBQUNoRSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIscURBQXFEO0FBQ2hGLEtBQUs7QUFDTCxDOzs7Ozs7OztBQzFDQSxvRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0BuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCI6IFwiLi9AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLFxuXHRcIi4vYWR2aWNlL2FkdmljZS5jc3NcIjogXCIuL2FkdmljZS9hZHZpY2UuY3NzXCIsXG5cdFwiLi9hZHZpY2UvYWR2aWNlLmpzXCI6IFwiLi9hZHZpY2UvYWR2aWNlLmpzXCIsXG5cdFwiLi9hZHZpY2UvYWR2aWNlLnhtbFwiOiBcIi4vYWR2aWNlL2FkdmljZS54bWxcIixcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vZmFxL2ZhcS5jc3NcIjogXCIuL2ZhcS9mYXEuY3NzXCIsXG5cdFwiLi9mYXEvZmFxLmpzXCI6IFwiLi9mYXEvZmFxLmpzXCIsXG5cdFwiLi9mYXEvZmFxLnhtbFwiOiBcIi4vZmFxL2ZhcS54bWxcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLmNzc1wiOiBcIi4vaG9tZS9ob21lLXBhZ2UuY3NzXCIsXG5cdFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLnRzXCI6IFwiLi9ob21lL2hvbWUtcGFnZS50c1wiLFxuXHRcIi4vaG9tZS9ob21lLXBhZ2UueG1sXCI6IFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIixcblx0XCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCI6IFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwudHNcIjogXCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiOiBcIi4vbG9naW4vbG9naW4tcGFnZS5jc3NcIixcblx0XCIuL2xvZ2luL2xvZ2luLXBhZ2UuanNcIjogXCIuL2xvZ2luL2xvZ2luLXBhZ2UuanNcIixcblx0XCIuL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCI6IFwiLi9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbG9naW4vbG9naW4tdmlldy1tb2RlbC5qc1wiOiBcIi4vbG9naW4vbG9naW4tdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vbWFwL21hcC5jc3NcIjogXCIuL21hcC9tYXAuY3NzXCIsXG5cdFwiLi9tYXAvbWFwLmpzXCI6IFwiLi9tYXAvbWFwLmpzXCIsXG5cdFwiLi9tYXAvbWFwLnhtbFwiOiBcIi4vbWFwL21hcC54bWxcIixcblx0XCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL3VzZXItc2VydmljZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W10sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL0BuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W10sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYWR2aWNlL2FkdmljZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FkdmljZS9hZHZpY2UuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hZHZpY2UvYWR2aWNlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYWR2aWNlL2FkdmljZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCJcIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hZHZpY2UvYWR2aWNlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FkdmljZS9hZHZpY2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwibG9naW4vbG9naW4tcGFnZVxcXCI+PC9GcmFtZT5cXHJcXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDEwLCAxMCwgMTApXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5OmRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIExpdmVTeW5jXG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgaG90IHVwZGF0ZXMgYXJlIGFwcGxpZWQsIGFzayB0aGUgbW9kdWxlcyB0byBhcHBseSB0aGUgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBpbml0aWFsIGFwcCBzdGFydFxuICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopKD88IVxcLlxcL1xcYnRlc3RzXFxiXFwvLio/KVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xyXG5jb25zdCBiYWNrZW5kU2VydmljZSA9IHJlcXVpcmUoXCJ+L3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZVwiKTtcclxuXHJcbmJhY2tlbmRTZXJ2aWNlLnNldHVwKCk7IC8vIEluaXRpYWxpemUgS2ludmV5IEJhY2tlbmRcclxuXHJcbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTtcclxuXHJcbi8qXHJcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxyXG5iZSBleGVjdXRlZCBvbiBpT1MuXHJcbiovXHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOltdLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2ZhcS9mYXEuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9mYXEvZmFxLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vZmFxL2ZhcS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2ZhcS9mYXEuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vZmFxL2ZhcS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9mYXEvZmFxLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0LWZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmVkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI1JVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiOTBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS9ob21lLXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgSG9tZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2hvbWUtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgaG9tZVZpZXdNb2RlbCA9IG5ldyBIb21lVmlld01vZGVsKCk7XHJcblxyXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBob21lVmlld01vZGVsO1xyXG59XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhsbXM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCJcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiIGNsYXNzPVxcXCJwYWdlXFxcIj5cXHJcXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRmFjZUJsb2NrXFxcIiBpY29uPVxcXCJcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXHJcXG4gICAgICAgIDwvQWN0aW9uQmFyPlxcclxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8ZmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJGYWNlQmxvY2tcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJVc2VybmFtZVxcXCIgdGV4dD1cXFwie3sgdXNlcm5hbWV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IHBhc3N3b3JkIH19XFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTG9naW5cXFwiIHRhcD1cXFwic3VibWl0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxcclxcblxcclxcblxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG4gICAgPC9mbGV4Ym94TGF5b3V0PlxcclxcblxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3Qgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XHJcbmNvbnN0IGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVWaWV3TW9kZWwoKSB7XHJcbiAgY29uc3Qgdmlld01vZGVsID0gb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcclxuICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuIFRoaXMgaXMgd2hlcmUgeW91IGJ1aWxkIHlvdXIgY29yZSBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5LlwiXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2aWV3TW9kZWw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVWaWV3TW9kZWw7XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmbGV4LWRpcmVjdGlvblwiLFwidmFsdWVcIjpcImNvbHVtblwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb3JtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZmxleC1ncm93XCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibWlkZGxlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxvZ29cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI5MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI3MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigxMiwgMTIsIDEyKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlIC5pbnB1dC1maWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dC1maWVsZCAuaW5wdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0E4QThBOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dDpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIzMCA1IDE1IDVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxvZ2luLWxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0E4QThBOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNpZ24tdXAtbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9sZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMDAwMFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vbG9naW4vbG9naW4tcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgTG9naW5WaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9sb2dpbi12aWV3LW1vZGVsXCIpO1xyXG5cclxuY29uc3QgbG9naW5WaWV3TW9kZWwgPSBuZXcgTG9naW5WaWV3TW9kZWwoKTtcclxuXHJcbmV4cG9ydHMucGFnZUxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbG9naW5WaWV3TW9kZWw7XHJcbn1cclxuXHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9sb2dpbi9sb2dpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbG9naW4vbG9naW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxyXFxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2xvZ28ucG5nXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaGVhZGVyXFxcIiB0ZXh0PVxcXCJGYWNlQmxvY2tcXFwiIC8+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgdGV4dD1cXFwie3sgZW1haWwgfX1cXFwiIGhpbnQ9XFxcImVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoci1saWdodFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIHRleHQ9XFxcInt7IHBhc3N3b3JkIH19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIHJldHVybktleVR5cGU9XFxcInt7IGlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnIH19XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoci1saWdodFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyAhaXNMb2dnaW5nSW4gPyAndmlzaWJsZScgOiAnY29sbGFwc2UnIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgY2xhc3M9XFxcImlucHV0XFxcIiB0ZXh0PVxcXCJ7eyBjb25maXJtUGFzc3dvcmQgfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiQ29uZmlybSBwYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoci1saWdodFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XFxcIjNcXFwiIGJ1c3k9XFxcInt7IHByb2Nlc3NpbmcgfX1cXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwie3sgaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJyB9fVxcXCIgdGFwPVxcXCJ7eyBzdWJtaXQgfX1cXFwiIGlzRW5hYmxlZD1cXFwie3sgIXByb2Nlc3NpbmcgfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB2aXNpYmlsaXR5PVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZScgfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1xcXCIgY2xhc3M9XFxcImxvZ2luLWxhYmVsXFxcIiB0YXA9XFxcInt7IGZvcmdvdFBhc3N3b3JkIH19XFxcIiAvPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFxcXCIgdGFwPVxcXCJ7eyB0b2dnbGVGb3JtIH19XFxcIj5cXHJcXG4gICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJyB9fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwie3sgaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnJyB9fVxcXCIgY2xhc3M9XFxcImJvbGRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICA8L0xhYmVsPlxcclxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbG9naW4vbG9naW4tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3Qgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcclxuY29uc3QgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XHJcbmNvbnN0IHRvcG1vc3QgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS50b3Btb3N0O1xyXG5cclxuY29uc3QgdXNlclNlcnZpY2UgPSByZXF1aXJlKFwifi9zZXJ2aWNlcy91c2VyLXNlcnZpY2VcIik7XHJcblxyXG5mdW5jdGlvbiBMb2dpblZpZXdNb2RlbCgpIHtcclxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XHJcbiAgICAgICAgZW1haWw6IFwiRW1haWxcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXHJcblxyXG4gICAgICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW1haWwudHJpbSgpID09PSBcIlwiIHx8IHRoaXMucGFzc3dvcmQudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldChcInByb2Nlc3NpbmdcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKCkge1xyXG4gICAgICAgICAgICB1c2VyU2VydmljZS5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJwcm9jZXNzaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCIvaG9tZS9ob21lLXBhZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJwcm9jZXNzaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkICE9IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXNlclNlcnZpY2UucmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwicHJvY2Vzc2luZ1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuIFlvdSBjYW4gbm93IGxvZ2luLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChcInByb2Nlc3NpbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ3NNb2R1bGUucHJvbXB0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQVBQIE5BTUUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2dpblZpZXdNb2RlbDtcclxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2xvZ2luL2xvZ2luLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W10sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFwL21hcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL21hcC9tYXAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYXAvbWFwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFwL21hcC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCJcIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYXAvbWFwLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL21hcC9tYXAueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGluaXQgPSByZXF1aXJlKFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIikuaW5pdDtcclxuY29uc3Qga2ludmV5QXBwS2V5ID0gXCJraWRfU2twMUpveDRMXCI7XHJcbmNvbnN0IGtpbnZleUFwcFNlY3JldCA9IFwiZGM0OWFmYzg5NGMyNGJiNzk3ZDRlNTJkMzI4N2EwYTVcIjtcclxuY29uc3Qga2ludmV5VXNlcm5hbWUgPSBcImFkbWluXCI7XHJcbmNvbnN0IGtpbnZleVBhc3N3b3JkID0gXCJhZG1pblwiO1xyXG5cclxuZXhwb3J0cy5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGluaXQoe1xyXG4gICAgICAgIGFwcEtleToga2ludmV5QXBwS2V5LFxyXG4gICAgICAgIGFwcFNlY3JldDoga2ludmV5QXBwU2VjcmV0XHJcbiAgICB9KTtcclxufTtcclxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBLaW52ZXkgPSByZXF1aXJlKFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3I/XCIpO1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxufVxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEtpbnZleS5Vc2VyLmxvZ291dCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBoYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBoYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0cy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEtpbnZleS5Vc2VyLmxvZ291dCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnRzLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGVtYWlsKVxyXG4gICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcnMpO1xyXG59XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==