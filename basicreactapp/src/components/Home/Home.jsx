import React from "react";
import Cart from "../Cart/Cart";

function Home(){
  const first = {
    "id":1,
    "name":"karthik",
    "rank":10
  }
      return (
      <div className='Home'>
        <Cart id={first.id} name={first.name} rank={first.rank}/>
      </div>
    );
  }

export default Home;