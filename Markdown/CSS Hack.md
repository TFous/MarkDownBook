## CSS Hack
CSS hack由于不同的浏览器，比如Internet Explorer 6,Internet Explorer 7,Mozilla firefox等，对CSS的解析认识不一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。 这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。

这个针对不同的浏览器写不同的CSS code的过程，就叫CSS hack!

### 条件注释判断浏览器
		<!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->
		<!--[if IE]> 所有的IE可识别 <![endif]-->
		<!--[if IE 6]> 仅IE6可识别 <![endif]-->
		<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
		<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
		<!--[if IE 7]> 仅IE7可识别 <![endif]-->
		<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
		<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
		<!--[if IE 8]> 仅IE8可识别 <![endif]-->
		<!--[if IE 9]> 仅IE9可识别 <![endif]-->

### DEMO
```html
<!DOCTYPE html>  
<html>  
<head>  
    <title>Css Hack</title>  
	<!--[if IE 6]>
	<script src="resources/js/DD_PNG.js"></script>
	<link href="resources/css/style.css" rel="stylesheet" type="text/css" />
	<script>
	  DD_belatedPNG.fix('.title_log a img,.biaoyu img,.zhanting_list img');
	</script>
	<![endif]-->
    <style>  
    #test   
    {   
        width:300px;   
        height:300px; /*一下顺序不能变*/   
          
        background-color:blue;      /*firefox*/
        background-color:red\9;      /*all ie*/
        background-color:yellow\0;    /*ie8*/
        +background-color:pink;        /*ie7*/
        _background-color:orange;       /*ie6*/
    }  
    :root #test { background-color:purple\9; }  /*ie9*/
    @media all and (min-width:0px){ #test {background-color:black\0;} }  /*opera*/
    @media screen and (-webkit-min-device-pixel-ratio:0){ #test {background-color:gray;} }  /*chrome and safari*/
    </style>  
</head>  
<body>  
    <div id="test">test</div>  
</body>  
</html> 
 
 ```