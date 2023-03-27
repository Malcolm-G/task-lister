import React, {useContext} from 'react';
import '../stylesheets/LandingPage.css'
import image from '../images/blue_wall.jpg'
import { UserContext } from './UserDataProvider';


function LandingPage(props) {
  const [user,setUser] = useContext(UserContext)
    // return (
    //     <div>
    //         <div className='container'>
    //             <h1> Manage Projects Effectively, and Conveniently </h1>
    //             <h3>Project-App provides an effective and creative way to manage your projects</h3>
    //         </div>
    //     </div>
    // );
    return (
        <div className="landing-page-container">
          <div className="landing-page-text">
            <h1 style={{ fontFamily: 'Roboto Slab, serif' }}>Welcome to TASK-TRAIN</h1>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Manage your todos efficiently with my app</p>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Sign up or log in to get started</p>
          </div>
          <img src={image} alt="Project management app" className="landing-page-image" />
        </div>
      );
}

export default LandingPage;