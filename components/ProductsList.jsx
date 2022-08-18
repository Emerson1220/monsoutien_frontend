// import NextImage from './Image';
import Link from 'next/link';

const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>PRODUCTS</h1>
      {products.data.map((_product) => (
        <div key={_product.id}>
          <Link href={`/products/${_product.attributes.slug}`}>
            <a>
              <div>
                <h4>{_product.attributes.title} sticker</h4>
                <p>{_product.attributes.description}</p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
