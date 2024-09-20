// eslint-disable-next-line react/prop-types
const Item = ({thumbnail, title, price, area, content, districtName}) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price).replace('₫', '').trim();
    };
    return (
        <>
            <div className="bg-warning-emphasis d-flex gap-3 px-2 py-3 border border-danger-subtle">
                <div className="group-image">
                    <img
                        className="image-item"
                        src={thumbnail}
                        alt="#!"/>
                </div>
                <div>
                    <h4 className="text-danger fs-5 text">{title}</h4>
                    <h6 className="text-success fs-5  fw-bold">{formatPrice(price)} triệu/thang</h6>
                    <div className="d-flex gap-5">
                        <p>diện tích: <span className="fw-bold">{area}m² </span></p>
                        <p>khu vực: <span className="fw-bold text-primary">{districtName}</span></p>
                    </div>
                    <p className="text-secondary">{content}</p>
                </div>
            </div>
        </>
    )
}
export default Item;