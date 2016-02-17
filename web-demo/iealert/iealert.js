(function ($) {
    $("document").on("click",'#goon', function () {
        $("#ie-alert-overlay").hide();
        $("#ie-alert-panel").hide();
    });

    function initialize($obj, support, title, text) {
        var panel = "<span>" + title + "</span>" + "<p> " + text + "</p>" + "<div class='browser'>" + "<ul>" + "<li><a class='chrome' href='https://www.google.com/chrome/' target='_blank'></a></li>" + "<li><a class='firefox' href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'></a></li>" + "<li><a class='ie9' href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank'></a></li>" + "<li><a class='safari' href='http://www.apple.com/safari/download/' target='_blank'></a></li>" + "<li><a class='opera' href='http://www.opera.com/download/' target='_blank'></a></li>" + "<ul>" + "</div>";
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
            text: "为了得到我们网站最好的体验效果,我们建议您升级到最新版本的Internet Explorer或选择另一个web浏览器.一个列表最流行的web浏览器在下面可以找到.<br /><br /><h1 id='goon' style='font-size:20px;cursor:pointer;'>>>>继续访问</h1>"
        };
        var option = $.extend(defaults, options);
        return this.each(function () {
            if (!$.support.leadingWhitespace) {
                var $this = $(this);
                initialize($this, option.support, option.title, option.text);
            }
        });
    };
})(jQuery);