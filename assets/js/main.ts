import { bindConceitoLinks } from "./concept";
import { registerBeforeInstallPwa } from "./install_pwa";

document.addEventListener('DOMContentLoaded', function() {
  registerBeforeInstallPwa();
  bindConceitoLinks();
});
