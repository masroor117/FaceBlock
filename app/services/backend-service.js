const init = require("kinvey-nativescript-sdk").init;
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
