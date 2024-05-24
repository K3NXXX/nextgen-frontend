import { PAGES } from '@/constants/pages-url.constants'
import { CircleUserRound, KeyRound, Home } from 'lucide-react'
import { IAuthHeaderMenu } from './types'
export const authHeaderMenu: IAuthHeaderMenu[] = [
    {
        id: 1,
        icon: Home,
        name: "HOME",
        url: PAGES.HOME,
    },
    {
        id: 2,
        icon: CircleUserRound,
        name: "SIGN UP",
        url: PAGES.REGISTER,
    },
    {
        id: 3,
        icon: KeyRound,
        name: "SIGN IN",
        url: PAGES.LOGIN,
    },
]
