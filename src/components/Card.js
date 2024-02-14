import { HERO_IMAGE, CLOUDINARY_CDN } from "../utils.js/image-cdn";

const Card = (props) => {
    // Deconstructing
    const { data } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, locality, sla: { deliveryTime } } = data?.info;
    const { link } = data?.cta;

    return (
        <div className="card p-3 relative">
            <div className="card-image bg-slate-200 h-60 rounded-lg overflow-hidden">
                <img className="object-cover" src={CLOUDINARY_CDN + cloudinaryImageId} />
            </div>
            <div className="card-body relative pt-2">
                <h5 className="font-bold text-gray-700 text-xl pr-10">{name}</h5>
                <h6 className="font-bold text-gray-500 text-lg">Delievery in {deliveryTime} mins</h6>
                <h6 className="font-bold text-gray-800 text-lg absolute top-0 right-0">{avgRating}</h6>
                <span className="font-semibold text-gray-500">{cuisines.join(', ')}</span>
                <h6 className="font-bold text-gray-500 text-lg">{locality}</h6>
            </div>
            <a href={link} className="absolute inset-0"></a>
        </div>
    )
}

export default Card;