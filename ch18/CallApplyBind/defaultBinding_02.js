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

var incrementRef = obj.incrementValue;

incrementRef();
incrementRef();
incrementRef();


console.log(" 최종 값 : "+ obj.val); // ???

