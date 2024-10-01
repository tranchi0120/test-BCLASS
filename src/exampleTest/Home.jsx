import { useContext } from 'react'
import { Spin } from 'antd'
import FormInput from '@/exampleTest/Form/FormInput.jsx'
import ListItem from '@/exampleTest/ListItem.jsx'
import ContextData from '@/exampleTest/ConText/context.js'

const Home = () => {
    const { loading, filteredData } = useContext(ContextData)

    return (
        <div>
            <FormInput />
            {loading ? (
                <Spin
                    tip='Loading'
                    type='info'
                    size='large'
                    className='mt-6'
                    fullscreen
                />
            ) : (
                <div>
                    <ListItem />
                    {filteredData.length === 0 && (
                        <div>Không tìm thấy dữ liệu động dữ liệu</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Home
