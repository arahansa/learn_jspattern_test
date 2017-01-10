/**
 *
 * Created by jarvis on 2017. 1. 10..
 */

var obj = {
    val: 0,
    incrementValue : function incrementValue(){
        this.val++;
    }
};



obj.incrementValue();
obj.incrementValue();
obj.incrementValue();

console.log("최종 결과값 : ", obj.val); // 결과 3





