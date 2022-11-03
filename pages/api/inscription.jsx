export default async function handler(req, res) {
  //Si la méthiode est = POST
  if (req.method == 'POST') {
    //Récupération des inforamtions
    const { pseudo, email } = req.body;
    let { password } = req.body;

    //Vérification des champs
    if (!pseudo || !email || !password) {
      //Erreur si manquants
      res
        .status(422)
        .json({ message: 'champs du formulaire manquant' });
      //Return pour stopper le code
      return;
    }
    ////////////////////////////////////////////////////////////////
    //Sécurisation du mot de passe
    ////////////////////////////////////////////////////////////////
    //Utilisé dcrypt et créedans lib un dossier auth avec le fonction pour securisé

    //Stocker le nouvel utilisateur
    const newUser = {
      pseudo,
      email,
      password,
    };
    ////////////////////////////////////////////////////////////////
    //Vérification de la syntaxe de l'email
    ////////////////////////////////////////////////////////////////

    //Stocker le pattern
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    pattern.test(email);
    //Condition Booléen -> Si pattern est false (ne respect pas le Regex) alors on génère une erreur
    if (!pattern.test(email)) {
      res
        .status(406)
        .json({ message: 'Votre adresse email est invalide' });
      //Return pour stopper le code
      return;
    }

    ////////////////////////////////////////////////////////////////
    //Connexion à la base de données
    ////////////////////////////////////////////////////////////////

    let clientStrapi;
    try {
      clientStrapi = await connectToDatabase();
    } catch (error) {
      res
        .status(500)
        .json({ message: "impossible d'effectuer la requete" });
      //Return pour stopper le code
      return;
    }

    ////////////////////////////////////////////////////////////////
    //Vérification de l'email
    ////////////////////////////////////////////////////////////////

    //Récupération de la base de données
    const db = clientStrapi.db();
    // En let pour modifier sa valeur
    let emailDejaUtilise;
    //Vérifier que l'adresse email n'est pas utilisée
    try {
      //Connexion à la BDD et recherche de l'email puis stockage de l'email dans une variable let
      emailDejaUtilise = await db
        .collection('utilisateurs')
        .findOne({ email: email });
    } catch (error) {
      //On ferme la connection
      clientStrapi.close();
      //Erreur
      res.status(500).json({ message: 'Un problème est survenu' });
      //Return pour stopper le code
      return;
    }

    //Si la ressource exitse deja alors on génère une erreur en
    if (emailDejaUtilise) {
      //On ferme la connection
      clientStrapi.close();
      //On génère une erreur
      res.status(403).json({
        message: 'Cette adresse email est déjà utlisé',
      });
      //Return pour stopper le code
      return;
    }

    ////////////////////////////////////////////////////////////////
    //Insérer un user
    ////////////////////////////////////////////////////////////////

    try {
      await db.collection('utilisateurs').insertOne(newUser);
    } catch (error) {
      //On ferme la connection
      clientStrapi.close();
      //Erreur
      res.status(500).json({ message: 'Un problème est survenu' });
      //Return pour stopper le code
      return;
    }

    ////////////////////////////////////////////////////////////////
    //Succès
    ////////////////////////////////////////////////////////////////
    clientStrapi.close();
    res.status(201).json({
      message: 'Utilisateur enregsitré avec succès',
      utilisateur: newUser,
    });
  } else {
    res.status(405).json({
      message: 'Une erreur est survenue',
    });
  }
}
