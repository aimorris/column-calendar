// ==UserScript==
// @name     	column-calendar
// @include		https://calendar.google.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==

waitForKeyElements (".rSoRzd", actionFunction);

function actionFunction () {
	startTime();
}

function startTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  $(".rSoRzd")[0].innerHTML = new Date(Date.now());
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}