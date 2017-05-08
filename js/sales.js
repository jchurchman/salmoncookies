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
         locationOne.hrSales.push(Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookieSale));
      }
   },
   total: function () {
      //Compiles totalSales from the items in the hrSales array.
      for (var i = 0; i < this.hrSales.length; i++) {
         // locationOne.totalSales = locationOne.totalSales + locationOne.hrSales[i];
         this.totalSales += this.hrSales[i];
      }
   },
   popSales: function () {
         var position = document.getElementsByTagName('lh')[this.objNo];
      for ( var i = 0; i < this.hrsOpen; i++) {
         var newEl = document.createElement('li');
         var newText = document.createTextNode( (i + 6) + ":00 hrs" + this.hrSales[i] + " cookies");
         newEl.appendChild(newText);
         position.appendChild(newEl);
      }

   },
   popTotal: function () {
      var position = document.getElementsByTagName('lh')[this.objNo];
      var newEl = document.createElement('li');
      var newText = document.createTextNode( "Total: " + this.totalSales + " Cookies sold.");
      newEl.appendChild(newText);
      position.appendChild(newEl);
   },
};
