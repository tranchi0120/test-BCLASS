import instance from "@/exampleTest/data/instance.js";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState({
    listData: [],
    listCity: [],
    listDistrict: []
  });
  const [filteredData, setFilteredData] = useState([]);

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
        setFilteredData(listData)
      } catch (error) {
        setError("Có lỗi xảy ra khi tải dữ liệu.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, []);

  useEffect(() => {
    setFilteredData(data.listData);
  }, [data.listData]);

  return { ...data, loading, error, filteredData, setFilteredData };
};

export default useFetch;