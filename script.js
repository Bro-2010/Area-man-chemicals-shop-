// Mobile menu
var menuBtn = document.getElementById("menuBtn");
var nav = document.getElementById("nav");
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});
nav.addEventListener("click", function () {
  nav.classList.remove("open");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Send order form to WhatsApp
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  var location = document.getElementById("location").value.trim();
  var type = document.getElementById("type").value;
  var message = document.getElementById("message").value.trim();

  var text =
    "Hello Area Man Chemicals,%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Location: " + encodeURIComponent(location) + "%0A" +
    "Service: " + encodeURIComponent(type) + "%0A" +
    "Request: " + encodeURIComponent(message);

  window.open("https://wa.me/233535564425?text=" + text, "_blank");
});

// Copy MoMo number
document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var number = document.getElementById(btn.getAttribute("data-target")).textContent.trim();
    var done = function () {
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = "Copy number"; }, 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(number).then(done);
    } else {
      var t = document.createElement("textarea");
      t.value = number;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      done();
    }
  });
});
