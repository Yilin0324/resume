//scroll to id
$("#Menu a, #Arrow a").click(function () {
  const
    who = $(this).attr('href'),
    val = $(who).offset().top - $("#Menu").innerHeight();
  $("html").animate({ scrollTop: val }, 1000);
});

//scroll spy
const spy = function () {
  const nowat = $(window).scrollTop();
  $("section").each((i, e) => {
    // console.log(i,e);
    const
      id = $(e).attr('id'),
      offset = $(e).offset().top - $("#Menu").innerHeight() - 1,
      height = $(e).innerHeight();


    if (offset <= nowat && nowat < offset + height) {
      // console.log(id);
      $("#Menu a").removeClass('active');
      $(`#Menu a[href='#${id}']`).addClass('active');
    }
  });
}

//check bg menu
const bgmenu = function () {
  const
    viewWidth = $(window).innerWidth(),
    nowat = $(window).scrollTop(),
    height = $("#hero").innerHeight(),
    offset = $("#Menu").innerHeight() + 1;

  if (nowat <= height - offset) {  //落在 首區內
    $("#Arrow").fadeOut(); //隱藏至頂按鈕

    if (viewWidth > 767) $("#Menu").removeClass('bg-dark');  // 大畫面
    else $("#Menu").addClass('bg-dark'); // 小畫面

  } else {  //在其他主題時
    $("#Menu").addClass('bg-dark');
    $("#Arrow").fadeIn();
  }
}

//當網頁滾動時
$(window).scroll(() => {
  spy();
  bgmenu();
});
//當網頁更改寬度時
$(window).resize(bgmenu);


spy();
bgmenu();

//animate
AOS.init({
  duration: 1000,
  once: true
});
