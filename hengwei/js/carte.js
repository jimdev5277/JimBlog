/**
 * Created by jimzhuang on 15/5/20.
 */
var tep = $('.s-t-zh').text();
var firme = "您的位置：首页" + "<span>&gt;</span>" + tep;
var secme = parseInt(UrlParm.parm('secme'));
var secmeval = $('#isAct1').html();
var thrmeval = "";
var finaltip = "";
var primary;
$(function()
{
    primary = $('.primary').html();
    $('.isAct').click(function () {
        $('.thrme').hide();
        $(this).next('.thrme').show();
        $('.isAct').removeClass('sele').addClass('unsele');
        $(this).removeClass('unsele');
        $(this).addClass('sele');
//        var value=$(this).text();
//        alert(value);
        secmeval = $(this).html();
        thrmeval = $(this).next('.thrme').find('li').first().html();
        modify(secmeval, thrmeval);
    });
    $('.thrme li').click(function () {
        thrmeval = $(this).html();
        modify(secmeval, thrmeval);
    });
    switch (secme) {
        case 1:
            $('.s-list li').removeClass('unsele sele');
            $('#isAct1').addClass('sele');
            $('#isAct2').addClass('unsele');
            $('#isAct3').addClass('unsele');
            $('.thrme').hide();
            $('#thrme1').show();
            secmeval = $('#isAct1').html();
            thrmeval = $('#thrme1').find('li').first().html()
            modify(secmeval, thrmeval);
            break;
        case 2:
            $('.s-list li').removeClass('unsele sele');
            $('#isAct1').addClass('unsele');
            $('#isAct2').addClass('sele');
            $('#isAct3').addClass('unsele');
            $('.thrme').hide();
            $('#thrme2').show();
            secmeval = $('#isAct2').html();
            thrmeval = $('#thrme2').find('li').first().html()
            modify(secmeval, thrmeval);
            break;
        case 3:
            $('.s-list li').removeClass('unsele sele');
            $('#isAct1').addClass('unsele');
            $('#isAct2').addClass('unsele');
            $('#isAct3').addClass('sele');
            $('.thrme').hide();
            $('#thrme3').show();
            secmeval = $('#isAct3').html();
            thrmeval = $('#thrme3').find('li').first().html()
            modify(secmeval, thrmeval);
            break;
    }
//修改文字栏字
    function modify(sec, thr) {
        var text;
        if (thr == undefined) {
            thr = "";
            finaltip = secmeval.replace('<span>&gt;</span>', '').replace('<SPAN>&gt;</SPAN>', '');
        } else {
            finaltip = thr.replace('<span>&gt;</span>', '').replace('<SPAN>&gt;</SPAN>', '');
        }
        text = firme + sec + thr;
        $('.p-t-r').text("");
        $('.p-t-r').append(text);
//        alert(finaltip);
        $('.p-t-l').text(finaltip);
    }

    $('#l-sydc').click(function () {
        $('.primary').empty().load('product-sydc.html .primary');
        $('#dialogdiv').empty().load('product-sydc.html #somedialog');
        //$.ajax({
        //    url:'product-sydc.html',
        //    gloabl:false,
        //    type:'POST',
        //    dataType: "html",
        //    async:false,
        //    success: function(msg){
        //        alert(msg);
        //        $msg=$(msg);
        //        alert($msg.find('.primary').html());
        //        $('.primary').empty().append($msg.find('.primary').html());
        //    }
        //})

    });
    $('#l-zbgy').click(function () {
        $('.primary').empty().load('product.html .primary');
        $('#dialogdiv').empty();
    });
    $('#l-yykf').click(function () {
        $('.primary').empty().load('services-yykf.html .primary');
    });
    $('#l-yxwl').click(function () {
        $('.primary').empty().load('services-yxwl.html .primary');
    });
    $('#l-sswl').click(function () {
        $('.primary').empty().load('services.html .primary');
    });

    menuact();

    splitb();
});
//    var isactive=false;
//    if(name=="xxx"){
//        isactive=true;
//    }
//angularjs
//    var isActiveone = false, isActivetwo = false, isActivethr = false;
//    function menu($scope){
////        $scope.isActive=isactive;
//            switch (dd){
//                case 1:
//                    $scope.isActiveone=true;
//                    $scope.isActivetwo=false;
//                    $scope.isActivethr=false;
//                    break;
//                case 2:
//                    $scope.isActiveone=false;
//                    $scope.isActivetwo=true;
//                    isActivethr=false;
//                    break;
//                case 3:
//                    $scope.isActiveone=false;
//                    $scope.isActivetwo=false;
//                    $scope.isActivethr=true;
//                    break;
//            }
//    }

/*按钮效果选择*/
function menuact(){
    $('.s-list li').click(function () {
        $('.s-list li').removeClass('active');
        $(this).addClass('active');
    });
};

/*分裂按钮效果*/
function splitb(){
    $('.btn-split p').click(function () {
      $('.btn-split p').removeClass('bac-blue');
        $(this).addClass('bac-blue');
    });
}