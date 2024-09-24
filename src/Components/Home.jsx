import { useContext } from 'react';
import ListItem from "./ListItem.jsx";
import FormInput from './Form/FormInput.jsx';
import { Spin } from 'antd';
import ContextData from '../ConText/context.js';

const Home = () => {
  const { loading, filteredData } = useContext(ContextData);

  return (
    <div>
      <FormInput />
      {loading ? (
        <Spin tip="Loading" type="info" size="large" className='mt-6' fullscreen />

      ) : (
        <div>
          <ListItem />
          {filteredData.length === 0 && <div>Không tìm thấy dữ liệu động dữ liệu</div>}
        </div>
      )}
    </div>
  );
};

export default Home;