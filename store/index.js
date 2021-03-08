export const state = () => ({
    navbar: {
        brand: 'BB Metal Creation',
        links: [
            { name: 'Accueil', url: '/' },
            { name: 'Chaudronnerie', url: '/chaudronnerie' },
            { name: 'Prestation soudure', url: '/soudure' },
            { name: 'Mobilier métal', url: '/mobilier' },
            { name: 'Contact', url: '/contact' }
        ]
    },
    header: {
        title: 'BB Metal Creation',
        description: 'Riche de ma longue expérience qui touche tout ce qui est de la métallerie, du pliage à la soudure, je vous propose mes services pour vos projets.',
        actions: [
            'Réalisations de mobiliers designs',
            'Découpes de tôles avec motifs',
            'Mobiliers urbains',
            'Chaudronnerie',
            'Toutes fabrications, Acier, Aluminium ou Inox',
            'Thermolaquage pour une peinture garantie',
        ],
        partenaires: [
            {
                name: 'Mécalaser',
                url: 'https://www.mecalaser.fr/',
                logo: require('~/assets/logos_partenaires/Logo-meca-laser.png')
            },
            {
                name: 'Couleur d\'Oc',
                url: 'http://couleursdoc.fr/',
                logo: require('~/assets/logos_partenaires/logo-couleur-doc.png')
            },
            {
                name: 'Codina & Fils',
                'url': 'https://www.codinaproduitsmetallurgiques.fr/',
                logo: require('~/assets/logos_partenaires/logo-codina.svg')
            },
            {
                name: 'Prolians Baurès Aussilon',
                url: 'https://www.pagesjaunes.fr/pros/05686874',
                logo: require('~/assets/logos_partenaires/logo_pagesjaunes.png')
            }
        ]

    },
    contact: {
        address: '5 bis Avenue de Plaisance 81290 St Affrique Les Montagnes',
        phone: '06 79 04 36 02',
        mail: 'bbmetalcreation@gmail.com',
        map: 'https://www.google.fr/maps/place/Chemin+de+Peyre+Ficade,+81290+Viviers-l%C3%A8s-Montagnes/@43.5629784,2.1850561,17z/data=!3m1!4b1!4m2!3m1!1s0x12ae13a0a6705c01:0x92d639164748edb9',
        horaires: 'Du Lundi au Vendredi de 8h à 18h'
    },
    soudure: {
        title: 'Prestation soudure',
        infos: "Chaudronnier soudeur avec 20 années d'expérience, MIG, TIG, ARC, intervention sur site ou en atelier, professionnel ou particulier.",
        imgs: [
            require('~/assets/soudure/max-larochelle-_RhL0DUidms-unsplash.jpg'),
            require('~/assets/soudure/max-larochelle-c-vWdiICscA-unsplash.jpg'),
            require('~/assets/soudure/max-larochelle-QzP1GcDOSC8-unsplash.jpg'),
            require('~/assets/soudure/max-larochelle-tD-SDlQxfsY-unsplash.jpg'),
            require('~/assets/soudure/rob-lambert-9Q_pLLP_jmA-unsplash.jpg'),
            require('~/assets/soudure/tig.png'),
            require('~/assets/soudure/watts-roofing-supplies-Y71qSiW8e8U-unsplash.jpg'),
        ]
    },
    mobilier: {
        title: 'Mobilier Métal',
        infos: '...',
        imgs: [
            require('~/assets/moblier/FB_IMG_1614847833362.jpg'),
            require('~/assets/moblier/FB_IMG_1614847883275.jpg'),
            require('~/assets/moblier/FB_IMG_1614847989219.jpg'),
            require('~/assets/moblier/IMG_20210305_113056.jpg'),
            require('~/assets/moblier/Screenshot_20210304-095912_Facebook.jpg'),
            require('~/assets/moblier/Screenshot_20210304-100120_Facebook.jpg'),
            require('~/assets/moblier/Screenshot_20210305-134040_Gallery.jpg'),
        ]
    }
})