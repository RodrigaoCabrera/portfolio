const STRAPI_URL = import.meta.env.STRAPI_URL
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN

export default async function getProjects(queryParams: string = "") {
  const res = await fetch(`${STRAPI_URL}/api/projects${queryParams}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
  return res
}