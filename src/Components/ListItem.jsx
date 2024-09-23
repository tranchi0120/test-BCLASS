import { useContext } from "react";
import Item from "./Item.jsx";
import ContextData from "../ConText/context.js";
import PropTypes from "prop-types";

const ListItem = () => {

  const { listDistrict, filteredData } = useContext(ContextData);


  const findDistrictName = (districtCode) => {
    if (listDistrict !== null) {
      const district = listDistrict.find(quan => quan.code === districtCode);
      if (district) {
        return district.path_with_type;
      }
    }
    return "không rõ";
  };
  return (
    <>
      <div className="mt-5 listItem">
        {filteredData.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            area={item.area}
            content={item.content}
            districtName={findDistrictName(item.district)}
          />
        ))}
      </div>
    </>
  );
};

ListItem.propTypes = {
  listData: PropTypes.node.isRequired,
};

export default ListItem;