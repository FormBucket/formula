import {decodebase64 as atob} from './decodebase64'

export function decodejwt(token) {

  function b64DecodeUnicode(str) {
      return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  }

  return JSON.parse( b64DecodeUnicode( token.split('.')[1] ) )
}
