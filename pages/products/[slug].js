import Head from 'next/head';
import { useRouter } from 'next/router';

// import NextImage from '../../components/Image';
import { getProducts, getProduct } from '../../utils/api';
import { getStrapiMedia } from '../../lib/media';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <Head>
        <title>{product.title} product</title>
      </Head>
      <h1>{product.title} </h1>
      {/* <div>
        <div>
          <h4>
            {product.title} - ${product.price}
          </h4>
          <div>{product.description}</div>
        </div>

        {product.status === 'published' ? (
          <button
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={router.asPath}
            data-item-description={product.description}
            data-item-image={getStrapiMedia(
              product.image.formats.thumbnail.url
            )}
            data-item-name={product.title}
            v-bind='customFields'
          >
            Add to cart
          </button>
        ) : (
          <div>
            <div role='alert'>
              <span>Coming soon...</span>
              <span>This article is not available yet.</span>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.data.map((product) => ({
      params: {
        slug: product.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}
