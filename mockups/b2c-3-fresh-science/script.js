// Fresh Science: pearl layer explorer + chart tooltips
(function () {
  var svg = document.querySelector(".pearl-svg");
  var buttons = document.querySelectorAll(".layers button");
  function setLayer(n) {
    var cur = svg.getAttribute("data-active");
    var next = String(n) === cur ? "0" : String(n);
    svg.setAttribute("data-active", next);
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-layer") === next ? "true" : "false"); });
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { setLayer(b.getAttribute("data-layer")); }); });
  svg.querySelectorAll(".layer").forEach(function (g) {
    g.addEventListener("click", function () { setLayer(g.getAttribute("data-layer")); });
  });

  // Chart tooltip: follows the hovered or focused bar
  var plot = document.querySelector(".plot");
  var tip = plot.querySelector(".tip");
  function showTip(bar) {
    tip.textContent = bar.getAttribute("data-tip");
    tip.hidden = false;
    var pr = plot.getBoundingClientRect(), br = bar.getBoundingClientRect();
    var x = br.right - pr.left, y = br.top - pr.top;
    tip.style.left = Math.min(Math.max(x, 110), pr.width - 110) + "px";
    tip.style.top = y + "px";
  }
  function hideTip() { tip.hidden = true; }
  plot.querySelectorAll(".bar").forEach(function (bar) {
    bar.addEventListener("mouseenter", function () { showTip(bar); });
    bar.addEventListener("focus", function () { showTip(bar); });
    bar.addEventListener("mouseleave", hideTip);
    bar.addEventListener("blur", hideTip);
  });

  // Grow the bars once, when the chart first scrolls into view
  var chart = document.querySelector(".chart");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    chart.classList.add("pre");
    new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) { chart.classList.remove("pre"); obs.disconnect(); }
    }, { threshold: .4 }).observe(chart);
  }
})();
