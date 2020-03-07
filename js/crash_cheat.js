var oldTitle = document.title;
var titleTime; //���}�֏�Ӌ�r��
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "/images/icons/favicon-32x32-next.png");
    document.title = "╭(°A°`)╮ 页面崩溃啦 ~";
    clearTimeout(titleTime);
  } else {
    document.title = "(ฅ>ω<*ฅ) 噫又好了~";
    document.querySelector("[rel='icon']").setAttribute("href", "/images/icons/favicon-32x32-next.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});