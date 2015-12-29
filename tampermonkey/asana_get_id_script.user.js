// ==UserScript==
// @name         asana get id script
// @namespace    http://axelmax.com/
// @version      0.1
// @description  enter something useful
// @author       me
// @match        https://app.asana.com/*
// @grant        none
// ==/UserScript==

taskId = window.location.pathname.split('/')[3];
setInterval(function(){
    var newTaskId = window.location.pathname.split('/')[3];
    if(taskId != newTaskId){
        taskId = newTaskId;
        var taskIdDiv = document.getElementById('__taskId');

        if(!taskIdDiv){
            var logo = document.getElementById('logo');
            taskIdDiv = document.createElement("DIV");
            taskIdDiv.setAttribute("id", "__taskId");
            logo.appendChild(taskIdDiv); 
        }

        taskIdDiv.innerHTML = window.location.pathname.split('/')[3] + '<div style="font-size:9px">' + window.location + '</div>';
    }
},1000);