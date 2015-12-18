			             

var s = document.getElementsByTagName('html')[0].innerHTML; 
//s="asdasdadENFO asdlkj j sl 2010ad"
var re;
var url;

//window.alert("S="+s);
console.log(s);
//alert("url");
re=/Previous roster.+(dutylist_sheet.+current.+?)'/;
//re=/ENFO.+2010/;
//alert(re);
//console.log("re=" + re);
url=re.exec(s)[1];

//window.alert("url1=" + url);

url = url.replace(/&amp;/g, "&");

//window.alert("url2=" + url);

document.location = "https://gate.finnair.com/cvpn/http/crewweb1.finnair.fi:81/PAC/" + url;

//https://gate.finnair.com/cvpn/http/crewweb1.finnair.fi:81/PAC/dutylist_sheet.asp?group=PILOT&amp;period=current&amp;refresh=yes&amp;start=2015120100000000&amp;end=20151231000000&amp;username=152972&amp;officialstart=20151201000000&amp;officialend=20151231000000

//https://gate.finnair.com/cvpn/http/crewweb1.finnair.fi:81/PAC/dutylist_sheet.asp?group=PILOT&    period=current&    refresh=yes&    start=2015120100000000&    end=20151231000000&    username=152972&    officialstart=20151201000000&    officialend=20151231000000

