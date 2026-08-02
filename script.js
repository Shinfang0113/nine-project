// 主題切換按鈕邏輯
const toggle = document.getElementById('theme-toggle');

// 保存主題狀態
const saveTheme = (isLight) => {
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

// 初始化主題 - 從 localStorage 讀取
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('test-light-theme');
  }
});

// 切換主題
toggle.addEventListener('click', () => {
  document.body.classList.toggle('test-light-theme');
  saveTheme(document.body.classList.contains('test-light-theme'));
});

// 畫面載入動畫
window.addEventListener('load', function() {
  document.querySelector('.avatar-section').style.opacity = '1';
  document.querySelector('.avatar-section').style.transform = 'translateY(0)';
});