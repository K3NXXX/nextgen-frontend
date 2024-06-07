import { PAGES } from '@/constants/pages-url.constants'
import { SignOutButton } from '@clerk/nextjs'
import {
	Avatar,
	Divider,
	Link,
	ListItemIcon,
	MenuItem,
	Menu as MuiMenu,
} from '@mui/material'
import { LogOut, Settings } from 'lucide-react'
import { useState } from 'react'

export function ProfileMenu() {
	const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
	const handleClose = () => {
		setAnchorEl(null);
	  };
       
	return (
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
	)

}
