import { useState, useEffect } from "react";
import Skip from "../models/Skip";

export const useSkips = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkips = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transform the data to ensure we have the required fields
      const transformedData = Array.isArray(data) ? data : [];
      const processedSkips = transformedData.map(
        (skip: any, index: number) => ({
          id: skip.id || index,
          size: skip.size || 0,
          hire_period_days: skip.hire_period_days || 0,
          price_before_vat: parseFloat(skip.price_before_vat || 0),
          vat: parseFloat(skip.vat || 0),
          forbidden: skip.forbidden || false,
          allowed_on_road: skip.allowed_on_road || true,
          allows_heavy_waste: skip.allows_heavy_waste || false,
        })
      );

      setSkips(processedSkips);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch skip data"
      );
      console.error("Error fetching skips:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkips();
  }, []);

  return { skips, loading, error, fetchSkips };
};
