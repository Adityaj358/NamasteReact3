# Hey Guys

#Food App


/*
*Header
 -Logo
 -Nav Items
*Body
-Search
-RestaurantConatiner
   -RestaurantCard
       -img
       -Name Of Restaurant, Star Rating, cuisines, deliveryTime
*Footer
-copyright
-Links
-Address
-Contact
*/



<!-- <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <div className="Item-Details">
                <div>
                  <img
                    className="MenuImg"
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                    height={"200px"}
                  />
                </div>
                <div className="itemName">
                  {item?.card.info.name}
                  <p>{item?.card?.info?.description}</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      className="star-icon"
                      src={
                        "https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                      }
                      height={"18px"}
                      width={"18px"}
                      style={{ verticalAlign: "middle" }}
                    />
                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </div>
                </div>
                <div className="itemPrice">
                  {"Rs"} {item?.card?.info?.price / 100}
                </div>
                <button className="Add-btn">Add</button>
              </div>
            </li>
          ))}
        </ul> -->




#REDUX Toolkit
  -install @reduxjs/toolkit and react-redux
  -Build our 
  -Connect our store to our app 
  -Slice (CartSlice)
  -Dispatch(Action)
  -Selector







# Types of testing (developer)
  -unit testing
  -integration Testing
  -End to End Testing (E2E testing)

# Setting up testing in our app
  -install React testing librabry
  -install jest
  -insall Babel dependencies
  -configure Babel
  -configure parcel config file to disable default Babel transpilation
  -Jest - npx jest --init
  -install jsdom library
  -install @babel/preset-react - to make JSX work in test cases
  -include  @babel/preset-react inside my babel config
  -install @testing-library/jest-dom