const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

export async function getContacts(queryParams: string = "") {
  const res = await fetch(`${STRAPI_URL}/api/contacts${queryParams}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
  return res;
}
