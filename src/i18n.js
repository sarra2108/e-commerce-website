import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "OR":"OR",
        "home": "Home",
        "products": "Products",
        "contact_us": "Contact us",
        "login": "Log in",
        "signup" : "Sign up",
        "reviews": "Reviews",
      "reviews_on": "Reviews on",
      "review_1": "Review 1",
      "review_2": "Review 2",
      "review_3": "Review 3",
      "review_1_text": "The craftsmanship is outstanding, and it exudes a beautiful, traditional charm.",
      "review_2_text": "Its beautiful design and authentic feel make it a cherished item in my collection.",
      "review_3_text": "An authentic piece that seamlessly blends traditional and modern aesthetics.",
      "rating": "Rating",
      "overall_rating": "Overall rating",
      "most_frequently_used_words": "Most frequently used words in reviews",
      "description": "Description",
      "artisan": "Artisan",
      "processes_behind_the_product": "Processes Behind the Product",
      "clay_preparation": "Clay Preparation: High-quality clay is cleaned and kneaded.",
      "shaping": "Shaping: Clay is shaped by hand or potter's wheel.",
      "drying": "Drying: The shaped clay dries slowly to prevent cracking.",
      "painting": "Painting: Traditional Tunisian motifs are hand-painted.",
      "quality_check": "Quality Check: Each vase is inspected for imperfections before being signed and sold.",
      "add_to_cart": "ADD TO CART",
      "contact_artisan": "CONTACT ARTISAN",
      "exquisite_description": "This exquisite hand-painted ceramic vase is a masterpiece of Tunisian craftsmanship, perfect for holding flowers and adding elegance to any room.",
      "artisan_description": "{{artisan}} is a renowned Tunisian artisan with over 20 years of experience, dedicated to preserving Tunisia's cultural heritage through beautiful, functional art.",
      "beautiful": "beautiful",
      "traditional": "traditional",
      "authentic": "authentic",
      "product_1_description": "Hand-painted vase for flowers",
      "product_2_description": "Flower pot cover vase",
      "product_3_description": "Ceramic Pot",
      "product_4_description": "3 Olive wood Bowls",
      "product_5_description": "Hand-Painted Serving Bowls",
      "product_6_description": "Decorative Serving Ceramic Oval Bow",
      "product_7_description": "2 Tunisian Knit Bags",
      "product_8_description": "Tunisian Crochet Bag Pattern with a button",
      "product_9_description": "Tunisian Crochet Bag Pattern",
      "product_10_description": "Straw Basket With Leather Handle",
      "product_11_description": "Straw basket with Braided Handles",
      "product_12_description": "Hand woven straw basket",
      "customize_title": "You can also customize the product",
      "choose_color_vase": "Choose color of the vase:",
      "choose_color_pattern": "Choose color of pattern:",
      "add_personalized_message": "Add a personalized message:",
      "choose_shape": "Choose Shape:",
      "choose_dimension": "Choose Dimension:",
      "choose_color_bowl": "Choose color of the bowl:",
      "choose_color_pattern_4": "Choose color of pattern (up to 4 colors, separated by commas):",
      "choose_two_colors": "Choose two colors (one for each bag):",
      "choose_color": "Choose color:",
      "submit": "Submit",
      "no_product_found": "No product found or customization not available for this product",
      "customize_title": "You can also customize the product",
      "choose_color_vase": "Choose color of the vase:",
      "choose_color_pattern": "Choose color of pattern:",
      "add_personalized_message": "Add a personalized message:",
      "choose_shape": "Choose shape:",
      "choose_dimension": "Choose dimension:",
      "choose_color_bowl": "Choose color of the bowl:",
      "choose_color_pattern_4": "Choose color of pattern (up to 4 colors, separated by commas):",
      "choose_two_colors": "Choose two colors (one for each bag):",
      "choose_color": "Choose color:",
      "submit": "Submit",
      "no_product_found": "No product found or customization not available for this product",
      "placeholder_white": "Exp: White",
      "placeholder_blue": "Exp: Blue",
      "placeholder_happy_birthday": "Exp: Happy Birthday",
      "placeholder_colors": "Exp: Blue, Red, Green, Light Blue",
      "placeholder_brown_green": "Exp: Brown, Green",
      "placeholder_green": "Exp: Green",
      "shape_mason_jar": "Mason Jar",
      "shape_milk_bottle": "Milk Bottle",
      "shape_rustic_vase": "Rustic Vase",
      "shape_same_as_in_picture": "Same as in picture",
      "shape_square": "Square",
      "shape_round": "Round",
      "shape_rectangular": "Rectangular",
      "dimension_small__15cm": "Small : 15cm",
      "dimension_meduim__20cm": "Medium : 20cm",
      "dimension_big__25cm": "Big : 25cm",
      "dimension_small__1m": "Small : 1m",
      "dimension_meduim__1_5m": "Medium : 1.5m",
      "dimension_big__2m": "Big : 2m",
      "those_who_liked_this_product_also_liked" :"Those who liked this product, also liked" 
    }
  },
  fr: {
    translation: {
      "OR":"OU",
        "home": "Accueil",
        "products": "Produits",
        "contact_us": "Contactez-nous",
        "login": "S'inscrire",
        "signup" : "Se connecter",
        "reviews": "Avis",
      "reviews_on": "Avis sur",
      "review_1": "Avis 1",
      "review_2": "Avis 2",
      "review_3": "Avis 3",
      "review_1_text": "La fabrication est exceptionnelle et elle dégage un charme traditionnel et magnifique.",
      "review_2_text": "Son design magnifique et son authenticité en font un objet précieux dans ma collection.",
      "review_3_text": "Une pièce authentique qui mélange harmonieusement esthétique traditionnelle et moderne.",
      "rating": "Note",
      "overall_rating": "Note globale",
      "most_frequently_used_words": "Mots les plus fréquemment utilisés dans les avis",
      "description": "Description",
      "artisan": "Artisan",
      "processes_behind_the_product": "Processus Derrière le Produit",
      "clay_preparation": "Préparation de l'argile: L'argile de haute qualité est nettoyée et pétrie.",
      "shaping": "Moulage: L'argile est façonnée à la main ou au tour de potier.",
      "drying": "Séchage: L'argile façonnée sèche lentement pour éviter les fissures.",
      "painting": "Peinture: Les motifs traditionnels tunisiens sont peints à la main.",
      "quality_check": "Contrôle de qualité: Chaque vase est inspecté pour détecter les imperfections avant d'être signé et vendu.",
      "add_to_cart": "AJOUTER AU PANIER",
      "contact_artisan": "CONTACTER L'ARTISAN",
      "exquisite_description": "Ce vase en céramique peint à la main est un chef-d'œuvre de l'artisanat tunisien, parfait pour contenir des fleurs et ajouter de l'élégance à n'importe quelle pièce.",
      "artisan_description": "{{artisan}} est un artisan tunisien renommé avec plus de 20 ans d'expérience, dédié à la préservation du patrimoine culturel tunisien à travers un art beau et fonctionnel.",
      "beautiful": "beau",
      "traditional": "traditionnel",
      "authentic": "authentique",
      "product_1_description": "Vase peint à la main pour fleurs",
      "product_2_description": "Cache-pot pour fleurs",
      "product_3_description": "Pot en céramique",
      "product_4_description": "3 Bols en bois d'olivier",
      "product_5_description": "Bols de service peints à la main",
      "product_6_description": "Bol ovale en céramique décoratif",
      "product_7_description": "2 Sacs en tricot tunisien",
      "product_8_description": "Modèle de sac au crochet tunisien avec un bouton",
      "product_9_description": "Modèle de sac au crochet tunisien",
      "product_10_description": "Panier en paille avec poignée en cuir",
      "product_11_description": "Panier en paille avec poignées tressées",
      "product_12_description": "Panier en paille tissé à la main",
      "customize_title": "Vous pouvez également personnaliser le produit",
      "choose_color_vase": "Choisissez la couleur du vase:",
      "choose_color_pattern": "Choisissez la couleur du motif:",
      "add_personalized_message": "Ajoutez un message personnalisé:",
      "choose_shape": "Choisissez la forme:",
      "choose_dimension": "Choisissez la dimension:",
      "choose_color_bowl": "Choisissez la couleur du bol:",
      "choose_color_pattern_4": "Choisissez la couleur du motif (jusqu'à 4 couleurs, séparées par des virgules):",
      "choose_two_colors": "Choisissez deux couleurs (une pour chaque sac):",
      "choose_color": "Choisissez la couleur:",
      "submit": "Soumettre",
      "no_product_found": "Aucun produit trouvé ou personnalisation non disponible pour ce produit",
      "customize_title": "Vous pouvez également personnaliser le produit",
      "choose_color_vase": "Choisissez la couleur du vase:",
      "choose_color_pattern": "Choisissez la couleur du motif:",
      "add_personalized_message": "Ajoutez un message personnalisé:",
      "choose_shape": "Choisissez la forme:",
      "choose_dimension": "Choisissez la dimension:",
      "choose_color_bowl": "Choisissez la couleur du bol:",
      "choose_color_pattern_4": "Choisissez la couleur du motif (jusqu'à 4 couleurs, séparées par des virgules):",
      "choose_two_colors": "Choisissez deux couleurs (une pour chaque sac):",
      "choose_color": "Choisissez la couleur:",
      "submit": "Soumettre",
      "no_product_found": "Aucun produit trouvé ou personnalisation non disponible pour ce produit",
      "placeholder_white": "Ex: Blanc",
      "placeholder_blue": "Ex: Bleu",
      "placeholder_happy_birthday": "Ex: Joyeux Anniversaire",
      "placeholder_colors": "Ex: Bleu, Rouge, Vert, Bleu Clair",
      "placeholder_brown_green": "Ex: Marron, Vert",
      "placeholder_green": "Ex: Vert",
      "shape_mason_jar": "Bocal Mason",
      "shape_milk_bottle": "Bouteille de lait",
      "shape_rustic_vase": "Vase rustique",
      "shape_same_as_in_picture": "Comme sur la photo",
      "shape_square": "Carré",
      "shape_round": "Rond",
      "shape_rectangular": "Rectangulaire",
      "dimension_small__15cm": "Petit : 15cm",
      "dimension_meduim__20cm": "Moyen : 20cm",
      "dimension_big__25cm": "Grand : 25cm",
      "dimension_small__1m": "Petit : 1m",
      "dimension_meduim__1_5m": "Moyen : 1.5m",
      "dimension_big__2m": "Grand : 2m",
      "those_who_liked_this_product_also_liked" :"Ceux qui ont aimé ce produit, ont aussi aimé" 
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;