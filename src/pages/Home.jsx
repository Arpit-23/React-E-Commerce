import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data); 
    }
    catch(error){
      console.log("Error in to fetching data ",error);
      setPosts([]);
      <div className='flex justify-center items-center'>
        <p>No Post Found!</p>
      </div>
    }

    setLoading(false);
  }

  useEffect(() =>{
    fetchProductData();
  },[])

  return (
    loading ? <Spinner />
    : posts.length>0 ?
    (
      <div className='grid grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]'>
      {console.log("Home")}
        {
          posts.map((post) =>(
            <Product key={post.id} post={post} />
          ))
        }
      </div>
    ):
    <div className='flex justify-center items-center'>
      <p>No data found</p>
    </div>
  
  )
}

export default Home