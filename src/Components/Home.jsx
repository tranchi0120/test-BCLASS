import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ListItem from "./ListItem.jsx";
import { city } from "../db/tinh.js";
import { districtData } from "../db/quan.js";
import { data } from "../db/data.js";

const Home = () => {
    const [validated, setValidated] = useState(false);
    const [listCity, setListCity] = useState([]);
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const [searchResults, setSearchResults] = useState(data);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const filteredData = data.filter(item => {
            const matchesCity = selectedCity ? item.city === selectedCity : true;
            const matchesDistrict = selectedDistrict ? item.district === selectedDistrict : true;
            return matchesCity && matchesDistrict;
        });

        setSearchResults(filteredData);
    };

    useEffect(() => {
        const citiesArray = Object.values(city[0]);
        setListCity(citiesArray);
    }, []);

    const handleCityChange = (event) => {
        const code = event.target.value;
        setSelectedCity(code);

        const filtered = Object.values(districtData[0]).filter(district => district.parent_code === code);
        setFilteredDistricts(filtered);
        setSelectedDistrict('');
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    return (
        <div>
            <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 flex gap-5">
                        <Form.Select aria-label="Chọn tỉnh/thành phố" onChange={handleCityChange}>
                            <option value="">Chọn tỉnh/thành phố</option>
                            {listCity.map(city => (
                                <option key={city.code} value={city.code}>
                                    {city.name}
                                </option>
                            ))}
                        </Form.Select>

                        <Form.Select aria-label="Chọn quận huyện" onChange={handleDistrictChange}>
                            <option value="">Quận huyện</option>
                            {filteredDistricts.map(district => (
                                <option key={district.code} value={district.code}>
                                    {district.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Row>
                    <Button type="submit">Search</Button>
                </Form>
            </div>
            <ListItem datas={searchResults} />
        </div>
    );
};

export default Home;