import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import styles from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'historyBlock' }>

export const HistoryBlock: React.FC<Props> = props => {
  const { richText, media, heading } = props

  return (
    <Gutter>
      <div className={styles.info}>
        <div className={styles.historyTitle}>
          <h4 className={styles.heading}>{heading}</h4>
        </div>
        <div className={styles.history}>
          <Media resource={media} imgClassName={styles.historyImg} />
          <RichText content={richText} className={styles.historyDist} />
        </div>
      </div>
    </Gutter>
  )
}
