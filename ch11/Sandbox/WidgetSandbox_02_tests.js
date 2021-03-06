/**
 * Created by arahansa on 2017-01-15.
 */
describe('Conference.WidgetSandbox', function(){

    'use strict';

    describe('생성자 함수', function(){

        it('new 키워드로 실행하지 않으면 예외를 던진다', function(){
            expect(function shouldThrow(){
                var sandbox = Conference.WidgetSandbox();
            }).toThrowError(Conference.WidgetSandbox.messages.mustBeCalledWithNew);
        });

        describe('new WidgetSandbox(toolsArray, widgetModule)', function(){
            // 도구 목록을 배열 형태로 넘겼을 때 작동 여부를 테스트

            it('위젯 함수가 누락되면 예외를 던진다', function(){
                [null, undefined, 1, "SomeString", false].forEach(function testInvalid(notAFcn){
                    expect(function shouldThrow(){

                    }).toThrowError(Conference.WidgetSandbox.messages.fcnMustBeProvided);
                });
            });

        });

        it('위젯 함수가 누락되면 예외를 던진다', function(){
            expect(function shouldThorow(){
                [null, undefined, 1, "SomeString", false].forEach(function testInvalid(notAFcn){
                    var sandbox = new Conference.WidgetSandbox(notAFcn);
                }).toThrowError(Conference.WidgetSandbox.messages.fcnMustBeProvided);
            })
        });

        it("sandbox 를 인자로 위젯 함수를 실행한다" , function(){
            var widgetFcn = jasmine.createSpy();
            var sandbox = new Conference.WidgetSandbox(widgetFcn);
            expect(widgetFcn).toHaveBeenCalledWith(sandbox);
        });


    });
});

