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

  const articleIndex = $("#article-index");
  const articleGrid = $("[data-article-grid]");
  const articleSearch = $("[data-article-search]");
  const topicFilters = $("[data-topic-filters]");
  const typeFilters = $("[data-type-filters]");
  const articleResults = $("[data-article-results]");
  const articleEmpty = $("[data-article-empty]");
  const pagination = $(".pagination");

  if (articleIndex && articleGrid && articleSearch && topicFilters && typeFilters) {
    let articles = [];

    try {
      articles = JSON.parse(articleIndex.textContent);
    } catch (error) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const state = {
      query: params.get("q") || "",
      topic: params.get("topic") || "All",
      type: params.get("type") || "All"
    };
    const initialGridMarkup = articleGrid.innerHTML;

    const curatedTopics = [
      "Solana",
      "Jupiter",
      "DeFi",
      "Stablecoins",
      "Bitcoin",
      "Crypto investing",
      "Tokenized assets",
      "APIs",
      "JavaScript",
      "Technical writing"
    ];

    const availableTopics = new Set(
      articles.flatMap((article) => [article.category, ...(article.tags || [])])
    );

    const topics = [
      "All",
      ...new Set([
        ...curatedTopics.filter((topic) => availableTopics.has(topic)),
        ...(state.topic !== "All" && availableTopics.has(state.topic) ? [state.topic] : [])
      ])
    ];

    const types = [
      "All",
      ...new Set(articles.map((article) => article.contentType).filter(Boolean))
    ];

    const escapeHtml = (value = "") =>
      String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const renderFilterButtons = (container, values, key) => {
      container.innerHTML = values
        .map((value) => `
          <button
            type="button"
            class="filter-button${value === state[key] ? " is-active" : ""}"
            data-filter-key="${key}"
            data-filter-value="${escapeHtml(value)}"
            aria-pressed="${value === state[key]}"
          >${escapeHtml(value)}</button>
        `)
        .join("");
    };

    const articleCard = (article) => {
      const tags = (article.tags || []).slice(0, 4);
      const image = article.image
        ? `
          <a class="article-image-link" href="${escapeHtml(article.url)}" aria-label="Read ${escapeHtml(article.title)}">
            <img class="article-image" src="${escapeHtml(article.image)}" alt="${escapeHtml(article.imageAlt)}" loading="lazy" width="640" height="400">
          </a>
        `
        : "";

      const tagList = tags.length
        ? `
          <div class="tag-list" aria-label="Article topics">
            ${tags.map((tag) => `<a class="tag" href="/articles/?topic=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`).join("")}
            <a class="tag tag-type" href="/articles/?type=${encodeURIComponent(article.contentType)}">${escapeHtml(article.contentType)}</a>
          </div>
        `
        : "";

      return `
        <article class="article-card">
          ${image}
          <div class="article-body">
            <div class="eyebrow-row">
              <span>${escapeHtml(article.category)}</span>
              <time datetime="${escapeHtml(article.date)}">${escapeHtml(article.dateLabel)}</time>
            </div>
            <h3><a href="${escapeHtml(article.url)}">${escapeHtml(article.title)}</a></h3>
            <p>${escapeHtml(article.summary)}</p>
            ${tagList}
            <div class="card-footer">
              <span>${escapeHtml(article.publication)}</span>
              <a href="${escapeHtml(article.url)}">Read article <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </article>
      `;
    };

    const restoreDefaultArticles = () => {
      articleGrid.innerHTML = initialGridMarkup;
      articleEmpty.hidden = true;
      if (pagination) pagination.hidden = false;
      articleResults.textContent = `${articles.length} article${articles.length === 1 ? "" : "s"}`;
    };

    const renderArticles = () => {
      const normalizedQuery = state.query.trim().toLowerCase();
      const isFiltering =
        normalizedQuery || state.topic !== "All" || state.type !== "All";

      if (!isFiltering) {
        restoreDefaultArticles();
        return;
      }

      const matches = articles.filter((article) => {
        const articleTopics = [article.category, ...(article.tags || [])];
        const searchableText = [
          article.title,
          article.summary,
          article.category,
          article.contentType,
          ...articleTopics
        ]
          .join(" ")
          .toLowerCase();

        return (
          (!normalizedQuery || searchableText.includes(normalizedQuery)) &&
          (state.topic === "All" || articleTopics.includes(state.topic)) &&
          (state.type === "All" || article.contentType === state.type)
        );
      });

      articleGrid.innerHTML = matches.map(articleCard).join("");
      articleEmpty.hidden = matches.length !== 0;
      if (pagination) pagination.hidden = true;
      articleResults.textContent = `${matches.length} article${matches.length === 1 ? "" : "s"} found`;
    };

    renderFilterButtons(topicFilters, topics, "topic");
    renderFilterButtons(typeFilters, types, "type");
    articleSearch.value = state.query;
    renderArticles();

    articleSearch.addEventListener("input", () => {
      state.query = articleSearch.value;

      renderArticles();
    });

    [topicFilters, typeFilters].forEach((container) => {
      container.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter-key]");
        if (!button) return;

        const key = button.dataset.filterKey;
        state[key] = button.dataset.filterValue;

        $$(`[data-filter-key="${key}"]`, container).forEach((filterButton) => {
          const isActive = filterButton === button;
          filterButton.classList.toggle("is-active", isActive);
          filterButton.setAttribute("aria-pressed", String(isActive));
        });

        renderArticles();
      });
    });
  }
})();
