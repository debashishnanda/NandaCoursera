(function (window) {
  var byeGreeter = {};
  byeGreeter.speakWord = "Good Bye";
  byeGreeter.speak = function (name) {
    console.log(byeGreeter.speakWord + " " + name);
  }

  window.byeGreeter = byeGreeter;

})(window);