// secondary title
var user = 'Sam';
var hello = 'Welcome, ';
var secondarytitle = hello + user + '! Here is a list of some of the most amazing guitars on the market.';
var secondarytitleGrab = document.getElementById('secondarytitle');

secondarytitleGrab.textContent = secondarytitle;

// Fender Stratocaster Price
var stratoPrice = 699.00,
    discountPercent = .30,
    stratoSalePrice = stratoPrice - (stratoPrice * discountPercent),
    stratoPriceEl = document.getElementById('stratoPrice'),
    stratoSalePriceEl = document.getElementById('stratoSalePrice');

stratoPriceEl.textContent = stratoPrice;
stratoSalePriceEl.textContent = stratoSalePrice;
/*
// Yamaha FG700S Price
var yamahaPrice = 489.99,
    discountPercent = .38,
    yamahaSalePrice = yamahaPrice - (yamahaPrice * discountPercent),
    yamahaPriceEl = document.getElementById('yamahaPrice'),
    yamahaSalePriceEl = document.getElementById('yamahaSalePrice');

yamahaPriceEl.textContent = yamahaPrice;
yamahaSalePriceEl.textContent = salePrice;

// Fender Precision Price
var precisionPrice = 799.99,
    discountPercent = .30,
    precisionSalePrice = precisionPrice - (precisionPrice * discountPercent),
    precisionPriceEl = document.getElementById('precisionPrice'),
    precisionSalePriceEl = document.getElementById('precisionSalePrice');
    
precisionPriceEl.textContent = precisionPrice;
precisionSalePriceEl.textContent = precisionSalePrice;
*/