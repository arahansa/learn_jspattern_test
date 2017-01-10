/**
 *
 * Created by jarvis on 2017. 1. 10..
 */

function incrementValue(){
    "use strict";
    this.val++;
}

//  함수도 프로퍼티를 가질 수 있다
incrementValue.val =  0;

incrementValue();
incrementValue();
incrementValue();

console.log(" 최종 값 : "+ incrementValue.val); // ???

