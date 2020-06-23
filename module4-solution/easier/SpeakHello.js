(function (window) {
  var helloGreeter = {};
  helloGreeter.speakWord = "Hello";
  helloGreeter.speak = function (name) {
    console.log(helloGreeter.speakWord + " " + name);
  }

  window.helloGreeter = helloGreeter;

})(window);

