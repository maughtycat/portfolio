// ── Theme toggle ──────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);

// ── Resume: Scannable / Narrative toggle ──────────────────
function setMode(mode) {
  const scannable = document.getElementById('scannable-mode');
  const narrative = document.getElementById('narrative-mode');
  const btnScan = document.getElementById('btn-scannable');
  const btnNarr = document.getElementById('btn-narrative');

  if (mode === 'scannable') {
    scannable.classList.remove('hidden');
    narrative.classList.remove('active');
    btnScan.classList.add('active');
    btnNarr.classList.remove('active');
  } else {
    scannable.classList.add('hidden');
    narrative.classList.add('active');
    btnNarr.classList.add('active');
    btnScan.classList.remove('active');
  }
}

// ── Resume: Expandable job entries ────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.job-header[onclick]').forEach(function(header) {
    header.removeAttribute('onclick');
    // keyboard operability (WCAG 2.1.1): these are divs acting as buttons
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', header.getAttribute('data-expanded') === 'true' ? 'true' : 'false');
    function toggle() {
      const body = header.nextElementSibling;
      const icon = header.querySelector('.expand-icon');
      const isExpanded = header.getAttribute('data-expanded') === 'true';

      if (isExpanded) {
        body.classList.remove('open');
        icon.classList.remove('open');
        header.setAttribute('data-expanded', 'false');
        header.setAttribute('aria-expanded', 'false');
      } else {
        body.classList.add('open');
        icon.classList.add('open');
        header.setAttribute('data-expanded', 'true');
        header.setAttribute('aria-expanded', 'true');
      }
    }
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  document.querySelectorAll('.resume-toggle button[onclick]').forEach(function(btn) {
    const match = btn.getAttribute('onclick').match(/setMode\('(\w+)'\)/);
    if (match) {
      btn.removeAttribute('onclick');
      btn.addEventListener('click', function() { setMode(match[1]); });
    }
  });
});
