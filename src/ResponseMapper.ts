interface ResonseObject {
  error: boolean,
  code: string,
  message: string,
  error_level: number,
  response: string
}

/**
 * 
 * 
 * @export
 * @class ResponseMapper
 */
export class ResponseMapper {

  /**
   * Response map
   * 
   * @type {*}
   * @memberOf ResponseMapper
   */
  map:any

  /**
   * Load the response map
   * 
   * @param {*} map 
   * 
   * @memberOf ResponseMapper
   */
  loadMap(map: any) {
    this.map = map
  }

  /**
   * Parse the response, pass stringyfied object or object
   * 
   * @param {*} response 
   * @returns {boolean} 
   * 
   * @memberOf ResponseMapper
   */
  isResponseError(response: any): ResonseObject {
    if (typeof response === 'string') {
      if (response.indexOf('error') >= 0) {
        response = JSON.parse(response)
      } else {
        return {
          "error": false,
          "code": null,
          "message": null,
          "error_level": null,
          "response": response
        }
      }
    }
    if (typeof response === 'object') {
      if (response.hasOwnProperty('error')) {
        response = response.error
        if (!this.map || this.map === null){
          return {
            "error": true,
            "code": null,
            "message": null,
            "error_level": null,
            "response": response
          }
        }
        let messageString = response.toLowerCase()
        for (const key in this.map) {
          if (this.map.hasOwnProperty(key)) {
            if (messageString.indexOf(key) >= 0) {
              let message = this.map[key]
              message['response'] = response
              message['error'] = true
              return message
            }
          }
        }
      } else {
        return {
          "error": false,
          "code": null,
          "message": null,
          "error_level": null,
          "response": response
        }
      }
    }
    let message = this.map['default_response']
    message['response'] = response
    message['error'] = true
    return message
  }
}