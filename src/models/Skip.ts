export default interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  forbidden: boolean;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
