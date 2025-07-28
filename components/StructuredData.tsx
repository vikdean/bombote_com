import { WebSite, WithContext } from "schema-dts";

interface StructuredDataProps {
  type: "website" | "perfume" | "movies" | "series";
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = (): WithContext<WebSite> => {
    const baseData: WithContext<WebSite> = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Bombote.com",
      url: "https://bombote.com",
      description: "Comprehensive personal database of perfume, movie, and TV show reviews and ratings",
      author: {
        "@type": "Person",
        name: "Bombote",
      },
      publisher: {
        "@type": "Organization",
        name: "Bombote.com",
        url: "https://bombote.com",
      },
    };

    switch (type) {
      case "perfume":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "Bombote.com - Perfume Reviews Database",
          url: "https://bombote.com/perfume",
          description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations",
          mainEntity: {
            "@type": "ItemList",
            name: "Perfume Reviews",
            description: "Personal perfume and fragrance reviews with detailed ratings",
            numberOfItems: data?.count || 0,
          },
        };

      case "movies":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "Bombote.com - Movie Reviews Database",
          url: "https://bombote.com/movies",
          description: "Comprehensive database of personal movie reviews and ratings with unbiased film opinions",
          mainEntity: {
            "@type": "ItemList",
            name: "Movie Reviews",
            description: "Personal movie reviews with detailed ratings and honest opinions",
            numberOfItems: data?.count || 0,
          },
        };

      case "series":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "Bombote.com - TV Show Reviews Database",
          url: "https://bombote.com/series",
          description: "Comprehensive database of personal TV show and series reviews and ratings",
          mainEntity: {
            "@type": "ItemList",
            name: "TV Show Reviews",
            description: "Personal TV show and series reviews with detailed ratings",
            numberOfItems: data?.count || 0,
          },
        };

      default:
        return baseData;
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
