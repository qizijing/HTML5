# HTML5
关于html5 CSS3 bootstrap的一些基础知识
###  第四章 JS高级应用
1. 深入理解对象
   - 部分满足特征：==基于对象编程==
        - JS是基于对象的脚本语言，==JS中没有类的概念==
        - 属性是与对象相关的值
        - 方法是能够在对象上执行的动作
        - ==JS对象是拥有属性和方法的数据==
        - ==new关键字创建对象== var obj=new object();
    2. 深入理解属性
        - 属性是由==键值对==组成的，即==属性的名字和属性的值==
            - 属性的名：==字符串==
            - 属性的值可以为任意的JS数据聚类性（包括函数、对象）
        - 属性的读取
            - ==.运算符==
            - ==[]运算符==
    - ==for in== 语句遍历对象的全部属性
            
```
            <script>
                //遍历对象的全部属性
                var obj = new Object();
                obj.output = "Something output";
                obj.doOutput = function(){
                	console.log("output in function:"+this.output);
                }
                
                for(var i in obj){
                	console.log(i);
                	if(typeof obj[i] == "function")
                	{
                		obj[i]();
                	}
                	else if(typeof obj[i] == "string")
                	{
                		console.log(obj[i]);
                	}
            	}
            </script>

```


   3. 函数
        - 使用function关键字声明一个特殊的函数，为了区别普通函数，将构造函数首字母大写
        - 构造函数的形参用于赋给对象的属性
        - 在构造函数中，使用this指代对象，对象的属性和方法必须通过this访问
        - 在函数外通过new关键字创建对象
###  第七章 web留言本代码
###  第八章 图片预览代码
###  第九章 简单拖放例子代码
###  第13章 CSS3选择器
1. 属性选择器
        - E[att^="val"]：选择具有att属性且属性值是以val开头的字符串的元素
        - E[att$="val"]：选择具有att属性且属性值是以val结尾的字符串的元素
        - E[att*="val"]：选择具有att属性且属性值是包含val的字符串的元素
        - ==E选择符可以省略，表示匹配任意类型元素==
2. 伪元素选择器
    - 选择器：伪元素{属性：值}
    - E：first-line  设置对象内的第一行的样式
    - E：fist-letter 设置对象内的第一个字符的样式
    - E：before设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性。
    - E:after 设置在对象后发生的内容。用来和content属性一起使用，并且必须定义content属性。
        
        ```
        li{
            list-style-type: none;
        }
        li:before{   
            content: "*";\\在列表的文字内容前加*
        }
        li:after{
            content: "(仅用于测试，请勿用于商业用途。 )";\\在列表文字内容后面加入content（）里的内容
            font-size:12px;
            color:red;
        }

        ```
    - E:root 匹配E元素在文档的根元素。在HTML中，根元素永远是HTML。
    - E:not(s) 匹配不含有s选择符的元素E。
    - E:empty 匹配没有任何子元素（包括text节点）的元素E。
    - E:target 匹配锚点链接中当前活动的目标元素。
       - E:first-child 匹配父元素的第一个子元素E。
    - E:last-child 匹配父元素的最后一个子元素E。
    - E:nth-child(n)匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效。该选择符允许使用一个乘法因子(n)来作为换算方式，比如想选中所有的偶数子元素E，选择符写成：E:nth-child(2n)；该选择符允许使用一些关键字，比如：odd, even。
    - E:nth-last-child(n)匹配父元素的倒数第n个子元素E，假设该子元素是E，则选择符无效。
###  第14章
1. 文本样式
    - 文本阴影
        1. 给文本添加阴影——text-shadow属性
            
        语法：==text-shadow：h-shadow v-shadow blur color==
        - h-shadow 必需。水平阴影的位置，允许负值
        - v-shadow 必需。垂直阴影的位置，允许负值
        - blur     可选。模糊的距离
        - color    可选。阴影的颜色
        2. 指定多个阴影
            
            ```
                <style type="text/css">
                    div{
                    text-shadow: 10px 10px #f39800,
                    40px 35px #fff100,
                    70px 60px #c0ff00;
                    color: navy;
                    font-size: 50px;
                    font-weight: bold;
                    font-family: 宋体;
                    }
                </style>
            ```
        - 文本自动换行
            1. 语法：word-wrap：normal|break-Word
                - normal：只允许的断字点换行（默认）
                - break-word：在长单词或URL地址内部进行换行
            2.word-break：normal|break-all|keep-all
                - normal：默认
                - break-all：允许在单词内换行    
                - keep-all：只能在半角空格或连字符处换行
    2. 颜色样式
        - rgba颜色 rgba（red，green，blue，<opacity>）//opacity参数是介于0.0（完全透明）与1.0（不透明）的数字
        - hsl颜色 hsl(hue,saturation,lightness)//色相(hue)饱和度(saturation)亮度(lightness)
            - 色相（Hue）是色盘上的度数（从 0 到 360） - 0 (或 360) 是红色，120 是绿色，240是蓝色。
            - 饱和度（ Saturation）表示色彩被使用了多少，或者说颜色的深浅程度、鲜艳程度。取值为0%-100%，其中0%意味着灰度，即没有使用该颜色；100% 饱和度最高，即颜色最艳。
            - 亮度（ Lightness）取值为0%-100%，其中0%是最暗，显示为黑色，100% 最亮，显示为白色。
        - hsla颜色 hsla(hue, saturation, lightness, opacity)
###  15-背景与边框
1. 背景样式
    1. 背景的尺寸
        - background-size：规定背景图片的尺寸
        - 语法：background-size：length/percentage/cover/contain
        
        值 | 描述
        ---|---
        length | 设置背景图像的宽度和高度。(background-size:80px 60px)如果只设置一个值，则第二个值会被设置为 "auto"。
        percentage |以父元素的百分比来设置背景图像的宽度和高度。 如果只设置一个值，则第二个值会被设置为 "auto"。
        cover | 保持背景图像本身宽高比例，将图片缩放到正好完全覆盖所定义背景的区域。
        contain | 保持背景图像本身宽高比例，将图片缩放到宽度或高度正好适应所定义背景的区域。
        
        2. 背景图片的定位区域
            - 语法：background-origin：border-box/padding-box/content-box
            
            值 | 描述
            ---|---
            border-box | 从边框处区域开始显示背景（边框有宽度，从外边框开始显示背景）
            content-box | 仅从内容区域显示背景
            padding-box | 从补白区域开始显示背景（除去边框宽度开始显示背景）

        3. 多个背景图像
            - **background-image：url(1.img),url(2.img);**
        4. 背景图像的绘制区域
            -  语法：background-clip：border-box/padding-box/content-box - 各个语义同2  
2. 边框样式
    1. 圆角边框
        - 语法：border-radius：length/ %
        - 如果要绘制的圆角边框4个角的半径各不相同时，需按左上角、右上角、右下角、左下角的顺序设置每个方向圆角半径的值。
        - 如果省略 bottom-right，则与 top-left 相同。
    2. 图像边框
        - ==语法==：border-image：url（img/1.jpg）A B C D
        - ABCD四个参数表示浏览器自动把图像分隔时的上边距、右边距、下边距以及左边距。
3. 元素阴影
    - ==语法==：box-shadow：h-shadow（必写，水平阴影的位置。允许负值） v-shadow（必需，垂直阴影，允许负值）blur（可选，模糊的距离）spread（可选，阴影的尺寸）inset(可选，将外部阴影(outset)改为内部阴影) color
###  16-变形处理
1. transform属性
    - transform属性向元素应用2D或3D转换。通过转换能够对元素进行旋转、缩放、移动、倾斜、或拉伸。
    - ==语法==：transform：none/transform-functions
    - transform属性的属性值由==值及函数组成==translate(x,y) 定义2D转换   translate3d(x,y,z)  定义3D转换
2. 移动-translate
    - 语法：translate(length,length)    translateX(length)  translateY(length)
    - ==translate()方法实例==
        - ==给导航菜单添加定位功能==
        ![image](F:1.png)
```
<style>
    .test a:hover {
		    color:#FFF;
		    font-weight:bold;
		    text-decoration:none;
		    background:url(img/icon2.jpg) #F00 no-repeat 5px 12px;
		    transform: translate(-4px,-4px);
		    -moz-transform: translate(-4px, -4px);
		    -webkit-transform: translate(-4px,-4px);
		    -o-transform: translate(-4px, -4px);
		}
</style>
<body>
<div class="test">
    <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新闻</a></li>
        <li><a href="3">论坛</a></li>
        <li><a href="4">博客</a></li>
        <li><a href="5">团购</a></li>
        <li><a href="6">微博</a></li>
    </ul>
</div>
</body>
```
3. 旋转——rotate()
    - rotate(angle)可以实现2D旋转,angle的值可取正或负，正值代表顺时针旋转，
负值代表逆时针旋转。
    ==- transform：rotate(-30deg);==
4. 缩放——scale()
    - scale()方法实现文字或图像的缩放处理
    - 语法：scale（number，number）  scaleX()    scaleY()
    - 当参数值绝对值大于1，代表放大；绝对值小于1，代表缩小。当值为负数时，对象反转。当参数值为1时，表示不进行缩放
    - 注意：当使用scaleX 或scaleY函数时，实现的是非等比例缩放
```
<style>
.div2{
    transform:scale(1.5);
}
</style>
<body>
    <div id="div2">示例文字</div>
</body>
```

5. 倾斜——skew()
    - 语法：
        - skew(angle,angle)   分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。
        - skewX()  只在X轴倾斜
        - skewY()  只在Y轴倾斜
    - 实例：
```
<style>
    #img{
        transform:skew(20deg,20deg);
    }
</style>
```
6. 3D旋转

```
<body>
	<div id="div">示例文字</div>
	<input type="button" value="绕X轴旋转" onclick="rotateX()" />
	<input type="button" value="绕Y轴旋转" onclick="rotateY()" />
	<input type="button" value="绕Z轴旋转" onclick="rotateZ()" />
	<script>
		var n,rotINT,rotXINT,rotYINT,rotZINT;
		var div=document.getElementById("div");
		//绕X轴旋转 
		function rotateX()
		{
		    n=0;
		    clearInterval(rotXINT);
		    rotXINT=setInterval("startXRotate()",10);
		}
		function startXRotate()
		{
		    n=n+1;
		    div.style.transform="rotateX("+ n +"deg)";
		    if (n==180)
		    {
		        clearInterval(rotXINT);
			n=0;
		    }
		}
		//Y轴Z轴旋转同上
```
7. 多重变形
    - 对同一元素可添加多种变形效果
    - -webkit-transform:rotate(45deg) scale(1.5) translate(150px,80px);
### 第17章-CSS3动画
1. transition——过渡
    1. transition-property指定参与过渡的属性
        - transition-property：all/none/property,property
        - all：默认值，表示所有可以进行过渡的CSS属性；
        - none：表示不指定过渡的CSS属性；
        - <property>：表示指定要进行过渡的CSS属性。可以同时指定多个属性值，以逗号“,”进行分隔
    2. transition-duration属性指定过渡持续的时间，即设置从旧属性换到新属性花费的时间，单位为秒
    3. transition-delay属性可以指定过渡的延迟时间，也就是延迟多长时间才开始过渡
    4. transition-timing-function属性用来定义过渡动画的类型
        - linear 线性效果
        - ease   缓解效果
        - ease-in渐显效果
        - ease-out渐隐效果
        - ease-in-out渐隐渐现
        - cubicbezier(n,n,n,n) 贝塞尔曲线效果
    ==2. transition语法==
        - transition：all .5s linear .1s
        
```
div{
    background-color: #ffff00;
    color: #000000;
    width: 300px;
    transition: background-color 1s linear, color 1s linear, width 1s linear;
}
div:hover{
    background-color: #003366;
    color: #ffffff;
    width: 400px;
}
```
2. 动画animation
    - Animations功能与Transitions功能的相似点与不同点
        - 相似点：两者都是通过改变元素的属性值来实现动画效果的。
        - 不同点：Transitions功能只是通过指定属性的开始值与结束值，然后以在这两个属性之间进行平滑过渡的方式来实现简单动画效果。Animations则是通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果
    - 语法：animation：name duration timing-function delay iteration-count direction 
值 | 描述
---|---
animation-name | 规定需要绑定到选择器的 keyframe 名称。
animation-duration | 规定完成动画所花费的时间，以秒或毫秒计
animation-timing-function | 规定动画的速度曲线。
animation-delay | 规定在动画开始之前的延迟。
animation-iteration-count | 规定动画应该播放的次数
animation-direction | 规定是否应该轮流反向播放动画。

3. @keyframes规则，创建关键帧集合实例
    - @keyframes规则用于创建动画。在@keyframes中创建动画时，需要把它捆绑到某个选择器
    - @keyframes 关键帧集合名 { 创建关键帧的代码 }
    
    #### 实例
    
```
<style type="text/css">
		div{
		    position: absolute;
		    background-color: yellow;
		    top:100px;
		    width:500px;
		}
		@keyframes mycolor{
		    0%{
		           background-color: red;
		           transform: rotate(0deg);
		    }
		    40%{
		            background-color: darkblue;
		            transform: rotate(30deg);
		    }
		    70%{
		            background-color: yellow;
		            transform: rotate(-30deg);
		    }
		    100%{
		            background-color: red;
		            transform: rotate(0deg);
		    }
		}
		div:hover{
		    animation-name: mycolor;//关键帧集合名:mycolor;
		    animation-duration: 5s;//规定动画时长
		    animation-timing-function: linear;
		}
</style>
</head>
<body>
	<div>
		示例文字
	</div>
</body>
```
###第18章——CSS3多列布局
1. CSS3设置多列布局的相关属性
    1. column-count属性规定元素应该被分隔的列数
    - 语法：column-count：integer/auto（column-count：3；）
    2. column-gap属性规定列之间的间隔
    - column-gap：normal/length (column-gap:40px;)
    3. column-rule属性设置列之间的间隔线的宽度、样式和颜色规则
    -  column-rule：length style color transparent（column-rule：3px outset red）
    4. column-rule-width设置或检索对象的列与列之间的边框厚度
    - column-rule-width：length/thin/medium/thick 
    5. column-rule-style设置或检索对象的列与列之间的边框样式
    - column-rule-style：none/hidden/dotted/dashed/solid/double 
    6. column-rule-color属性设置对象的列与列之间的边框颜色
    - column-rule-color：color
    7. column-span属性设置或检索对象元素是否横跨所有列
    - column-span：none/all
==2. 创建多列布局实例==

```
<style>
    div{
        column-count:3;
        column-gap:40px;
        column-rule:2px solid red;
    }
    h3{
        column-span:all;
    }
</style>
<body>
    <div>
    <h3>题目</h3>
    <p>一大堆文字</p>
    </div>
</body>
```

### 第19章——CSS3盒布局
1. 弹性盒布局
    - dispalay:box(-webkit-box/-moz-box)在元素上设置该属性，可使其子代排列同一水平上。
    - 容器会根据布局的需要，调整其中包含的条目的尺寸和顺序来最好地填充所有可用的空间
    - 弹性盒布局是与方向无关的
    - display:flex;
    - box不能根据浏览器屏幕大小调整，flex能根据布局需要调整。
2. 弹性盒模型
    1. box-flex:number 规定子元素是否可伸缩尺寸。使子容器针对父容器的宽度按规则进行划分。 占父级元素宽度的number份，若子元素设置固定宽度，则该子元素应用固定宽度，其他未设置固定宽度的子元素将余下的父级宽度按number占份数，若子元素有margin值，则按余下（父级宽度-子代固定总宽度-总margin值）宽度占number份
        - ==父容器必须设置display:box，其子容器才可以进行划分== 
    2. box-ordinal-group：integer；规定框中子元素的显示次序。值更低的元素会显示在值更高的元素前面。
    
```
#container{
    display: -webkit-box;
} 
#left-sidebar{
    ==-webkit-box-ordinal-group: 2;==
    width: 200px;
    background-color: orange;
}
#contents{
   == -webkit-box-ordinal-group: 3;==
    -webkit-box-flex:1;
    background-color: yellow;
}
//#left-sidebar显示在#contents前面
```
    3. 
