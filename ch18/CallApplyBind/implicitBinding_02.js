/**
 *
 * Created by jarvis on 2017. 1. 10..
 */

function valIncrement(){
    this.val++;
}

var obj = {
    val: 0,
    incrementValue : valIncrement
};



obj.incrementValue();
obj.incrementValue();
obj.incrementValue();

console.log("최종 결과값 : ", obj.val); // 결과 3





/**
 * Created by jarvis on 2017. 1. 10..
 */
