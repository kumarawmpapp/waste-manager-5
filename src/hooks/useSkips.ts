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
          id: skip.id || `skip-${index}`,
          size: skip.size || skip.capacity || "Unknown",
          hire_period_days:
            skip.hire_period_days || skip.hirePeriodDays || skip.period || 7,
          price_before_vat: parseFloat(
            skip.price_before_vat || skip.priceBeforeVat || skip.basePrice || 0
          ),
          vat: parseFloat(skip.vat || skip.vatAmount || skip.tax || 0),
          description: skip.description || skip.desc || "",
          availability: skip.availability || skip.status || "Available",
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
