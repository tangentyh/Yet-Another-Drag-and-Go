var _yadng = {};
var _url_regex_0 = /[a-zA-Z]+:\/\/[^\s]*/;
var _url_regex_1 = /[^\s]*\.(com|net|org|gov|edu|info|uk|hk|cn|au|ca|de|fr|jp|kr|tw|ru|us)[^\s]*/;
var _url_regex_2 = /^javascript:/;

var _dragstart = function(e) {
	_yadng.isSearch = false;
	_yadng.startX = e.x;
	_yadng.startY = e.y;
	var el = e.srcElement;
	if (el.nodeName == 'A') {
		if (!el.href.match(_url_regex_2)) {// NOT href="javascript:
			_yadng.selection = el.href;
		}
	} else if (el.nodeName == 'IMG') {
		_yadng.selection = el.src;// img src
		var pn = el.parentNode; // if <a><img/></a>
		do {
			if (pn.nodeName == 'A') {
				if (!pn.href.match(_url_regex_2)) {// NOT href="javascript:
					_yadng.selection = pn.href;
				}
				break;
			}
			pn = pn.parentNode;
		} while (pn);
	} else {
		var t = window.getSelection().toString();
		var m = t.match(_url_regex_0);
		if (m) {// text with url link
			_yadng.selection = m[0];
		} else {
			m = t.match(_url_regex_1);
			if (m) {// text with url link
				_yadng.selection = 'http://' + m[0];
			} else {// text for search
				_yadng.isSearch = true;
				_yadng.selection = t;
			}
		}
	}
	return false;
};

var _dragover = function(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	return false;
};

var _drop = function(e) {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (_yadng.selection) {
		_yadng.endX = e.x;
		_yadng.endY = e.y;
		// Send message to background script
		try {
			chrome.runtime.sendMessage(_yadng);
		} catch (error) {
			console.error('YADNG: Error sending message to background script:', error);
		}
	}
	return false;
};

document.addEventListener('dragstart', _dragstart, false);
document.addEventListener('dragover', _dragover, false);
document.addEventListener('drop', _drop, false);
