import rm = require('./src/ResponseMapper')
import map = require('../responseMap.json')

const ResponseMapper = new rm.ResponseMapper()
ResponseMapper.loadMap(map)
let error1 = ResponseMapper.isResponseError(JSON.parse('{\"error\": \"Password must be atleast 8 characters long.\"}'))
if(error1.error) {
  console.log('====================================');
  console.log(error1.code);
  console.log('====================================');
} else {
  console.log('====================================');
  console.log("not an error");
  console.log('====================================');
}

let error2 = ResponseMapper.isResponseError('{\"error\": \"The user with identifier:123123 does not have the role:asdasd, so it can not be deleted.\"}')
if(error2.error) {
  console.log('====================================');
  console.log(error2.code);
  console.log('====================================');
} else {
  console.log('====================================');
  console.log("not an error");
  console.log('====================================');
}

let error3 = ResponseMapper.isResponseError('{\"error\": \"The user ssswith identifier:123123 does not haveadsadasdada the role:asdasd, so it can not be deleted.\"}')
if(error3.error) {
  console.log('====================================');
  console.log(error3.code);
  console.log('====================================');
} else {
  console.log('====================================');
  console.log("not an error");
  console.log('====================================');
}

let error4 = ResponseMapper.isResponseError(JSON.parse('{"valid": "aadasds"}'))
if(error4.error) {
  console.log('====================================');
  console.log(error4.code);
  console.log('====================================');
} else {
  console.log('====================================');
  console.log("not an error");
  console.log('====================================');
}

let error5 = ResponseMapper.isResponseError('{"valid": "aadasds"}')
if(error5.error) {
  console.log('====================================');
  console.log(error5.code);
  console.log('====================================');
} else {
  console.log('====================================');
  console.log("not an error");
  console.log('====================================');
}