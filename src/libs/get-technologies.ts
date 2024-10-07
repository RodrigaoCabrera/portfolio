const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;
console.log(STRAPI_URL)
export default async function getTechnologies() {
  const response = await fetch(`${STRAPI_URL}/api/technologies`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
  return response;
}