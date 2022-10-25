export default function handler(req, res) {
  if (req.method == 'POST') {
    const { pseudo, email, password } = req.body;

    //Vérifier que tous les champs soient remplis
    if (!pseudo || (!email && !password)) {
      res
        .status(422)
        .json({ message: 'Champs du formulaire manquant.' });
      return;
    }

    //Stocker le nouvel user
    const nouvelUtilisateur = {
      pseudo,
      email,
      password,
      dateDeCreation: new Date(),
    };
    //Connexion à la database
  } else {
    res.statuts(405).json({ message: 'Une erreur est survenue.' });
  }
}
