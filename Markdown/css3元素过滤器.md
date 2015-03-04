# HTML/CSS
---
## css3元素过滤器
CSS3选择器中，有一个叫做属性选择器的东西，有：
- `[attr]` 有该属性
- `[attr=xxx]`属性值是xxx
- `[attr^=xxx]`属性值是xxx开头
- `[attr$=xxx]`属性值xxx擦结尾
- `[attr*=xxx]`属性值中包含xxx

demo中的过滤使用的是任意匹配，也就是[attr*=xxx]这种用法。于是，我们再结合not选择器就可以把不匹配的元素给隐藏了，例如：
```css
.list:not([data-index*="sh"]) { display: none; }
```
就是所有data-index值中不含有sh的列表隐藏。
### 兼容性
属性选择器IE8就开始支持了，不过如果要使用到not选择器，似乎又要IE9+浏览器了。
因此，本技术目前IE9+支持，IE6-IE8需要JS代码实现。
### DEMO
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .search {
            width: 180px;
            padding: 5px;
            -webkit-box-sizing: content-box;
        }

        .datalist {
            display: block;
            visibility: hidden;
            width: 190px;
            background-color: #fff;
            box-shadow: 0 1px #ccc, 1px 0 #ccc, -1px 0 #ccc, 0 -1px #ccc;
            overflow: hidden;
        }

        .search:focus + .datalist {
            visibility: visible;
        }

        .list {
            margin-top: -1px;
            padding: 4px 10px;
            border-top: 1px solid #eee;
        }

        .list:hover {
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
<div id="effect" class="part" style="height:800px;">
    <h3>效果：</h3>

    <div class="show">
        <div class="demo">
            <input type="search" class="search" id="city" placeholder="输入省会或直辖市名称"/>
            <label class="datalist" for="city">
                <div class="list" data-index="重庆市chongqing">重庆市</div>
                <div class="list" data-index="哈尔滨市haerbing">哈尔滨市</div>
                <div class="list" data-index="长春市changchun">长春市</div>
                <div class="list" data-index="兰州市lanzhou">兰州市</div>
                <div class="list" data-index="北京市beijing">北京市</div>
                <div class="list" data-index="杭州市hangzhou">杭州市</div>
                <div class="list" data-index="长沙市changsha">长沙市</div>
                <div class="list" data-index="沈阳市shenyang">沈阳市</div>
                <div class="list" data-index="成都市chengdu">成都市</div>
                <div class="list" data-index="合肥市hefei">合肥市</div>
                <div class="list" data-index="天津市tianjin">天津市</div>
                <div class="list" data-index="西安市xian">西安市</div>
                <div class="list" data-index="武汉市wuhan">武汉市</div>
                <div class="list" data-index="济南市jinan">济南市</div>
                <div class="list" data-index="广州市guangzhou">广州市</div>
                <div class="list" data-index="南京市nanjing">南京市</div>
                <div class="list" data-index="上海市shanghai">上海市</div>
                <div class="list" data-index="昆明市kunming">昆明市</div>
                <div class="list" data-index="郑州市zhangzhou">郑州市</div>
                <div class="list" data-index="贵阳市guiyang">贵阳市</div>
                <div class="list" data-index="西宁市xining">西宁市</div>
                <div class="list" data-index="海口市haikou">海口市</div>
                <div class="list" data-index="南昌市nanchang">南昌市</div>
                <div class="list" data-index="香港 特区xianggang">香港 特区</div>
                <div class="list" data-index="澳门 特区aomen">澳门 特区</div>
            </label>
        </div>
    </div>
</div>
</div>
</div>
<script>
    if (document.addEventListener) {
        var eleStyle = document.createElement("style"),
                eleInput = document.querySelector("#city"),
                eleDatalist = document.querySelector(".datalist");

        // 用来CSS控制的style插入
        document.querySelector("head").appendChild(eleStyle);

        // 文本框输入
        eleInput.addEventListener("input", function () {
            var val = this.value.trim().toLowerCase();
            if (val !== '') {
                eleStyle.innerHTML = '.list:not([data-index*="' + this.value + '"]) { display: none; }';
            } else {
                eleStyle.innerHTML = '';
            }
        });

        // 点击确定
        eleDatalist.addEventListener("mousedown", function (event) {
            eleInput.value = event.target.innerHTML;
            eleInput.blur();
        });
    } else {
        var timeClick = 0;
        document.querySelector && (document.querySelector(".datalist").style.visibility = "hidden");
        document.getElementById("city").onclick = function () {
            timeClick++;
            if (timeClick == 3) {
                this.insertAdjacentHTML("beforebegin", '<p style="color:#cd0000;">别点了，浏览器不给力，点到菊花盛开也没有的！</p>');
            }
        };
    }
</script>
</body>
</html>
```
	2015/3/3 15:16:37 
---
## margin:auto实现绝对定位元素的水平垂直居中
### CSS3实现方法就是使用`transform`
```css
.element {
    position: absolute;
	left: 50%; 
	top: 50%;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
}
```
### 使用margin:auto方法
```css
.element {
    position: absolute; 
	left: 0; 
	top: 0;
	right: 0;
	bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
}
```
该方法IE8+以及其他浏览器都是OK的.

### DEMO
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	.demo{
		width:200px;
		height:40px;
		background:red;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	</style>
</head>
<body>
	<div class="demo">test</div>
</body>
</html>
```
	2015/3/1 10:17:08 
---
# JavaScript/Jquery


