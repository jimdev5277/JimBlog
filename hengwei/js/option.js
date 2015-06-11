/**
 * Created by jimzhuang on 15/3/31.
 */
// JavaScript Document
//定义Beautifier的构造函数
var DialogFx = function(ele, opt) {
    this.$element = ele,
        this.defaults = {
            'id': 'somedialog',
            'dialogFx': '0'
        },
        this.options = $.extend({}, this.defaults, opt)
}
//定义DialogFx的显示方法
DialogFx.prototype = {
    Show: function() {
        $("#"+this.options.id).removeClass("dialog--close");
        $("#"+this.options.id).addClass("dialog--open");
    },
    Hidden: function() {
        $("#"+this.options.id).removeClass("dialog--open");
        $("#"+this.options.id).addClass("dialog--close");
    }
}
//在插件中使用DialogShow对象
$.fn.DialogShow = function(options) {
    //创建Beautifier的实体
    var dialogFx = new DialogFx(this, options);
    if(options.dialogFx == "0"){
        return dialogFx.Hidden();
    } else {
        //调用其方法
        return dialogFx.Show();
    }
}

//在页面中的操作
$(function(){
    $(".tacontent tr").click(function(){
        $(this).DialogShow({
            'id': 'somedialog',  //传入id，可以控制样式
            'dialogFx': '1'    //传入显示和隐藏的参数
        });
    });
    //$(".lpimg").click(function(){
    //    $(this).DialogShow({
    //        'id': 'somedialog',  //传入id，可以控制样式
    //        'dialogFx': '1'    //传入显示和隐藏的参数
    //    });
    //});
    $('.lpimg').live('click', function () {
        $(this).DialogShow({
                    'id': 'somedialog',  //传入id，可以控制样式
                    'dialogFx': '1'    //传入显示和隐藏的参数
                });
    })
    $(".dialog__overlay").click(function(){
        $(this).DialogShow({
            'id': 'somedialog',
            'dialogFx': '0'
        });
    });
    $(".dialog__overlay").click(function(){
        $(this).DialogShow({
            'id': 'somedialog',
            'dialogFx': '0'
        });
    });
    //$(".action").click(function(){
    //    $(this).DialogShow({
    //        'id': 'somedialog',
    //        'dialogFx': '0'
    //    });
    //});
    $('.action').live('click',function () {
        $(this).DialogShow({
                    'id': 'somedialog',
                    'dialogFx': '0'
                });
    });
    $("#ljsq").click(function(){
        alert("申请成功");
    });
})