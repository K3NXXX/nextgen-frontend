"use client"
import { Switch } from '@mui/material'
import { IoClose } from 'react-icons/io5'
import styles from './DashboardUIConfigurator.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setIsUIConfigureOpened, setNavBarFixed, setSideNavType, setUIConfigureColor } from '@/redux/slices/globalSlice'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { IUIConfiguratorColors, UIConfiguratorColors } from '@/lists/dashboard/ui.configurator.colors'
import { IUIConfiguratorButtonTypes, UIConfiguratorButtonTypes } from '@/lists/dashboard/ui.types.buttons'
export function DashboardUIConfigurator() {
	const UIConfiguredRef = useRef<HTMLDivElement>(null)
	const dispatch = useDispatch()
	const {isUIConfigureOpened} = useSelector((state: RootState) => state.globalSlice)
	const [activeColor, setActiveColor] = useState(1)
    const [isSwitchOn, setIsSwitchOn] = useState(true)
    const [activeType, setActiveType] = useState(0)

	
	const handleClickOutside = () => {
		dispatch(setIsUIConfigureOpened(false))
	  }
	
	  useOnClickOutside(UIConfiguredRef, handleClickOutside)

	const handleClickColor = (item: IUIConfiguratorColors, index: number) => {
		dispatch(setUIConfigureColor(item.color))
		setActiveColor(index)
	}

    const handleClickButtonType = (item: IUIConfiguratorButtonTypes, index: number) => {
		setActiveType(index)
		dispatch(setSideNavType(item.type))
	}

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked
        setIsSwitchOn(checked)
		dispatch(setNavBarFixed(checked))
	}
 
    return (
        <>
            {isUIConfigureOpened && (
                <div ref={UIConfiguredRef} className={styles.root}>
                    <div className={styles.top}>
                        <div>
                            <h6 className={styles.title}>
                                NextGen Configurator
                            </h6>
                            <p className={styles.addInfo}>
                                See our dashboard options.
                            </p>
                        </div>
                        <div>
                            <IoClose
							onClick={() => dispatch(setIsUIConfigureOpened(false))}
                                className={styles.close}
                                size={25}
                                color="gray"
                            />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.colors}>
                        <p>Sidenav Colors</p>
                        <div className={styles.colors__row}>
							{UIConfiguratorColors.map((item, index) => (
								//@ts-ignore
								 <button onClick={() => handleClickColor(item, index)} className={`${styles[item.cssClass]} ${index === activeColor ? styles.active : ''}`}></button>
							))}
                        </div>
                    </div>
                    <div className={styles.type}>
                        <p>Sidenav Type</p>
                        <span>Choose between 2 different sidenav types.</span>
                        <div className={styles.buttons}>
                            {UIConfiguratorButtonTypes.map((item, index) => (
                                <button className={activeType === index ? styles.active : styles.buttonType} onClick={() => handleClickButtonType(item, index)}>{item.label}</button>

                            ))}
                        </div>
                    </div>
                    <div className={styles.navbar}>
                        <p>Navbar Fixed</p>
                        <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
                    </div>
                </div>
            )}
        </>
    )
}
