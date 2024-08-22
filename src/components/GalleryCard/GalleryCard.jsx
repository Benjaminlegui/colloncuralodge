const GalleryCard = ({ index, data: { img }, width }) => {
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
}

export default GalleryCard;