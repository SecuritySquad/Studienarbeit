/*
* (c) Heise Zeitschriften Verlag GmbH & Co. KG
*/
if(typeof jQuery!="undefined"){jQuery(function($){$(".bild_links img,.bild_zentriert img,.bild_rechts img").each(function(i){var url=$(this).parent().find('.linkurl_grossbild').attr("href");if(url){$(this).css('cursor','pointer').bind('mousedown',function(e){if(e.which==1||e.which==2){if(e.which==2){window.open(url,'_blank');window.focus()}else{window.location.href=url}}e.preventDefault()})}})})}
