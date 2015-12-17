


// // When the extension is installed or upgraded ...
// chrome.runtime.onInstalled.addListener(function() {
//     // Replace all rules ...
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
// 	// With a new rule ...
// 	chrome.declarativeContent.onPageChanged.addRules([
// 	    {
// 	        // That fires when a page's URL contains a 'g' ...
// 	        conditions: [
// 	            new chrome.declarativeContent.PageStateMatcher({
// 			pageUrl: { urlContains: 'gate.finnair' },
// 	            })
// 	        ],
// 	        // And shows the extension's page action.
// 	        actions: [ new chrome.declarativeContent.ShowPageAction() ]
// 	    }
// 	]);
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
    

// });

chrome.pageAction.onClicked.addListener(function(tab) { 

    try {
	chrome.tabs.create({"url":"https://gate.finnair.com/cvpn/http/skyway.finnair.fi/FinnairWDT/default.aspx","selected":true},
			   function (tab) { alert("tab" + tab.id) })
	
    } catch (e) {
	alert(e);
    }
    alert('icon clicked')
});


