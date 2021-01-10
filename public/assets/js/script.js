function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function () {

  let buttonEl = document.getElementById("btn")

  buttonEl.addEventListener("click", e => handleClick(e))

  function handleClick(e) {
    e.preventDefault()
    console.log("CLICKED!")
    console.log(e)
  }
});