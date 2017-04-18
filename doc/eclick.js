// ==UserScript==
// @name         eyny click
// @version      0.1
// @description  try to take over the world!
// @author       pjiaquan
// @match        http://*.eyny.com/thread-*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var getId;
    var input = document.getElementsByTagName("input");
    for (var z = 0; z < input.length; z++) {
        if (input[z].name == "secanswer") {
            getId = input[z].id;
            document.getElementById(getId).value = "eyny";
        }
    }

    var userinput = document.getElementsByClassName("t_f");
    var inputdata = [];
    for (var y = 0; y < userinput.length; y++) {
        if (userinput[y].innerHTML.indexOf('<') === -1) {
            //console.log(userinput[y].innerHTML);
            inputdata.push(userinput[y].innerHTML);
        }
    }
    var isClicked = false;
    var textarea = document.getElementsByTagName("textarea");
    for(var x  = 0; x < textarea.length; x++) {
        //console.log(textarea[x].name);
        if (inputdata.length >= 2) {
            textarea[x].value = inputdata[1] + "\n我好喜歡這個帖子！！\r\n" + inputdata[2];
            document.getElementById("fastpostsubmit").click();
            isClicked = true;
        }
    }

    if (!isClicked) {
        location.reload();
    }

})();