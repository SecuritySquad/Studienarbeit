var mdn=window.mdn||{};(function(mdn){"use strict";var fonts=[{name:"Open Sans Light",className:"ffo-opensanslight",loaded:false,varient:[{weight:"normal"},{weight:"bold"},{style:"italic"}]},{name:"Open Sans",className:"ffo-opensans",loaded:false,varient:[{weight:"normal"},{weight:"bold"},{style:"italic"}]}];for(var i=0,len=fonts.length;i<len;i++){try{if(sessionStorage.getItem(fonts[i].name)){document.documentElement.setAttribute("data-"+fonts[i].className,true);fonts[i].loaded=true}}catch(e){}}mdn.fonts=fonts})(mdn);