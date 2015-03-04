## CSS初始化代码
```css
        @charset "utf-8";
        body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, p, blockquote, th, td {
            margin: 0;
            padding: 0;
        }
        body {
            font-size: 14px;
            color: #333;
            font-family: Microsoft YaHei, SimSun, Arial;
            background: #fff;
            line-height: 24px;
        }
        fieldset, img {
            border: 0;
        }
        ol, ul {
            list-style: none;
        }
        h1, h2, h3, h4, h5, h6 {
            font-size: 100%;
        }
        em {
            font-style: normal;
        }
        input, button, select, textarea {
            outline: none;
        }
        textarea {
           resize: none; /*禁用了文本的拖拉，尤其在谷歌下*/
        }
        a {
            color: #333;
            text-decoration: none;
        }
        a:hover {
            color: #f60;
            text-decoration: none;
        }
        .clearfix {
            margin: 0px;
            padding: 0px;
            border: 0px;
            clear: both;
        }
```
	2015/3/4 11:48:43 