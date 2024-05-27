import type { IconType } from 'react-icons/lib'
import person from "../../../../public/dashboard-page/main/person.png"
import type { StaticImageData } from 'next/image'
import { FaSpotify } from 'react-icons/fa'

interface IProjects {
	id : number
	label: string
	budget: string
	progress: number
	members: StaticImageData
	icon: IconType
}

export const projects: IProjects[] = [
	{
		id : 1,
		icon: FaSpotify,
		label: "Chakra Soft UI Version",
		members: person,
		budget: "$14,000",
		progress: 60,
	},
	{
		id : 2,
		icon: FaSpotify,
		label: "Add Progress Track",
		members: person,
		budget: "$3,000",
		progress: 10,
	},
	{
		id : 3,
		icon: FaSpotify,
		label: "Fix Platform Errors",
		members: person,
		budget: "Not set",
		progress: 100,
	},
	{
		id : 4,
		icon: FaSpotify,
		label: "Launch our Mobile App",
		members: person,
		budget: "$32,000",
		progress: 100,
	},
	{
		id : 5,
		icon: FaSpotify,
		label: "Add the New Pricing Page",
		members: person,
		budget: "$400",
		progress: 25,
	},
	{
		id : 6,
		icon: FaSpotify,
		label: "Redesign New Online Shop",
		members: person,
		budget: "$7,600",
		progress: 40,
	},
]