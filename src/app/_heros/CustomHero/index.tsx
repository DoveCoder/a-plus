import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  return (
    <div className={classes.hero_wrapper}>
      <section className={classes.hero}>
        <div className={classes.bg}>
          {typeof media === 'object' && (
            <div className={classes.picture}>
              <Media resource={media} imgClassName={classes.image} priority />
            </div>
          )}
        </div>
        <div className={classes.cnt}>
          <RichText className={classes.text} content={richText} />
          {typeof media === 'object' && (
            <RichText content={media.caption} className={classes.caption} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>
      <div className={classes.bg_style} />
      <div className={classes.divider}>
        <p className={classes.mid_engage}>
          "Discover the astonishing power of Martial Arts: What makes them so incredibly effective?"
        </p>
      </div>
    </div>
  )
}
