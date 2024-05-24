'use client'

import { HomeHeader } from '@/components/home/home-header/HomeHeader'
import { PAGES } from '@/constants/pages-url.constants'
import { homeFeaturesItems } from '@/lists/home/home.features.items'
import { homeNewsItems } from '@/lists/home/home.news.items'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import introMain from '../../public/home-page/intro-main.webp'
import styles from './Home.module.scss'
export function Home() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <HomeHeader />
                <main className={styles.main}>
                    <div className={styles.intro}>
                        <h1 className={styles.title}>
                            Monitor your business on real-time dashboard
                        </h1>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Elementum nisi aliquet volutpat pellentesque
                            volutpat est. Sapien in etiam vitae nibh nunc mattis
                            imperdiet sed nullam.
                        </p>
                        <Link href={PAGES.REGISTER}>Try for free</Link>
                        <Image width={800} src={introMain} alt="intro image" />
                        <div className={styles.leftGradient}></div>
                        <div className={styles.rightGradient}></div>
                    </div>
                    <div id="features" className={styles.features}>
                        <div className={styles.features__top}>
                            <strong>
                                Powerful features to help you manage all your
                                leads
                            </strong>
                            <p className={styles.general__info}>
                                Apsum dolor sit amet consectetur. Aliquam
                                elementum elementum in ultrices. Dui maecenas ut
                                eros turpis ultrices metus morbi aliquet vel.
                            </p>
                        </div>
                        <div className={styles.features__list}>
                            {homeFeaturesItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.features__list_item}
                                >
                                    <Image src={item.icon} alt="feature icon" />
                                    <strong>{item.feature}</strong>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="news" className={styles.news}>
                        <div className={styles.news__top}>
                            <strong>Product in the news</strong>
                            <div>
                                <button>Browse all news</button>
                            </div>
                        </div>
                        <div className={styles.news__list}>
                            {homeNewsItems.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.news__list_item}
                                >
                                    <Image
                                        quality={100}
                                        src={item.image}
                                        alt="news image"
                                    />
                                    <strong>{item.title}</strong>
                                    <p className={styles.description}>
                                        {item.description}
                                    </p>
                                    <div className={styles.item__bottom}>
                                        <p>{item.date}</p>
                                        <div>
                                            <p>Read more</p>
                                            <MoveRight color="white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <p>
                        Copyright © Product | Created by{' '}
                        <span>Volodymyr Andrushevskyi</span> | Bleach, One Piece
                        & Dotka 2 top
                    </p>
                </footer>
            </div>
        </div>
    )
}
