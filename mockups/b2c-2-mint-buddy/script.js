// Mint Buddy: product carousel arrows + "Find your fresh" quiz
(function () {
  var car = document.getElementById("carousel");
  document.querySelectorAll("[data-scroll]").forEach(function (b) {
    b.addEventListener("click", function () {
      var card = car.querySelector(".card");
      var step = card ? card.getBoundingClientRect().width + 22 : 300;
      car.scrollBy({ left: step * parseInt(b.getAttribute("data-scroll"), 10), behavior: "smooth" });
    });
  });

  var P = "../shared/img/products/";
  var PRODUCTS = {
    tin: { name: "CoolCaps Tin, 40 pearls", img: P + "coolcaps-tin-40.webp" },
    tube: { name: "CoolCaps Mint, tube of 18", img: P + "coolcaps-tube-mint-18.webp" },
    twist: { name: "CoolCaps Twist, 60 pearls", img: P + "coolcaps-twist-60.webp" },
    tubeS: { name: "CoolCaps Strawberry, tube of 18", img: P + "coolcaps-tube-strawberry-18.webp" },
    strip: { name: "PaperMints Strips Mint, 24", img: P + "strips-mint-24.webp" },
    stripS: { name: "PaperMints Strips Strawberry, 24", img: P + "strips-strawberry-24.webp" },
    spray: { name: "PaperMints Mouth Spray, 200 sprays", img: P + "mouthspray-200.webp" }
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
    dots.forEach(function (d, i) { d.classList.toggle("on", i < n || (n === 4 && i < 3)); });
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
      if (step === 1 && BUDDY[ans.when]) buddyImg.src = "../shared/img/web/" + BUDDY[ans.when] + ".webp";
      if (step < 3) { show(step + 1); return; }
      var r = pick();
      document.getElementById("r-img").src = r.p.img;
      document.getElementById("r-img").alt = r.p.name;
      document.getElementById("r-name").textContent = r.p.name;
      document.getElementById("r-why").textContent = WHEN[ans.when] + r.note;
      var add = document.getElementById("r-add");
      add.setAttribute("data-add", r.p.name);
      add.setAttribute("data-img", r.p.img);
      buddyImg.src = "../shared/img/web/buddy-thumbs.webp";
      show(4);
    });
  });
  document.getElementById("r-again").addEventListener("click", function () { ans = {}; show(1); });
})();
