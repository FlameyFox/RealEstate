export default function (context) {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => process.env.CMS_DATOCMS_API_TOKEN,
  }
}
