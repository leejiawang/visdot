var throttle = function(cb, dely = 100) {
  var flag = true;
  var timer = null;
  return function(e) {
      top = window.screenY;

      if (!flag) {
          return;
      }
      flag = false;
      cb();
      setTimeout(() => {
          flag = true;
      }, dely)
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
          cb()
      }, dely + 50)
  }
}
window.addEventListener('scroll',
  throttle(function() {
      var scrollTop = window.scrollY;
      var common = document.querySelector('.common');
      var common2 = document.querySelector('.common2');
      if (scrollTop > 100) {
          common.style.transform = "translateY(-56px)"
          common2.style.transform = "translateY(-56px)"
      } else {
          common.style.transform = "translateY(0px)"
          common2.style.transform = "translateY(0px)"
      }
  })
)
window.onload = function() {
  var scrollTop = window.scrollY;
  var common = document.querySelector('.common');
  var common2 = document.querySelector('.common2');
  if (scrollTop > 100) {
      common.style.transform = "translateY(-56px)"
      common2.style.transform = "translateY(-56px)"
  } else {
      common.style.transform = "translateY(0px)"
      common2.style.transform = "translateY(0px)"
  }
}