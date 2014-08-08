function opened(tab) {
	console.log('tab opened');
	chrome.tabs.onUpdated.addListener(loaded);
}

function loaded(tabId, changeInfo, tab) {
	console.log('tab loaded!!!!');
	if (tab.url == "http://i.imgur.com/FZTRccM.jpg") {
		console.log('tab detectedAAAA!');
		chrome.tabs.executeScript(tab.id, {file:"toVideo.js"});
	}
}

chrome.tabs.onCreated.addListener(opened);