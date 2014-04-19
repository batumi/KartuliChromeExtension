'use strict';

// Saves options to chrome.storage
function saveOptions() {
	var useTransliterator = document.getElementById('useTransliterator').checked;
	chrome.storage.sync.set({
		useTransliterator: useTransliterator
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 1000);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
	document.getElementById('useTransliterator').addEventListener('change', saveOptions);
	// Use default value color = 'red' and useTransliterator = true.
	chrome.storage.sync.get({
		useTransliterator: true
	}, function(items) {
		document.getElementById('useTransliterator').checked = items.useTransliterator;
	});
}
document.addEventListener('DOMContentLoaded', restoreOptions);
