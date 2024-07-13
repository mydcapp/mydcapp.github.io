const toggle = document.getElementById('theme-toggle');

// 切换主题函数
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');

  // 存储主题选择到本地存储
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

// 监听按钮点击事件
toggle.addEventListener('click', toggleTheme);

// 页面加载时检查之前的选择
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');

  }
};

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (e.matches) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
function toggleFullScreen() {
    if (!document.fullscreenElement) {
      // 进入全屏
      document.documentElement.requestFullscreen();
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen(); // 标准化
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // WebKit浏览器
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
    }
  }
   
  // 绑定按钮点击事件
  document.getElementById('fullscreen-button').addEventListener('click', toggleFullScreen);