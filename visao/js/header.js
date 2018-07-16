'use strict';

(function () {

  var btnMenu = document.querySelector('.btn-menu');
  var elNavigation = document.querySelector('.navigation');

  /**
   * Toggle the class on navigation
   */
  btnMenu.onclick = function () {
    elNavigation.classList.toggle('open');
  };

})();

