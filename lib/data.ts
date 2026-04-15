import { createMailHref, createTelHref, createWhatsAppHref } from "@/lib/utils";

const whatsappMessage =
  "Bonjour, je souhaite obtenir des informations sur vos services de réparation et diagnostic des circuits d’injection diesel.";

export const company = {
  name: "SEF SARL",
  legalName: "SEF SARL",
  tagline: "Spécialiste injection diesel au Cameroun",
  description:
    "Maintenance, diagnostic et réparation des circuits d’injection diesel pour poids lourds, engins, utilitaires et véhicules de tourisme.",
  longDescription:
    "SEF SARL accompagne les professionnels du transport, les conducteurs et les gestionnaires de flotte pour la réparation des pompes d’injection, la remise en état des injecteurs mécaniques et électroniques, le diagnostic fiable, la vente de pièces liées aux circuits d’injection diesel, la location de véhicule et la reprogrammation des calculateurs et des clés à Yaoundé, Douala et au Cameroun.",
  email: "sefsarlcamer@gmail.com",
  emailHref: createMailHref("sefsarlcamer@gmail.com"),
  phonePrimary: "+237 694 261 334",
  phoneSecondary: "+237 673 496 144",
  whatsappNumber: "+237 656 682 881",
  phonePrimaryHref: createTelHref("+237 694 261 334"),
  phoneSecondaryHref: createTelHref("+237 673 496 144"),
  whatsappMessage,
  whatsappHref: createWhatsAppHref("+237656682881", whatsappMessage),
  locations: [
    {
      city: "Yaoundé",
      area: "Tropicana, à environ 20 m de l’Institut Universitaire NDI Samba",
      label: "Atelier de Yaoundé"
    },
    {
      city: "Douala",
      area: "Nyalla Pariso",
      label: "Point de contact de Douala"
    }
  ],
  serviceAreas: ["Yaoundé", "Douala", "Cameroun"],
  hoursNote:
    "Les passages à l’atelier et les interventions techniques se confirment par téléphone ou WhatsApp selon la nature de la panne."
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" }
] as const;

export const homeHighlights = [
  "Garantie assurée",
  "Diagnostic fiable",
  "Intervention technique rigoureuse"
] as const;

export const services = [
  {
    id: "pompes-injection",
    step: "01",
    title: "Réparation des pompes d’injection pour engins et camions",
    shortDescription:
      "Remise en état des pompes d’injection diesel avec contrôle des organes sensibles, recalage et validation finale avant remise en service.",
    longDescription:
      "Nous prenons en charge la réparation des pompes d’injection destinées aux engins, camions, utilitaires et équipements de chantier. Chaque intervention vise à retrouver une alimentation régulière, une montée en pression stable et un comportement moteur fiable sur route comme en charge.",
    benefitTitle: "Ce que vous gagnez",
    benefits: [
      "Un diagnostic clair sur l’origine de la panne avant réparation",
      "Une remise en état pensée pour la fiabilité et la longévité",
      "Un meilleur démarrage, une réponse moteur plus stable et une consommation plus maîtrisée"
    ],
    equipment: ["Poids lourds", "Engins", "Camions", "Utilitaires diesel"],
    image: "/images/image-01.jpeg"
  },
  {
    id: "injecteurs-mecaniques-electroniques",
    step: "02",
    title: "Réparation des injecteurs mécaniques et électroniques toutes marques",
    shortDescription:
      "Contrôle, nettoyage, réglage et remise en état des injecteurs diesel mécaniques et électroniques pour toutes marques.",
    longDescription:
      "SEF SARL intervient sur les injecteurs diesel mécaniques et électroniques toutes marques afin d’améliorer la pulvérisation, la régularité du moteur et le comportement général du véhicule. Nous adaptons l’intervention selon la technologie d’injection et la nature du défaut observé.",
    benefitTitle: "Pourquoi ce service est essentiel",
    benefits: [
      "Réduction des ratés, fumées anormales et pertes de puissance",
      "Réponse moteur plus propre et plus régulière",
      "Intervention adaptée aux véhicules de tourisme comme aux véhicules professionnels"
    ],
    equipment: ["Véhicules de tourisme", "Utilitaires", "Camions", "Flottes diesel"],
    image: "/images/image-03.jpeg"
  },
  {
    id: "analyse-diagnostic",
    step: "03",
    title: "Analyse et diagnostic fiable",
    shortDescription:
      "Recherche méthodique de panne sur circuit d’injection diesel pour éviter les remplacements inutiles et orienter rapidement la bonne réparation.",
    longDescription:
      "Avant toute décision, nous réalisons une analyse précise de la panne afin de confirmer l’état de la pompe, des injecteurs, de l’alimentation ou du circuit. Cette étape est décisive pour limiter les immobilisations et engager la réparation la plus pertinente.",
    benefitTitle: "L’intérêt pour votre activité",
    benefits: [
      "Moins d’hésitation dans la recherche de panne",
      "Une intervention orientée sur la vraie cause du dysfonctionnement",
      "Des décisions plus sûres pour les exploitants de véhicules et d’engins"
    ],
    equipment: ["Poids lourds", "Engins", "Véhicules particuliers", "Parcs de véhicules"],
    image: "/images/injections-3.jpg"
  },
  {
    id: "intervention-technique",
    step: "04",
    title: "Intervention technique",
    shortDescription:
      "Accompagnement technique pour la dépose, la repose, les vérifications et la remise en route des systèmes d’injection diesel.",
    longDescription:
      "Lorsque la situation l’exige, nous apportons une intervention technique ciblée pour sécuriser la remise en état du système d’injection. Cette approche convient aux ateliers partenaires, aux flottes et aux clients qui ont besoin d’un avis métier fiable ou d’un appui technique sur une opération délicate.",
    benefitTitle: "Notre approche terrain",
    benefits: [
      "Un regard technique expérimenté sur les circuits d’injection diesel",
      "Une meilleure coordination entre diagnostic, réparation et remontage",
      "Une intervention pensée pour réduire le temps d’arrêt"
    ],
    equipment: ["Ateliers partenaires", "Flottes", "Camions", "Engins diesel"],
    image: "/images/image-02.jpeg"
  },
  {
    id: "vente-pieces",
    step: "05",
    title: "Vente des pièces liées aux circuits d’injection",
    shortDescription:
      "Mise à disposition de pièces et éléments liés aux circuits d’injection diesel pour soutenir une réparation cohérente et durable.",
    longDescription:
      "Nous proposons les pièces liées aux circuits d’injection diesel lorsqu’elles sont nécessaires à une réparation propre et cohérente. Cette offre permet d’éviter les montages approximatifs et de sécuriser les remises en service après diagnostic.",
    benefitTitle: "Ce que cela change",
    benefits: [
      "Un meilleur alignement entre réparation et remplacement ciblé",
      "Des composants choisis selon l’intervention à réaliser",
      "Une solution plus complète pour remettre le véhicule au travail"
    ],
    equipment: ["Pompes", "Injecteurs", "Éléments de circuit", "Véhicules diesel"],
    image: "/images/image-03.jpeg"
  },
  {
    id: "location-vehicule",
    step: "06",
    title: "Location de véhicule",
    shortDescription:
      "Location de véhicules pour déplacements privés, besoins professionnels et missions ponctuelles, avec une offre pensée pour la mobilité, la fiabilité et la disponibilité.",
    longDescription:
      "SEF SARL propose également un service de location de véhicule pour accompagner les besoins de mobilité des particuliers, des entreprises et des équipes en déplacement. Cette solution convient aussi bien aux trajets ponctuels qu’aux missions professionnelles, avec une prise de contact rapide par téléphone ou WhatsApp pour vérifier la disponibilité et orienter le bon choix de véhicule.",
    benefitTitle: "Ce que vous apporte ce service",
    benefits: [
      "Une solution de mobilité rapide pour un besoin ponctuel ou professionnel",
      "Des véhicules adaptés selon le type de déplacement, la durée et le niveau de confort recherché",
      "Une prise de contact simple pour réserver ou demander une disponibilité"
    ],
    equipment: [
      "Déplacements privés",
      "Missions professionnelles",
      "Mise à disposition ponctuelle",
      "Mobilité urbaine et interurbaine"
    ],
    image: "/images/service-02.png"
  },
  {
    id: "reprogrammation-calculateurs-cles",
    step: "07",
    title: "Reprogrammation des calculateurs et des clés des véhicules",
    shortDescription:
      "Service de reprogrammation électronique pour calculateurs et clés afin d’accompagner les remises en service, les interventions ciblées et certains besoins de configuration véhicule.",
    longDescription:
      "Nous intervenons aussi sur la reprogrammation des calculateurs et des clés des véhicules lorsque la remise en service, le diagnostic électronique ou la configuration du système l’exige. Cette prestation répond aux besoins des clients confrontés à un défaut de reconnaissance, à un problème lié à l’anti-démarrage, à une intervention électronique ciblée ou à une remise en route nécessitant un paramétrage cohérent.",
    benefitTitle: "Pourquoi cette prestation est utile",
    benefits: [
      "Un accompagnement plus précis sur les besoins électroniques liés au véhicule",
      "Une remise en service facilitée après certaines pannes ou interventions techniques",
      "Un contact direct pour vérifier rapidement la faisabilité selon le véhicule et la situation"
    ],
    equipment: [
      "Calculateurs moteur",
      "Clés codées",
      "Systèmes anti-démarrage",
      "Véhicules de tourisme et utilitaires"
    ],
    image: "/images/service-01.png"
  }
] as const;

export const homeServices = services;

export const products = [
  {
    id: "injecteur-common-rail",
    title: "Injecteur Common Rail",
    reference: "Pièce injection diesel",
    description:
      "Injecteur common rail adapté aux besoins de remplacement, de contrôle ou de remise en état sur plusieurs configurations de systèmes diesel modernes.",
    applications: ["Véhicules de tourisme", "Utilitaires diesel", "Systèmes common rail"],
    image: "/images/products/injecteur-common-rail.jpeg"
  },
  {
    id: "injecteur-caterpillar-heui-c7-c9",
    title: "Injecteur Caterpillar HEUI C7-C9",
    reference: "Référence Caterpillar",
    description:
      "Injecteur Caterpillar HEUI destiné aux moteurs C7 et C9, recherché pour les engins, matériels lourds et applications diesel fortement sollicitées.",
    applications: ["Caterpillar C7", "Caterpillar C9", "Engins et matériel lourd"],
    image: "/images/products/injecteur-caterpillar-heui-c7-c9.jpeg"
  },
  {
    id: "pompe-injection-delphi",
    title: "Pompe d’injection Delphi",
    reference: "Équipement circuit diesel",
    description:
      "Pompe d’injection Delphi proposée selon disponibilité pour accompagner une remise en service cohérente et un montage propre sur circuit diesel.",
    applications: ["Pompes diesel", "Systèmes Delphi", "Maintenance injection"],
    image: "/images/products/pompe-injection-delphi.jpeg"
  },
  {
    id: "injecteur-pompe-caterpillar-c15",
    title: "Injecteur-pompe Caterpillar C15",
    reference: "Référence moteur lourd",
    description:
      "Injecteur-pompe Caterpillar C15 pour moteurs à forte sollicitation, avec accompagnement sur la compatibilité et la disponibilité de la référence.",
    applications: ["Caterpillar C15", "Poids lourds", "Applications intensives"],
    image: "/images/products/injecteur-pompe-caterpillar-c15.jpeg"
  }
] as const;

export const reasons = [
  {
    title: "Spécialisation diesel affirmée",
    description:
      "Nous concentrons notre savoir-faire sur les circuits d’injection diesel pour intervenir avec plus de précision et plus de constance."
  },
  {
    title: "Diagnostic avant action",
    description:
      "Chaque dossier commence par une analyse fiable pour éviter les essais hasardeux et orienter la bonne intervention."
  },
  {
    title: "Garantie assurée",
    description:
      "Notre priorité est de livrer une réparation sérieuse, expliquée et assumée avec un engagement qualité clair."
  },
  {
    title: "Présence à Yaoundé et Douala",
    description:
      "Cette proximité facilite la prise de contact, l’organisation des passages à l’atelier et le suivi des interventions."
  }
] as const;

export const interventionDomains = [
  {
    title: "Poids lourds et camions",
    description:
      "Pour les transporteurs et propriétaires de camions qui ont besoin d’une injection diesel stable et d’un véhicule rapidement opérationnel."
  },
  {
    title: "Engins et matériels de chantier",
    description:
      "Pour les équipements soumis à de fortes contraintes, où la pompe et l’injection doivent rester fiables sous charge."
  },
  {
    title: "Véhicules utilitaires",
    description:
      "Pour les professionnels qui dépendent de leur véhicule au quotidien et recherchent une intervention technique crédible."
  },
  {
    title: "Véhicules de tourisme diesel",
    description:
      "Pour les particuliers confrontés à une perte de puissance, des difficultés de démarrage ou un comportement moteur irrégulier."
  },
  {
    title: "Flottes et ateliers partenaires",
    description:
      "Pour les structures qui veulent un interlocuteur technique capable de diagnostiquer vite et d’apporter une solution durable."
  }
] as const;

export const realisations = [
  {
    title: "Remise en état d’une pompe d’injection pour camion",
    category: "Pompes d’injection",
    issue: "Perte de puissance et alimentation irrégulière",
    location: "Yaoundé",
    description:
      "Contrôle de la pompe, vérification des éléments critiques et remise en état pour retrouver un fonctionnement stable sur un véhicule utilitaire lourd.",
    result:
      "Le moteur retrouve une réponse plus régulière et l’exploitation du véhicule peut reprendre avec davantage de sérénité.",
    image: "/images/image-01.jpeg"
  },
  {
    title: "Injecteurs diesel toutes marques contrôlés et repris",
    category: "Injecteurs",
    issue: "Ratés moteur et fumées anormales",
    location: "Douala",
    description:
      "Intervention ciblée sur un ensemble d’injecteurs diesel afin d’améliorer la régularité de pulvérisation et la qualité de combustion.",
    result:
      "Le client retrouve un moteur plus souple, un ralenti plus stable et une conduite plus rassurante.",
    image: "/images/image-03.jpeg"
  },
  {
    title: "Diagnostic injection diesel avant remplacement",
    category: "Diagnostic",
    issue: "Panne incertaine sur circuit d’alimentation",
    location: "Yaoundé",
    description:
      "Analyse approfondie pour isoler la source réelle du défaut et éviter des dépenses inutiles sur des organes non concernés.",
    result:
      "La réparation a pu être orientée plus vite, avec moins de temps perdu et une décision technique plus juste.",
    image: "/images/image-02.jpeg"
  },
  {
    title: "Fourniture de pièces adaptées à une remise en service",
    category: "Pièces",
    issue: "Besoin d’éléments de circuit cohérents avec la réparation",
    location: "Douala",
    description:
      "Sélection des pièces liées au circuit d’injection diesel pour accompagner une intervention et sécuriser le remontage.",
    result:
      "La remise en état a été finalisée avec une solution plus propre et plus cohérente pour le client.",
    image: "/images/image-03.jpeg"
  },
  {
    title: "Appui technique sur une intervention complexe",
    category: "Intervention",
    issue: "Validation technique avant remise en route",
    location: "Yaoundé et Douala",
    description:
      "Accompagnement technique pour vérifier la cohérence du diagnostic, la qualité du remontage et les points critiques avant redémarrage.",
    result:
      "L’intervention s’est déroulée avec plus de maîtrise et un risque réduit de reprise de panne.",
    image: "/images/image-02.jpeg"
  }
] as const;


export const testimonials = [
  {
    title: "Diagnostic clair dès le départ",
    body:
      "Les clients nous sollicitent lorsqu’ils veulent comprendre la vraie cause d’une panne d’injection diesel avant d’engager des frais.",
    audience: "Transporteurs, gestionnaires de flotte et particuliers"
  },
  {
    title: "Intervention sérieuse et rassurante",
    body:
      "La qualité la plus souvent recherchée chez SEF SARL reste la rigueur technique, avec une approche qui va droit au problème et évite l’improvisation.",
    audience: "Ateliers partenaires et propriétaires de véhicules diesel"
  },
  {
    title: "Service pensé pour remettre le véhicule au travail",
    body:
      "Les retours les plus fréquents concernent la stabilité retrouvée du moteur, la confiance dans la réparation et la disponibilité pour le suivi.",
    audience: "Camions, utilitaires, engins et véhicules de tourisme"
  }
] as const;

export const faqs = [
  {
    question: "SEF SARL intervient-elle sur les pompes d’injection de camions et d’engins ?",
    answer:
      "Oui. SEF SARL prend en charge la réparation des pompes d’injection diesel pour poids lourds, camions, utilitaires et engins selon la panne observée et la nature de l’équipement."
  },
  {
    question: "Réparez-vous les injecteurs mécaniques et électroniques toutes marques ?",
    answer:
      "Oui. L’atelier intervient sur les injecteurs diesel mécaniques et électroniques toutes marques avec une approche orientée diagnostic, contrôle et remise en état adaptée à la technologie concernée."
  },
  {
    question: "Proposez-vous un diagnostic injection diesel à Yaoundé et Douala ?",
    answer:
      "Oui. SEF SARL réalise des diagnostics fiables pour orienter correctement la réparation et limiter les remplacements inutiles sur les circuits d’injection diesel à Yaoundé et Douala."
  },
  {
    question: "Peut-on vous contacter pour une panne sur un véhicule de tourisme diesel ?",
    answer:
      "Absolument. Les véhicules de tourisme diesel peuvent présenter des défauts d’injecteurs, de pompe ou d’alimentation. Nous analysons la panne avant de recommander l’intervention la plus appropriée."
  },
  {
    question: "Vendez-vous aussi des pièces liées aux circuits d’injection ?",
    answer:
      "Oui. Lorsque la réparation l’exige, SEF SARL propose des pièces adaptées aux circuits d’injection diesel afin de sécuriser une remise en service cohérente."
  },
  {
    question: "Comment demander un diagnostic ou une intervention ?",
    answer:
      "Le plus rapide est de contacter SEF SARL par WhatsApp ou téléphone. Décrivez la panne, le type de véhicule et votre ville afin d’obtenir un premier échange utile."
  }
] as const;

export const contactFaqs = [
  {
    question: "Quel numéro utiliser pour un premier contact ?",
    answer:
      "Le numéro WhatsApp principal est le +237 656 682 881. Vous pouvez aussi appeler directement l’un des deux contacts affichés sur la page."
  },
  {
    question: "Travaillez-vous uniquement à Yaoundé ?",
    answer:
      "Non. SEF SARL est présente à Yaoundé et à Douala, avec une couverture adaptée aux demandes de clients situés au Cameroun."
  },
  {
    question: "Que faut-il préparer avant de vous écrire ?",
    answer:
      "Indiquez le type de véhicule, les symptômes constatés, votre ville et, si possible, les travaux déjà effectués. Cela permet d’orienter plus vite le diagnostic."
  }
] as const;

export const aboutStory = [
  "SEF SARL est née d’une volonté simple : offrir au marché camerounais une expertise diesel sérieuse, capable de traiter les pannes d’injection avec méthode et responsabilité.",
  "L’entreprise s’adresse aussi bien aux propriétaires de véhicules de tourisme qu’aux transporteurs, exploitants d’engins, ateliers partenaires et gestionnaires de flotte qui ont besoin d’un interlocuteur fiable pour leurs circuits d’injection diesel.",
  "Notre force repose sur la précision du diagnostic, la qualité de l’intervention technique et une culture de service orientée vers la confiance, la clarté et la remise en route durable."
] as const;

export const companyPillars = [
  {
    title: "Mission",
    description:
      "Apporter une réponse technique fiable aux pannes liées aux pompes d’injection, injecteurs et circuits diesel afin de sécuriser la mobilité et l’activité de nos clients."
  },
  {
    title: "Vision",
    description:
      "Faire de SEF SARL une référence crédible de l’injection diesel au Cameroun, reconnue pour son sérieux, sa proximité et la qualité de ses interventions."
  },
  {
    title: "Engagement qualité",
    description:
      "Travailler avec rigueur, expliquer clairement les interventions et privilégier les solutions qui tiennent dans le temps."
  }
] as const;

export const values = [
  "Rigueur technique",
  "Transparence dans le diagnostic",
  "Sens du service",
  "Garantie assurée",
  "Respect du temps client",
  "Fiabilité de l’intervention"
] as const;

export const finalCta = {
  title: "Une panne d’injection diesel ne doit pas immobiliser votre activité plus longtemps.",
  description:
    "Décrivez votre besoin à SEF SARL et obtenez rapidement un échange utile pour organiser un diagnostic, une réparation ou une intervention technique."
} as const;
