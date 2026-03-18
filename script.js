const toast = document.querySelector('.toast');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function copyText(value) {
  if (!navigator.clipboard) {
    showToast('Copy not supported.');
    return;
  }

  navigator.clipboard.writeText(value).then(() => {
    showToast('Copied to clipboard!');
  }, () => {
    showToast('Could not copy.');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const value = button.getAttribute('data-copy');
      if (!value) return;
      copyText(value);
    });
  });
});
