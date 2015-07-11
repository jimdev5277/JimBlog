$(document).ready(function () {
    ptjjxz();
    tabselect();
});

function tabselect() {
    //    $('#ptjj').click(ptjjxz());
    //    $('#zpxx').click(zpxxxz());
    //    $('#gsjj').click(gsjjxz());
    $('#ptjj').bind('click', ptjjxz);
    $('#zpxx').bind('click', zpxxxz);
    $('#gsjj').bind('click', gsjjxz);
};

function ptjjxz(e) {
    $('#ptjjt').css('color', '#DB2D00');
    $('#zpxxt').css('color', '#636363');
    $('#gsjjt').css('color', '#636363');
    $('#redline1').show();
    $('#redline2').hide();
    $('#redline3').hide();
    $('#ptjjc').show();
    $('#zpxxc').hide();
    $('#gsjjc').hide();
};

function zpxxxz(e) {
    $('#ptjjt').css('color', '#636363');
    $('#zpxxt').css('color', '#DB2D00');
    $('#gsjjt').css('color', '#636363');
    $('#redline1').hide();
    $('#redline2').show();
    $('#redline3').hide();
    $('#ptjjc').hide();
    $('#zpxxc').show();
    $('#gsjjc').hide();

};

function gsjjxz(e) {
    $('#ptjjt').css('color', '#636363');
    $('#zpxxt').css('color', '#636363');
    $('#gsjjt').css('color', '#DB2D00');
    $('#redline1').hide();
    $('#redline2').hide();
    $('#redline3').show();
    $('#ptjjc').hide();
    $('#zpxxc').hide();
    $('#gsjjc').show();


};