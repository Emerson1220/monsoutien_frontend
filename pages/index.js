import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <div>
        <h1>Home page</h1>
      </div>
    </div>
  );
}
