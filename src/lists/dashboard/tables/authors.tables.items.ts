import { StaticImageData } from 'next/image'
import avatarImage from "@/../public/dashboard-page/tables/avatar.png"

interface IAuthorsTablesItems {
	id: number
	avatar: StaticImageData
	name: string
	email: string
	function: string
	status: string
	employed: string
	action: string
}
export const authorsTablesItems: IAuthorsTablesItems[] = [
	{
		id: 1,
		avatar: avatarImage,
		name: "Laurent Michael",
		email: "laurent@simmmple.com",
		function: "Programmer",
		status: "Online",
		employed: "23/06/2024",
		action: "Edit",
	},
	{
		id: 2,
		avatar: avatarImage,
		name: "Laurent Michael",
		email: "laurent@simmmple.com",
		function: "Programmer",
		status: "Online",
		employed: "23/06/2024",
		action: "Edit",
	},
	{
		id: 3,
		avatar: avatarImage,
		name: "Laurent Michael",
		email: "laurent@simmmple.com",
		function: "Programmer",
		status: "Online",
		employed: "23/06/2024",
		action: "Edit",
	},
	{
		id: 4,
		avatar: avatarImage,
		name: "Laurent Michael",
		email: "laurent@simmmple.com",
		function: "Programmer",
		status: "Online",
		employed: "23/06/2024",
		action: "Edit",
	},
	{
		id: 5,
		avatar: avatarImage,
		name: "Laurent Michael",
		email: "laurent@simmmple.com",
		function: "Programmer",
		status: "Online",
		employed: "23/06/2024",
		action: "Edit",
	},
	{
		id: 6,
		avatar: avatarImage,
		name: "Laurent Michael",
		email: "laurent@simmmple.com",
		function: "Programmer",
		status: "Online",
		employed: "23/06/2024",
		action: "Edit",
	},
]