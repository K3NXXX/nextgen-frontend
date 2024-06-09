"use client"

import { IoMdSettings } from "react-icons/io";
import styles from "./DashboardSettings.module.scss"
import { useDispatch } from 'react-redux'
import { setIsUIConfigureOpened } from '@/redux/slices/globalSlice'

export function DashboardSetting() {
	
	const dispatch = useDispatch()
	return <div onClick={() => dispatch(setIsUIConfigureOpened(true))} className={styles.root} >
		<IoMdSettings  color='white' size={29} />
	</div>
}
