
import{ cdn_url} from '../utilites/constraints'


const RestroCards = (props) => {
    const { restData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = restData?.info;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src=
                    {cdn_url +cloudinaryImageId}
                alt="Sandy"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRating}</h5>  
        </div>
    );
};
export default RestroCards;
