import { useState, useEffect } from 'react';
import ListItem from "./ListItem.jsx";
import FormInput from './Form/FormInput.jsx';
import useFetch from '../hooks/useFetch.js';
import { Spin } from 'antd';

const Home = () => {
  const { listData, listCity, listDistrict, loading } = useFetch();
  const [filteredData, setFilteredData] = useState(listData);

  useEffect(() => {
    setFilteredData(listData);
  }, [listData]);

  return (
    <div>
      <FormInput
        listCity={listCity}
        listDistrict={listDistrict}
        listData={listData}
        setFilteredData={setFilteredData}
      />

      {loading ? (
        <Spin tip="Loading" type="info" size="large" className='mt-6' fullscreen />

      ) : (
        <>
          <ListItem
            listData={filteredData}
            listDistrict={listDistrict}
          />
          {filteredData.length === 0 && <div>Không tìm thấy dữ liệu động dữ liệu</div>}
        </>
      )}
    </div>
  );
};

export default Home;