import imageTeste from "../assets/Images/imageTeste.jpg";
import imageTeste2 from "../assets/Images/imageTeste2.jpg";
import cperl from "../assets/Images/cperl.webp";
import vgm from "../assets/Images/versantmontgabriel.webp";
// AJOUTER LES DOCUMENTS DANS LE DOSSIER PUBLIC
export const projects = [
  
    {
    id: 1,
    slug: "cperl",
    titre: "LE CPERL",
    categorie: ["Site web","UX/UI", "Vidéo"],
    estVedette: true,
    resume: "Le CPERL est l’instance régionale qui coordonne les efforts des acteurs des Laurentides, assure la concertation entre les territoires, représente les enjeux municipaux auprès des gouvernements et gère des projets stratégiques pour le développement régional.\n\nLe Cperl souhaitait moderniser sa présence numérique pour mieux présenter ses services, événements et ressources. Le mandat : concevoir un site web moderne, intuitif et flexible, entièrement administrable via WordPress et ACF.\n\nLe projet a demandé de concilier les demandes précises du client avec les principes d’une bonne expérience utilisateur, en ajustant la structure et les fonctionnalités pour répondre à leurs attentes tout en préservant la fluidité et la clarté du parcours.",
    collaboration:"Projet réalisé en collaboration avec La Petite Boîte Web",
    logo:"",
    cover: cperl,
    tags:  "Site web • UX/UI • Intégration WordPress • ACF",
    actions: {
      site: "https://laurentidesmagnetiques.ca/",   // Bouton 1
      maquette: "https://xd.adobe.com/view/2451d40b-2575-4e30-96b0-f5ddf9337092-7102/",                                  // Bouton 2 (désactivé)
                              // Bouton 3 (scroll)
                         // Bouton 3 (scroll)
    },
    
  },
  {
    id: 2,
    slug: "versantmontgabriel",
    titre: "Versant\n Mont-Gabriel",
    categorie: ["Branding","Graphisme/Impression", "Site web"],
    estVedette: true,
    resume: "Versant Mont-Gabriel est un nouveau projet domiciliaire de terrains boisés à vendre dans les Laurentides, offrant un cadre de vie exceptionnel alliant nature, tranquillité et accès aux services. \n\nLe mandat consistait à concevoir une image de marque cohérente et distinctive, établir une charte graphique de base, puis décliner cette identité sur différents supports, incluant affiches, dépliants et site web, afin d’assurer une communication visuelle forte et alignée avec leurs valeurs.",
    collaboration:"Projet réalisé en collaboration avec La Petite Boîte Web",
    cover: vgm,
    tags:  "Image de marque • Impression & graphisme • Site web",
    actions: {
      site: " https://versantmontgabriel.ca/ ",                                   
      gallerie: "#gallerie",                     
    },
    Gallerie :[imageTeste2,imageTeste,imageTeste,imageTeste2,imageTeste,imageTeste,],
  },
  {
    id: 3,
    slug: "gymnacentre",
    titre: "Gymnacentre",
    categorie: ["UX/UI", "Site web"],
    estVedette: true,
    resume: "Gymnacentre est un centre spécialisé en gymnastique et en activités sportives, offrant des programmes structurés et accessibles pour différents groupes d’âge, dans un environnement encadré, sécuritaire et dynamique.\n\n",
    cover: imageTeste,
    tags:  "Site web • UX/UI • Intégration WordPress • ACF",
    actions: {
      site: " https://www.gymnacentre.ca/",
      maquette: "https://xd.adobe.com/view/6689b2d0-56e9-42ee-83c0-a13f7996d89c-33da/",                                    
                     
    },
    
  },
  {
    id: 3,
    slug: "lemetallier",
    titre: "Le Métallier",
    categorie: ["Branding", "Graphisme/Impression", "Photographie","Site web"],
    estVedette: true,
    resume: "Le Cperl, une organisation dédiée au développement des compétences professionnelles, souhaitait actualiser sa présence numérique pour mieux mettre en valeur ses services, ses événements et ses ressources. Le mandat : créer un site web moderne, intuitif et flexible, offrant une gestion autonome des contenus via WordPress et ACF, tout en enrichissant l’expérience utilisateur.",
    collaboration:"Projet réalisé en collaboration avec La Petite Boîte Web",
    cover: imageTeste,
    tags:  "Branding • Logo • Impression •  Intégration WordPress • Photographie",
    actions: {
      site: "https://laurentidesmagnetiques.ca/",   // Bouton 1
      maquette: "",                                  // Bouton 2 (désactivé)
      gallerie: "#gallerie",                          // Bouton 3 (scroll)
      tester: " "                            // Bouton 3 (scroll)
    },
    Gallerie :[imageTeste2,imageTeste,imageTeste2,imageTeste,imageTeste,imageTeste,],
  },
  {
    id: 3,
    slug: "procure",
    titre: "Procure",
    categorie: ["Graphisme/Impression"],
    estVedette: true,
    resume: "Le Cperl, une organisation dédiée au développement des compétences professionnelles, souhaitait actualiser sa présence numérique pour mieux mettre en valeur ses services, ses événements et ses ressources. Le mandat : créer un site web moderne, intuitif et flexible, offrant une gestion autonome des contenus via WordPress et ACF, tout en enrichissant l’expérience utilisateur.",
    collaboration:"Projet réalisé en collaboration avec La Petite Boîte Web",
    cover: imageTeste,
    tags:  "Site web • UX/UI • Intégration WordPress • ACF",
    actions: {
      site: "https://laurentidesmagnetiques.ca/",   // Bouton 1
      maquette: "",                                  // Bouton 2 (désactivé)
      gallerie: "#gallerie",                          // Bouton 3 (scroll)
      tester: " "                            // Bouton 3 (scroll)
    },
    Gallerie :[imageTeste2,imageTeste,imageTeste2,imageTeste,imageTeste,imageTeste,],
  },
  {
    id: 4,
    slug: "chaineHotelliere",
    titre: "Chaîne Hotellière",
    categorie: ["WordPress"],
    estVedette: true,
    resume: "Le Cperl, une organisation dédiée au développement des compétences professionnelles, souhaitait actualiser sa présence numérique pour mieux mettre en valeur ses services, ses événements et ses ressources. Le mandat : créer un site web moderne, intuitif et flexible, offrant une gestion autonome des contenus via WordPress et ACF, tout en enrichissant l’expérience utilisateur.",
    collaboration:"Projet réalisé en collaboration avec La Petite Boîte Web",
    cover: imageTeste,
    tags:  "Site web • UX/UI • Intégration WordPress • ACF",
    actions: {
      site: "https://laurentidesmagnetiques.ca/",   // Bouton 1
      maquette: "",                                  // Bouton 2 (désactivé)
      gallerie: "#gallerie",                          // Bouton 3 (scroll)
      tester: " "                            // Bouton 3 (scroll)
    },
    Gallerie :[imageTeste2,imageTeste,imageTeste,imageTeste2,imageTeste,imageTeste,],
    id: 4,
    slug: "chaineHotelliere",
    titre: "Namira",
    categorie: ["Jeu vidéo", "Animation"],
    estVedette: true,
    resume: "Le Cperl, une organisation dédiée au développement des compétences professionnelles, souhaitait actualiser sa présence numérique pour mieux mettre en valeur ses services, ses événements et ses ressources. Le mandat : créer un site web moderne, intuitif et flexible, offrant une gestion autonome des contenus via WordPress et ACF, tout en enrichissant l’expérience utilisateur.",
    collaboration:"Projet réalisé en collaboration avec La Petite Boîte Web",
    cover: imageTeste,
    tags:  "Site web • UX/UI • Intégration WordPress • ACF",
    actions: {
      site: "https://laurentidesmagnetiques.ca/",   // Bouton 1
      maquette: "",                                  // Bouton 2 (désactivé)
      gallerie: "#gallerie",                          // Bouton 3 (scroll)
      tester: " "                            // Bouton 3 (scroll)
    },
    Gallerie :[imageTeste2,imageTeste,imageTeste,imageTeste2,imageTeste,imageTeste,],
  },
  
  
];