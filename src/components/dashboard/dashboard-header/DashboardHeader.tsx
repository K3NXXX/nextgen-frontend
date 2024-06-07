'use client'

import { Heading } from '@/components/ui/dashboard/heading/Heading'
import { PAGES } from '@/constants/pages-url.constants'
import { setSideMenuOpened } from '@/redux/slices/globalSlice'
import { RootState } from '@/redux/store'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'
import { SignOutButton } from '@clerk/nextjs'
import {
    Avatar,
    Divider,
    ListItemIcon,
    MenuItem,
    Menu as MuiMenu,
} from '@mui/material'
import { Bell, LogOut, Menu, Search, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import styles from './DashboardHeader.module.scss'

export function DashboardHeader() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const dispatch = useDispatch()
    const pathname = usePathname()
    const capitalizedPathname = capitalizeFirstLetter(pathname)
    const headerRef = useRef<HTMLHeadElement>(null)
    const { isSideMenuOpened } = useSelector(
        (state: RootState) => state.globalSlice
    )
    const asideMenuRef = useRef<HTMLDivElement>(null)

    const handleMenuClick = () => {
        dispatch(setSideMenuOpened(!isSideMenuOpened))
    }

    useOnClickOutside(asideMenuRef, handleMenuClick)
    useEffect(() => {
        const header = headerRef.current

        const handleScroll = () => {
            if (header) {
                const isAtTop = window.scrollY === 0
                const isSticky =
                    header.getBoundingClientRect().top <= 20 && !isAtTop //
                if (isSticky) {
                    header.classList.add(styles.sticky)
                } else {
                    header.classList.remove(styles.sticky)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header ref={headerRef} className={styles.root}>
            <div className={styles.left__part}>
                <div className={styles.pages}>
                    <div className={styles.pages__top}>
                        <p>
                            <AiFillHome size={15} />
                            <span>/</span>
                            <span> {capitalizedPathname}</span>
                        </p>
                    </div>
                    <Heading title={capitalizedPathname} />
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
                    <Menu
                        onClick={handleMenuClick}
                        color="#718096"
                        size={25}
                        className={styles.phone__menu}
                    />
                    <User onClick={handleClick} color="#718096" />
                    <MuiMenu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                a: {
                                    color: 'rgba(0, 0, 0, 0.87)',
                                },
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },

                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: 113,
                            vertical: 'top',
                        }}
                        anchorOrigin={{
                            horizontal: 'right',
                            vertical: 'bottom',
                        }}
                    >
                        <Link href={PAGES.PROFILE}>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                            </MenuItem>
                        </Link>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <SignOutButton redirectUrl={PAGES.LOGIN}>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <LogOut fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </SignOutButton>
                    </MuiMenu>
                    <Settings color="#718096" />
                    <Bell color="#718096" />
                </div>
            </div>
        </header>
    )
}
