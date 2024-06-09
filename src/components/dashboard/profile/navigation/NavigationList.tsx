"use client"

import { profileNavigation } from '@/lists/profile/profile.navigation.items'
import styles from "./Navigation.module.scss"
import { useState } from 'react'
export function NavigationList() {
	const [active, setActive] = useState(0)

	return (
		<ul className={styles.nav__list}>
				{profileNavigation.map((item, index) => (
					<li onClick={() => setActive(index)} key={item.id} className={active === index ? styles.active : styles.list__item}>
						<item.icon color='white' size={17}/>
						<p>{item.label}</p>
					</li>
				))}
			</ul>
	)
}
