import type { StaticImageData } from 'next/image'
import new1 from '../../../public/home-page/news/new1.png'
import new2 from '../../../public/home-page/news/new2.png'
import new3 from '../../../public/home-page/news/new3.png'

interface IHomeNewsItems {
    id: number
    image: StaticImageData
    title: string
    description: string
    date: string
}

export const homeNewsItems: IHomeNewsItems[] = [
    {
        id: 1,
        image: new1,
        title: 'Product Mail is taking on Gmail by betting on privacy',
        description:
            'Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
        date: 'February 8, 2023',
    },
    {
        id: 2,
        image: new2,
        title: 'Wants You To Sign Out Of Google Workspace Forever',
        description:
            'Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
        date: 'February 8, 2023',
    },
    {
        id: 3,
        image: new3,
        title: 'The Best Email Encryption Services for 2023',
        description:
            'Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
        date: 'February 8, 2023',
    },
]
