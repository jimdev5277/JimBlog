$(function(){


	$("#hanvos-navs").find("li").hover(function(){
		var $thisli = $(this).children('div.nav-child');
		var $thisi = $(this).children('i.arrow');
		$thisli.show();
		$thisi.show();
		$thisli.animo( { animation: 'fadeInUp', duration: 0.2});
		$thisi.animo( { animation: 'fadeInDown', duration: 0.2});
		$thisli.addClass('nav-child');
		$thisi.addClass('arrow').addClass('a-nav');

	},function(){
		var $thislih = $(this).children('div.nav-child');
		var $thisih = $(this).children('i.arrow');
		$thislih.animo( { animation: 'fadeOutDown', duration: 0.4, keep: true});
		$thisih.animo( { animation: 'fadeOutUp', duration: 0.4, keep: true});
		$thislih.hide();
		$thisih.hide();
	});

	$(".show-nav").find("li").hover(function(){
		var $thisli = $(this).children('div.show-child');
		$thisli.show();
		$thisli.animo( { animation: 'fadeInDown', duration: 0.2});
		$thisli.addClass('show-child');
	},function(){
		var $thisli = $(this).children('div.show-child');
		$thisli.animo( { animation: 'fadeOutUp', duration: 0.4, keep: true});
		$thisli.hide();
	});


	/*setInterval('AutoScroll("#adv-s-1")',6000);

	var canchange = setInterval('AutoScroll2("#adv-s-2")',4300);
	$(".s-arrow").click(function(event) {
		var obj = $("#adv-s-2");
		window.clearInterval(canchange);
		if($(this).hasClass('arrow-left')){
			$(obj).animate({
				marginLeft:"0"
			},500,function(){
				$(this).css({marginLeft:"-100%"}).find("div.scrolldiv-part:last").appendTo(this);
			});
			canchange = setInterval('AutoScroll2("#adv-s-2")',4300);
		}else{
			$(obj).animate({
				marginLeft:"-200%"
			},500,function(){
				$(this).css({marginLeft:"-100%"}).find("div.scrolldiv-part:first").appendTo(this);
			});
			canchange = setInterval('AutoScroll2("#adv-s-2")',4300);
		}
	});*/
	//childMenu('xx','xx','xx','xx');
	//select选择下拉按钮
	$(".sel_wrap").on("change", function() {
		var o;
		var opt = $(this).find('option');
		opt.each(function(i) {
			if (opt[i].selected == true) {
				o = opt[i].innerHTML;
			}
		})
		$(this).find('label').html(o);
	}).trigger('change');
});

var AutoScroll = function(obj,dir){
	$(obj).animate({
		marginLeft:"-101%"
	},500,function(){
		$(obj).animate({
			marginLeft:"-100%"
		},100,function(){
			$(this).css({marginLeft:"0px"}).find("div:first").appendTo(this);
		});
	});
}
var AutoScroll2 = function(obj,dir){
	$(obj).animate({
		marginLeft:"-201%"
	},500,function(){
		$(obj).animate({
			marginLeft:"-200%"
		},100,function(){
			$(this).css({marginLeft:"-100%"}).find("div.scrolldiv-part:first").appendTo(this);
		});
	});
}
window.onscroll = function () {
	var allh = document.body.scrollHeight;
	var realh = document.documentElement.clientHeight;
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	var movepart = (top/(allh-realh))*110;
	$(".adv-part").css("background-position-y",-70-movepart);
}
//子菜单填写
function  childMenu(firstmenu,secondmenu,threemenu,fourmenu){
	$('.p-t-r').text('xx');
}
function leftmenu(){

}
