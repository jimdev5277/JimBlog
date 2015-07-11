/**
 * Created by jimzhuang on 15/1/22.
 */
$(document).ready(function(){
    // 百度地图API功能
    var map = new BMap.Map("allmap");            // 创建Map实例
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point,15);                 // 初始化地图,设置中心点坐标和地图级别。
    map.addControl(new BMap.ZoomControl());      //添加地图缩放控件
    //$('#projecttitle').css('color','#ff0000');

    $('#projecttitle').css('color','#DB2D00');
    $('#redline2').hide();
    $('#redline3').hide();
    $('#huxingcontent').hide();
    $('#recommendcontent').hide();
    $('#xiangmuarea').click(function(){
        $('#projecttitle').css('color','#DB2D00');
        $('#huxingt').css('color','#636363')
        $('#recommend').css('color','#636363')
        $('#redline1').show();
        $('#redline2').hide();
        $('#redline3').hide();
        $('#projectcontent').show();
        $('#huxingcontent').hide();
        $('#recommendcontent').hide();
        // 百度地图API功能
        var map = new BMap.Map("allmap");            // 创建Map实例
        var point = new BMap.Point(116.404, 39.915); // 创建点坐标
        map.centerAndZoom(point,15);                 // 初始化地图,设置中心点坐标和地图级别。
        map.addControl(new BMap.ZoomControl());      //添加地图缩放控件
    })
    $('#huxingarea').click(function(){
        $('#projecttitle').css('color','#636363');
        $('#huxingt').css('color','#DB2D00');
        $('#recommend').css('color','#636363');
        $('#redline1').hide();
        $('#redline2').show();
        $('#redline3').hide();
        $('#projectcontent').hide()
        $('#huxingcontent').show();
        $('#recommendcontent').hide();
    })
    $('#tuijianarea').click(function(){
        $('#projecttitle').css('color','#636363');
        $('#huxingt').css('color','#636363');
        $('#recommend').css('color','#DB2D00');
        $('#redline1').hide();
        $('#redline2').hide();
        $('#redline3').show();
        $('#projectcontent').hide()
        $('#huxingcontent').hide();
        $('#recommendcontent').show();
    })
    $('#btnback').click(function(){
        location.href='index.html';
    })
    $('.evalucation').click(function(){
        location.href='Evaluation.html';
    })
})
