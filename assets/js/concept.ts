export function bindConceitoLinks() {
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
      const concept = anchor.href.split('/').filter(Boolean).pop();
      const conceptTemplate = conceptsContainer.querySelector("[data-concept='" + concept + "']") as HTMLTemplateElement;
      const conceptCopy = conceptTemplate?.content.cloneNode(true)

      if (conceptCopy) {
        drawerContentsContainer.replaceChildren(conceptCopy);
        (drawerCheckbox as HTMLInputElement).checked = true;
      } else {
        console.log("no concept copy found", concept, conceptCopy)
      }
    }
  });
}
