// alert.js

var warning_text = "The information on this site might be false or misleading!";

// Read options to use either alrt dialog or banner
chrome.storage.sync.get({
  mode: 'banner' // Banner as default
}, function(items) {
  if (items.mode == 'alert') {
    alert(warning_text);
  } else if (items.mode == 'banner') {
    var striped_lines_box = document.createElement('div');
    striped_lines_box.style.cssText = "background-image: url(https://i.imgur.com/m5Wjo7h.png); height: 20px; width: 100%; position: fixed; z-index: 999999; opacity: 0.7;";

    var inner_text = document.createElement('span');
    inner_text.textContent = warning_text;
    inner_text.style.cssText = "font-family: 'Lucida Console', Monaco, monospace; color: white; margin: auto; background: black; display: block; height: 20px; width: 500px; text-align: center; font-size: 14px;";

    striped_lines_box.appendChild(inner_text);

    document.body.insertBefore(striped_lines_box, document.body.firstChild);
  }
});
