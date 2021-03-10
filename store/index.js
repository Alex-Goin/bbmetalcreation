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
        description: 'Riche de ma longue expérience en métallerie, pliage & soudure, je vous propose mes services pour vos projets.',
        actions: [
            'Création de mobilier métal',
            'Chaudronnerie',
            'Métallerie',
            'Prestation soudure particulier et professionnel',
            'Toutes fabrications, acier, aluminium, inox',
            'Peinture par thermolaquage.',
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
        infos: "Chaudronnier soudeur avec 20 années d'expérience, MIG, TIG, ARC, intervention sur site ou en atelier, professionnel ou particulier."
    },
    mobilier: {
        title: 'Mobilier Métal',
        infos: 'Création de mobilier Métal, Bois & Acier. Une idée, un concept: je réalise. Table, chevet, banc, étagère, ...'
    },
    chaudronnerie: {
        title: 'Chaudronnerie',
        infos: '...'
    }
})