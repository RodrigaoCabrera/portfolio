import { queryData } from './strapi'

const STRAPI_URL = import.meta.env.STRAPI_URL

export async function getDevProfile(queryParams: string = "") {
  const res = await queryData(`dev-profile${queryParams}`)

  let pdf = ""
  if(res.data?.curriculum_vitae) {
    pdf = `${STRAPI_URL}${res.data?.curriculum_vitae.url}`
  }

  let avatar = ""
  if(res.data?.avatar) {
    avatar = `${STRAPI_URL}${res.data?.avatar.url}`
  }

  return { ...res, pdf, avatar}
}