function registerBeforeInstallPwa() {
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', async (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const alert = document.getElementById('install-alert');

    if (!alert) {
      return;
    }
    alert.classList.remove('hidden');

    const noButton = document.getElementById('install-alert-no');
    noButton?.addEventListener('click', () => {
      alert.classList.add('hidden');
    });

    const yesButton = document.getElementById('install-alert-yes');
    yesButton?.addEventListener('click', () => {
      alert.classList.add('hidden');
      deferredPrompt.prompt();
    });
  });
}

function bindConceitoLinks() {
  const isConceitoLinkRegex = /\/conceitos\/[a-z0-9-]+\/?$/;
  const conceptsContainer = document.getElementById('concepts');
  const drawerContentsContainer = document.getElementById('concept-drawer-contents');
  const drawerCheckbox = document.getElementById('concept-drawer');
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName !== 'A') {
      return;
    }
    const anchor = target as HTMLAnchorElement;
    if (isConceitoLinkRegex.test(anchor.href)) {
      if (!conceptsContainer || !drawerContentsContainer || !drawerCheckbox) {
        console.log('Missing elements', conceptsContainer, drawerContentsContainer, drawerCheckbox);
        return;
      }
      event.preventDefault();
      const concept = anchor.href.split('/').pop();
      const conceptCopy = conceptsContainer.querySelector("[data-concept='" + concept + "']")?.cloneNode(true)

      if (conceptCopy) {
        drawerContentsContainer.replaceChildren(conceptCopy);
        (drawerCheckbox as HTMLInputElement).checked = true;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  registerBeforeInstallPwa();
  bindConceitoLinks();
});
