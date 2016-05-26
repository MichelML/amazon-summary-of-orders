/**
 * This script allows you to get the sum in dollars of all your orders 
 * you've made (per one page of orders) on AMAZON.COM . To use the script,
 * Go on amazon.ca and make sure the site is in english. Then go on the page where 
 * you can view your orders (should look something like:
 * https://www.amazon.ca/gp/your-account/order-history?...), open the developer console,
 * (you should use Chrome or Firefox for this) and copy paste the script directly into the console. 
 * Run it. You should then see the sum of all the order prices of the page as a console output.
 */

prices = document.getElementsByClassName('a-color-secondary value')
var pricearr = []
for (var price in prices) pricearr.push(prices[price]);
newarr = pricearr.filter(function(value){ if (!value.innerHTML) {return false} else {return value.innerHTML.includes("$")}});
numbers = newarr.map(function(value) {return parseFloat(value.innerHTML.replace( /^\D+/g, ''))});
numbers.reduce(function(val,newval) {return val+newval},0);	 