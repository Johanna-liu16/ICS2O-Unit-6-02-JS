// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")

/**
 * Input
 */
function myButtonClicked() {

  if (localStorage.cookieClicker) {
    localStorage.cookieClicker = Number(localStorage.cookieClicker) + 1
  } else {
    localStorage.cookieClicker = + 1;
  }
  document.getElementById("answer").innerHTML =
    localStorage.cookieClicker + " cookies";
}