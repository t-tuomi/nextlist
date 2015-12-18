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


//    alert("foo");
    document.getElementById('status').textContent = "jojojojojo";
  

    var x = new XMLHttpRequest();
    x.open('GET', 'https://gate.finnair.com/');
    
    x.onload = function() {
	
	var response = x.response;
//	alert("here");
//	document.getElementById('status').innerHTML = x.responseText;
	return;
    }
//	alert("here1");
  x.send();

