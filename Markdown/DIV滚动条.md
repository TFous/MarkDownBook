## div显示滚动条的CSS代码
主要用`overflow`标签，属性规定当内容溢出元素框时发生的事情。
值为visible(默认值)、scroll、hidden、auto。
```css
.demo{
	overflow-y:auto; //垂直方向内容溢出时的设置
	overflow-x:auto; //水平方向内容溢出时的设置
}
```

### 滚动条颜色
#### IE浏览器中自定义滚动条样式：
```css
HTML {   
	scrollbar-base-color: #C0C0C0; //滚动条的基本颜色
	scrollbar-3dlight-color: #C0C0C0; //设置滚动条的颜色
	scrollbar-highlight-color: #C0C0C0; //滚动条空白部分的颜色   
	scrollbar-track-color: #EBEBEB; //设置或检索滚动条的拖动区域(TrackBar)颜色   
	scrollbar-arrow-color: black; //上下按钮上三角箭头的颜色 
	scrollbar-shadow-color: #C0C0C0; //立体滚动条强阴影的颜色  
	scrollbar-dark-shadow-color: #C0C0C0; //立体滚动条阴影的颜色   
}  
```
#### CHROME浏览器中自定义滚动条样式：
```css
::-webkit-scrollbar { width: 3px; height: 3px;}   
::-webkit-scrollbar-track-piece { background-color: #ffffff;}   
::-webkit-scrollbar-thumb{height: 50px; background-color: #666; -webkit-border-radius: 3px;}
```  
解释：
::-webkit-scrollbar 滚动条宽跟高
::-webkit-scrollbar-track-piece 滚动条样式底部内层样式
::-webkit-scrollbar-thumb 滚动条滑块样式
-webkit-border-radius: 滚动条滑块边角–导圆角

#### FireFox下自定义滚动条：(或许有些问题，参考http://g.mozest.com/thread-38113-1-1)
@-moz-document url-prefix(http://),url-prefix(https://) {   
滚动条颜色
```css
scrollbar {   
   -moz-appearance: none !important;   
   background: rgb(0,255,0) !important;   
}
```
滚动条按钮颜色
```css  
thumb,scrollbarbutton {   
   -moz-appearance: none !important;   
   background-color: rgb(0,0,255) !important;   
}
```   
鼠标悬停时按钮颜色  
```css
thumb:hover,scrollbarbutton:hover {   
   -moz-appearance: none !important;   
   background-color: rgb(255,0,0) !important;   
}
```   
隐藏上下箭头
```css  
scrollbarbutton {   
   display: none !important;   
}
```   
纵向滚动条宽度
```css  
scrollbar[orient="vertical"] {   
  min-width: 15px !important;   
}
```
 
### DEMO
```html
<html>
<head>
    <style type="text/css">
        div
        {
            background-color:#00FFFF;
            width:150px;
            height:150px;
            overflow: auto
        }
    </style>
</head>

<body>
<p>如果元素中的内容超出了给定的宽度和高度属性，overflow 属性可以确定是否显示滚动条等行为。</p>

<div>
    这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。默认值是 visible。
</div>
</body>

</html>
```