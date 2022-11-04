//Librairie
import { NextAuthOptions, NextAuth } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuthOptions({
  providers: [
    //Provider de base - Credentials
    CredentialsProvider({
      name: 'Credentials',
      // Les informations d'identification sont utilisées pour générer un formulaire approprié sur la page de connexion.
      // Vous pouvez spécifier les champs que vous souhaitez soumettre.
      // par exemple. domaine, nom d'utilisateur, mot de passe, jeton 2FA, etc.
      // Vous pouvez transmettre n'importe quel attribut HTML à la balise <input> via l'objet.Ò
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'test@test.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Vous devez fournir votre propre logique ici qui prend les informations d'identification
        // soumises et renvoie soit un objet représentant un utilisateur ou une valeur
        // qui est fausse/nulle si les informations d'identification ne sont pas valides.
        // par exemple. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // Vous pouvez également utiliser l'objet `req` pour obtenir des paramètres supplémentaires
        const res = await fetch(
          'http://localhost:1337/api/auth/local/register',
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const user = await res.json();

        // S'il n'y a pas d'erreur et que nous avons des données utilisateur, renvoyez-les
        if (res.ok && user) {
          console.log('User identifié');
          return user;
        }
        // Renvoie null si les données utilisateur n'ont pas pu être récupérées
        return;
        null;
      },
    }),
  ],
});
