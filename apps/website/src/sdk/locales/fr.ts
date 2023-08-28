export default {
  quixer: {
    success: {
      createAccount: 'Compte créé avec succès! Connexion...',
    },
    errors: {
      email: 'Veuillez saisir une adresse e-mail valide',
      minLength: 'Veuillez saisir au moins {min} caractères',
      maxLength: 'Veuillez saisir au maximum {max} caractères',
      required: 'Ce champ est obligatoire',
      invalidLogin: 'Informations de connexion invalides',
      passwordMatch: 'Les mots de passe ne correspondent pas',
      consent:
        "Vous devez consentir à l'enregistrement de vos sessions de jeu.",
      terms: "Vous devez accepter l'accord de service Tibia.",
      emailAlreadyTaken: 'Cet email est déjà pris',
      nameAlreadyTaken: 'Le nom est déjà pris',
    },
    geral: {
      attention: 'Attention',
      name: 'Nom',
      email: 'Email',
      password: 'Mot de passe',
      confirmPassword: 'Confirmez le mot de passe',
      fieldConsent: 'Consentement',
      fieldTerms: 'Termes',
      consent:
        "J'autorise CipSoft GmbH à sauvegarder les sessions de jeu dans le seul but d'améliorer l'expérience de jeu ou de faire respecter les règles de Tibia. Les sessions de jeu enregistrées contiendront l'intégralité de l'expérience utilisateur, y compris, mais sans s'y limiter, les discussions et les interactions avec les joueurs. Je suis conscient que je peux révoquer mon consentement à la conservation de mes sessions de jeu à tout moment sur la page de gestion de mon compte Tibia.",
      terms:
        "J'accepte le contrat de service Tibia, les règles Tibia et la politique de confidentialité Tibia.",
      createAccount: 'Créer un compte',
      selectCheckbox: 'Veuillez cocher la case suivante:',
    },
    account: {
      management: 'Gestion du compte',
      form: 'Connexion au compte',
      login: 'Connexion',
      email: 'Email',
      password: 'Mot de passe',
      characters: {
        create: 'Créer un personnage',
        table: {
          name: 'Nom',
          status: 'Statut',
          actions: 'Actions',
        },
      },
      titles: {
        status: 'Statut du compte',
        characters: 'Personnages',
        general: 'Informations générales',
      },
      hello: `Bienvenue sur votre compte {name}`,
      premium: {
        benefits: {
          outfits: 'porter des tenues Premium',
          hunting: 'utiliser deux emplacements de tâche de chasse gratuitement',
          battle:
            'organiser les personnages et les créatures à proximité dans des listes de bataille secondaires',
        },
      },
      general: {
        labels: {
          email: 'Adresse e-mail:',
          created: 'Créé:',
          lastLogin: 'Dernière connexion:',
          accountStatus: 'Statut du compte:',
          tibiaCoins: 'Tibia Coins:',
          loyaltyPoints: 'Points de fidélité:',
          loyaltyTitle: 'Titre de fidélité:',
        },
      },
      status: {
        free: 'Compte gratuit',
        premium: 'Compte premium',
        freePremium: 'Compte premium gratuit',
        freePermanent: 'Votre premium ne expire pas',
        timeExpired: 'Votre temps premium a expiré le',
        timeLeft: 'Votre temps premium expire dans',
        balance: 'Solde des jours premium: {days}',
      },
      actions: {
        menage: 'Gérer le compte',
        premium: 'Acheter premium',
        logout: 'Se déconnecter',
        changePassword: 'Changer le mot de passe',
        changeEmail: "Changer l'e-mail",
        terminate: 'Résilier le compte',
      },
    },
    box: {
      login: {
        login: 'Se connecter',
        loggedIn: 'Mon compte',
        logout: 'Se déconnecter',
        register: 'Créer un compte',
      },
      download: {
        download: 'Télécharger',
      },
    },
    menu: {
      item: {
        news: 'Nouvelles',
        'latest-news': 'Dernières nouvelle',
        'news-archive': 'Archive des nouvelles',
        'event-schedule': 'Calendrier des événements',
      },
    },
    info: {
      bar: {
        online: 'Joueurs en ligne',
        fankit: 'Fankit',
      },
    },
  },
} as const