var emailDiv = document.getElementById("email");
console.log(document.referrer);
if(document.referrer == "http://www.richardswebservices.com/index.html"
 || document.referrer == "http://www.richardswebservices.com/"
  || document.referrer == "http://www.richardswebservices.com/contacts.html"
	|| document.referrer == "http://www.richardswebservices.com/about.html"
	 || document.referrer == "http://www.richardswebservices.com/shop.html"
	  || document.referrer == "http://www.richardswebservices.com/services.html"
	   || document.referrer == "http://www.richardswebservices.com/specials.html"
	    || document.referrer == "http://richardswebservices.com/index.html"
	     || document.referrer == "http://richardswebservices.com/"
	      || document.referrer == "http://richardswebservices.com/contacts.html"
	       || document.referrer == "http://richardswebservices.com/about.html"
	        || document.referrer == "http://richardswebservices.com/shop.html"
	         || document.referrer == "http://richardswebservices.com/services.html"
	          || document.referrer == "http://richardswebservices.com/specials.html")
{
	console.log("been there done that");
} 
else 
{
	setTimeout(function(){ 	emailDiv.style.visibility = "visible"; }, 3000);
}

function CloseEmail()
{
	emailDiv.style.visibility = "hidden";
}
function ShowEmail()
{
	emailDiv.style.visibility="visible";
}
