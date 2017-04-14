/**
 * Created by yrq on 2017/4/11.
 */
/** 1 -
 *  效果介绍
 */
// 1.1 显示和隐藏内容
// $("p").hide(function(){
//     console.log("I'm a visible p");
// });
// $("div.hidden").show();

// 1.2 渐变和滑动动画

// $("p").fadeOut(2000);
// $("div").hide().fadeIn(2000);

// $("p").slideUp(2000);
// $("div").hide().slideDown(2000);

// 1.3 根据可视状态改变显示效果
// $("p").toggle();
// $("p").toggle("slow");
// $("p").toggle(2000);
// $("p").slideToggle(1000);
// $("p").fadeToggle(1000);

// 1.4 动画完成后执行函数
// $("p#text").hide().fadeIn(2000,function(){
//     console.log("animation finished");
// })

// 1.5 动画管理

// 1.5.1 .stop()

// $("p").hide(5000);
// $("body").append("<button>Stop animation</button>");
// $("button").click(function(){
//     $("p").stop();
// })

// 1.5.2 .delay()
// $("p").hide(1000).delay(1000).show(1000);

// 1.5.3 jquery.fx
// jQuery.fx.off = true;
// $("body").append("<button>jQuery.fx disbale animation</button>");
// $("button").click(function(){
//     $("p").toggle("slow");
// });

/** 2 -
 *   使用.animate()自定义动画
 */

// $("p").animate(
//     {
//         opacity: 0.2
//     },
//     2000,                   // 持续时间
//     function(){             // 动画完成后的回调
//         console.log("done");
//     }
// );
//
// Easing效果

// $("p").animate(
//     {
//         opacity: [0.2,"linear"]
//         // opacity: [0.2,"swing"]
//     },
//     2000,                   // 持续时间
//     function(){             // 动画完成后的回调
//         console.log("done");
//     }
// );


/** 3 -
 *   队列
 */

// 3.1 在回调中使用队列
// 入列方法 .queue() - 在队列中添加执行函数
// $("p")
//     .animate({fontSize:30}, 1000)
//     .queue(function(){
//         $("#message").html( "We're in the animation, baby!" );
//     })
// 出列方法1 .dequeue() - 移除匹配元素所绑定的队列中的第一个函数并执行
// $("p")
//     .animate({fontSize:30}, 1000)
//     .queue(function(){
//         $("#message").html( "We're in the animation, baby!" );
//         $(this).dequeue();
//     })
//     .animate({fontSize:15}, 1000);
// 出列方法2 调用回调函数中的参数
// $("p")
//     .animate({fontSize:30}, 1000)
//     .queue(function(next){
//         $("#message").html( "We're in the animation, baby!" );
//         next();
//     })
//     .animate({fontSize:15}, 1000);

// 3.2 自定义队列
// 可以给元素绑定多个队列，并且给队列分配标识符，
// $("p")
//     .queue("steps",function(next){
//         console.log("Step 1");
//         next();
//     })
//     .queue("steps",function(next){
//         console.log("Step 2");
//         next();
//     })
//     .dequeue("steps")
//     .animate({fontSize:30}, 1000);
// 3.3 清空队列
// 队列中的函数是按顺序执行，有时一些逻辑需要终止队列中函数的执行，可以使用.clearQueue()方法
// $("p")
//     .queue("steps",function(next){
//         console.log("I will clear the queue"); //由于清空了队列中的steps函数，因此这句不会打印出来
//         next();
//     })
//     .clearQueue("steps")
//     .dequeue( "steps" );
// 也可以使用.stop()函数清空指定。
// $("p")
//     .queue("steps",function(next){
//         console.log("I will clear the queue"); //由于清空了队列中的steps函数，因此这句不会打印出来
//         next();
//     })
//     .stop("steps")
//     .dequeue( "steps" );

// 3.4 替换队列
// 若在.queue的第二个参数输入一个数组，则会替换之前添加的同名队列函数，注意3.2中的那种不会替换。
// $("p")
//     .queue("steps",function(next){
//         console.log("I'm Bob");     // 不会打印出来
//         next();
//     })
//     .queue("steps",[
//         function(next){
//             console.log("I'm Rizu");
//             next();
//     }])
//     .dequeue("steps");
// 打印一下元素的入列函数会发现它返回一个数组
// $("p").queue("steps",function(next){
//     console.log("I'm Bob");
//     next();
// })
// console.log($("p").queue("steps"));
// $("p").dequeue("steps");