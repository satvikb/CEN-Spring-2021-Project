import UpdateRow from '../components/UpdateRow'
import { db, auth, timestamp as fbTimestamp, timestampToString} from '../firebase.config';
import React,{useState,useEffect} from 'react';
import {Link } from "react-router-dom";

function Home() {
  const [updates,setUpdates]=useState([])
  const fetchUpdates=async()=>{
     const response=db.collection('updates');
     const data=await response.get();
     var ups = []
     data.docs.forEach(item=>{
       ups.push(item.data())
      // setUpdates([...updates,item.data()])
     })
     setUpdates(ups)
   }
   useEffect(() => {
     fetchUpdates();
   }, [])

  return (
    <div className="Home">
      <div className="HomeBackgroundImage">
        <div className="BannerTitle">
          <h1 className="BannerTitleText" style={{font:"20px"}}>Tamid @ UF</h1>
        </div>
      </div>

      <div className="HomeContent">
        <p className="TextTitle">About Us</p>
        <p className="TextDetail">With unprecedented pacing in the world of technology comes a need to engage in business in new ways. Join us in developing solutions for fast-moving ventures and in meeting new challenges from experienced investors and entrepreneurs. We offer initiatives to engage in Israeli business and a strong network to aid in future development.

TAMID is a comprehensive business and technology group that uses Israel as an economic lens to consult leading companies on the forefront of innovation.</p>

        <p className="TextTitle">Updates</p>
        <div className="UpdatesContainer">
        {
          updates && updates.map(update=>(
            <UpdateRow key={update.title} title={update.title} text={update.details} time={timestampToString(update.time)}></UpdateRow>
          ))
        }

        </div>
      </div>
      {/* <div className="HomeFooter">
        <Link to="/adminlogin">
          <button>
            Go to admin
          </button>
        </Link>
      </div> */}

    </div>
  );
}

export default Home;
