/**
 * Created by jimzhuang on 15/1/19.
 */
//激活一下下拉菜单
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
    //alert('成功点击成功');
    //菜单栏点击变红效果实现
    $('#rcaret1').hide();
    $('#rcaret2').hide();
    $('#rcaret3').hide();
    $('#rcaret4').hide();
    $('#moremenu').on('show.bs.dropdown', function () {
        $('#moretitle').css('color', '#ff0000');
        //alert('成功点击成功');
        $('#rcaret4').show();
        $('#caret4').hide();
    });
    $('#districtmenu').on('show.bs.dropdown', function () {
        $('#districttitle').css('color', '#ff0000');
        $('#rcaret1').show();
        $('#caret1').hide();
    });
    $('#areamenu').on('show.bs.dropdown', function () {
        $('#areatitle').css('color', '#ff0000');
        $('#rcaret2').show();
        $('#caret2').hide();
    });
    $('#tpricemenu').on('show.bs.dropdown', function () {
        $('#tpricetitle').css('color', '#ff0000');
        $('#rcaret3').show();
        $('#caret3').hide();
    });
    $('#moremenu').on('hide.bs.dropdown', function () {
        $('#moretitle').css('color', '#636363');
        $('#areatitle').css('color', '#636363');
        $('#districttitle').css('color', '#636363');
        $('#tpricetitle').css('color', '#636363');
        $('#rcaret4').hide();
        $('#caret4').show();
    });
    $('#areamenu').on('hide.bs.dropdown', function () {
        $('#moretitle').css('color', '#636363');
        $('#areatitle').css('color', '#636363');
        $('#districttitle').css('color', '#636363');
        $('#tpricetitle').css('color', '#636363');
        $('#rcaret2').hide();
        $('#caret2').show();
    });
    $('#districtmenu').on('hide.bs.dropdown', function () {
        $('#moretitle').css('color', '#636363');
        $('#areatitle').css('color', '#636363');
        $('#districttitle').css('color', '#636363');
        $('#tpricetitle').css('color', '#636363');
        $('#rcaret1').hide();
        $('#caret1').show();
    });
    $('#tpricemenu').on('hide.bs.dropdown', function () {
        $('#moretitle').css('color', '#636363');
        $('#areatitle').css('color', '#636363');
        $('#districttitle').css('color', '#636363');
        $('#tpricetitle').css('color', '#636363');
        $('#rcaret3').hide();
        $('#caret3').show();
    });
//    $('.listitem').click(function(){
//        //alert('成功点击成功');
//        location.href='lookhousetotal.html';
//    })
});
