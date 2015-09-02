/**
 * Created by jtcdf on 2015/7/13.
 */
(function ($) {
    //多列下拉列表
    var selects_multiseriate = $.fn.selects_multiseriate = $('select.multiseriate');//获取select
    var tip_option = selects_multiseriate.tip_option = $('<li class="tip"><table style="width: 100%" cellspacing="2" cellpadding="0"><tbody><tr><td class="assay">Assay</td><td class="unit">Unit</td><td class="temp">Temp</td></tr></tbody></table></li>');
    selects_multiseriate.init = function () {
        $('.select_box.multiseriate').remove();//初始化移除之前存在的
        tip_option = selects_multiseriate.tip_option;
        for (i = 0; i < selects_multiseriate.length; i++) {
            createSelect_multiseriate(selects_multiseriate[i], i);
        }
    };
    selects_multiseriate.init();
    //单列下拉列表
    var selects_singrow_select = $.fn.selects_singrow_select = $('.singlerow-select select');//获取select
    selects_singrow_select.init = function () {
        $('.singlerow-select .select_box').remove();//初始化移除之前存在的
        for (z = 0; z < selects_singrow_select.length; z++) {
            singleClassName = selects_singrow_select[z].className + "";
            createSelect_singrow_select(selects_singrow_select[z], z);
        }
    };
    selects_singrow_select.init();
    function createSelect_multiseriate(select_container, index) {


        //创建select容器，class为select_box，插入到select标签前
        var tag_select = $('<div></div>');//div相当于select标签
        tag_select.attr('class', 'select_box multiseriate');
        if (i == 1) {
            //tag_select.css("z-index", "2000");
        }
        tag_select.insertBefore(select_container);


        //显示框class为select_showbox,插入到创建的tag_select中
        var select_showbox = $('<div></div>');//显示框
        select_showbox.css('cursor', 'pointer').attr('class', 'select_showbox').appendTo(tag_select);


        //创建option容器，class为select_option，插入到创建的tag_select中
        var ul_option = $('<ul></ul>');//创建option列表
        ul_option.attr('class', 'select_option');
        ul_option.appendTo(tag_select);
        createOptions_multiseriate(index, ul_option);//创建option


        ////点击显示框
        //tag_select.toggle(function () {
        //    //alert("点击成功1");
        //    ul_option.show();
        //}, function () {
        //    //alert("点击成功2");
        //    ul_option.hide();
        //});
        var flag = 1;
        tag_select.on("click", function () {
            if (flag == 1) {
                //alert("点击成功1");
                ul_option.show();
                select_showbox.addClass('active');
                flag = 0;
            } else {
                //alert("点击成功2");
                ul_option.hide();
                select_showbox.removeClass('active');
                flag = 1;
            }
        });

        //tag_select.hover(function () {
        //}, function () {
        //    ul_option.hide();
        //});

        var li_option = ul_option.find('li').not('.tip');
        li_option.on('click', function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            var value = $(this).find(".assay").text();
            select_showbox.text(value);
            ul_option.hide();
        });


        li_option.hover(function () {
            $(this).addClass('hover').siblings().removeClass('hover');
        }, function () {
            li_option.removeClass('hover');
        });


    }

    function createOptions_multiseriate(index, ul_list) {
        //获取被选中的元素并将其值赋值到显示框中
        var options = selects_multiseriate.eq(index).find('option'),
            selected_option = options.filter(':selected'),
            selected_index = selected_option.index(),
            showbox = ul_list.prev();
        showbox.text(selected_option.text());
        //var tip_option = $('<li class="tip"><table style="width: 600px" cellspacing="2" cellpadding="0"><tbody><tr><td class="assay">Assay</td><td class="unit">Unit</td><td class="temp">Temp</td></tr></tbody></table></li>');
        ul_list.append(tip_option);
        //为每个option建立个li并赋值
        for (var n = 0; n < options.length; n++) {
            var tag_option = $('<li></li>'),//li相当于option
                txt_option = options.eq(n).text();
            tag_option.append('<table style="width: 100%" cellspacing="2" cellpadding="0"><tbody><tr><td class="assay"></td><td class="unit"></td><td class="temp"></td></tr></tbody></table>');
            var arr = txt_option.split('&;');
            txt_option_assay = arr[0];
            txt_option_unit = arr[1];
            txt_option_temp = arr[2];
            tag_option.find(".assay").text(txt_option_assay);
            tag_option.find(".unit").text(txt_option_unit);
            tag_option.find(".temp").text(txt_option_temp);
            tag_option.css('cursor', 'pointer').appendTo(ul_list);


            //为被选中的元素添加class为selected
            if (n == selected_index) {
                tag_option.attr('class', 'selected');
            }
        }
    }

    function createSelect_singrow_select(select_container, index) {


        //创建select容器，class为select_box，插入到select标签前
        var tag_select = $('<div></div>');//div相当于select标签
        tag_select.attr('class', 'select_box  ' + singleClassName);
        if (i == 1) {
            // tag_select.css("z-index", "2000");
        }
        tag_select.insertBefore(select_container);


        //显示框class为select_showbox,插入到创建的tag_select中
        var select_showbox = $('<div></div>');//显示框
        select_showbox.css('cursor', 'pointer').attr('class', 'select_showbox').appendTo(tag_select);


        //创建option容器，class为select_option，插入到创建的tag_select中
        var ul_option = $('<ul></ul>');//创建option列表
        ul_option.attr('class', 'select_option ' + singleClassName);
        ul_option.appendTo(tag_select);
        createOptions_singrow_select(index, ul_option);//创建option


        ////点击显示框
        //tag_select.toggle(function () {
        //    //alert("点击成功1");
        //    ul_option.show();
        //}, function () {
        //    //alert("点击成功2");
        //    ul_option.hide();
        //});
        var flag = 1;
        /**增加模拟select是否起作用的控制**/
        var $tag_select = $(tag_select);
        if (tag_select.attr('data-select-enable') == undefined || tag_select.attr('data-select-enable') == null || tag_select.attr('data-select-enable') == true) {
            $tag_select.attr('data-select-enable', true);
        } else if (tag_select.attr('data-select-enable') == false) {
            $tag_select.attr('data-select-enable', false);
        }
        tag_select.on("click", function () {
            var tag_select_enable = $(this).attr('data-select-enable');
            if (tag_select_enable == 'true') {
                if (flag == 1) {
                    $('.singlerow-select .select_showbox').removeClass('active');//让单列下拉只能单选
                    $('.singlerow-select .select_option').hide();
                    ul_option.slideDown(100);
                    select_showbox.addClass('active');
                    flag = 0;
                } else {
                    ul_option.slideUp(100);
                    select_showbox.removeClass('active');
                    flag = 1;
                }
            }
        });

        //tag_select.hover(function () {
        //}, function () {
        //    ul_option.hide();
        //});

        var li_option = ul_option.find('li').not('.tip');
        li_option.on('click', function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            var value = $(this).text();
            select_showbox.text(value);
            ul_option.hide();
        });


        li_option.hover(function () {
            $(this).addClass('hover').siblings().removeClass('hover');
        }, function () {
            li_option.removeClass('hover');
        });


    }

    function createOptions_singrow_select(index, ul_list) {
        //获取被选中的元素并将其值赋值到显示框中
        var options = selects_singrow_select.eq(index).find('option'),
            selected_option = options.filter(':selected'),
            selected_index = selected_option.index(),
            showbox = ul_list.prev();
        showbox.text(selected_option.text());
        //为每个option建立个li并赋值
        for (var n = 0; n < options.length; n++) {
            var tag_option = $('<li></li>'),//li相当于option
                txt_option = options.eq(n).text();
            tag_option.text(txt_option).css('cursor', 'pointer').appendTo(ul_list);
            //为被选中的元素添加class为selected
            if (n == selected_index) {
                tag_option.attr('class', 'selected');
            }
        }
    }

    var select_option_multiseriate = $.fn.selects_multiseriate.select_option = function () {
        $('.select_box.multiseriate .select_option li').on('click', function () {
            var index = $(this).index();
            var _select = $(this).parent().parent().next('select');
            var value = _select.find('option').eq(index).attr('value');
            _select.val(value);
        });
    };
    select_option_multiseriate();
    var select_option_singrow_select = $.fn.selects_singrow_select.select_option = function () {
        $('.singlerow-select .select_box .select_option li').on('click', function () {
            var index = $(this).index();
            var _select = $(this).parent().parent().next('select');
            var value = _select.find('option').eq(index).attr('value');
            _select.val(value);
        });
    };
    select_option_singrow_select();
    $.fn.selects_singrow_select.event = function (selectid, event_) {
        var $select = $('#' + selectid);
        var singrow_select_options = [];
        $select.prev('.select_box').find('.select_option li').on('click', function () {
            singrow_select_options.indexid = $(this).index();
            var _select = $select;
            var value = _select.find('option').eq(singrow_select_options.indexid).attr('value');
            var text = _select.find('option').eq(singrow_select_options.indexid).text();
            singrow_select_options.value = value;
            singrow_select_options.text = text;
            return event_(singrow_select_options);
        });
    };
})(jQuery)