import { CDN_LINKS } from "../../utils/constants";
// const styleCard={
//     backgroundColor:"#f0f0f0"
// };
// const RestroCard =({resName,cuisines})=>{
    // console.log(props)


const RestroCard =(props)=>{
    const resData =props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime} =resData?.data?.card?.card?.info
return (
    // <div className="restro-card" style={styleCard}>
    <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
        
        <img  className="res-img" alt="res-img" src={CDN_LINKS + cloudinaryImageId}/>
    <h3>{name}</h3>
    <h4>{cuisines}</h4>
    <h4>${costForTwo/100}FOR TWO</h4>
    <h4>{avgRating} stars</h4>
    <h4>{deliveryTime} minutes</h4>

    </div>
   
)
}
export default RestroCard;