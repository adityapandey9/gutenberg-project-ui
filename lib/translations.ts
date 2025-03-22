type NestedStringObject = {
  [key: string]: string | NestedStringObject;
};

const translations: NestedStringObject = {
  en: {
    back: "Back",
    fiction: "Fiction",
    drama: "Drama",
    humor: "Humor",
    politics: "Politics",
    philosophy: "Philosophy",
    history: "History",
    adventure: "Adventure",
    search_placeholder: "Search",
    no_books_found: "No books found",
    no_viewable_version: "No viewable version available",
  },
  es: {
    back: "Atrás",
    fiction: "Ficción",
    drama: "Drama",
    humor: "Humor",
    politics: "Política",
    philosophy: "Filosofía",
    history: "Historia",
    adventure: "Aventura",
    search_placeholder: "Buscar",
    no_books_found: "No se encontraron libros",
    no_viewable_version: "No hay versión visible disponible",
  },
  fr: {
    back: "Retour",
    fiction: "Fiction",
    drama: "Drame",
    humor: "Humour",
    politics: "Politique",
    philosophy: "Philosophie",
    history: "Histoire",
    adventure: "Aventure",
    search_placeholder: "Rechercher",
    no_books_found: "Aucun livre trouvé",
    no_viewable_version: "Aucune version consultable disponible",
  },
};

export default translations;
