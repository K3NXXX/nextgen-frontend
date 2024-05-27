import { FaBell } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'

interface IOrders {
    id: number
    label: string
    date: string
    icon: IconType
}

export const orders: IOrders[] = [
    {
        id: 1,
        label: '$2400, Design changes',
        date: '22 DEC 7:20 PM',
        icon: FaBell,
    },
	{
        id: 2,
        label: 'New order #4219423',
        date: '21 DEC 11:21 PM',
        icon: FaBell,
    },
	{
        id: 3,
        label: 'Server Payments for April',
        date: '21 DEC 9:28 PM',
        icon: FaBell,
    },
	{
        id: 4,
        label: 'New card added for order #3210145',
        date: '20 DEC 3:52 PM',
        icon: FaBell,
    },
	{
        id: 5,
        label: 'Unlock packages for Development',
        date: '19 DEC 11:35 PM',
        icon: FaBell,
    },
	{
        id: 6,
        label: 'New order #9851258',
        date: '18 DEC 4:41 PM',
        icon: FaBell,
    },
]
