import { LINK_FIELDS } from './link'
import { MEDIA } from './media'

export const CLASSES = `
query Classes {
  Classes(limit: 100) {
    docs {
      id
      title
      hero {
        richText
        ${MEDIA}
        links {
          link ${LINK_FIELDS()}
        }
      }
    }
  }
}
`
