// Opens and closes the menu on small screens.
(function () {
  var button = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// "Read more" / "Show less" button below the text.
document.querySelectorAll('.toggle-more').forEach(function (btn) {
  var box = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', function () {
    var opening = box.hidden;
    box.hidden = !opening;
    btn.setAttribute('aria-expanded', opening ? 'true' : 'false');
    btn.textContent = opening ? btn.dataset.less : btn.dataset.more;
    if (!opening) btn.scrollIntoView({ block: 'nearest' });
  });
});
