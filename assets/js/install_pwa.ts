export function registerBeforeInstallPwa() {
  // let deferredPrompt;
  // const decided = localStorage.getItem('install-pwa-decided');
  // window.addEventListener('beforeinstallprompt', async (e) => {
  //   e.preventDefault();
  //   deferredPrompt = e;
  //   const alert = document.getElementById('install-alert');
  //
  //   if (!alert || decided) {
  //     return;
  //   }
  //   alert.classList.remove('hidden');
  //
  //   const noButton = document.getElementById('install-alert-no');
  //   noButton?.addEventListener('click', () => {
  //     localStorage.setItem('install-pwa-decided', 'true');
  //     alert.classList.add('hidden');
  //   });
  //
  //   const yesButton = document.getElementById('install-alert-yes');
  //   yesButton?.addEventListener('click', () => {
  //     localStorage.setItem('install-pwa-decided', 'true');
  //     alert.classList.add('hidden');
  //     deferredPrompt.prompt();
  //   });
  // });
}
