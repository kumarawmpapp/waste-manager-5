export default interface Skip {
  id: string;
  size: string;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  description?: string;
  availability?: string;
}
