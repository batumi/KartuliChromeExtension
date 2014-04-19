'use strict';

chrome.storage.sync.get({
	useTransliterator: true
}, function(items) {
	if (items.useTransliterator) {
		console.log("TODO find text that was in latin letters and transliterate it");
		console.log(Translitit);
	} else {
		console.log("Transliteration is off");
	}
});
