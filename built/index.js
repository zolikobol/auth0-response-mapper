"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm = require("./src/ResponseMapper");
var map = require("../responseMap.json");
var ResponseMapper = new rm.ResponseMapper();
ResponseMapper.loadMap(map);
var error1 = ResponseMapper.isResponseError(JSON.parse('{\"error\": \"Password must be atleast 8 characters long.\"}'));
if (error1.error) {
    console.log('====================================');
    console.log(error1.code);
    console.log('====================================');
}
else {
    console.log('====================================');
    console.log("not an error");
    console.log('====================================');
}
var error2 = ResponseMapper.isResponseError('{\"error\": \"The user with identifier:123123 does not have the role:asdasd, so it can not be deleted.\"}');
if (error2.error) {
    console.log('====================================');
    console.log(error2.code);
    console.log('====================================');
}
else {
    console.log('====================================');
    console.log("not an error");
    console.log('====================================');
}
var error3 = ResponseMapper.isResponseError('{\"error\": \"The user ssswith identifier:123123 does not haveadsadasdada the role:asdasd, so it can not be deleted.\"}');
if (error3.error) {
    console.log('====================================');
    console.log(error3.code);
    console.log('====================================');
}
else {
    console.log('====================================');
    console.log("not an error");
    console.log('====================================');
}
var error4 = ResponseMapper.isResponseError(JSON.parse('{"valid": "aadasds"}'));
if (error4.error) {
    console.log('====================================');
    console.log(error4.code);
    console.log('====================================');
}
else {
    console.log('====================================');
    console.log("not an error");
    console.log('====================================');
}
var error5 = ResponseMapper.isResponseError('{"valid": "aadasds"}');
if (error5.error) {
    console.log('====================================');
    console.log(error5.code);
    console.log('====================================');
}
else {
    console.log('====================================');
    console.log("not an error");
    console.log('====================================');
}
