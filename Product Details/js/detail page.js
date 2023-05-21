// 封装函数
// 鼠标移入 背景浅红    字体红色
function mouseenter(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('mouseenter', function () {
      // 打印一下  点击的是第几个a
      console.log(i);
      // 标题 ：移入哪个标题（a）。哪个a就高粱显示
      // document.querySelector('.oneman_center .oneman_center_down ul .active')&&document.querySelector('.oneman_center .oneman_center_down ul .active').classList.remove('active')
      //  找到item里的所有 active元素 进行 删除
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove('active');
      }
      // 后 添加  目标active元素
      item[i].classList.add('active');
    });
    item[i].addEventListener('mouseleave', function () {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove('active');
      }
    });
  }
}
const header = document.querySelector('.header');
// header 头部开始
// 获取个人中心
const oc = document.querySelector('.oneman_center');
//   获取个人中心下面的隐藏
const ocd = document.querySelector('.oneman_center .oneman_center_down');
// 个人中心的  隐藏 下的 移入背景变色 字体变色
const ocd_lis = document.querySelectorAll('.oneman_center .oneman_center_down ul li');
// 调用函数
mouseenter(ocd_lis);
//  ________________________________________________
oc.addEventListener('mouseenter', function () {
  ocd.style.transform = 'scaleY(1)';
});

oc.addEventListener('mouseleave', function () {
  ocd.style.transform = 'scaleY(0)';
});
//  header 头部 语言选择
// 获取语言
const lgg = document.querySelector('.language');
// 获取 头部语言下啦
const lgd = document.querySelector('.language .language_down');
// 获取头部语言下啦 的ul  的li
const lgd_lis = document.querySelectorAll('.language .language_down ul li');
// 调用函数进行 鼠标移入变色
mouseenter(lgd_lis);
lgg.addEventListener('mouseenter', function () {
  lgd.style.transform = 'scaleY(1)';
});
lgg.addEventListener('mouseleave', function () {
  lgd.style.transform = 'scaleY(0)';
});
// header 头部结束
// search 搜索开始
// 获取 input 搜搜框 sah
const sah = document.querySelector('[name=search]');
// 获取  搜索框 下拉
const sah_down = document.querySelector('.search_Ctr .search_pudwn');
// 获取搜索框下拉的li
const sah_lis = document.querySelectorAll('.search_Ctr .search_pudwn ul li');
sah.addEventListener('focus', function () {
  sah_down.style.display = 'block';
});
sah.addEventListener('blur', function () {
  sah_down.style.display = 'none';
});
mouseenter(sah_lis);
// search 搜索结束
// nva 导航开始
//  获取导航的所有 内容
const nav_cnts = document.querySelectorAll('.lc_nav_bottom .nav_content');
const nav_pops = document.querySelectorAll('.lc_nav_pop ul li');
const nav_ptr = document.querySelector('.pop_container');
const nav_nd2 = document.querySelector('.nd2');
const nav_pop = document.querySelector('.lc_nav_pop');
console.log(nav_cnts);
// 进行tab 切换
for (let i = 0; i < nav_cnts.length; i++) {
  nav_cnts[i].addEventListener('mouseenter', function (e) {
    if (e.target.tagName === 'DIV') {
      // nav_ptr.style.transform = 'scaleY(1)'

      document.querySelector('.nav_active') && document.querySelector('.nav_active').classList.remove('nav_active');
      e.target.classList.add('nav_active');
    }
  });
  nav_cnts[i].addEventListener('mouseleave', function (e) {
    e.target.classList.remove('nav_active');
    // nav_ptr.style.transform = 'scaleY(0)'
  });
}
// nva_pop_active
// console.log(nav_pops);
for (let i = 0; i < nav_pops.length; i++) {
  nav_pops[i].addEventListener('mouseenter', function (e) {
    if (e.target.tagName === 'LI') {
      console.log(i);
      // nav_ptr.style.transform = 'scaleY(1)'
      document.querySelector('.nav_pop_active') && document.querySelector('.nav_pop_active').classList.remove('nav_pop_active');
      e.target.classList.add('nav_pop_active');
    }
  });
  nav_pops[i].addEventListener('mouseleave', function (e) {
    e.target.classList.remove('nav_pop_active');
    // nav_ptr.style.transform = 'scaleY(0)'
  });
}

// nva 导航结束

// 倒计时
// 倒计时
function getTimer() {
  // 1.1 得到将来的时间戳
  const end = +new Date('2023-4-25 16:00:00');
  // 1.2 得到现在的时间戳
  const now = +new Date();
  // 1.3 得到剩余的时间戳(毫秒数) 记得转换为秒数
  const count = (end - now) / 1000;

  // 2. 把剩余的时间戳转换为 时分秒
  let d = parseInt(count / 60 / 60 / 24);
  d = d < 10 ? '0' + d : d;
  let h = parseInt((count / 60 / 60) % 24); //   计算小时
  h = h < 10 ? '0' + h : h;
  let m = parseInt((count / 60) % 60); //   计算分数
  m = m < 10 ? '0' + m : m;
  let s = parseInt(count % 60); //   计算当前秒数
  s = s < 10 ? '0' + s : s;
  // console.log(h, m, s)

  // 3. 把计算的时分秒写到对应的span盒子里面
  document.querySelector('#day').innerHTML = d;
  document.querySelector('#hour').innerHTML = h;
  document.querySelector('#minutes').innerHTML = m;
  document.querySelector('#second').innerHTML = s;
}

getTimer(); // 注意页面一打开就要先调用函数，防止默认的内容显示

// 4. 添加定时器效果让时间自动变化
setInterval(getTimer, 1000);
// 倒计时结束
// 选项
// 价格数组
let canshu = '';

const arr = [288, 338, 309, 429, 209, 508];
const price = document.querySelector('.price em i');
let price_b = document.querySelector('.price  b');
const lis = document.querySelectorAll('.com_list li');

console.log(price);
console.log(lis);
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      console.log(i);
      document.querySelector('.pri_active').classList.remove('pri_active');
      e.target.classList.add('pri_active');
      canshu = e.target.innerHTML;
      price.innerHTML = arr[i];
      price_b.innerHTML = `￥${arr[i] + 50}`;
    }
  });
}

// 清晰度选项
const com_li2 = document.querySelector('.com_list2 li');

com_li2.addEventListener('click', function () {
  // document.querySelector('.com_list2 .pri_active').classList.remove('pri_active')
  //     this.classList.add('pri_active')
  this.classList.toggle('pri_active');
});
const com_li3 = document.querySelector('.com_list3 li');

com_li3.addEventListener('click', function () {
  // document.querySelector('.com_list2 .pri_active').classList.remove('pri_active')
  //     this.classList.add('pri_active')
  this.classList.toggle('pri_active');
});

// 数量
const decrease = document.querySelector('.el-input-number_decrease');
const center = document.querySelector('.el-input-number_center input');
const increase = document.querySelector('.el-input-number_increase');

let i = 1;

decrease.addEventListener('click', function () {
  i--;

  if (center.value <= 0) {
    i = 0;
  }
  center.value = i;
});
increase.addEventListener('click', function () {
  i++;
  if (center.value > 999) {
    i = 999;
  }
  center.value = i;
});

// 立即购买
const btn_buy = document.querySelector('.button-buy');
const btn_pmy = document.querySelector('.el-button--primary');

// const canshu = document.querySelector('.canshu')
const title = document.querySelector('.item-sec1-title');
const imga = document.querySelector('.img img');

let com = ``;
let newArr = JSON.parse(localStorage.getItem('userName')) || [];
btn_pmy.addEventListener('click', function () {
  const com = {
    price: price.innerHTML,
    price_b: price_b.innerHTML,
    definition: com_li2.innerHTML,
    vidicon: com_li3.innerHTML,
    number: center.value,
    img: img.src,
    canshu: canshu,
    title: title.innerHTML,
  };
  console.log(newArr);
  newArr.push(com);
  console.log(newArr);

  localStorage.setItem('userName', JSON.stringify(newArr));
});

// 加入购物车
// console.log(canshu);
// btn_pmy.addEventListener('click', function () {
//   com = {
//     img: img.src,
//     canshu: canshu.innerHTML,
//     title: title.innerHTML,

//     price: price.innerHTML,
//     price_b: price_b.innerHTML,
//     definition: com_li2.innerHTML,
//     vidicon: com_li3.innerHTML,
//     number: center.value,
//   };
//   localStorage.setItem('userName', JSON.stringify(com));
//   console.log(com);
// });

// 收藏
const btn_add = document.querySelector('.button-add');
btn_add.addEventListener('mouseenter', function () {
  this.style.backgroundColor = '#FDECED';
  this.style.border = '1px solid #EA4148';
});
btn_add.addEventListener('mouseleave', function () {
  this.style.backgroundColor = '';
  this.style.border = '';
});
// 商品详情  商品评论  附近体验店
const sec2_lis = document.querySelectorAll('.item-sec2 div ul li');
const sec2_cnt = document.querySelectorAll('.content');
console.log(sec2_cnt);
console.log(sec2_lis);
for (let i = 0; i < sec2_lis.length; i++) {
  sec2_lis[i].addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      document.querySelector('.item-sec2 .sec2_active').classList.remove('sec2_active');
      sec2_lis[i].classList.add('sec2_active');
      document.querySelector('.disblk').classList.remove('disblk');
      sec2_cnt[i].classList.add('disblk');
    }
  });
}

// 数量框 点击
const itm_num = document.querySelector('.itm-num');
const itm_span = document.querySelectorAll('.itm-num span');
const itm_div = document.querySelector('.itm-num div');
const itm_put = document.querySelector('.itm-num div input');

itm_div.addEventListener('mouseenter', function () {
  this.classList.add('itm_active');
});
itm_div.addEventListener('mouseleave', function () {
  this.classList.remove('itm_active');
});

// 获取商品评论的  所有li
const con_lis = document.querySelectorAll('.con-ul li');
for (let i = 0; i < con_lis.length; i++) {
  con_lis[i].addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      document.querySelector('.con_active').classList.remove('con_active');
      con_lis[i].classList.add('con_active');
    }
  });
}

// 放大镜
const small = document.querySelector('.small');
const middle = document.querySelector('.middle');
const img = document.querySelector('.middle img');
const mask = document.querySelector('.layer');
const large = document.querySelector('.large');
small.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'IMG') {
    //  1 高亮显示 li （img的父元素）  e.target.parentnode li
    document.querySelector('.small .active') && document.querySelector('.small .active').classList.remove('active');
    e.target.parentNode.classList.add('active');
    // 2   切换左侧  middle 图片显示（src）  改成当前移入的小图 src
    // console.log(e.target.src);
    img.src = e.target.src;
    // console.log(img.src);
    let i;
    i = e.target.src;
    console.log(i);
    // 3切换大图large的背景图片
    large.style.backgroundImage = `url(${i})`;
  }
});
let timer = null; //声明一个全局变量timer
// 2.鼠标移入middle
middle.addEventListener('mouseenter', function () {
  // 控制遮罩层和large大盒子显示
  mask.style.display = 'block';
  large.style.display = 'block';
  // 如果定时器存在 需要定时器清除
  timer && clearTimeout(timer);
});
// 3.鼠标移出middle
middle.addEventListener('mouseleave', function () {
  // 控制遮罩层和large大盒子显示
  mask.style.display = 'none';
  // 延迟一定时间再隐藏 settimerout
  timer = setTimeout(function () {
    large.style.display = 'none';
    console.log('爆爆爆爆爆爆，爆炸了');
  }, 100);
});

// 4.鼠标移动 控制mask盒子跟着一起移动
middle.addEventListener('mousemove', function (e) {
  // 问题1 mask盒子怎么移动 left top
  // 问题2  移动？  多少距离  取决于鼠标 再middle盒子里面的坐标位置
  // e.offsetX:鼠标在  middle 盒子里面的水平  坐标位置
  console.log(e.offsetX, e.offsetY);

  //

  let x = e.offsetX - 130;
  let y = e.offsetY - 130;

  if (x < 0) x = 0;
  if (x > 237.5) x = 237.5;
  if (y < 0) y = 0;
  if (y > 230) y = 230;
  mask.style.left = x + 'px';
  mask.style.top = y + 'px';

  // 4.3大盒子跟着一起动（大背景图的位置）移动的 遮罩层位置 2倍 400：800
  large.style.backgroundPosition = `${-2 * x}px ${-2 * y}px`;
});

//更改登录名
const xf = document.querySelector('.xf');
const data = JSON.parse(localStorage.getItem('uname'));
xf.innerHTML = `<span class="xf">${data}</span>`;

//跳转购物车
const butcar = document.querySelector('.search_rgt');
butcar.addEventListener('click', function () {
  location.href = '../buycar/LCgouwuche.html';
});
const index = document.querySelector('.index');
index.addEventListener('click', function () {
  location.href = '../index.html';
});
