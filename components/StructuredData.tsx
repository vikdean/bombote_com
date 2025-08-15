import { WebSite, WithContext, Organization, Person } from "schema-dts";

interface StructuredDataProps {
  type: "website" | "perfume" | "movies" | "series";
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = (): WithContext<WebSite> => {
    const baseOrganization: WithContext<Organization> = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Bombote.com",
      url: "https://bombote.com",
      logo: "https://bombote.com/logo.png",
      sameAs: ["https://bombote.com"],
      description: "Personal reviews and ratings database for perfumes, movies, and TV shows",
    };

    const baseAuthor: WithContext<Person> = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "VA",
      url: "https://bombote.com",
    };

    const baseData: WithContext<WebSite> = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Bombote.com",
      url: "https://bombote.com",
      description: "Comprehensive personal database of perfume, movie, and TV show reviews and ratings",
      author: baseAuthor,
      publisher: baseOrganization,
      inLanguage: "en-US",
      copyrightHolder: baseOrganization,
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    };

    switch (type) {
      case "perfume":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "Bombote.com - Perfume Reviews Database",
          url: "https://bombote.com/perfume",
          description: "Comprehensive database of perfume reviews and ratings featuring in-depth fragrance analysis and recommendations",
          keywords: "perfume reviews, fragrance ratings, cologne reviews, scent analysis, perfume database",
          mainEntity: {
            "@type": "ItemList",
            name: "Perfume Reviews Database",
            description: "Personal perfume and fragrance reviews with detailed ratings and performance analysis",
            numberOfItems: data?.count || 0,
            itemListElement: {
              "@type": "ListItem",
              name: "Fragrance Review Collection",
              description: "Curated collection of perfume reviews with longevity, projection, and value ratings",
            },
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://bombote.com/perfume?search={search_term_string}",
            },
          },
        };

      case "movies":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "Bombote.com - Movie Reviews Database",
          url: "https://bombote.com/movies",
          description: "Comprehensive database of personal movie reviews and ratings with unbiased film opinions",
          keywords: "movie reviews, film ratings, cinema reviews, movie database, honest movie opinions",
          mainEntity: {
            "@type": "ItemList",
            name: "Movie Reviews Database",
            description: "Personal movie reviews with detailed ratings and honest critical analysis",
            numberOfItems: data?.count || 0,
            itemListElement: {
              "@type": "ListItem",
              name: "Film Review Collection",
              description: "Unbiased movie reviews covering classics, blockbusters, and independent films",
            },
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://bombote.com/movies?search={search_term_string}",
            },
          },
        };

      case "series":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "Bombote.com - TV Show Reviews Database",
          url: "https://bombote.com/series",
          description: "Comprehensive database of personal TV show and series reviews and ratings",
          keywords: "tv show reviews, series ratings, television reviews, streaming show reviews, tv database",
          mainEntity: {
            "@type": "ItemList",
            name: "TV Show Reviews Database",
            description: "Personal TV show and series reviews with detailed ratings and episode analysis",
            numberOfItems: data?.count || 0,
            itemListElement: {
              "@type": "ListItem",
              name: "Television Review Collection",
              description: "Honest reviews of TV series covering drama, comedy, and streaming originals",
            },
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://bombote.com/series?search={search_term_string}",
            },
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
