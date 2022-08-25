import React from 'react';
import { getProductsId } from '../../utils/api';

export default function product({ post }) {
  console.log(post);
  return (
    <div>
      <h1>{post.attributes.title}</h1>
      <p>{post.attributes.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `http://localhost:1337/api/products?populate=*`
  );
  const posts = await res.json();

  const paths = posts.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  //   console.log(`SLUG DU PARAMS : ${slug}`);

  const res = await fetch(
    // `http://localhost:1337/api/products?fields[0]=slug&fields[0]=slug`
    `http://localhost:1337/api/products?filters[slug][$eq]=${slug}`
  );
  const data = await res.json();
  const post = data.data[0];

  //   console.log(`POST APRES FETCH DATA  : ${data}`);

  return {
    props: { post },
  };
}
