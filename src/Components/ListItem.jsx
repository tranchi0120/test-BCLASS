import {useState, useEffect} from "react";
import Item from "./Item.jsx";
import {districtData} from "../db/quan.js";

// eslint-disable-next-line react/prop-types
const ListItem = ({datas}) => {
    const [listDistrict, setListDistrict] = useState([]);


    useEffect(() => {
        const districtArray = Object.values(districtData[0]);
        setListDistrict(districtArray)
    }, []);
    const findDistrictName = (districtCode) => {
        if (listDistrict !== null) {
            const district = listDistrict.find(quan => quan.code === districtCode);
            if (district) {
                return district.path_with_type;
            }
        }
        return "Không rõ";
    };
    return (
        <>

            <div className="mt-5 listItem">
                {/* eslint-disable-next-line react/prop-types */}
                {datas.map((item, index) => (
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

export default ListItem;