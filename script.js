function accept_cookie() {
  (notify_va.style.padding = "0vw 0vw"),
    (notify_va.style.opacity = "0"),
    (notify_va.style.zIndex = "-1");
}
function deccept_cookie() {
  (notify_va.style.zIndex = "100"),
    (notify_va.style.padding = "1.8vw 1vw"),
    (notify_va.style.opacity = "1");
}
function notify(e, l) {
  (not_con.innerHTML = e),
    deccept_cookie(),
    -1 != l &&
    setTimeout(function () {
      accept_cookie();
    }, l);
}
var login_error_list = [
  "Error !",
  "Invalid email !",
  "Wrong Credentials, Try again !",
  "Try again..",
];
function login_error(e = null) {
  e && notify(login_error_list[e], 3e3);
}
function popstasticopener(
  e = "/",
  l = "Technotsav Google Authentication",
  n = "height=600,width=450"
) {
  var a = window.open(e, l, n);
  window.focus && a.focus();
}
var slideIndex = 1;
function plusSlides(e) {
  showSlides((slideIndex += e));
}
function currentSlide(e) {
  showSlides((slideIndex = e));
}
function showSlides(e) {
  var l,
    n = document.getElementsByClassName("locac"),
    a = document.getElementsByClassName("loc_but_1"); // Changed from 'dot' to 'loc_but_1'

  // Wrap around logic
  e > n.length && (slideIndex = 1), e < 1 && (slideIndex = n.length);

  // Hide all slides
  for (l = 0; l < n.length; l++)
    n[l].style.display = "none";

  // Reset all buttons
  for (l = 0; l < a.length; l++) {
    // a[l].className = a[l].className.replace(" current", ""); 
    // Use direct style as per HTML usage
    a[l].style.background = "transparent";
    a[l].style.color = "rgba(255, 255, 255, 0.6)";
  }

  // Show active slide
  (n[slideIndex - 1].style.display = "block");

  // Highlight active button
  if (a.length > 0) {
    a[slideIndex - 1].style.background = "rgba(255,255,255,.1)";
    a[slideIndex - 1].style.color = "#fff";
  }

  // Update title text
  1 == slideIndex
    ? (document.getElementById("Loconn").innerHTML = "Location")
    : (document.getElementById("Loconn").innerHTML = "Contact");
}

function activ_but(e) {
  // Logic moved to showSlides to ensure consistency with arrows
}
function myFunction(e) {
  e >= 200 ? myvid.classList.add("blur") : myvid.classList.remove("blur");
}
function nav_hide(e) {
  let l = e;
  prevScrollpos > l
    ? (document.getElementById("navbar").style.top = "89%")
    : (document.getElementById("navbar").style.top = "100%"),
    (prevScrollpos = l);
}
function fly_in(e, l) {
  l ? e.classList.add("fly_in") : e.classList.remove("fly_in");
}
function lin() {
  let e = $(".card_l");
  $(".day_l").addClass("l_in"), e.addClass("l_in");
}
function l_in(e, l) {
  lin();
}
function r_in(e, l) {
  let n = $(".card_r"),
    a = $(".day_r");
  l && (a.addClass("l_in"), n.addClass("l_in")), lin();
}
function opa_rev(e, l) {
  l ? e.classList.add("fade_rot") : e.classList.remove("fade_rot");
}
function fade_opaci(e, l) {
  l ? e.classList.add("opaci") : e.classList.remove("opaci");
}
function splash_pop(e, l) {
  l && e.classList.add("splash_slide");
}
function callbackRouter(e, l) {
  let n = e[0],
    a = n.target;
  n.intersectionRatio > 0
    ? a.dataset.callback &&
    (window[a.dataset.callback](a, !0),
      "true" == a.dataset.once && (a.classList.remove("jos"), l.unobserve(a)))
    : a.dataset.callback && window[a.dataset.callback](a, !1);
}
function graphic() {
  var pro_sec_el = document.getElementById("pro_sec");
  1 == graphic_high
    ? ((graphic_high = 0),
      (myvid.style.display = "none"),
      pro_sec_el && (pro_sec_el.style.background = "#131313"),
      ripple.classList.remove("rypol"),
      notify("Acrylic Theme Deactivated !", 3e3))
    : ((graphic_high = 1),
      (myvid.style.display = "block"),
      pro_sec_el && (pro_sec_el.style.background = "transparent"),
      ripple.classList.add("rypol"),
      notify("Acrylic Theme Activated !", 3e3));
}

// (onload = function () {
//   showSlides(slideIndex);
// }),
(onload = function () {
  document.getElementById("image4"),
    document.getElementById("image3"),
    document.getElementById("image9"),
    document.getElementById("pro_sec"),
    document.getElementById("ripple");
}),
  "serviceWorker" in navigator
    ? navigator.serviceWorker
      .register("service-worker.js")
      .then((e) => { })
      .catch((e) => {
        console.log("SW Registration Failed");
      })
    : console.log("Not supported");

