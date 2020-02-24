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
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
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

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"login/login-page\"></Frame>\n"; 
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

throw new Error("Module parse failed: Unexpected token (6:31)\nYou may need an appropriate loader to handle this file type.\n| import { HomeViewModel } from './home-view-model';\n| \n> export function pageLoaded(args: EventData) {\n|     let page = <Page>args.object;\n|     page.bindingContext = new HomeViewModel();");

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
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\" actionBarHidden=\"true\" xmlns=\"http://www.nativescript.org/tns.xsd\">\n    <FlexboxLayout class=\"page\">\n        <StackLayout class=\"form\">\n            <Image class=\"logo\" src=\"~/images/logo.png\" />\n            <Label class=\"header\" text=\"FaceBlock\" />\n\n            <GridLayout rows=\"auto, auto, auto\">\n                <StackLayout row=\"0\" class=\"input-field\">\n                    <TextField class=\"input\" text=\"{{ email }}\" hint=\"email\"\n                        keyboardType=\"email\" autocorrect=\"false\"\n                        autocapitalizationType=\"none\" returnKeyType=\"next\" />\n                    <Label class=\"hr-light\" />\n                </StackLayout>\n\n                <StackLayout row=\"1\" class=\"input-field\">\n                    <TextField id=\"password\" class=\"input\" text=\"{{ password }}\"\n                        hint=\"Password\" secure=\"true\" returnKeyType=\"{{ isLoggingIn ? 'done' : 'next' }}\" />\n                    <Label class=\"hr-light\" />\n                </StackLayout>\n\n                <StackLayout row=\"2\" class=\"input-field\" visibility=\"{{ !isLoggingIn ? 'visible' : 'collapse' }}\">\n                    <TextField id=\"confirmPassword\" class=\"input\" text=\"{{ confirmPassword }}\"\n                        hint=\"Confirm password\" secure=\"true\" returnKeyType=\"done\" />\n                    <Label class=\"hr-light\" />\n                </StackLayout>\n\n                <ActivityIndicator rowSpan=\"3\" busy=\"{{ processing }}\"></ActivityIndicator>\n            </GridLayout>\n\n            <Button text=\"{{ isLoggingIn ? 'Log In' : 'Sign Up' }}\" tap=\"{{ submit }}\" isEnabled=\"{{ !processing }}\"\n                class=\"btn btn-primary m-t-20\" />\n            <Label visibility=\"{{ isLoggingIn ? 'visible' : 'collapse' }}\"\n                text=\"Forgot your password?\" class=\"login-label\" tap=\"{{ forgotPassword }}\" />\n        </StackLayout>\n\n        <Label class=\"login-label sign-up-label\" tap=\"{{ toggleForm }}\">\n            <FormattedString>\n                <Span text=\"{{ isLoggingIn ? 'Don’t have an account? ' : 'Back to Login' }}\" />\n                <Span text=\"{{ isLoggingIn ? 'Sign up' : '' }}\" class=\"bold\" />\n            </FormattedString>\n        </Label>\n    </FlexboxLayout>\n</Page>"; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4tcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7QUN0Q0EsZ0VBQWtCLGtDQUFrQyxpQztBQUNwRCxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0Q7QUFDMUYsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQ05BLHNFO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIseUNBQXlDO0FBQ3BFLEtBQUs7QUFDTCxDOzs7Ozs7OztBQ1JBLCtHQUFpRSxtQkFBTyxDQUFDLGtEQUFrQztBQUMzRyxnRUFBZ0UsbUJBQU8sQ0FBQyxrREFBa0M7QUFDMUcsb0VBQW9FLG1CQUFPLENBQUMscURBQXFDO0FBQ2pILG1FQUFtRSxtQkFBTyxDQUFDLHFEQUFxQyxHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSwr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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCLFVBQVUsRUFBRTtBQUN4RSxhQUFhO0FBQ2IsK0JBQStCLHFCQUFxQixVQUFVLEVBQUU7QUFDaEUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFxRDtBQUNoRixLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUMxQ0Esb0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiOiBcIi4vQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIixcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vaG9tZS9ob21lLXBhZ2UuY3NzXCI6IFwiLi9ob21lL2hvbWUtcGFnZS5jc3NcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLmpzXCI6IFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiLFxuXHRcIi4vaG9tZS9ob21lLXBhZ2UudHNcIjogXCIuL2hvbWUvaG9tZS1wYWdlLnRzXCIsXG5cdFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIjogXCIuL2hvbWUvaG9tZS1wYWdlLnhtbFwiLFxuXHRcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIjogXCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC50c1wiOiBcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwudHNcIixcblx0XCIuL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCI6IFwiLi9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiLFxuXHRcIi4vbG9naW4vbG9naW4tcGFnZS5qc1wiOiBcIi4vbG9naW4vbG9naW4tcGFnZS5qc1wiLFxuXHRcIi4vbG9naW4vbG9naW4tcGFnZS54bWxcIjogXCIuL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIsXG5cdFwiLi9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvdXNlci1zZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOltdLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL0BuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcImxvZ2luL2xvZ2luLXBhZ2VcXFwiPjwvRnJhbWU+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLXJvb3QueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vYXBwLXJvb3QueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigxMCwgMTAsIDEwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3woPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmNvbnN0IGJhY2tlbmRTZXJ2aWNlID0gcmVxdWlyZShcIn4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlXCIpO1xuXG5iYWNrZW5kU2VydmljZS5zZXR1cCgpOyAvLyBJbml0aWFsaXplIEtpbnZleSBCYWNrZW5kXG5cbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0LWZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmVkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI1JVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiOTBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS9ob21lLXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgSG9tZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2hvbWUtdmlldy1tb2RlbFwiKTtcbmNvbnN0IGhvbWVWaWV3TW9kZWwgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xuXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBmdW5jdGlvbihhcmdzKSB7XG4gIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGhvbWVWaWV3TW9kZWw7XG59XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS9ob21lLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bG1zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkZhY2VCbG9ja1xcXCIgaWNvbj1cXFwiXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgICAgICA8L0FjdGlvbkJhcj5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG4gICAgPGZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcblxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiRmFjZUJsb2NrXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiVXNlcm5hbWVcXFwiIHRleHQ9XFxcInt7IHVzZXJuYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cXFwiXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBwYXNzd29yZCB9fVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkxvZ2luXFxcIiB0YXA9XFxcInN1Ym1pdCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICA8L0J1dHRvbj5cXG5cXG5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgIDwvZmxleGJveExheW91dD5cXG5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS9ob21lLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xuY29uc3QgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuXG5mdW5jdGlvbiBIb21lVmlld01vZGVsKCkge1xuICBjb25zdCB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuIFRoaXMgaXMgd2hlcmUgeW91IGJ1aWxkIHlvdXIgY29yZSBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5LlwiXG4gIH0pO1xuXG4gIHJldHVybiB2aWV3TW9kZWw7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBIb21lVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZsZXgtZGlyZWN0aW9uXCIsXCJ2YWx1ZVwiOlwiY29sdW1uXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvcm1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmbGV4LWdyb3dcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJtaWRkbGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubG9nb1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjkwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjcwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDEyLCAxMiwgMTIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UgLmlucHV0LWZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0LWZpZWxkIC5pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjQThBOEE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0OmRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjMwIDUgMTUgNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubG9naW4tbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjQThBOEE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2lnbi11cC1sYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib2xkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAwMDAwXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBMb2dpblZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2xvZ2luLXZpZXctbW9kZWxcIik7XG5cbmNvbnN0IGxvZ2luVmlld01vZGVsID0gbmV3IExvZ2luVmlld01vZGVsKCk7XG5cbmV4cG9ydHMucGFnZUxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBsb2dpblZpZXdNb2RlbDtcbn1cblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2xvZ2luL2xvZ2luLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9sb2dpbi9sb2dpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIkZhY2VCbG9ja1xcXCIgLz5cXG5cXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiB0ZXh0PVxcXCJ7eyBlbWFpbCB9fVxcXCIgaGludD1cXFwiZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdGV4dD1cXFwie3sgcGFzc3dvcmQgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwie3sgaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIHZpc2liaWxpdHk9XFxcInt7ICFpc0xvZ2dpbmdJbiA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZScgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIHRleHQ9XFxcInt7IGNvbmZpcm1QYXNzd29yZCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJDb25maXJtIHBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cXFwiM1xcXCIgYnVzeT1cXFwie3sgcHJvY2Vzc2luZyB9fVxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnIH19XFxcIiB0YXA9XFxcInt7IHN1Ym1pdCB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyAhcHJvY2Vzc2luZyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHZpc2liaWxpdHk9XFxcInt7IGlzTG9nZ2luZ0luID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XFxcIiBjbGFzcz1cXFwibG9naW4tbGFiZWxcXFwiIHRhcD1cXFwie3sgZm9yZ290UGFzc3dvcmQgfX1cXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXFxcIiB0YXA9XFxcInt7IHRvZ2dsZUZvcm0gfX1cXFwiPlxcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcInt7IGlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnIH19XFxcIiBjbGFzcz1cXFwiYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgIDwvTGFiZWw+XFxuICAgIDwvRmxleGJveExheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbG9naW4vbG9naW4tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuY29uc3QgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG5jb25zdCB0b3Btb3N0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikudG9wbW9zdDtcblxuY29uc3QgdXNlclNlcnZpY2UgPSByZXF1aXJlKFwifi9zZXJ2aWNlcy91c2VyLXNlcnZpY2VcIik7XG5cbmZ1bmN0aW9uIExvZ2luVmlld01vZGVsKCkge1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgICAgIGVtYWlsOiBcIkVtYWlsXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcblxuICAgICAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbWFpbC50cmltKCkgPT09IFwiXCIgfHwgdGhpcy5wYXNzd29yZC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXQoXCJwcm9jZXNzaW5nXCIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG9naW4oKSB7XG4gICAgICAgICAgICB1c2VyU2VydmljZS5sb2dpbih7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwicHJvY2Vzc2luZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCIvaG9tZS9ob21lLXBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwicHJvY2Vzc2luZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyU2VydmljZS5yZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwicHJvY2Vzc2luZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLiBZb3UgY2FuIG5vdyBsb2dpbi5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwicHJvY2Vzc2luZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgICAgICBkaWFsb2dzTW9kdWxlLnByb21wdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQVBQIE5BTUUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpblZpZXdNb2RlbDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbG9naW4vbG9naW4tdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBpbml0ID0gcmVxdWlyZShcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCIpLmluaXQ7XG5jb25zdCBraW52ZXlBcHBLZXkgPSBcImtpZF9Ta3AxSm94NExcIjtcbmNvbnN0IGtpbnZleUFwcFNlY3JldCA9IFwiZGM0OWFmYzg5NGMyNGJiNzk3ZDRlNTJkMzI4N2EwYTVcIjtcbmNvbnN0IGtpbnZleVVzZXJuYW1lID0gXCJhZG1pblwiO1xuY29uc3Qga2ludmV5UGFzc3dvcmQgPSBcImFkbWluXCI7XG5cbmV4cG9ydHMuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW5pdCh7XG4gICAgICAgIGFwcEtleToga2ludmV5QXBwS2V5LFxuICAgICAgICBhcHBTZWNyZXQ6IGtpbnZleUFwcFNlY3JldFxuICAgIH0pO1xufTtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgS2ludmV5ID0gcmVxdWlyZShcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCIpO1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yP1wiKTtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xufVxuXG5leHBvcnRzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBLaW52ZXkuVXNlci5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgaGFuZGxlRXJyb3JzKGVycm9yKTsgcmVqZWN0KCk7IH0pXG4gICAgfSk7XG59O1xuXG5leHBvcnRzLmxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBLaW52ZXkuVXNlci5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgaGFuZGxlRXJyb3JzKGVycm9yKTsgcmVqZWN0KCk7IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBoYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcbiAgICB9KTtcbn07XG5cbmV4cG9ydHMucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGVtYWlsKVxuICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3JzKTtcbn1cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==