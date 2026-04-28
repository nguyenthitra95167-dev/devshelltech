(function () {
  var menuButton = document.querySelector("[data-menu-button]");
  var menuPanel = document.querySelector("[data-mobile-panel]");

  if (menuButton && menuPanel) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuPanel.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("show");
    });
  }

  var yearSpan = document.querySelector("[data-year]");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  var links = document.querySelectorAll("[data-nav-link]");
  var current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();