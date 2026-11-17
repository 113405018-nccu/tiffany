(() => {
  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  const theme = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
    menu.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = '☰';
  }));
  let dark = false;
  try { dark = localStorage.getItem('profile-theme') === 'dark'; } catch(e) {}
  function applyTheme() {
    document.body.classList.toggle('dark', dark);
    theme.textContent = dark ? '☀' : '☾';
    theme.setAttribute('aria-label', dark ? '切換淺色模式' : '切換深色模式');
  }
  applyTheme();
  theme.addEventListener('click', () => {
    dark = !dark; applyTheme();
    try { localStorage.setItem('profile-theme', dark ? 'dark' : 'light'); } catch(e) {}
  });
})();
