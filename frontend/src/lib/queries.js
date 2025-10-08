import { getStrapiURL } from "./utils";
import qs from "qs";

export async function getPostBySlug(slug) {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/proyectos";
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);
  url.search = qs.stringify({
    status: "published",
    populate: "*",
    filters: {
      slug: { $eqi: slug },
    },
  });

  const data = await fetchData(url.href);
  return data;
}

export async function getListOfPosts(page) {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/proyectos";
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);
  url.search = qs.stringify({
    status: "published",
    // populate: {
    //   cover: {
    //     fields: ["url", "alternativeText", "name"],
    //   },
    // },
    populate: "*",
    pagination: {
      // For test purposes use 1:
      pageSize: 6,
      page: page,
    },
  });
  const data = await fetchData(url.href);

  return data;
}
