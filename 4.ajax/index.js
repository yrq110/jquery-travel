/**
 * Created by yrq on 2017/4/15.
 */
/** 1 - 核心概念
 *
 */
// 1.1 GET vs POST

// GET - 非破坏性操作，仅从服务端获得数据，不会改变服务端的数据参数写入url中
//     - 会被浏览器缓存
//     - 通常将要发送的数据全部写入查询字符串

// POST - 非破坏性操作，
//     - 不会被浏览器缓存
//     - URL中包含部分查询字符串，数据会被作为post data分开发送


// 1.2  数据类型

// * text
//     传递简短字符串
// * html
//     传送在页面中放置的HTML代码块
// * script
//     在页面中添加一段脚本
// * json
//     传送JSON格式的数据，可以包含字符串、数组和对象。
// * jsonp
//     跨域传送JSON数据
// * xml
//     使用自定义XML格式传递数据

// 1.3 异步
// 由于默认Ajax是异步的调用，并不能立即获得响应，需要在回调函数中捕获响应。

// $.get("http://yrq110.me",function (r) {
//     console.log("response: " + r);
// });

// var response;
// $.get("http://yrq110.me",function (r) {
//     response = r;
// })
// console.log(response);  // undefined

// 1.4 同域安全与JSONP

// 默认情况下，AJAX请求限制在相同协议、相同端口与相同页面。
// IE10之前的版本不支持跨域的AJAX请求。

// JSONP服务会将请求的数据包裹在一个<script>标签中，传递给页面加载，这样就能突破同源限制，在这段脚本的所提供的回调函数中会包含请求的数据。

/** 2 - jQuery中的Ajax相关方法
 *
 */

// 2.1 .ajax()

// $.ajax({
//     url: "http://yrq110.me",
//     type: "GET",
//     // dataType: "json"
// })
// // 成功后调用的函数，参数为响应信息
// .done(function (r) {
//     // console.log(r);
// })
// // 失败后调用的函数，参数为原始请求与状态码
// .fail(function (xhr,status,error) {
//     // console.log(e);
// })
// // 不管成功还是失败后都会调用的函数，参数为请求与状态码
// .always(function (xhr,status) {
//     // console.log("xhr: " + xhr);
//     console.log("status: " + status);
//     // alert("the request is complete");
// })

// 2.2 .ajax()设置
// .ajax()函数有很多可以设置的参数，下面是经常使用的一些设置:

// * async - 默认为true，若想发送同步请求可以设为false
// * cache - 可用时会缓存响应，默认对于除了"script"和"jsonp"之外的dataType均为true
// * done - 请求成功时执行的回调函数。包含响应数据、原始请求对象与请求状态描述
// * fail - 请求失败时执行的回调函数。包含原始请求对象与请请求状态描述
// * always - 不管请求是否完成、是否成功或失败，都会执行的回调函数。包含原始请求对象与请求状态描述
// * context - 表示回调函数所运行的域，比如说this指的是回调函数内的对象
// * data - 发送给服务器的数据，可以是一个对象也可以是一个查询字符串，name=yrq&amp;sex=male
// * dataType - 期望从服务器所得到的数据类型
// * jsonp - JSONP请求中查询字符串中的回调名，默认为"callback"
// * timeout - 判断请求失败的等待时间
// * type - 请求类型，"POST"或"GET"，默认为"GET"，也可以使用比如"DLETE"与"PUT"等方法，不过有些浏览器可能不支持
// * url - 请求的URL，是.ajax()中唯一一个必须的参数，其它属性都是可选的


// 2.3 便捷方法
// 若你不需要.ajax()的扩展功能，也不关心错误处理的话，就可以使用其它一些便捷的方法进行AJAX请求。

// * $.get - 提供的URL上执行GET请求
// * $.post - 提供的URL上执行POST请求
// * $.getScript - 在页面中插入一段脚本
// * $.getJSON - 执行GET请求并期望得到JSON格式的响应数据

// $.getScript("test.js",function () {
//     hello();
// })

// 每种方法都接受如下参数:
// * url - 请求的URL，必须。
// * data - 发送给服务器的数据，可选。对于$.getScript不可用。
// * success callback - 请求成功后的回调函数，可选。
// * data type - 期望从服务器得到的数据类型，可选。

// 2.4 $.fn.load()
// .load()方法从URL获得HTML代码填充指定元素
// $("#message").load("add.html");

/** 3 - Ajax与表单
 *
 */

// 3.1 序列化
// 有两个序列化方法 .serialize() 与 .serializeArray()。
// .serialize()会返回一个形如name=yrq的查询字符串
// console.log($("form").serialize());
// .serializeArray()会返回一个行为{"name":"yrq"}的对象
// console.log($("form").serializeArray());

// 3.2 客户端验证

// 验证输入
// $("#submt_btn").click(
//     $("#form").submit(function( event ) {
//         console.log(event);
//         // 若phone的值的长度为0
//         if ( $( "#phone" ).val().length === 0 ) {
//            // 阻止表单提交
//            event.preventDefault();
//         } else {
//            $.get("http://yrq110.me",function (r) {
//               console.log(r);
//            })
//      }
//     })
// );


// 3.3 预过滤
// 使用$.ajaxPrefilter在请求发送之前修改ajax的设置。
// 若只想处理返回数据为json和script的请求，可以在ajaxPrefilter函数中指定:

// $.ajaxPrefilter( "json script", function( options, originalOptions, jqXHR ) {
//     // 在这里做一些预过滤操作，不过进针对于指定dataType为"JSON"或"script"的请求
// });

/** 4 -JSONP
 *
 */
// 使用Yahoo! Query Language上的JSONP数据测试。
// $.ajax({
//     url: "http://query.yahooapis.com/v1/public/yql",
//
//     // The name of the callback parameter, as specified by the YQL service
//     jsonp: "callback",
//
//     // Tell jQuery we're expecting JSONP
//     dataType: "jsonp",
//
//     // Tell YQL what we want and that we want JSON
//     data: {
//         q: "select title,abstract,url from search.news where query=\"cat\"",
//         format: "json"
//     },
//
//     // Work with the response
//     success: function( response ) {
//         console.log( response ); // server response
//     }
// });

/** 5 -Ajax事件
 *
 */
// 有时想在Ajax请求的开始或结束时执行一些操作，比如隐藏或显示某个元素。不需要在每个Ajax请求中定义这些行为，只需将Ajax事件与元素绑定即可。

// $("#stats")
//     .ajaxStart(function() {
//         console.log("ajax start");
//         $("#stats").html("请求开始");
//     })
//     .ajaxStop(function() {
//         console.log("ajax finished");
//         $("#stats").html("请求开始");
//     });
//
// $("#req").click(function () {
//     $.ajax({
//         url: "http://yrq110.me",
//         type: "GET"
//     })
// });

