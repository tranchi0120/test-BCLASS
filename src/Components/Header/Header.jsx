import BoxIcon from '@components/Header/BoxIcon/BoxIcon'
import Menu from '@components/Header/Menu/Menu'
import Logo from '@images/Logo-retina.png'
import reloadIcon from '@icons/svgs/reloadIcon.svg'
import heartIcon from '@icons/svgs/heartIcon.svg'
import cartIcon from '@icons/svgs/cartIcon.svg'

import style from './Styles.module.scss'
import { dataBoxIcon, dataMenu } from '@utils//constant'

function Header() {
    return (
        <div className={style.containerHeader}>
            <div className={style.heaedrMain}>
                <div className={style.containerMain}>
                    <div className={style.groupIcon}>
                        {dataBoxIcon.map((item) => (
                            <BoxIcon
                                key={item.type}
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={style.menu}>
                        <div className={style.menuContext}>
                            {dataMenu.slice(0, 3).map((item) => (
                                <Menu
                                    key={item.id}
                                    context={item.context}
                                    href={item.href}
                                />
                            ))}
                        </div>
                        <div>
                            <img className={style.logo} src={Logo} alt='#!' />
                        </div>
                        <div className={style.containerGroupIcon}>
                            <div className={style.menuContext}>
                                {dataMenu
                                    .slice(4, dataMenu.length)
                                    .map((item) => (
                                        <Menu
                                            key={item.id}
                                            context={item.context}
                                            href={item.href}
                                        />
                                    ))}
                            </div>
                            <div className={style.containerBoxIcon}>
                                <a href='#!'>
                                    <img src={reloadIcon} alt='#!' />
                                </a>
                                <a href='#!'>
                                    <img src={heartIcon} alt='#!' />
                                </a>
                                <a href='#!'>
                                    <img src={cartIcon} alt='#!' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
