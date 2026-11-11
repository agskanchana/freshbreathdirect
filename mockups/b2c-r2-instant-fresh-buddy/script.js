// Round 2: product filter tabs + Buddy's "Find your fresh" quiz
(function () {
  document.querySelectorAll("[data-filter]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var f = tab.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
      document.querySelectorAll(".product").forEach(function (p) {
        p.hidden = !(f === "all" || p.getAttribute("data-type").split(" ").indexOf(f) > -1);
      });
    });
  });

  var PF = "../shared/img/picflow/", B = "../shared/img/web/";
  var PRODUCTS = {
    tin: { name: "CoolCaps Tin, 40 pearls", img: PF + "pack-tin.webp" },
    tube: { name: "CoolCaps Mint, tube of 18", img: PF + "pack-tube-mint.webp" },
    twist: { name: "CoolCaps Twist, 60 pearls", img: PF + "pack-twist.webp" },
    tubeS: { name: "CoolCaps Strawberry, tube of 18", img: PF + "pack-tube-straw.webp" },
    strip: { name: "PaperMints Strips Mint, 24", img: PF + "pack-strips-mint.webp" },
    stripS: { name: "PaperMints Strips Strawberry, 24", img: PF + "pack-strips-straw.webp" },
    spray: { name: "PaperMints Mouth Spray, 200 sprays", img: PF + "pack-spray.webp" }
  };
  var WHEN = {
    meeting: "Before a meeting, pop one in the lift. Nobody sees a thing.",
    food: "After coffee or a big lunch, you'll be fresh again in seconds.",
    night: "Slips into a pocket or clutch, so you're ready when things get close.",
    keto: "Sugar free and keto friendly, with less than half a calorie a pearl."
  };
  var BUDDY = { meeting: "buddy-meeting", food: "buddy-coffee", night: "buddy-love", keto: "buddy-gym" };

  var ans = {};
  var steps = Array.prototype.slice.call(document.querySelectorAll(".q"));
  var dots = document.querySelectorAll(".quiz-dots li");
  var result = document.querySelector(".result");
  var buddyImg = document.getElementById("quiz-buddy-img");

  function show(n) {
    steps.forEach(function (s) { s.hidden = parseInt(s.getAttribute("data-step"), 10) !== n; });
    dots.forEach(function (d, i) { d.classList.toggle("on", i < Math.min(n, 3)); });
    result.hidden = n !== 4;
  }
  function pick() {
    var f = ans.format, fl = ans.flavour, w = ans.when;
    if (f === "spray") return { p: PRODUCTS.spray, note: fl === "strawberry" ? " The spray comes in mint only, and it's very fresh." : "" };
    if (f === "strip") return { p: fl === "strawberry" ? PRODUCTS.stripS : PRODUCTS.strip, note: "" };
    if (fl === "strawberry") return { p: PRODUCTS.tubeS, note: "" };
    if (w === "keto") return { p: PRODUCTS.twist, note: " The Twist holds 60, so it lasts." };
    if (w === "food") return { p: PRODUCTS.tube, note: "" };
    return { p: PRODUCTS.tin, note: "" };
  }
  document.querySelectorAll(".opts button").forEach(function (b) {
    b.addEventListener("click", function () {
      ans[b.getAttribute("data-k")] = b.getAttribute("data-v");
      var step = parseInt(b.closest(".q").getAttribute("data-step"), 10);
      if (step === 1 && BUDDY[ans.when]) buddyImg.src = B + BUDDY[ans.when] + ".webp";
      if (step < 3) { show(step + 1); return; }
      var r = pick();
      document.getElementById("r-img").src = r.p.img;
      document.getElementById("r-img").alt = r.p.name;
      document.getElementById("r-name").textContent = r.p.name;
      document.getElementById("r-why").textContent = WHEN[ans.when] + r.note;
      var add = document.getElementById("r-add");
      add.setAttribute("data-add", r.p.name);
      add.setAttribute("data-img", r.p.img);
      buddyImg.src = B + "buddy-thumbs.webp";
      show(4);
    });
  });
  document.getElementById("r-again").addEventListener("click", function () { ans = {}; buddyImg.src = B + "buddy-thumbs.webp"; show(1); });
})();
