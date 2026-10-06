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
