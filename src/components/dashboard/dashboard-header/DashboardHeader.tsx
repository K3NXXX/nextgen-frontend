'use client'

import { Heading } from '@/components/ui/dashboard/heading/Heading'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'
import { Bell, Menu, Search, Settings, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai'
import styles from './DashboardHeader.module.scss'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSideMenuOpened } from '@/redux/slices/globalSlice'
import { RootState } from '@/redux/store'
import { useOnClickOutside } from 'usehooks-ts'

export function DashboardHeader() {
    const dispatch = useDispatch()
    const pathname = usePathname()
    const capitalizedPathname = capitalizeFirstLetter(pathname)
    const headerRef = useRef<HTMLHeadElement>(null);
    const {isSideMenuOpened} = useSelector((state:RootState) => state.globalSlice)
    const asideMenuRef = useRef<HTMLDivElement>(null)

    const handleMenuClick = () => {
        dispatch(setSideMenuOpened(!isSideMenuOpened))
    }

    useOnClickOutside(asideMenuRef, handleMenuClick)
    useEffect(() => {
        const header = headerRef.current;

        const handleScroll = () => {
            if (header) {
                const isAtTop = window.scrollY === 0; 
                const isSticky = header.getBoundingClientRect().top <= 20 && !isAtTop; // 
                if (isSticky) {
                    header.classList.add(styles.sticky);
                } else {
                    header.classList.remove(styles.sticky);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header  ref={headerRef} className={styles.root}>
            <div  className={styles.left__part}>
                <div className={styles.pages}>
                    <div className={styles.pages__top}>
                        <p>
                            <AiFillHome size={15} />
                            <span>/</span>
                            <span> {capitalizedPathname}</span>
                        </p>
                    </div>
                    <Heading title="Dashboard" />
                </div>
            </div>
            <div className={styles.right__part}>
                <div className={styles.input__wrapper}>
                    <Search
                        className={styles.search}
                        color="#718096"
                        width={20}
                    />
                    <input placeholder="Type here..." type="text" />
                </div>
                <div className={styles.icons}>
                   <Menu onClick={handleMenuClick} color="#718096" size={25} className={styles.phone__menu} />    
                    <User color="#718096" />
                    <Settings color="#718096" />
                    <Bell color="#718096" />

                </div>
            </div>
        </header>
    )
}
