'use strict'

var hrOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = [];

function CookieStore(loc, minCust, maxCust, aveCookieSale) {
    this.loc = loc;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.aveCookieSale = aveCookieSale;
    stores.push(this);
    this.hrSales = [];
    this.totalSales = 0;
}

CookieStore.prototype.estSales = function () {
    for (var i = 0; i < hrOpen.length; i++) {
        this.hrSales.push(Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.aveCookieSale));
    }
    for (var j = 0; j < this.hrSales.length; j++) {
        this.totalSales += this.hrSales[j];
    }
};

CookieStore.prototype.fillTable = function () {
    this.estSales();
    for (var j = 0; j < this.hrSales.length; j++) {
        addToDOM('tr', j, 'td', this.hrSales[j]);
    }
};

CookieStore.prototype.topperBottoms = function () {
        addToDOM('thead', 0, 'th', this.loc);
        addToDOM('tfoot', 0, 'td', this.totalSales);
}

function buildTableFrame () {
    for (var g = 0; g < hrOpen.length; g++) {
        var spot = document.getElementById('tbody');
        var newEl = document.createElement('tr');
        newEl.setAttribute('class', 'tr');
        spot.appendChild(newEl);
    }
    for (var h = 0; h < hrOpen.length; h++) {
        addToDOM('tr', h, 'td', hrOpen[h]);
    }
    addToDOM('thead', 0, 'th', ' ');
    addToDOM('tfoot', 0, 'th', 'Total: ');
}

buildTableFrame();

function addToDOM(tag, arrayno, el, text) {
    var spot = document.getElementsByTagName(tag)[arrayno];
    var newEl = document.createElement(el);
    var newText = document.createTextNode(text);
    newEl.appendChild(newText);
    spot.appendChild(newEl);
}

var locOne = new CookieStore('PDX Airport', 23, 65, 6.3);
var locTwo = new CookieStore('Pioneer Square', 3, 24, 1.2);
var locThr = new CookieStore('Powell\'s', 11, 38, 3.7);
var locFou = new CookieStore('St. John\'s', 20, 38, 2.3);
var locFiv = new CookieStore('Waterfront', 2, 16, 4.6);

function fillTableData () {
    for (var i = 0; i < stores.length; i++) {
        stores[i].fillTable();
        stores[i].topperBottoms();
    }
}

fillTableData();

// function stretchTotalColumn() {
//     addToDOM('thead', 0, 'th', 'Hourly Totals');
//     addToDOM('tfoot', 0, 'th', ' ');
//     for (var h = 0; h < hrOpen.length; h++) {
//         var rowTotal = 0;
//         for (var i = 0; i < stores.length; i++) {
//             rowTotal += stores[i].hrSales[h];
//         }
//         addToDOM('tr', h, 'td', rowTotal);
//     }
// };


// (function stretchNextTableTopperBottoms() {
//     addToDOM('thead', 1, 'th', ' ');
//     for (var i = 0; i < stores.length; i++) {
//         addToDOM('thead', 1, 'th', stores[i].loc + ' store employee needs per hour');
//     }
// }

// function stretchNextTableFillTable() {
//     for (var g = 0; g < hrOpen.length; g++) {
//         var spot = document.getElementsByTagName('tbody')[1];
//         var newEl = document.createElement('tr')
//         newEl.setAttribute('id', 'tr');
//         spot.appendChild(newEl);
//     }
//     for (var h = 0; h < hrOpen.length; h++) {
//         addToDOM('tr', h + hrOpen.length, 'td', hrOpen[h]);
//     }
//     for (var i = 0; i < stores.length; i++) {
//         for (var j = 0; j < stores[i].hrSales.length; j++) {
//             var employeesNeeded = Math.ceil(
//                 stores[i].hrSales[j] / 20);
//             if (employeesNeeded >= 2) {
//                 addToDOM('tr', j + stores[i].hrSales.length, 'td', employeesNeeded);
//             } else {
//                 addToDOM('tr', j + stores[i].hrSales.length, 'td', 2);
//             }
//         }
//     }
// }