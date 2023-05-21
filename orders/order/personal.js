// 顶部
const show = document.querySelector('.show');
const none = document.querySelector('.none');
const color = document.querySelectorAll('.color');
show.addEventListener('mouseover', function () {
  none.style.opacity = '1';
});

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener('mouseenter', function () {
    document.querySelector('.none .active') && document.querySelector('.none .active').classList.remove('active');
    color[i].classList.add('active');
  });
}
show.addEventListener('mouseout', function () {
  none.style.opacity = '0';
});
//  购物车 鼠标移入
const carts = document.querySelector('.carts button ');
const acd = document.querySelector('.carts button a');
carts.addEventListener('mouseover', function () {
  carts.style.backgroundColor = '#fdeced';
  acd.style.color = '#ea4148';
});
carts.addEventListener('mouseout', function () {
  carts.style.backgroundColor = '#fff';
  acd.style.color = '#606266';
});
// 电梯导航
// 点击返回顶部
// const backtop = document.querySelector('.backtop');
// window.addEventListener('scroll', function () {
//   const n = document.documentElement.scrollTop;
//   if (n >= 200) {
//     backtop.style.display = 'block';
//   } else {
//     backtop.style.display = 'none';
//   }
// });
// backtop.addEventListener('click', function () {
//   document.documentElement.scrollTop = 0;
// });
$(function () {
  // 电梯导航
  // 点击返回顶部
  $(window).scroll(function () {
    if ($(document).scrollTop() >= $('.navs').offset().top) {
      $('.backtop').show();
    } else {
      $('.backtop').hide();
    }
  });
  $('.backtop').click(function () {
    $('html').animate({
      scrollTop: 0,
    });
  });

  // 侧边栏
  $('.sidebar li ').click(function () {
    $(this).addClass('highlight').siblings().removeClass('highlight');
  });
  // $('.sidebar a').each(function(i,domEle){
  //   console.log(i);
  //   $('.sidebar a').mouseover(function(){
  //     $('.sidebar a').eq(i).css('color','#ea4148').siblings().css('color','#333')
  //   })
  // })
});

// 鼠标移入
const lis = document.querySelectorAll('.elevator li');
const as = document.querySelectorAll('.elevator  li a');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function () {
    lis[i].style.backgroundColor = '#ea4148';
    as[i].style.color = '#fff';
  });
}
// 鼠标移出
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseout', function () {
    lis[i].style.backgroundColor = '#fff';
    as[i].style.color = '#666';
  });
}

// 侧边栏
const uls = document.querySelector('.sidebar ul');
uls.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'A') {
    e.target.style.color = '#ea4148';
  }
});
uls.addEventListener('mouseout', function (e) {
  if (e.target.tagName === 'A') {
    e.target.style.color = '#333';
  }
});

/* // 导航
const asc = document.querySelectorAll('.tab-nav a');
const items = document.querySelectorAll('.item');

for (let i = 0; i < asc.length; i++) {
  asc[i].addEventListener('mouseenter', function () {
    document.querySelector('.tab-nav .activeitem') && document.querySelector('.tab-nav .activeitem').classList.remove('activeitem');
    this.classList.add('activeitem');
    document.querySelector('.tab-content .activeitem') && document.querySelector('.tab-content .activeitem').classList.remove('activeitem');
    items[i].classList.add('activeitem');
  });
}
for (let i = 0; i < asc.length; i++) {
  asc[i].addEventListener('mouseleave', function () {
    document.querySelector('.tab-nav .activeitem') && document.querySelector('.tab-nav .activeitem').classList.remove('activeitem');

    document.querySelector('.tab-content .activeitem') && document.querySelector('.tab-content .activeitem').classList.remove('activeitem');
  });
} */
// 地址管理
const manager = document.querySelector('.sidebar .manager');
const content = document.querySelector('.heart .content');
const address = document.querySelector('.heart .address');
const highlight = document.querySelector('.sidebar .highlight');
manager.addEventListener('click', function () {
  content.style.display = 'none';
  address.style.display = 'block';
});
highlight.addEventListener('click', function () {
  content.style.display = 'block';
  address.style.display = 'none';
});
// 我的订单
const order = document.querySelector('.sidebar .order');
const orders = document.querySelector('.orders');
order.addEventListener('click', function () {
  orders.style.display = 'block';
  content.style.display = 'none';
  referral.style.display = 'none';
  address.style.display = 'none';
});
