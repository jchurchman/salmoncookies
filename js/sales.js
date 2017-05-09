'use strict'

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
         locationOne.hrSales.push(Math.floor(((Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookieSale));
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
   totalSales: 0,
   estSales: function () {
      for (var i = 0; i < this.hrsOpen; i++){
         this.hrSales.push(Math.floor(((Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookieSale));
      }
   },
   total: function () {
      for (var i = 0; i < this.hrSales.length; i++) {
         this.totalSales += this.hrSales[i];
      }
   },
   popPage: function () {
      var positionHeading = document.getElementsByTagName('lh')[this.objNo];
      var newULHeading = document.createTextNode(this.loc);
      positionHeading.appendChild(newULHeading);
      var position = document.getElementsByTagName('ul')[this.objNo];
      for ( var i = 0; i < this.hrsOpen; i++) {
         var newEl = document.createElement('li');
         var newText = document.createTextNode((i+6) + ":00 hrs " + this.hrSales[i] + " cookies " );
         newEl.appendChild(newText);
         position.appendChild(newEl);
      }
      var newEl = document.createElement('li');
      var newText = document.createTextNode('Total: ' + this.totalSales + ' Cookies sold.' );
      newEl.appendChild(newText);
      position.appendChild(newEl);
   }
}

var locationThr = {
   
}