'use strict';


chrome.storage.sync.get({
	useTransliterator: true
}, function(items) {
	if (items.useTransliterator) {
		window.setInterval(function(){
			var walkTheDOM = function walk(node, func) {
				func(node);
				node = node.firstChild;
				while (node) {
					walk(node, func);
					node = node.nextSibling;
				}
			};
			walkTheDOM(document.body, function(node) {
				if (node.nodeType === 1) {
					// alert(node.id); // alert if we have a type 1 node
					if (node.childElementCount === 0) {
						var previousText = node.textContent ? node.textContent.trim() : "";
						if (previousText) {
							// console.log(previousText);
							var changedText = Translitit(previousText);
							node.innerHTML = changedText;
							node.title = previousText;
						}
					}
				}
			});
		}, 2000);
	} else {
		console.log('Transliteration is off');
	}
});
