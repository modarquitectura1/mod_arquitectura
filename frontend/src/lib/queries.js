import { getPayload } from "payload";
import config from "@payload-config";

const PAGE_SIZE = 6;

const EMPTY_RESPONSE = {
  data: [],
  meta: { pagination: { page: 1, pageSize: PAGE_SIZE, pageCount: 0, total: 0 } },
};

async function findProyectos(options) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({ collection: "proyectos", depth: 1, ...options });

    return {
      data: res.docs,
      meta: {
        pagination: {
          page: res.page,
          pageSize: res.limit,
          pageCount: res.totalPages,
          total: res.totalDocs,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching proyectos:", error);
    return EMPTY_RESPONSE;
  }
}

export async function getPostBySlug(slug) {
  return findProyectos({
    where: {
      _status: { equals: "published" },
      slug: { equals: String(slug).toLowerCase() },
    },
    limit: 1,
  });
}

export async function getListOfPosts(page) {
  return findProyectos({
    where: { _status: { equals: "published" } },
    sort: "-fecha",
    limit: PAGE_SIZE,
    page,
  });
}
