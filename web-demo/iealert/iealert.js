(function ($) {
    $(document).on("click",'#goon', function () {
        $("#ie-alert-overlay").hide();
        $("#ie-alert-panel").hide();
        alert('在低版本的浏览器中或许会有显示问题！');
    });
    function initialize($obj, support, title, text) {
        var panel = "<span>" + title + "</span>" + "<p> " + text + "</p>" + "<div class='browser'>" + "<ul style='margin-left:47px'>" + "<li><a class='opera' href='http://down.360safe.com/se/360se8.1.1.200.exe' target='_blank'></a></li>" +"<li><a class='chrome' href='iealert/download/Chrome.exe' target='_blank'></a></li>" + "<li><a class='firefox' href='iealert/download/Firefox.exe' target='_blank'></a></li>" + "<li><a class='ie9' href='iealert/download/IE9-Windows7-32.exe' target='_blank'></a></li>" + "<ul>" + "</div>";
        var overlay = $("<div id='ie-alert-overlay'></div>");
        var iepanel = $("<div id='ie-alert-panel'>" + panel + "</div>");
        var docHeight = $(document).height();
        overlay.css("height", docHeight + "px");
        if (support === "ie8") {
            if (!$.support.leadingWhitespace) {
                $obj.prepend(iepanel);
                $obj.prepend(overlay);
            }
            if (navigator.userAgent.indexOf("MSIE 6.0")>0) {
                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");
            }
        } else if (support === "ie7") {
            if (navigator.userAgent.indexOf("MSIE 8.0")>0) {
                if(document.documentMode == '7'){
                         $obj.prepend(iepanel);
                         $obj.prepend(overlay);    
                    }
            }
            if (navigator.userAgent.indexOf("MSIE 7.0")>0) {
                $obj.prepend(iepanel);
                $obj.prepend(overlay);
            }
            if (navigator.userAgent.indexOf("MSIE 6.0")>0) {
                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");
            }
        } else if (support === "ie6") {
            if (navigator.userAgent.indexOf("MSIE 6.0")>0) {
                $obj.prepend(iepanel);
                $obj.prepend(overlay);
                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");
            }
        }
    };
    $.fn.iealert = function (options) {
        var defaults = {
            support: "ie7",
            title: "你知道你的Internet Explorer是过时了吗?",
            text: "为了得到正常使用我们的网站,我们建议您升级到最新版本的Internet Explorer或选择现代web浏览器.最流行的web浏览器在下面可以找到.<br /><br /><h1 id='goon' style='font-size:20px;cursor:pointer;'>&gt;&gt;&gt;继续访问</h1>"
        };
        var option = $.extend(defaults, options);
        return this.each(function () {
            if (!$.support.leadingWhitespace) {
            	 if(navigator.userAgent.indexOf("MSIE 6.0")>0)  
                 {   
                    option.title = "你知道你的Internet Explorer 6 是过时了吗?";
                 }   
                 if(navigator.userAgent.indexOf("MSIE 7.0")>0)  
                 {  
            
                	option.title = "你知道你的Internet Explorer 7 是过时了吗?";  
                 }   
                 if(navigator.userAgent.indexOf("MSIE 8.0")>0)
                 {  
                    if(document.documentMode == '7'){
                         option.title = "你正在使用国产双核浏览器中低版本ie内核?";
                         option.text = "为了正常显示页面，请在地址栏右边切换成极速内核,或者在下方选择chrome浏览器下载使用。<br /><br /><h1 id='goon' style='font-size:20px;cursor:pointer;'>&gt;&gt;&gt;继续访问</h1>"	 
                    }else{
                        option.title = "你知道你的Internet Explorer 8 是过时了吗?";  
                    }
                 }   
                var $this = $(this);
                initialize($this, option.support, option.title, option.text);
            }
        });
    };
})(jQuery);