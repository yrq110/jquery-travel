/**
 * Created by yrq on 2017/4/11.
 */
/** 1 - jQuery事件基础
 *  jQuery事件基本使用方法
 */
// 1.1 设置元素事件响应
// $("p").click(function(){
//     console.log("click event");
// });
// 使用.on()方法处理事件
// $("p").on( "click", function() {
//     console.log( "click" );
// });

// 1.2 给新添加的元素设置响应事件
// $("button.alert").on("click", function() {
//     console.log( "A button with the alert class was clicked!" );
// });
// $("<button class='alert'>Alert!</button>").appendTo($("p"));

// 1.3 事件对象属性
// $("p").on( "click", function(e) {
//     console.log("event type: " + e.type);
//     console.log("event touch id: " + e.which);
//     console.log("event target: " + e.target);
// });

// 1.4 设置多事件响应
// 多个事件相同处理
// $("input").on(
//     "click change",
//     function() {
//         console.log( "An input was clicked or changed!" );
//     }
// );
// 多个事件不同处理
// $("input").on({
//     "click": function () {console.log("clicked!");},
//     "change": function () {console.log("changed!");}
// });

// 1.5 销毁事件响应
// $("p").off("click");

// 1.6 设置单次事件响应
// $( "p" ).one( "click", clickFunc );
// function clickFunc() {
//     console.log( "You just clicked this for the first time!" );
//     $(this).click( function() { console.log( "You have clicked this before!" ); } );
// }

/** 2 - 事件辅助
 *  jQuery事件辅助方法
 */



