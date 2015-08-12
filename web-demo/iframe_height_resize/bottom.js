/**
 * Created by jtcdf on 2015/6/29.
 */
function iFrameHeight(iframeid , extraheight) {

    var ifm= document.getElementById(iframeid);
         ifm.height="10px";
    var subWeb = document.frames ? document.frames[iframeid].document : ifm.contentDocument;

    if(ifm != null && subWeb != null) {

        ifm.height = subWeb.body.scrollHeight+60;
        if(extraheight !=null || extraheight!=undefined){
            ifm.height = subWeb.body.scrollHeight+60+extraheight;
        }
    }


    //var tabcontent = document.getElementById('tablecontent');
    //var tabcontentWeb= document.frames ? document.frames["tablecontent"].document :
    //    tabcontent.contentDocument;
    //if(tabcontent !=null && tabcontentWeb !=null){
    //    tabcontent.height=tabcontentWeb.body.scrollHeight;
    //}

}
