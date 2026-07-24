(() => {
  "use strict";

  const content = window.PORTFOLIO_CONTENT || {
    articles: [],
    books: []
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function externalAttrs(url = "") {
    return /^https?:\/\//i.test(url)
      ? ' target="_blank" rel="noreferrer"'
      : "";
  }



  function starText(rating = 0) {
    const rounded = Math.max(0, Math.min(5, Math.round(rating)));
    return `${"★".repeat(rounded)}${"☆".repeat(5 - rounded)}`;
  }

function bookCard(book) {
  const descriptionId = `book-description-${String(book.title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

  return `
    <article class="book-card">
      <a
        class="book-cover-link"
        href="${escapeHtml(book.amazonUrl)}"
        ${externalAttrs(book.amazonUrl)}
        aria-label="View ${escapeHtml(book.title)} on Amazon"
      >
        <img
          class="book-cover"
          src="${escapeHtml(book.cover)}"
          alt="${escapeHtml(book.coverAlt)}"
          loading="lazy"
          width="420"
          height="672"
        >
      </a>

      <div class="book-body">
        <div class="eyebrow-row">
          <span>${escapeHtml(book.series)}</span>
          <span>${escapeHtml(book.year)}</span>
        </div>

        <h3>${escapeHtml(book.title)}</h3>

        <div
          class="rating"
          aria-label="${escapeHtml(book.rating)} out of 5 stars from ${escapeHtml(book.reviewCount)} ratings"
        >
          <span aria-hidden="true">${starText(book.rating)}</span>
          <small>
            ${escapeHtml(book.rating)} ·
            ${escapeHtml(book.reviewCount)} ratings
          </small>
        </div>

        <p
          class="book-description"
          id="${descriptionId}"
        >
          ${escapeHtml(book.description)}
        </p>

        <button
          class="book-description-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="${descriptionId}"
        >
          ... read more
        </button>

        <div class="card-footer">
          <a
            href="${escapeHtml(book.amazonUrl)}"
            ${externalAttrs(book.amazonUrl)}
          >
            Amazon <span aria-hidden="true">↗</span>
          </a>

          ${
            book.detailsUrl && book.detailsUrl !== "#"
              ? `<a href="${escapeHtml(book.detailsUrl)}">Book details</a>`
              : ""
          }
        </div>
      </div>
    </article>`;
}
  function renderList(selector, items, renderer) {
    const target = $(selector);
    if (!target) return;
    target.innerHTML = items.map(renderer).join("");
  }

  
  const sortedBooks = [...content.books].sort(
    (a, b) => new Date(b.published || `${b.year}-01-01`) - new Date(a.published || `${a.year}-01-01`)
  );


  renderList("[data-home-books]", sortedBooks.slice(0, 2), bookCard);
  renderList("[data-all-books]", sortedBooks, bookCard);

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
