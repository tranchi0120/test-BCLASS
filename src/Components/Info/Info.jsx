import InfoItem from '@components/Info/InfoItem/InfoItem'
import style from './style.module.scss'
import { dataInfo } from '@utils//constant'

const Info = () => {
    return (
        <div className={style.containerGlobal}>
            {dataInfo.map((info) => (
                <InfoItem
                    key={info.type}
                    type={info.type}
                    title={info.title}
                    content={info.content}
                />
            ))}
        </div>
    )
}

export default Info
