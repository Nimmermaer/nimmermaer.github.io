(function () {
	"use strict";

	if (window.__mailtoObfuscationInitialized) {
		return;
	}

	window.__mailtoObfuscationInitialized = true;

	function shiftChar(code, min, max, offset) {
		code += offset;
		if (offset > 0 && code > max) {
			code = min + (code - max - 1);
		} else if (offset < 0 && code < min) {
			code = max - (min - code - 1);
		}

		return String.fromCharCode(code);
	}

	function decodeMailtoToken(token, vector) {
		var shift = -parseInt(vector, 10);
		var result = "";

		for (var index = 0; index < token.length; index++) {
			var code = token.charCodeAt(index);

			if (code >= 43 && code <= 58) {
				result += shiftChar(code, 43, 58, shift);
			} else if (code >= 64 && code <= 90) {
				result += shiftChar(code, 64, 90, shift);
			} else if (code >= 97 && code <= 122) {
				result += shiftChar(code, 97, 122, shift);
			} else {
				result += token.charAt(index);
			}
		}

		return result;
	}

	document.addEventListener("click", function (event) {
		var target = event.target;

		for (; target; target = target.parentNode !== document ? target.parentNode : null) {
			if (!target.matches) {
				continue;
			}

			if (!target.matches("a[data-mailto-token][data-mailto-vector]")) {
				continue;
			}

			event.preventDefault();
			var dataset = target.dataset;
			var emailAddress = decodeMailtoToken(dataset.mailtoToken, dataset.mailtoVector);
			document.location.href = "mailto:" + emailAddress;
			return;
		}
	});
})();