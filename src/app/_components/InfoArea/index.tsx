import React, { Fragment } from 'react'
import { Button } from 'payload/components'

import { Class, Media as media } from '../../../payload/payload-types'
import { fetchDocs } from '../../_api/fetchDocs'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'
import { Media } from '../Media'
import RichText from '../RichText'

import classes from './index.module.scss'

function Classes({ blocks }: { blocks: Class[] }) {
  let data = classes

  return (
    <>
      <h3 className={classes.heading}>Karate Classes</h3>
      <div className={classes.cardGrid}>
        {blocks.map((item: Class, index: number) => {
          let media: media = item.hero.media as media

          return (
            <div key={index} className={classes.cardBox}>
              <div className={classes.boxIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  {/* <!-- Brick shape --> */}
                  <rect x="10" y="40" width="80" height="20" fill="#D4AF37" />
                  <rect x="10" y="60" width="80" height="20" fill="#D4AF37" />

                  {/* <!-- Crack --> */}
                  <path d="M30,50 L70,70" stroke="#8B4513" strokeWidth="5" />
                </svg>
              </div>
              <div className={classes.boxLabel}>{item.title}</div>
              <div className={classes.boxTitle}>A Plus Taylor</div>
              <div className={classes.boxImage}>
                {/* Image */}
                {typeof media === 'object' && (
                  <>
                    <Media resource={media} imgClassName={classes.image} />

                    <RichText content={item.hero.richText} />
                  </>
                )}
                <div className={classes.buttonContainer}>
                  {Array.isArray(item.hero.links) && item.hero.links.length > 0 && (
                    <ul className={classes.links}>
                      {item.hero.links.map(({ link }, i) => {
                        return (
                          <li key={i} className={classes.link}>
                            <CMSLink {...link} className={classes.buttonLabel} />
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Classes
