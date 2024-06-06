"use client"

import Image from 'next/image'
import styles from "./Navigation.module.scss"
import avatar from "@/../public/dashboard-page/profile/avatar.png"
import { profileNavigation } from '@/lists/profile/profile.navigation.items'
import { useState } from 'react'

export function Navigation() {
	const [active, setActive] = useState(0)

	return <div className={styles.root}>
		<div className={styles.left}>
			<div className={styles.avatar}>
				<Image src={avatar} alt='avatar'/>
			</div>
			<div className={styles.userInfo}>
				<p className={styles.name}>Mark Johnson</p>
				<p className={styles.email}>mark@simmmpled.com</p>
			</div>
		</div>
		<nav className={styles.right}>
			<ul className={styles.nav__list}>
				{profileNavigation.map((item, index) => (
					<li onClick={() => setActive(index)} key={item.id} className={active === index ? styles.active : styles.list__item}>
						<item.icon color='white' size={17}/>
						<p>{item.label}</p>
					</li>
				))}
			</ul>
		</nav>

	</div>
}
