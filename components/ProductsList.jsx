// import NextImage from './Image';
import Link from 'next/link';
import ImageNext from './ImageNext';

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <>
      <div>
        <h1>PRODUCTS</h1>
        {products.data.map((_product) => (
          <div key={_product.id}>
            <Link href={`/products/${_product.attributes.slug}`}>
              <a>
                <h6>Essai lien</h6>
              </a>
            </Link>
            <div>
              <h4>{_product.attributes.title}</h4>
              <h4>{_product.attributes.price}</h4>
              <h4>{_product.attributes.description}</h4>
              <ImageNext
                width={
                  _product.attributes.media.data.attributes.width
                }
                height={
                  _product.attributes.media.data.attributes.height
                }
                alternativeText={
                  _product.attributes.media.data.attributes
                    .alternativeText
                }
                url={_product.attributes.image.data.attributes.url}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
