import React, { useContext } from 'react';
import { SearchContext } from '../../../pages/home/Home';
import CheckBox from '../../ui/CheckBox';
import SideTitle from '../../ui/SideTitle';

function SideBar() {
  const { state } = useContext(SearchContext);
  const { products } = state;

  const Categories = [...new Set(products.map((product) => product.category))];

  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const features = ["Metallic", "Plastic Cover", "8GB Ram", "Super power", "Large Memory"]
  return (
    <div>

      <SideTitle Paragraph={'Category'} />
      <ul className=" text-sm text-gray-500">
        {Categories.map((category) => (
          <li className='py-2'>
            <CheckBox id={category} brandName={category.charAt(0).toUpperCase() + category.slice(1)} hidden={'hidden'}/></li>
        ))}
        <li><a className='text-blue-400 ' href="#">See all</a></li>
      </ul>

      <hr className='mt-4' />

      <SideTitle Paragraph={'Brands'} />
      <ul className='text-sm text-gray-500'>
        {brands.map((brand) => (
          <li className='py-2'>
            <CheckBox brandName={brand} id={brand} key={brands.indexOf(brand)} />
          </li>
        ))}
        <li><a className='text-blue-400 ' href="#">See all</a></li>
      </ul>

      <SideTitle Paragraph={'Features'} />
      <ul className='text-sm text-gray-500'>
        {features.map((feature) => (
          <li className='py-2'>
            <CheckBox brandName={feature} id={feature} key={features.indexOf(feature)} />
          </li>
        ))}
        <li><a className='text-blue-400 ' href="#">See all</a></li>
      </ul>
    </div>
  );
}

export default SideBar;
