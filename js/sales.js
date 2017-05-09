'use strict'

var hrOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = [];

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

var locOne = new CookieStore('PDX Airport', 23, 65, 6.3);
var locTwo = new CookieStore('Pioneer Square', 3, 24, 1.2);
var locThr = new CookieStore('Powell\'s', 11, 38, 3.7);
var locFou = new CookieStore('St. John\'s', 20, 38, 2.3);
var locFiv = new CookieStore('Waterfront', 2, 16, 4.6);

(function fillTable() {
   for (var g = 0; g < hrOpen.length; g++) {
      var spot = document.getElementById('tbody');
      var newEl = document.createElement('tr')
      newEl.setAttribute('id', 'tr');
      spot.appendChild(newEl);
   }
   for (var h = 0; h < hrOpen.length; h++) {
      addToDOM('tr', h, 'td', hrOpen[h]);
   }
   for (var i = 0; i < stores.length; i++) {
      stores[i].estSales();
      for (var j = 0; j < stores[i].hrSales.length; j++) {
         addToDOM('tr', j, 'td', stores[i].hrSales[j]);
      }
   }
})();

(function topperBottoms() {
   addToDOM('thead', 0, 'th', ' ');
   addToDOM('tfoot', 0, 'th', 'Total: ');
   for (var i = 0; i < stores.length; i++) {
      addToDOM('thead', 0, 'th', stores[i].loc);
      addToDOM('tfoot', 0, 'td', stores[i].totalSales);
   }
})();

(function stretchItOut() {
   addToDOM('thead', 0, 'th', 'Hourly Totals');
   addToDOM('tfoot', 0, 'th', ' ');
   for (var h = 0; h < hrOpen.length; h++) {
   var rowTotal = 0;
      for (var i = 0; i < stores.length; i++) {
         rowTotal += stores[i].hrSales[h];
      }
      addToDOM('tr', h, 'td', rowTotal);
   }
})();

function addToDOM(tag, arrayno, el, text) {
   var spot = document.getElementsByTagName(tag)[arrayno];
   var newEl = document.createElement(el);
   var newText = document.createTextNode(text);
   newEl.appendChild(newText);
   spot.appendChild(newEl);
};