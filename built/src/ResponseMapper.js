"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @export
 * @class ResponseMapper
 */
var ResponseMapper = /** @class */ (function () {
    function ResponseMapper() {
    }
    /**
     * Load the response map
     *
     * @param {*} map
     *
     * @memberOf ResponseMapper
     */
    ResponseMapper.prototype.loadMap = function (map) {
        this.map = map;
    };
    /**
     * Parse the response, pass stringyfied object or object
     *
     * @param {*} response
     * @returns {boolean}
     *
     * @memberOf ResponseMapper
     */
    ResponseMapper.prototype.isResponseError = function (response) {
        if (typeof response === 'string') {
            if (response.indexOf('error') >= 0) {
                response = JSON.parse(response);
            }
            else {
                return {
                    "error": false,
                    "code": null,
                    "message": null,
                    "error_level": null,
                    "response": response
                };
            }
        }
        if (typeof response === 'object') {
            if (response.hasOwnProperty('error')) {
                response = response.error;
                if (!this.map || this.map === null) {
                    return {
                        "error": true,
                        "code": null,
                        "message": null,
                        "error_level": null,
                        "response": response
                    };
                }
                var messageString = response.toLowerCase();
                for (var key in this.map) {
                    if (this.map.hasOwnProperty(key)) {
                        if (messageString.indexOf(key) >= 0) {
                            var message_1 = this.map[key];
                            message_1['response'] = response;
                            message_1['error'] = true;
                            return message_1;
                        }
                    }
                }
            }
            else {
                return {
                    "error": false,
                    "code": null,
                    "message": null,
                    "error_level": null,
                    "response": response
                };
            }
        }
        var message = this.map['default_response'];
        message['response'] = response;
        message['error'] = true;
        return message;
    };
    return ResponseMapper;
}());
exports.ResponseMapper = ResponseMapper;
