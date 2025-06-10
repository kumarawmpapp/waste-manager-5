export const formatPrice = (priceBeforeVat: number, vat: number) => {
    const total = priceBeforeVat + vat;
    return total.toFixed(2);
  };