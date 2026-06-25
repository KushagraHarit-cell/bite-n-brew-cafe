import { SITE } from "./constants";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    alternateName: SITE.hindiName,
    description: SITE.description,
    image: `${SITE.url}/og-image.jpg`,
    url: SITE.url,
    telephone: `+91${SITE.phone}`,
    priceRange: "₹₹",
    servesCuisine: ["Italian", "Cafe", "Coffee", "Pizza"],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.689,
      longitude: 77.289,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviews,
      bestRating: 5,
    },
    hasMenu: `${SITE.url}/#menu`,
    acceptsReservations: false,
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: `+91${SITE.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.full,
      addressLocality: "Shahdara",
      addressRegion: "Delhi",
      postalCode: SITE.address.postalCode,
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 10:00-22:00",
    priceRange: "₹200-₹400",
  };
}
