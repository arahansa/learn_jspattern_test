/**
 * Created by jarvis on 2017. 1. 11..
 */

var Conference = Conference || {};

Conference.polyfills = Conference.polyfills || {};

Conference.polyfills.arrayForEach = function(callbackFn, thisObj){
    'use strict';

    var i;
    if(typeof callbackFn !== "function"){
        throw new Error(callbackFn +"은(는) 함수가 아닙니다!");
    }

    for(i=0;i<this.length;i++){
        callbackFn();
    }
}
