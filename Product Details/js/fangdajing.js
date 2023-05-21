const small = document.querySelector('.small');
const middle = document.querySelector('.middle');
const img = document.querySelector('.middle img');
const mask = document.querySelector('.layer');
const large = document.querySelector('.large');
small.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'IMG') {
    //  1 高亮显示 li （img的父元素）  e.target.parentnode li
    document.querySelector('.small .active').classList.remove('active');
    e.target.parentNode.classList.add('active');
    // 2   切换左侧  middle 图片显示（src）  改成当前移入的小图 src
    console.log(e.target.src);
    img.src = e.target.src;
    // 3切换大图large的背景图片
    large.style.backgroundImage = `url(${e.target.src})`;
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

  let x = e.offsetX - 100;
  let y = e.offsetY - 100;

  if (x < 0) x = 0;
  if (x > 200) x = 200;
  if (y < 0) y = 0;
  if (y > 200) y = 200;
  mask.style.left = x + 'px';
  mask.style.top = y + 'px';

  // 4.3大盒子跟着一起动（大背景图的位置）移动的 遮罩层位置 2倍 400：800
  large.style.backgroundPosition = `${-2*x}px ${-2*y}px`
});