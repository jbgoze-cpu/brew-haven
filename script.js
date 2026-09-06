const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const authModal = document.querySelector('#authModal');
const authTriggers = document.querySelectorAll('.auth-trigger');
const authTabs = document.querySelectorAll('.auth-tab');
const authPanels = document.querySelectorAll('.auth-form-panel');
const modalCloseButton = document.querySelector('.auth-modal__close');
const modalBackDrop = document.querySelector('[data-close-modal]');

function setAuthMode(mode) {
  authTabs.forEach((tab) => {
    const isActive = tab.dataset.authTab === mode;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  authPanels.forEach((panel) => {
    const isActive = panel.dataset.authPanel === mode;
    panel.classList.toggle('is-active', isActive);
  });
}

function openAuthModal(mode = 'login') {
  if (!authModal) return;
  authModal.classList.add('is-open');
  authModal.setAttribute('aria-hidden', 'false');
  setAuthMode(mode);
}

function closeAuthModal() {
  if (!authModal) return;
  authModal.classList.remove('is-open');
  authModal.setAttribute('aria-hidden', 'true');
}

authTriggers.forEach((button) => {
  button.addEventListener('click', () => {
    openAuthModal(button.dataset.auth || 'login');
  });
});

authTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    setAuthMode(tab.dataset.authTab || 'login');
  });
});

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', closeAuthModal);
}

if (modalBackDrop) {
  modalBackDrop.addEventListener('click', closeAuthModal);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && authModal && authModal.classList.contains('is-open')) {
    closeAuthModal();
  }
});

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
