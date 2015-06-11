/**
 * Created by jimzhuang on 15/5/18.
 */
//在页面中的操作
$(function(){
    $(".tacontent tr").click(function(){
        $('#somedialog').show();
    });
    $(".lpimg").click(function(){
        $('#somedialog').show();
    });
  $('.close').click(function(){
      $('#somedialog').hide();
  });
    $('#l-sydc').click(function () {
        window.location.href="product-sydc.html";
    });
})