/* Shared mockup behaviour: review navigator, demo basket, mobile menu, placeholder links. */
(function () {
  var MOCKUPS = [
    { slug: "b2c-1-instant-fresh", name: "Instant Fresh" },
    { slug: "b2c-2-mint-buddy", name: "Mint Buddy" },
    { slug: "b2c-3-fresh-science", name: "Fresh Science" },
    { slug: "b2c-4-after-dark", name: "After Dark" }
  ];
  var ico = {
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    hide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>',
    show: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 15l6-6 6 6"/></svg>'
  };

  function buildNav() {
    var key = document.body.getAttribute("data-mockup");
    if (!key || location.search.indexOf("shot") > -1) return;
    var cur, prev, next, label;
    if (key === "r2") {
      // Round 2 sits between its two parents: mockup 1 (look) and mockup 2 (Buddy)
      cur = { name: "Instant Fresh + Buddy" }; prev = MOCKUPS[0]; next = MOCKUPS[1]; label = "Round 2";
    } else {
      var n = parseInt(key, 10);
      cur = MOCKUPS[n - 1];
      prev = MOCKUPS[(n - 2 + MOCKUPS.length) % MOCKUPS.length];
      next = MOCKUPS[n % MOCKUPS.length];
      label = "Mockup " + n + " of " + MOCKUPS.length;
    }
    var nav = document.createElement("nav");
    nav.className = "mk-nav";
    nav.setAttribute("aria-label", "Mockup navigation");
    nav.innerHTML =
      '<a class="mk-icon" href="../' + prev.slug + '/" aria-label="Previous mockup: ' + prev.name + '">' + ico.prev + "</a>" +
      '<span class="mk-title"><span>' + label + "</span><b>" + cur.name + "</b></span>" +
      '<a class="mk-icon" href="../' + next.slug + '/" aria-label="Next mockup: ' + next.name + '">' + ico.next + "</a>" +
      '<a href="../" aria-label="All mockups">' + ico.grid + '<span class="mk-all-label">All mockups</span></a>' +
      '<button class="mk-icon" type="button" aria-label="Hide this bar">' + ico.hide + "</button>";
    var show = document.createElement("button");
    show.className = "mk-show";
    show.type = "button";
    show.setAttribute("aria-label", "Show mockup navigation");
    show.innerHTML = ico.show;
    nav.querySelector("button").addEventListener("click", function () {
      nav.classList.add("is-hidden"); show.classList.add("is-on");
    });
    show.addEventListener("click", function () {
      nav.classList.remove("is-hidden"); show.classList.remove("is-on");
    });
    document.body.appendChild(nav);
    document.body.appendChild(show);
  }

  var toast, toastTimer;
  function say(title, detail, img) {
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "mk-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.innerHTML = (img ? '<img src="' + img + '" alt="">' : "") +
      "<div>" + title + (detail ? "<small>" + detail + "</small>" : "") + "</div>";
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-on"); }, 2600);
  }
  window.FBD = { say: say };

  var count = 0;
  document.addEventListener("click", function (e) {
    var add = e.target.closest("[data-add]");
    if (add) {
      e.preventDefault();
      count += 1;
      document.querySelectorAll("[data-basket-count]").forEach(function (el) {
        el.textContent = count;
        el.hidden = false;
        el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
      });
      say("Added to your basket", add.getAttribute("data-add"), add.getAttribute("data-img"));
      return;
    }
    var toggle = e.target.closest("[data-nav-toggle]");
    if (toggle) {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    var link = e.target.closest('a[href="#"]');
    if (link) {
      e.preventDefault();
      say("Not in this mockup yet", "This round shows the homepage. Inner pages come once you pick a direction.");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      var t = document.querySelector("[data-nav-toggle]");
      if (t) t.setAttribute("aria-expanded", "false");
    }
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildNav);
  else buildNav();
})();
