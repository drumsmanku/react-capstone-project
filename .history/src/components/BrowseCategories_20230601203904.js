import React from 'react';
import './BrowseCategories.css';
import avatar from '../Assets/image14.png'
import { useState,useEffect } from 'react';
import axios from 'axios';

function BrowseCategories() {
  
  const[catState, setCatState]=useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  useEffect(()=>{
    const categoryData = localStorage.getItem("categoryItems");
    if(categoryData){
      const finalCatData=JSON.parse(categoryData);
      setCatState(finalCatData);
    }
  },[])
  
  const fetchUnogsData = async (searchQuery) => {
    try {
      const response = await axios.get('https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi', {
        headers: {
          'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'a885653925mshf86f1757c3987cfp1340fbjsn277741ff7fb4',
        },
        params: {
          q: searchQuery,
          
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching data from unogs API:', error);
      return null;
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const fetchData = async () => {
        const data = await fetchUnogsData(searchQuery);
        setSearchResults(data);
      };

      fetchData();
    }
  }, [searchQuery]);

  return (
    <div className='container-b'>
      <div className="header">
        <h1>Super App</h1>
        <div className="avatar" style={{backgroundImage:`url:${avatar}`,backgroundRepeat: "no-repeat",backgroundSize: "40rem",}}>
          hey
        </div>
      </div>
      <div className="body-container">
        <div className="main-elements">
          <h1>Entertainment according to your choice</h1>
          <div className="category-elements-b">
            wow
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseCategories