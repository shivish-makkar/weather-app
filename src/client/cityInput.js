import React, {useState} from 'react';
import { Input, AutoComplete, Button } from 'antd';
import { SelectProps } from 'antd/es/select';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function CityInput(props) {
    // const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const [map, setMap] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleSearch = (value) => {
        setInputValue(value);
        console.log(inputValue);
    };

    const onSelect = (value) => {

    };


    return (
        <div>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: 300 }}
                onSelect={onSelect}
                onSearch={handleSearch}
            >
                <Input.Search size="large" placeholder="Enter the city name" enterButton />
            </AutoComplete>
        </div>
    );
}

export default CityInput;