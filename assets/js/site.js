(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const year = $("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = $("[data-menu-button]");
  const menu = $("[data-menu]");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("menu-open", isOpen);
    });

    $$("a", menu).forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        document.body.classList.remove("menu-open");
      });
    });
  }

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    $$(`[data-nav-page]`).forEach((link) => {
      link.classList.toggle("is-current", link.dataset.navPage === currentPage);
    });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".book-description-toggle");

    if (!button) {
      return;
    }

    const descriptionId = button.getAttribute("aria-controls");
    const description = document.getElementById(descriptionId);

    if (!description) {
      return;
    }

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "… read more" : "show less";
    description.classList.toggle("is-expanded", !isExpanded);
  });
})();
