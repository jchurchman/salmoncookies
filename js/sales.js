'use strict'

var hrOpen = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

function CookieStore( loc, minCust, maxCust, aveCookieSale, hrSales, totalSales ) {
   this.loc = loc;
   this.minCust = minCust;
   this.maxCust = maxCust;
   this.aveCookieSale = aveCookieSale;
   this.hrSales = hrSales;
   this.totalSales = 0;
}

CookieStore.prototype.estSales = function () {
   for ( var i = 0; i < hrOpen.length; i++) {
         locationOne.hrSales.push(Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.aveCookieSale));
   }
}

var locationOne = {
   loc: 'PDX Airport',
   objNo: 0,
   minCust: 23,
   maxCust: 65,
   aveCookieSale: 6.3,
   hrsOpen: 15,
   hrSales: [],
   totalSales: 0,
   estSales: function () {
      //Populates hrSales Array with randomly generated sales numbers for each hour
      for (var i = 0; i < this.hrsOpen; i++) {
      }
   },
   total: function () {
      //Compiles totalSales from the items in the hrSales array.
      for (var i = 0; i < this.hrSales.length; i++) {
         // locationOne.totalSales = locationOne.totalSales + locationOne.hrSales[i];
         this.totalSales += this.hrSales[i];
      }
   },
   popPage: function () {
      this.estSales();
      this.total();
      var positionHeading = document.getElementsByTagName('lh')[this.objNo];
      var newULHeading = document.createTextNode(this.loc);
      positionHeading.appendChild(newULHeading);
      var position = document.getElementsByTagName('ul')[this.objNo];
      for (var i = 0; i < this.hrsOpen; i++) {
         var newEl = document.createElement('li');
         var newText = document.createTextNode((i + 6) + ":00 hrs " + this.hrSales[i] + " cookies");
         newEl.appendChild(newText);
         position.appendChild(newEl);
      }
      var newEl = document.createElement('li');
      var newText = document.createTextNode("Total: " + this.totalSales + " Cookies sold.");
      newEl.appendChild(newText);
      position.appendChild(newEl);
   },
};

var locationTwo = {
   loc: 'Pioneer Square',
   objNo: 1,
   minCust: 3,
   maxCust: 24,
   aveCookieSale: 1.2,
   hrsOpen: 15,
   hrSales: [],
   totalSales: 0
};

var locationThr = {
   loc: 'Powell\'s',
   objNo: 2,
   minCust: 11,
   maxCust: 38,
   aveCookieSale: 3.7,
   hrsOpen: 15,
   hrSales: [],
   totalSales: 0
};
var locationFou = {
   loc: 'St. John\'s',
   objNo: 3,
   minCust: 20,
   maxCust: 38,
   aveCookieSale: 2.3,
   hrsOpen: 15,
   hrSales: [],
   totalSales: 0
};
var locationFiv = {
   loc: 'Waterfront',
   objNo: 4,
   minCust: 2,
   maxCust: 16,
   aveCookieSale: 4.6,
   hrsOpen: 15,
   hrSales: [],
   totalSales: 0
};
(function() {
   locationOne.popPage();
   locationTwo.popPage();
   locationThr.popPage();
   locationFou.popPage();
   locationFiv.popPage();
})();