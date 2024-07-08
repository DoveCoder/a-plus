export const CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const QUERY_CATEGORIES = `
  query Categories {
    Categories(limit: 100) {
      docs {
        id
        title
      }
    }
  }
`
