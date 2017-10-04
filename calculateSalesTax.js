// -------------------------------- Inputs -------------------------------------

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// ---------------------------- Main function ---------------------------------

function calculateSalesTax(salesData, taxRates) {

  //Initialize empty object for results
  var results = {};

  // Loop through companies
  for (company of salesData){

    // Call sumArray function on company sales array
    let province_sales = sumArray(company["sales"]);
    // identify company name and province from company sales data
    let name = company["name"];
    let province = company["province"];

    // If it exists, add to it
    if (results[name]){
      results[name]["totalSales"] += province_sales;
      // Call calculate tax function on each company
      results[name]["totalTaxes"] += calculateTax(province_sales , taxRates[province]);
    } else{
    // If it doesn't exist, define it
      results[name] = {
      totalSales: province_sales,
      // Call calculate tax function on each company
      totalTaxes: calculateTax(province_sales , taxRates[province])
      }
    }
  }
return results
}

// ---------- General functions calculate tax and sum of array  -------------

function calculateTax(sales, taxRate){
  //calculating tax on a single dollar amount with a known rate
  return sales * taxRate;
}

function sumArray(array){
  //sums an array of sales
  var sum = 0;
  for (i of array){
    sum += i;
  }
  return sum;
}

// ----------------------------- Outputs ------------------------------------

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/