//Librairie
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        // Connexion à la BDD

        //1 - Voir si le user existe

        //2 - Voir si le password est correctement

        //3 - Suuccès
      },
    }),
  ],
});
