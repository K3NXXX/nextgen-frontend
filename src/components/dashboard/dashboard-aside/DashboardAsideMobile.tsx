'use client'

import { Logo } from '@/components/ui/logo/Logo'
import {
    dashboardMenuAccountPages,
    dashboardMenuMainPages,
} from '@/lists/dashboard/dashboard.menu.items'
import { setSideMenuOpened } from '@/redux/slices/globalSlice'
import { RootState } from '@/redux/store'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import logoLine from '../../../../public/dashboard-page/Vector 6.png'
import styles from './DashboardAsideMobile.module.scss'

export function DashboardAsideMobile() {
    const asideMenuRef = useRef(null)
    const pathname = usePathname()
    const dispatch = useDispatch()
    const {UIConfigureColor} = useSelector((state: RootState) => state.globalSlice)
    const { isSideMenuOpened } = useSelector(
        (state: RootState) => state.globalSlice
    )
    const handleClickOutside = () => {
        dispatch(setSideMenuOpened(false))
    }

    useOnClickOutside(asideMenuRef, handleClickOutside)

    return (
        <>
            {isSideMenuOpened && (
                <aside ref={asideMenuRef} className={styles.root}>
                    <X
                        onClick={() => dispatch(setSideMenuOpened(false))}
                        color="white"
                        size={20}
                        className={styles.close}
                    />
                    <div className={styles.logo__wrapper}>
                        <Logo />
                        <Image
                            width={220}
                            alt="logo underline"
                            src={logoLine}
                        />
                    </div>
                    <nav className={styles.menu}>
                        {dashboardMenuMainPages.map((item) => (
                            <Link
                                href={item.url}
                                key={item.id}
                                className={
                                    pathname === item.url
                                        ? styles.active
                                        : styles.menu__item
                                }
                            >
                                <div>
                                    <item.icon
                                        className={styles.menu__icon}
                                        style={
                                            pathname === item.url
                                                ? { background: UIConfigureColor }
                                                : { background: '#1A1F37' }
                                        }
                                        color={
                                            pathname === item.url
                                                ? 'white'
                                                : UIConfigureColor
                                        }
                                        size={33}
                                    />
                                </div>
                                <p>{item.label}</p>
                            </Link>
                        ))}
                        <p className={styles.accountPages}>ACCOUNT PAGES</p>
                        {dashboardMenuAccountPages.map((item) => (
                            <Link
                                href={item.url}
                                key={item.id}
                                className={
                                    pathname === item.url
                                        ? styles.active
                                        : styles.menu__item
                                }
                            >
                                <div>
                                    <item.icon
                                        className={styles.menu__icon}
                                        style={
                                            pathname === item.url
                                                ? { background: UIConfigureColor }
                                                : { background: '#1A1F37' }
                                        }
                                        color={
                                            pathname === item.url
                                                ? 'white'
                                                : UIConfigureColor
                                        }
                                        size={33}
                                    />
                                </div>
                                <p>{item.label}</p>
                            </Link>
                        ))}
                    </nav>
                </aside>
            )}
        </>
    )
}
