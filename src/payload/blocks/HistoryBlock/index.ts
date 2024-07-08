import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const historyBlock: Block = {
  slug: 'historyBlock',
  fields: [
    invertBackground,
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    richText(),
  ],
}
