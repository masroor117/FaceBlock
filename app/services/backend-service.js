const init = require("kinvey-nativescript-sdk").init;
const kinveyAppKey = "kid_HJWTScPq8";
const kinveyAppSecret = "198011a8bc9246e9919564baede9a5fe";
const kinveyUsername = "admin";
const kinveyPassword = "admin";

exports.setup = function () {
    init({
        appKey: kinveyAppKey,
        appSecret: kinveyAppSecret
    });
};
