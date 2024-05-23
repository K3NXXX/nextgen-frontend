import { PAGES } from '@/constants/pages-url.constants'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo.svg'

export function Logo() {
    return (
        <Link href={PAGES.HOME}>
            <Image width={140} height={25} alt="logo" src={logo} />
        </Link>
    )
}
