export async function fetchData(url, authToken = process.env.STRAPI_TOKEN) {
  const headers = {
    next: { revalidate: 300 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, headers);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    console.log(data);
    console.log("image", data.data[0].ImagenPrincipal);
    console.log("images", data.data[0].imagenes);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: [],
      meta: { pagination: { page: 1, pageSize: 6, pageCount: 0, total: 0 } },
    };
  }
}
