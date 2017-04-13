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
// 例子：.hover()
// .hover()的第一个参数是mouseenter事件的响应函数，第二个参数是mouseleave事件的响应函数
// $("p").hover(
//     function(){
//         $(this).addClass("hover");
//         console.log("hover");
//     },
//     function(){
//         $(this).removeClass("hover");
//         console.log("leave");
//     }
// )

/** 3 - 事件监听
*  事件监听的不同方法
*/

// 3.1 原生JS
// var helloBtn = document.getElementById( "helloBtn" );
//
// helloBtn.addEventListener( "click", function( event ) {
//     alert( "Hello." );
// }, false );

// 3.2 使用jQuery监听事件
// $( "#helloBtn" ).click(function( event ) {
//     alert( "Hello." );
// });
//
// $( "#helloBtn" ).on( "click", function( event ) {
//     alert( "Hello." );
// });

// 3.3 事件对象函数
// .preventDefault()
// $("a").click(function(event){
//     event.preventDefault(); // 阻止默认行为
// })
// .stopPropagation()
// $("#sp li").click(function (e) {
//     alert("I'm li");event.stopPropagation(); // 阻止节点分派到其他节点，停止传播
// })
// $("#sp ul").click(function (event) {
//     alert("I'm ul");  // 阻止了冒泡过程，因此这句不会显示
// })

/** 4 - 事件处理
 *  jQuery的事件处理
 */

// 4.1 .on()函数
// 1. 单一事件绑定
// $("p").on("click",function(){
//     console.log("click p");
// })
// 2. 多个事件单一处理绑定
// $("p").on("mouseenter mouseleave",function(){
//     console.log("hover over or out a p");
// })
// 3. 多个事件多个处理绑定
// $("p").on({
//     mouseenter: function() {
//         console.log("hovered over a p");
//     },
//     mouseleave: function() {
//         console.log("mouse left a p");
//     },
//     click: function() {
//         console.log("clicked on a p");
//     }
// });
// 4. 事件对象
// $("p").on("click",function(e){
//     console.log(e);
// })
// 5. 事件处理中传参
// $("p").on("click",{message:"Hello"},function(e){
//     console.log("message: " + e.data.message);
// })
// 6. 绑定事件到暂不存在的元素
// $( "ul" ).on( "click", "li", function() {
//     console.log( "Something in a <ul> was clicked, and we detected that it was an <li> element." );
// });

// 4.2  .one()
// 单次事件处理
// $( "p" ).one( "click", function() {
//     console.log( "You just clicked this for the first time!" );
//     $( this ).click(function() {
//         console.log( "You have clicked this before!" );
//     });
// });

// 4.3 事件解绑
// 解绑事件绑定的所有处理
// $("p").off("click");
// 通过引用解绑事件绑定的指定函数
// var foo = function() {
//     console.log("foo");
// };
// var bar = function() {
//     console.log("bar");
// };
// $("p").on("click", foo).on("click", bar);
//
// $("p").off("click", bar);

/** 5 - 事件对象的属性和方法
 *
 */
// pageX,pageY
// type
// which
// data
// target
// preventDefault()
// stopPropagation()

/** 6 - 事件代理
 *
 */
// 6.1 直接对具体元素绑定事件，对动态添加的元素无作用
// $("#list li").on("click",function(e){
//     e.preventDefault();
//     console.log($(this).text());
// });
// $("#list").append("<li><a href=''>6</a></li>");

// 6.2 在父元素上绑定代理事件，对动态添加的元素有作用
// $("#list").on("click","li",function(e){
//     e.preventDefault();
//     console.log($(this).text());
// });
// $("#list").append("<li><a href=''>6</a></li>");

//6.3 操作被触发的元素
// $( "#list" ).on( "click", "a", function(e) {
//     var elem = $( this );
//     if ( elem.is( "[href^='http']" ) ) {
//         elem.attr( "target", "_blank" );
//     }
// });


/** 7 - 触发事件处理
 *
 */
// $("#blog").click(function (e) {
//     e.preventDefault();
//     console.log("hello blog")
// })
// $("p").click(function(){
//     $("#blog").attr("href", "http://yrq110.me");
//     $("#blog").trigger( "click" );
// })



/** 8 - 自定义事件
 *
 */
// $( ".lightbulb" ).on( "light:toggle", function( event ) {
//     var light = $( this );
//     if ( light.is( ".on" ) ) {
//         light.removeClass( "on" ).addClass( "off" );
//     } else {
//         light.removeClass( "off" ).addClass( "on" );
//     }
// });
//
// $( ".switch, .clapper" ).click(function() {
//     var room = $( this ).closest( ".room" );
//     room.find( ".lightbulb" ).trigger( "light:toggle" );
// });

