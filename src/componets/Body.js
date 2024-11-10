const Body =()=>{
    return (
        <div className="body">
        <div className="search" >Search</div>
        <div className="resturant-Container">
    {resList.map((restaurant)=(

     <RestroCard key={restaurant.data.id} resData={restaurant }/>
    ))}
        
        </div>
        </div>
    )
}
export default Body;