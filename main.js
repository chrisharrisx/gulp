"use strict";

window.onload = function () {
  var name = 'BCIT';

  var check = function check() {
    if (name.includes('CI')) {
      console.log('found CI');
    }
  };

  check();
};