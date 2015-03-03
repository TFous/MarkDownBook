/**
 * Created by Administrator on 2015/3/3.
 */
//目录显示出现
$(function(){
    $("body").prepend("<div class=\"showbtn\">Menu</div><div class=\"menu\"> <div class=\"hidebtn\">Menu(点击关闭)</div> <ul id=\"tree\" class=\"ztree\"></ul></div>");
    $(".showbtn").click(function(){
        $(".menu").show();
        $(this).hide();
    });
    $(".hidebtn").click(function(){
        $(".menu").hide();
        $(".showbtn").show();
    });
    $('#tree').ztree_toc({
        is_auto_number:true,
        is_expand_all: false
        // documment_selector: '.first_part'
    });
});




