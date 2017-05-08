'use strict'

var locationOne = {
   loc: 'PDX Airport',
   minCust: 23,
   maxCust: 65,
   aveCookieSale: 6.3,
   hrsOpen: 15,
   hrSales: [],
   totalSales: 0,
   estSales: function () {
      for (var i = this.hrsOpen; i > 0; i--) {
         locationOne.hrSales.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
         // console.log(this.maxCust + " this.maxCust ");
         // console.log(this.minCust + " this.minCust ");
      }
   },
   total: function () {
      // console.log("value of this.totalSales " + this.totalSales);
      for (var i = 0; i < this.hrSales.length; i++) {
         // console.log("value of this.totalSales " + this.totalSales);
         // console.log("hrSales at " + i + " is " + this.hrSales[i]);
         locationOne.totalSales = locationOne.totalSales + locationOne.hrSales[i];
         // console.log("value of i: " + i);
      }
   },
   popSales: function () {

   },
   popTotal: function () {

   },
};