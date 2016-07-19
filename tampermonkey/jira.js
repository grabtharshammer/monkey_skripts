// ==UserScript==
// @name         external link jira
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://bamboohr.atlassian.net/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	setInterval(function(){
		document.querySelector('.external-link').setAttribute('target','_blank');
	}, 500);
})();
