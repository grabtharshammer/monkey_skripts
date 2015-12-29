// ==UserScript==
// @name         asana get id script
// @namespace    http://axelmax.com/
// @version      0.1
// @description  enter something useful
// @author       me
// @match        https://app.asana.com/*
// @grant        none
// ==/UserScript==

taskId = getTaskId();
setInterval(function(){

    var newTaskId = getTaskId();
    console.log('new taskid',newTaskId,'taskid', taskId);
    if(taskId != newTaskId){

        taskId = newTaskId;
        var taskIdDiv = document.getElementById('__taskId');

        if(!taskIdDiv){
            var logo = document.getElementById('logo');
            taskIdDiv = document.createElement("DIV");
            taskIdDiv.setAttribute("id", "__taskId");
            logo.appendChild(taskIdDiv); 
        }
        taskIdDiv.setAttribute('style','color:#FFF; background: #2E3C54; padding: 20px; margin:-26px;');
        taskIdDiv.innerHTML = window.location.pathname.split('/')[3] + '<div style="font-size:9px; ">' + window.location + '</div>';

    }
},1000);

function getTaskId() {
    taskID =  window.location.pathname.split('/').pop();
    return taskID;

}
