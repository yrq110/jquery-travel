/**
 * Created by yrq on 2017/4/11.
 */
/** 1 - $(document).ready()
 *  DOM树加载完成后执行一个函数
 */
// 1.1 标准写法
$( document ).ready(function() {
    console.log( "document ready" );
});
// or
// 1.2 简化写法
// $(function() {
//     console.log( "document ready" );
// });


/** 2 - $(document).ready()
 *  整个页面(DOM、js文件、图像文件等)加载完成后后执行一个函数
 */
$( window ).on( "load", function() {
    console.log( "window loaded" );
});

/** 3 - .attr()
 *  使用.attr()方法进行属性的获得与设置。
 *
 */
// 3.1 setter
$( "a" ).attr( "href", "http://yrq110.me" );

// 3.2 getter
// var ref = $("a").attr("href");
// console.log(ref);


/** 4 - 选择元素
 *  选择元素的多种方式
 */
// 4.1 通过ID选择
$("#one").click(function(){
    console.log("I'm selected by id");
})

// 4.2 通过className选择
$(".two").click(function(){
    console.log("I'm selected by class");
})

// 4.3 通过attribute选择
$("p[name='three']").click(function(){
    console.log("I'm selected by attr");
})

// 4.4 复合CSS选择
$("#four ul.hi li").click(function(){
    console.log("I'm selected by compound css");
})


// 4.5 判断是否有结果
// if($("#one").length){
//     console.log("Find a #one result");
// }

// 4.6 保存选择结果
// var divs = $("div");
// console.log(divs);

/** 5 - 元素操作
 *  获得元素后的各种操作
 */
// 5.1 获取与设置属性
// .html() - 获取或设置HTML代码
// .text() - 获取或设置文本内容
// .attr() - 获取或设置属性值
// .position() - 获取所选择的第一个元素的位置信息
// .val() - 获取或设置表单元素的值

// 5.2 其它操作
// 5.2.1 移动
// $("#one").append($(".two"));

// 5.2.2 复制
// $("#one").clone().appendTo($(".two"));

// 5.2.3 移除
// $("#one").remove();

// 5.2.4 创建
// var element = $( "<p>This is a new paragraph</p>" );
// var element = $("<a/>", {
//     html: "This is my blog.",
//     href: "http://yrq110.me",
//     "class": "blog_link"
// })
// $("#one").append(element);

// 5.2.5 操作属性
// $("a").attr({
//     href: function(idx, href){
//         console.log(idx);
//         return href;
//     },
//     target: "_blank"
// })

/** 6 - jQuery对象
 *  介绍jQuery对象
 */
// 6.1 通用
// var one = document.getElementById( "one" );
// one.innerHTML = "Hello <b>World</b>!";
// 使用jQuery:
// $(one).html("Hello <b>World</b>!");

// 6.2 简洁
// var one = document.getElementById( "one" );
// var newElement = document.createElement( "div" );
// newElement.innerHTML = "Hello world";
// one.parentNode.insertBefore( newElement, one.nextSibling );
// 使用jQuery:
// var one = document.getElementById( "one" );
// var newElement = document.createElement( "div" );
// $(newElement).html("Hello world");
// $(one).after(newElement);

// 6.3 使用jQuery对象保存元素
// var p = $("p");
// 得到页面中的第一个p元素(jQuery对象)
// var first_p = p.eq(0);
// 得到页面中的第一个p元素(HTMl元素)
// var first_p = p.get(0);

// 6.4 jQuery对象非唯一
// var one1 = $( "#one" );
// var one2 = $( "#one" );
// alert(one1 === one2);

// 6.5 不是"活"的
// var all_p = $( "p" );
// 若p标签内容更新了，则需要重新刷新all_p对象
// all_p = $( "p" );

/** 7 - 遍历
 *  父子与兄弟元素
 */
// 7.1 父元素
// var parent = $("#one").parent();
// console.log(parent);

// 7.2 子元素
// var children = $("div").children("p");
// console.log(children);

// 7.3 兄弟元素
// var bro = $("#one").next();
// var sis = $("#one").prev();
// console.log(bro);
// console.log(sis);

/** 8 - CSS、样式与尺寸
 *  设置CSS样式与尺寸
 */
// 8.1 获取与设置css属性
// var size = $("#one").css("fontSize");
// console.log(size);
// $("#one").css("fontSize","30px");

// 8.2 添加CSS样式class
// $("p:first").addClass("note");

// 8.3 尺寸
// $("#one").width("10px");
// console.log($("#one").height());

/** 9 - 数据方法
 *  设置CSS样式与尺寸
 */

/** 10 - 工具方法
 *  在$命名空间中提供了多个工具方法
 */

// 10.1 $.trim()
// var string = $.trim( "    remove whitespace    " );
// console.log(string);

// 10.2 $.each()
// $.each([ "foo", "bar", "baz" ], function( idx, val ) {
//     console.log( "element " + idx + " is " + val );
// });

// 10.3 $.inArray()
// var myArray = [ 1, 2, 3, 5 ];
// if ( $.inArray( 4, myArray ) !== -1 ) {
//     console.log( "found it!" );
// }

// 10.4 $.extend()
// var firstObject = { foo: "bar", a: "b" };
// var secondObject = { foo: "baz" };
// var newObject = $.extend( firstObject, secondObject );
// console.log( firstObject.foo ); // "baz"
// console.log( newObject.foo ); // "baz"

// 10.5 $.proxy()
// var myFunction = function() {
//     console.log( this );
// };
// var myObject = {
//     foo: "bar"
// };
// myFunction(); // window
// var myProxyFunction = $.proxy( myFunction, myObject );
// myProxyFunction(); // myObject

// 10.6 类型检测
// $.isArray([]); // true
// $.isFunction(function() {}); // true
// $.isNumeric(3.14); // true
// $.type( true ); // "boolean"
// $.type( 3 ); // "number"
// $.type( "test" ); // "string"

// 10.7 .index()
// 10.7.1 无参数 - 在父元素中的索引
// var one = $("#one").index();
// console.log("index:" + one); //0
// var four = $("#four").index();
// console.log("index:" + four); //3
// var div = $("div").index();
// console.log("index:" + div); //1

// 10.7.2 有字符串参数 - 在父元素中的指定类型元素的索引
// var four = $("#four").index("div");
// console.log("index:" + four); //1

// 10.7.3 有jQuery对象参数 - 在父元素中的指定类型元素的索引
// var div = $("div");
// var four = $("#four");
// console.log("index:" + div.index(four)); //1