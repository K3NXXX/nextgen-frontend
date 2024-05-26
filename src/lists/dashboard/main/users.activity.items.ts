import { FaShoppingCart } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { IoWallet } from 'react-icons/io5'
import type { IconType } from 'react-icons/lib'
import { HiMiniWrench } from "react-icons/hi2";


interface IUserActivity {
	id: number
	icon: IconType
	label: string,
	amount: string,
	progress: number
}

export const userActivity: IUserActivity[] = [
	{
		id: 1,
		icon: IoWallet,
		label: "Users",
		amount: "32,984",
		progress: 30
	},
	{
		id: 2,
		icon: IoIosRocket,
		label: "Clicks",
		amount: "2,43m",
		progress: 78
	},
	{
		id: 3,
		icon: FaShoppingCart,
		label: "Sales",
		amount: "2400$",
		progress: 45
	},
	{
		id: 4,
		icon: HiMiniWrench,
		label: "Items",
		amount: "320",
		progress: 95
	},
]