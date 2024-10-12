const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

export async function getProjects(queryParams: string = "") {
  const res = await fetch(`${STRAPI_URL}/api/projects${queryParams}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());

  // delay to response
  await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log("test");
  return res;
}

export async function getProjectTypes() {
  const res = await fetch(`${STRAPI_URL}/api/projects?fields=type`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());

  const tabNames = res.data.map(({ type }) => type);

  return tabNames;
}
