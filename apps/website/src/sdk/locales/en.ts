export default {
  quixer: {
    character: {
      create: {
        guide:
          'Please choose a name and sex for your character as well as the game world on which you want the character to live. If you cannot think of any fantasy names, click on the link below the name field to get some suggestions for a name. In any case the name must not violate the naming conventions stated in the Tibia Rules, or your character might get deleted or name locked.',
        worlds: 'Game Worlds',
        filter: 'Filter by game world location',
        filterDescription:
          'For a good connection and with this the best possible gaming experience, please select a game world that is situated nearest your own location.',
        filterPvp: 'Filter by game world PvP type',
        filterPvpDescription:
          'There are five different game world types that differ in the strictness of PvP rules. For a detailed description, please have a look at our manual. If you cannot decide for a game world type, we recommend playing on optional PvP.',
        'no-pvp': 'Only if both sides agree, characters can be fought',
        pvp: 'Killing other characters is possible, but restricted',
        pvpEnforced:
          'Killing other characters is possible, but restricted (old PvP rules)',
      },
    },
    success: {
      createAccount: 'Account created successfully! Logging in...',
      createCharacter: 'Character created successfully! Redirecting...',
    },
    errors: {
      email: 'Please enter a valid email address',
      minLength: 'Please enter at least {min} characters',
      maxLength: 'Please enter no more than {max} characters',
      required: 'This field is required',
      invalidLogin: 'Invalid login credentials',
      passwordMatch: 'Passwords do not match',
      consent: 'You must consent to the storing of your play sessions.',
      terms: 'You must agree to the Tibia Service Agreement.',
      emailAlreadyTaken: 'Email is already taken',
      nameAlreadyTaken: 'Name is already taken',
      worldNotFound: 'World not found',
      nameIsNotPermitted: 'Name is not permitted',
    },
    geral: {
      admin: 'Admin',
      world: 'World',
      back: 'Back',
      send: 'Send',
      sex: 'Sex',
      male: 'Male',
      female: 'Female',
      attention: 'Attention',
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      fieldConsent: 'Consent',
      fieldTerms: 'Terms',
      consent:
        'I consent to CipSoft GmbH saving play sessions for the sole purpose of improving the gaming experience or enforcing the Tibia Rules. Saved play sessions will contain the entire user experience, including, but not limited to, chats and player interaction. I am aware that I can revoke my consent to the storing of my play sessions at any time on my Tibia account management page.',
      terms:
        'I agree to the Tibia Service Agreement, the Tibia Rules and the Tibia Privacy Policy.',
      createAccount: 'Create Account',
      selectCheckbox: 'Please select the following check box:',
    },
    account: {
      management: 'Account Management',
      form: 'Account Login',
      login: 'Login',
      email: 'Email',
      password: 'Password',
      characters: {
        create: 'Create Character',
        table: {
          name: 'Name',
          status: 'Status',
          actions: 'Actions',
        },
      },
      titles: {
        status: 'Account Status',
        characters: 'Characters',
        general: 'General Information',
      },
      hello: `Welcome to your account {name}`,
      premium: {
        benefits: {
          outfits: 'wear Premium outfits',
          hunting: 'use two Hunting Task slots for free',
          battle:
            'organise characters and creatures nearby in secondary battle lists',
        },
      },
      general: {
        labels: {
          email: 'Email address:',
          created: 'Created:',
          lastLogin: 'Last login:',
          accountStatus: 'Account status:',
          tibiaCoins: 'Tibia Coins:',
          loyaltyPoints: 'Loyalty Points:',
          loyaltyTitle: 'Loyalty Title:',
        },
      },
      status: {
        free: 'Free Account',
        premium: 'Premium Account',
        freePremium: 'Free Premium Account',
        freePermanent: 'Your premium dont expire',
        timeExpired: 'Your premium time expired at',
        timeLeft: 'Your premium time expires in',
        balance: 'Balance of Premium Days: {days}',
      },
      actions: {
        menage: 'Manage Account',
        premium: 'Get Premium',
        logout: 'Logout',
        changePassword: 'Change Password',
        changeEmail: 'Change Email',
        terminate: 'Terminate Account',
      },
    },
    box: {
      login: {
        login: 'Login',
        loggedIn: 'My Account',
        logout: 'Logout',
        register: 'Register',
      },
      download: {
        download: 'Download',
      },
    },
    menu: {
      item: {
        news: 'News',
        'latest-news': 'Latest News',
        'news-archive': 'News Archive',
        'event-schedule': 'Event Schedule',
      },
    },
    info: {
      bar: {
        online: 'Players Online',
        fankit: 'Fankit',
      },
    },
  },
} as const
