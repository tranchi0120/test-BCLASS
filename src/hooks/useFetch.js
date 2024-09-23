import { useEffect, useState } from "react";
import instance from "../utils/data/instance";

const useFetch = () => {
  const [data, setData] = useState({
    listData: [],
    listCity: [],
    listDistrict: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);
      try {
        const [dataRes, cityRes, districtRes] = await Promise.all([
          instance.get("data"),
          instance.get("city"),
          instance.get("district"),
        ]);

        const listData = dataRes.data;
        const listCity = Object.values(cityRes.data[0]);
        const listDistrict = Object.values(districtRes.data[0]);

        setData({ listData, listCity, listDistrict });
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        setError("Có lỗi xảy ra khi tải dữ liệu.");
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, []);

  return { ...data, loading, error };
};

export default useFetch;