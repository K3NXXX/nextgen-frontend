import type { IconType } from 'react-icons/lib'
import { IoWallet } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

interface IGeneralStatistics {
	id :number
	label: string,
	amount : string,
	icon: IconType
}

export const generalStatistics: IGeneralStatistics[] = [
	{
		id: 1,
		label: "Today’s Money",
		amount : "$53,000",
		icon: IoWallet
	},
	{
		id: 2,
		label: "Today’s Users",
		amount : "2,300",
		icon : AiOutlineGlobal
	},
	{
		id: 3,
		label: "New Clients",
		amount : "3,454",
		icon: FaFileAlt
	},
	{
		id: 4,
		label: "Total Sales",
		amount : "$173,000",
		icon: FaShoppingCart
	}
	
]