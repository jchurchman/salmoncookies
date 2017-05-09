'use strict'

var hrOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = [];

for (var i = 0; i < hrOpen.length; i++) {

}

function CookieStore(loc, minCust, maxCust, aveCookieSale, hrSales, totalSales) {
   this.loc = loc;
   this.minCust = minCust;
   this.maxCust = maxCust;
   this.aveCookieSale = aveCookieSale;
   this.hrSales = [];
   this.totalSales = 0;
   stores.push(this);
};

CookieStore.prototype.estSales = function () {
   for (var i = 0; i < hrOpen.length; i++) {
      this.hrSales.push(Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.aveCookieSale));
   }
   for (var i = 0; i < this.hrSales.length; i++) {
      this.totalSales += this.hrSales[i];
   }
};
      // var position = document.getElementsByTagName('ul')[this.objNo];
      // var newEl = document.createElement('li');
      // var newText = document.createTextNode("Total: " + this.totalSales + " Cookies sold.");
      // newEl.appendChild(newText);
      // position.appendChild(newEl);
      // this.estSales();

var locOne = new CookieStore('PDX Airport', 23, 65, 6.3);
var locTwo = new CookieStore('Pioneer Square', 3, 24, 1.2);
var locThr = new CookieStore('Powell\'s', 11, 38, 3.7);
var locFou = new CookieStore('St. John\'s', 20, 38, 2.3);
var locFiv = new CookieStore('Waterfront', 2, 16, 4.6);

function topperBottoms() {
   for (var i = 0; i < stores.length; i++) {
      var colHeadingSpot = document.getElementsByTagName('thead')[0];
      var newColHeadingEl = document.createElement( 'th' );
      var newColHeadingText = document.createTextNode(stores[i].loc);
      newColHeadingEl.appendChild(newColHeadingText);
      colHeadingSpot.appendChild(newColHeadingEl);
      var colFooterSpot = document.getElementsByTagName('tfoot')[0];
      var newColFooterEl = document.createElement( 'td' );
      var newColFooterText = document.createTextNode(stores[i].totalSales);
      newColFooterEl.appendChild(newColFooterText);
      colFooterSpot.appendChild(newColFooterEl);
   }
};
