import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XyzLibService {

  flattenArrayDepth(arr: any, d = Infinity) {
    return d > 0 ? arr.reduce((acc: any[], val: any) => acc.concat(Array.isArray(val) ? this.flattenArrayDepth(val, d - 1) : val), []) : arr.slice();
  }

  iLogThingsAndStuff(msg?: string) {
    console.log('%c I log things and stuff like: ', 'background: #41ff6b; color: #ff4700;', !!msg ? msg : '');
  }

}
