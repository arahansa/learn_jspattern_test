/**
 * Created by jarvis on 2017. 1. 12..
 */

var Conference = Conference || {};

Conference.outgoingLinkClickHandler = function(clickRecorder){
    'use strict';

    return {
        // 주입한 클릭 레코더를 가리키는 참조체를 보관한다.
        linkClickRecorder : clickRecorder,
        // 클릭 내용을 저장하고 clickRecorder 클릭을 기록하는 객체를 생성한다
        handleClick : function handleClick(){
            // 클릭 내용 객체를 만든다.
            var clickDetails = {};
            this.linkClickRecorder.recordClick(clickDetails);
        }

    }
}
