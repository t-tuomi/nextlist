


//var url = "https://gate.finnair.com/cvpn/http/crewweb1.finnair.fi:81/PAC/dutylist_sheet.asp?group=PILOT&amp;period=current&amp;refresh=yes&amp;start=2015120100000000&amp;end=20151231000000&amp;username=152972&amp;officialstart=20151201000000&amp;officialend=20151231000000";
			             

var s = document.getElementsByTagName('html')[0].innerHTML; 
var re = /Previous roster.+(dutylist_sheet.+current.+?)'/;
var url;
var re1 = /officialstart=(\d+)/;
var sd; 
var d = 30;
var nsd, ned;
var y, m;

url=re.exec(s)[1];

sd=re1.exec(url)[1];
y = sd.substring(0,4);
m = sd.substring(4,6);

m++;
if (m > 12) {
    m = 1;
    y++;
}

if ((m < 8) && (m % 2)) d = 31;
if ((m > 7) && !(m % 2)) d = 31; 

if (m == 2) { 
    d = 28;
    if (!(y % 4)) d = 29;
}

if (m < 10) m = "0" + m; 
if (d < 10) d = "0" + d; 

nsd = y + m + "01" + "000000";
ned = y + m + d + "000000";

url = url.replace(/start=\d+/g, "start=" + nsd);
url = url.replace(/end=\d+/g, "end=" + ned);
url = url.replace(/period=current/, "period=next");
url = url.replace(/&amp;/g, "&");

document.location = "https://gate.finnair.com/cvpn/http/crewweb1.finnair.fi:81/PAC/" + url;


