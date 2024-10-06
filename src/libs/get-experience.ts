const STRAPI_URL = import.meta.env.STRAPI_URL
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN

export async function getExperience(queryParams: string = "") {
  const res = await fetch(`${STRAPI_URL}/api/experiences${queryParams}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
  return res
}