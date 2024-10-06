const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN
const STRAPI_URL = import.meta.env.STRAPI_URL

export function queryData(url: string) {
  return fetch(`${STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
}