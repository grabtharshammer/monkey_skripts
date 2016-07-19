// ==UserScript==
// @name         external link jira
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://bamboohr.atlassian.net/*
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/grabtharshammer/monkey_skripts/master/tampermonkey/jira.js
// ==/UserScript==

(function() {
	'use strict';
	setInterval(function(){
		document.querySelectorAll('.external-link').forEach(addTargetBlank);
	}, 5000);
	$(document).click(function() {
		document.querySelectorAll('.external-link').forEach(addTargetBlank);
	});
})();

function addTargetBlank(element, index, array){
	element.setAttribute('target','_blank');
}
