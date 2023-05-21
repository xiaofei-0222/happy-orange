// 轮播图
// 初始数据
const sliderData = [
  { url: './image/f953b80e-7b5d-4d2e-88ed-af2d7ba86222.jpg' },
  { url: './image/1466e065-ee43-4dde-ac64-9c5e0cee1efa.jpg' },
  { url: './image/5d77941c-f0c0-4c9f-858c-d21fdba1d392.jpg' },
  { url: './image/5c1dcd8e-43e3-4fb6-9d5d-dbe465faa032.jpg' },
  { url: './image/bd69b6e84136a3352f9397e252a061ab.jpg' },
  { url: './image/0992dac3-c965-4083-9897-be7efd25e34f.jpg' },
  { url: './image/3bd8a68492790a0a2f1480f162c9419e.jpg' },
];
// 声明一个变量 i
let i = 0;

// 获取元素
const next = document.querySelector('.next');
const img = document.querySelector('.slider-wrapper img');
const prev = document.querySelector('.prev');
// 需求1： 点击右侧按钮，可以无缝衔接顺序播放
next.addEventListener('click', function () {
  i++;
  i = i % sliderData.length;
  toggle();
});
prev.addEventListener('click', function () {
  i--;
  i = (i + sliderData.length) % sliderData.length;
  toggle();
});

//  封装 toggle 函数
function toggle() {
  // 更换图片、文字、背景颜色、小圆点
  img.src = sliderData[i].url;
  document.querySelector('.slider-indicator .active').classList.remove('active');
  document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active');
}

// 需求3： 定时器自动播放轮播图
let timerId = setInterval(function () {
  next.click();
}, 2000);

// 需求4：鼠标经过轮播图停止自动播放，鼠标离开，开启自动播放
// 4.1 鼠标经过(mouseenter)大盒子就让定时器停止
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', function () {
  clearInterval(timerId);
});

// 4.2 鼠标离开(mouseleave)就让大盒子继续开启定时器
slider.addEventListener('mouseout', function () {
  timerId = setInterval(function () {
    // 每隔1秒钟，自动点击一次右侧按钮
    next.click();
    // click() 是程序模拟用户点击事件，自动来执行不需要用户点击
  }, 3000);
  // console.log(timerId)
});

// 需求6： 点击小圆点可以切换图片
// 6.1 利用循环来给小圆点绑定点击事件
const lis = document.querySelectorAll('.slider-wrapper li');
for (let j = 0; j < lis.length; j++) {
  lis[j].addEventListener('click', function () {
    console.log(j);
    // 6.2 让信号量i 修改为 当前的索引号
    i = j;
    // 6.3 调用 公共 toggle 函数
    toggle();
  });
}

// tab
const as = document.querySelectorAll('.tab-nav a');
const items = document.querySelectorAll('.item');

for (let i = 0; i < as.length; i++) {
  as[i].addEventListener('mouseenter', function () {
    document.querySelector('.tab-nav .activeitem') && document.querySelector('.tab-nav .activeitem').classList.remove('activeitem');
    this.classList.add('activeitem');
    document.querySelector('.tab-content .activeitem') && document.querySelector('.tab-content .activeitem').classList.remove('activeitem');
    items[i].classList.add('activeitem');
  });
}
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener('mouseleave', function () {
    document.querySelector('.tab-nav .activeitem') && document.querySelector('.tab-nav .activeitem').classList.remove('activeitem');

    document.querySelector('.tab-content .activeitem') && document.querySelector('.tab-content .activeitem').classList.remove('activeitem');
  });
}

const backtop = document.querySelector('.backtop');
window.addEventListener('scroll', function () {
  const n = document.documentElement.scrollTop;
  if (n >= 200) {
    backtop.style.display = 'block';
  } else {
    backtop.style.display = 'none';
  }
});
backtop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});
const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
  location.href = './login/logo.html';
});

//获取第一个i和第二个i
const hidden = document.querySelector('.right .hidden');
const i1 = document.querySelector('.right .logo');
const i2 = document.querySelector('.right .register');
console.log(i1);
function render() {
  //从本地获取数据
  const data = localStorage.getItem('uname');
  if (data) {
    //登录的状态
    i1.innerHTML = `
    <i>${data}</i>
    `;
    i2.innerHTML = `<i>退出登录</i>`;
    hidden.innerHTML = '';
  } else {
    //未登录状态
    i1.innerHTML = `<i>请先登录</i>`;
    i2.innerHTML = `<i>请先注册</i>`;
  }
}
render();
// i2.addEventListener('click', function () {
//   location.href = '../register/logon.html';
// });
//退出登录
i2.addEventListener('click', function () {
  localStorage.removeItem('uname');
  render();
});

const order = document.querySelector('.myorder');
order.addEventListener('click', function () {
  location.href = './orders/order/personal .html';
});

const shopcar = document.querySelector('.shopcar');
shopcar.addEventListener('click', function () {
  location.href = './buycar/LCgouwuche.html';
});
const shopping = document.querySelector('.shopping');
console.log(shopping);
shopping.addEventListener('click', function () {
  location.href = './buycar/LCgouwuche.html';
});
