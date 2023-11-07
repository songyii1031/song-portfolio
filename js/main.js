$(document).ready(function () {
  $("#logo")
    .find("h1")
    .on("click", function () {
      window.location.reload();
    });

  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };
});

$(function () {
  setTimeout(function () {
    $("#logo").addClass("on");
    $("#mainabner").addClass("scale01");
  }, 300);

  t = 0;
  timer = 0;

  $(window).scroll(function () {
    timer = setTimeout(function () {
      t = $(window).scrollTop();

      if (t > 400) {
        $(".portfolio01").addClass("on2");
      }
      if (t > 900) {
        $(".portfolio02").addClass("on3");
      }

      if (t >= $("#box01").offset().top - 500) {
        $("#box01 .a_box01").addClass("on5");
      }
    }, 500);
  });

  $(window).trigger("scroll");

  //top menu
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $(".effect7").addClass("back");
    } else if ($(window).scrollTop() > 4000) {
      $(".effect7 a span").addClass("back03");
    } else {
      $(".effect7").removeClass("back");
      $(".effect7 a").removeClass("back02");
      $(".effect7 a span").removeClass("back03");
    }
  });

  //스크롤 페이지 넘김

  $(".effect7 a").click(function () {
    var ide = $(this).attr("href");
    var offset = 70;
    var target = $(ide).offset().top - offset;

    $("html,body").animate(
      {
        scrollTop: target,
      },
      500
    );
  });
  //view_wrap part

  var w = 0;
  var amount = 0;

  $(".left_btn").click(function (e) {
    e.preventDefault();
    amount -= w;
    $(".view_wrap1 > ul").animate({ left: amount }, 600, function () {
      $(this).append($(".view_wrap1 > ul li:first-child"));
      amount += w;
      $(this).css({ left: amount });
    });
  });

  $(".right_btn").click(function (e) {
    e.preventDefault();
    $(".view_wrap1 > ul").prepend($(".view_wrap1 > ul li:last-child"));

    amount -= w;
    $(".view_wrap1 > ul").css({ left: amount });
    amount += w;
    $(".view_wrap1 > ul").animate({ left: amount }, 600);
  });

  //video
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#content_box").offset().top - 250) {
      $(".progress-bar").each(function () {
        $(this)
          .find(".progress-content")
          .animate(
            {
              width: $(this).attr("data-percentage"),
            },
            1500
          );

        $(this)
          .find(".progress-number-mark")
          .animate(
            { left: $(this).attr("data-percentage") },
            {
              duration: 1500,
              step: function (now, fx) {
                //step엔 인자를 두개 받는다.
                var data = Math.round(now);
                $(this)
                  .find(".percent")
                  .html(data + "%");
              },
            }
          );
      });
    }
  });

  // top 버튼
  var t2 = 0;
  var timer3 = 0;

  $(window).scroll(function () {
    timer3 = setTimeout(function () {
      t2 = $(window).scrollTop();

      $(".top").css({ top: t2 + 500 });
    }, 150);
  });

  $(".top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
    // window.location.reload();
  });

  //해리포터

  $(".view_wrap2 ul li a").hover(
    function () {
      n1 = $(this).parent().index();
      path = "images/potter0" + (n1 + 1) + ".jpg";

      $(this).find("img").attr({ src: path });
    },
    function () {
      path = "images/potter0" + (n1 + 1) + "_gray.jpg";
      $(this).find("img").attr({ src: path });
    }
  );

  t4 = 0;
  timer4 = 0;
  $(window).scroll(function () {
    timer4 = setTimeout(function () {
      t4 = $(window).scrollTop();

      if (t4 <= $("#box02").offset().top + 200) {
        $("#box02").addClass("on6");
      }
    }, 500);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#box02").offset().top - 500) {
      $(".sspan1").addClass("width");
      $("#box02 .hone1").addClass("trans");
    }

    if ($(window).scrollTop() > $("#box02").offset().top - 200) {
      $(".sspan2").addClass("width");
      $("#box02 .hone2").addClass("trans");
    }
  });
});

// 2023.07 추가
