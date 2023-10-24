import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../App';
import CheckBox from '../../ui/CheckBox';
import SideTitle from '../../ui/SideTitle';

function SideBar({ handleSelectedValues }) {
  const { state } = useContext(SearchContext);
  const { products } = state;

  const [selectedValues, setSelectedValues] = useState([]);

  const Categories = [...new Set(products.map((product) => product.category))];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
  const features = ['Metallic', 'Plastic Cover', '8GB Ram', 'Super power', 'Large Memory'];

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
    handleSelectedValues(selectedValues); 
  };

  return (
    <div>
      <SideTitle Paragraph={'Category'} />
      <ul className="text-sm text-gray-500">
        {Categories.map((category) => (
          <li className='py-2' key={category}>
            <CheckBox
              id={category}
              brandName={category.charAt(0).toUpperCase() + category.slice(1)}
              hidden={'hidden'}
              checked={selectedValues.includes(category)}
              onchange={() => handleCheckboxChange(category)}
            />
          </li>
        ))}
        <li>
          <a className='text-blue-400 ' href="#">
            See all
          </a>
        </li>
      </ul>

      <hr className='mt-4' />

      <SideTitle Paragraph={'Brands'} />
      <ul className='text-sm text-gray-500'>
        {brands.map((brand) => (
          <li className='py-2' key={brand}>
            <CheckBox
              brandName={brand}
              id={brand}
              checked={selectedValues.includes(brand)}
              onchange={() => handleCheckboxChange(brand)}
            />
          </li>
        ))}
        <li>
          <a className='text-blue-400 ' href="#">
            See all
          </a>
        </li>
      </ul>

      <SideTitle Paragraph={'Features'} />
      <ul className='text-sm text-gray-500'>
        {features.map((feature) => (
          <li className='py-2' key={feature}>
            <CheckBox
              brandName={feature}
              id={feature}
              checked={selectedValues.includes(feature)}
              onchange={() => handleCheckboxChange(feature)}
            />
          </li>
        ))}
        <li>
          <a className='text-blue-400 ' href="#">
            See all
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;