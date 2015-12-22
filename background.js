


// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	// With a new rule ...
	chrome.declarativeContent.onPageChanged.addRules([
	    {
	        // That fires when a page's URL contains a 'g' ...
	        conditions: [
	            new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { urlContains: 'gate.finnair' },
	            })
	        ],
	        // And shows the extension's page action.
	        actions: [ new chrome.declarativeContent.ShowPageAction() ]
	    }
	]);
    });
});


document.addEventListener('DOMContentLoaded', function() { });


chrome.pageAction.onClicked.addListener(function(tab) { 
    
    var url;
    chrome.tabs.create({"url":"https://gate.finnair.com/" + 
			"cvpn/http/skyway.finnair.fi/FinnairWDT/StartApplication.aspx?group=appgroup-2&application=app-0","selected":true},
			   function (tab) { 
			       //alert("tab" + tab.id);
			       setTimeout(function(){
			           chrome.tabs.executeScript(null, { file:"content_script.js"   });
                  // muuta tab.tabId null:in paikalle
			       } ,5000); //15 is recommended minimum
			   });


  //  alert('icon clicked')
});


