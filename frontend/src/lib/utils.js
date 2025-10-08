export function getStrapiURL() {
  return process.env.STRAPI_BASE_URL ?? "http://localhost:1337";
}

export function getStrapiMedia(url) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

export function formatDate(lang, dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return lang === "en"
    ? date.toLocaleDateString("en-US", options)
    : date.toLocaleDateString("es", options);
}
