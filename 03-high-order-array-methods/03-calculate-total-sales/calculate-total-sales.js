function calculateTotalSalesWithTax(products, taxRate) {
    const totalSales = products.reduce((total, current) => total+(current.price*current.quantity), 0);
    const tax = totalSales*(taxRate / 100);
    return tax+totalSales
}

module.exports = calculateTotalSalesWithTax;
