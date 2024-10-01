/* eslint-disable react/prop-types */
const Item = ({ thumbnail, title, price, area, content, districtName }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
            .format(price)
            .replace('₫', '')
            .trim()
    }
    return (
        <>
            <div className='flex gap-5 px-2 py-3 border border-red-500 bg-orange-100 '>
                <div className='max-w-[240px] max-h-[240px] object-cover'>
                    <img className='w-full h-full' src={thumbnail} alt='#!' />
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-red-600 text-[22px]'>{title}</h1>
                    <h6 className='text-green-600 text-[20px] font-bold  fw-bold'>
                        {formatPrice(price)} triệu/tháng
                    </h6>
                    <div className='flex gap-7'>
                        <p>
                            diện tích:{' '}
                            <span className='font-bold text-gray-800'>
                                {area}m²{' '}
                            </span>
                        </p>
                        <p>
                            khu vực:{' '}
                            <span className='font-bold text-blue-800'>
                                {districtName}
                            </span>
                        </p>
                    </div>
                    <p className='text-secondary'>
                        Địa Chỉ: <span>{content}</span>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Item
