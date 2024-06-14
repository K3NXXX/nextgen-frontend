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
import { useDispatch, useSelector } from 'react-redux'
import logoLine from '../../../../public/dashboard-page/Vector 6.png'
import styles from './DashboardAside.module.scss'
import { PAGES } from '@/constants/pages-url.constants'
import { useState } from 'react'

export function DashboardAside() {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const { sideNavType, UIConfigureColor } = useSelector(
        (state: RootState) => state.globalSlice
    )
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
  

    const handleLinkClick = (url: string) => {
        if (url === PAGES.REGISTER) {
            alert("hello")
        }
    }

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <aside
                className={`${styles.root} ${
                    sideNavType === 'opaque' ? styles.active : ''
                }`}
            >
                <X
                    onClick={() => dispatch(setSideMenuOpened(false))}
                    color="white"
                    size={20}
                    className={styles.close}
                />
                <div className={styles.logo__wrapper}>
                    <Logo />
                    <Image width={220} alt="logo underline" src={logoLine} />
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
                            onClick={() => handleLinkClick(item.url)}
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
        </>
    )
}
