import { useContext, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import ContextData from "@context/context";
import { acreageOptions, PriceOptions } from "@utils/data/defaultData";

const FormInput = () => {
  const { listCity, listDistrict, listData, setFilteredData } = useContext(ContextData);

  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [listSelected, setListSelected] = useState({
    selectedCity: null,
    selectedDistrict: null,
    selectedAcreage: null,
    selectedPrice: null,
  });

  const [form] = Form.useForm();

  const handleCityChange = (value) => {
    setListSelected((prev) => ({ ...prev, selectedCity: value }));
    if (value) {
      const districtsForCity = listDistrict?.filter(
        (district) => district.parent_code === value
      );
      setFilteredDistricts(districtsForCity);
    } else {
      setFilteredDistricts([]);
    }
  };

  const handleDistrictChange = (value) => {
    setListSelected((prev) => ({ ...prev, selectedDistrict: value }));
  };

  const onChangeAcreage = (value) => {
    setListSelected((prev) => ({ ...prev, selectedAcreage: value }));
  };

  const onChangePrice = (value) => {
    setListSelected((prev) => ({ ...prev, selectedPrice: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const {
      selectedCity,
      selectedDistrict,
      selectedAcreage,
      selectedPrice
    } = listSelected;

    let listDataAfterSearch = [...listData];

    if (selectedCity) {
      listDataAfterSearch = listDataAfterSearch.filter((item) =>
        selectedDistrict
          ? item.city === selectedCity && item.district === selectedDistrict
          : item.city === selectedCity
      );
    }

    if (selectedAcreage) {
      listDataAfterSearch = filterByAcreage(
        listDataAfterSearch,
        selectedAcreage
      );
    }

    if (selectedPrice) {
      listDataAfterSearch = filterByPrice(listDataAfterSearch, selectedPrice);
    }

    if (inputTitle) {
      listDataAfterSearch = listDataAfterSearch.filter((item) =>
        item.title.toLowerCase().includes(inputTitle.toLowerCase())
      );
    }

    if (!selectedAcreage && !selectedCity && !selectedPrice && !inputTitle) {
      form.resetFields();
    }

    setFilteredData(listDataAfterSearch);
  };

  const filterByAcreage = (data, acreage) => {
    return data.filter((item) => {
      const itemArea = item.area;
      switch (acreage) {
        case "1":
          return itemArea < 20;
        case "2":
          return itemArea >= 20 && itemArea <= 30;
        case "3":
          return itemArea >= 30 && itemArea <= 50;
        case "4":
          return itemArea >= 50 && itemArea < 60;
        default:
          return true;
      }
    });
  };

  const filterByPrice = (data, price) => {
    return data.filter((item) => {
      const itemPrice = item.price;
      switch (price) {
        case "1":
          return itemPrice < 1000000;
        case "2":
          return itemPrice >= 1000000 && itemPrice <= 2000000;
        case "3":
          return itemPrice >= 2000000 && itemPrice <= 3000000;
        case "4":
          return itemPrice >= 3000000 && itemPrice <= 4000000;
        case "5":
          return itemPrice >= 4000000 && itemPrice <= 5000000;
        case "6":
          return itemPrice >= 5000000 && itemPrice <= 6000000;
        default:
          return true;
      }
    });
  };
  return (
    <div>
      {listCity.length > 0 && (
        <Form
          onSubmitCapture={handleSearch}
          form={form}
          className="grid grid-cols-12 gap-3 w-full "
        >
          <Form.Item label="Tiêu đề" name="title" className="col-span-3">
            <Input
              placeholder="Nhập tiêu đề"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              allowClear
            />
          </Form.Item>

          <Form.Item label="Tỉnh/Thành Phố" name="city" className="col-span-2">
            <Select
              showSearch
              placeholder="Chọn Tỉnh/Thành Phố"
              optionFilterProp="label"
              filterOption={(input, option) =>
                option.label.toLowerCase().includes(input.toLowerCase())
              }
              options={listCity.map((city) => ({
                value: city.code,
                label: city.name,
              }))}
              onChange={handleCityChange}
              allowClear
            />
          </Form.Item>

          <Form.Item label="Quận/Huyện" name="district" className="col-span-2">
            <Select
              showSearch
              placeholder="Chọn Quận/Huyện"
              optionFilterProp="label"
              filterOption={(input, option) =>
                option.label.toLowerCase().includes(input.toLowerCase())
              }
              options={filteredDistricts.map((district) => ({
                value: district.code,
                label: district.name,
              }))}
              onChange={handleDistrictChange}
              allowClear
            />
          </Form.Item>

          <Form.Item label="Khoảng giá" name="price" className="col-span-2">
            <Select
              showSearch
              placeholder="Chọn khoảng giá"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={PriceOptions}
              onChange={onChangePrice}
              allowClear
            />
          </Form.Item>

          <Form.Item label="Diện tích" name="acreage" className="col-span-2">
            <Select
              showSearch
              placeholder="Chọn diện tích"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={acreageOptions}
              onChange={onChangeAcreage}
              allowClear
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 20 }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default FormInput;
