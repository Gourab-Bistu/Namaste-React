import RestroCards from './RestroCards'
import resList from '../utilites/mockData'
import { useState } from "react";




const Body = () => {
  // Local state variable
  const [listofRestro, setListofRestro] = useState(resList);

  //Normal Js variable - super powerful variable 
  let listofRestroJS = [
    {
      "info": {
        "id": "799184",
        "name": "B Burger - Bigger Burger",
        "cloudinaryImageId": "c6513a0c87f9531a0b92733313a4c8f6",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "American"
        ],
        "avgRating": 4.5,
        "avgRatingString": "4.5",
      }
    },
    {
      "info": {
        "id": "799154",
        "name": "Mackdoalnd - Bigger Burger",
        "cloudinaryImageId": "c6513a0c87f9531a0b92733313a4c8f6",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "American"
        ],
        "avgRating": 3.5,
        "avgRatingString": "4.5",
      }
    }
  ];

  return (
    <div className="body">
      <div className="filter">
        <button onClick={() => {
          const filterListofRestro = listofRestro.filter((res) => res.info.avgRating > 4)
          setListofRestro(filterListofRestro)
        }
        } className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          listofRestro.map((restaurant) => {
            return <RestroCards key={restaurant.info.id}
              restData={restaurant} />
          })
        }
      </div>
    </div>
  );
};
export default Body;