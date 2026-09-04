(() => {
  "use strict";

  const currentYear = String(new Date().getFullYear());
  const articleTitle = document.querySelector(".article-header h1");

  if (articleTitle) {
    const baseTitle = articleTitle.textContent
      .replace(/\s+for\s+20\d{2}\s*$/i, "")
      .trim();
    articleTitle.textContent = `${baseTitle} for ${currentYear}`;
  }

  document.querySelectorAll("[data-guide-year]").forEach((year) => {
    year.textContent = currentYear;
  });

  const toc = document.querySelector("[data-guide-toc]");
  if (!toc) return;

  if (window.matchMedia("(max-width: 980px)").matches) {
    toc.removeAttribute("open");
  }

  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || !sections.length) return;

  const setCurrent = (id) => {
    links.forEach((link) => {
      const isCurrent = link.hash === `#${id}`;
      link.classList.toggle("is-current", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]) setCurrent(visible[0].target.id);
    },
    { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
})();
