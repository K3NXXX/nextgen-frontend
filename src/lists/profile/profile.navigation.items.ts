import { IconType } from 'react-icons/lib'
import { GiCube } from "react-icons/gi";
import { FaFile } from 'react-icons/fa'
import { HiMiniWrench } from "react-icons/hi2";

interface IProfileNavigation {
	id: number
	label: string
	icon: IconType
}
export const profileNavigation: IProfileNavigation[] = [
	{
		id: 1,
		label: "Overview",
		icon: GiCube
	},
	{
		id: 2,
		label: "Teams",
		icon: FaFile
	},
	{
		id: 3,
		label: "Projects",
		icon: HiMiniWrench
	},
]