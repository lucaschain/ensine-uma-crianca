interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
}

export function registerBeforeInstallPwa() {
  let deferredPrompt: BeforeInstallPromptEvent;
  const decided = localStorage.getItem('install-pwa-decided');
  window.addEventListener('beforeinstallprompt', async (e: BeforeInstallPromptEvent) => {
    e.preventDefault();
    deferredPrompt = e;
    const alert = document.getElementById('install-alert');

    if (!alert || decided) {
      return;
    }
    alert.classList.remove('hidden');

    const noButton = document.getElementById('install-alert-no');
    noButton?.addEventListener('click', () => {
      alert.classList.add('hidden');
      localStorage.setItem('install-pwa-decided', 'true');
    });

    const yesButton = document.getElementById('install-alert-yes');
    yesButton?.addEventListener('click', () => {
      alert.classList.add('hidden');
      deferredPrompt.prompt();
    });
  });
}
