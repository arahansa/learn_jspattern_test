/**
 *
 * Created by jarvis on 2017. 1. 10..
 */

var obj = {
    val: 0,
    incrementValue : function incrementValue(){
        'use strict';
        this.val++;
    }
};

var incrementRef = obj.incrementValue;

incrementRef();




