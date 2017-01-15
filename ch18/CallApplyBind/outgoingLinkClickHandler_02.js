/**
 * Created by jarvis on 2017. 1. 12..
 */

var Conference = Conference || {};

Conference.outgoingLinkClickHandler = function(clickRecorder){
    'use strict';

    var handler =  {
        // 주입한 클릭 레코더를 가리키는 참조체를 보관한다.
        linkClickRecorder : clickRecorder,
        // 클릭 내용을 저장하고 clickRecorder 클릭을 기록하는 객체를 생성한다
        handleClick : function handleClick(){
            // 클릭 내용 객체를 만든다.
            var clickDetails = {};
            handler.linkClickRecorder.recordClick(clickDetails);
        }
    }

    // handler.handleClick 을
    // handler 에 영구 바인딩된 새 함수 사본으로 교체한다.
    handler.handleCLick = handler.handleClick.bind(handler);
    return handler;
}
