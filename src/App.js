import React from 'react'
import beach from './components/beach.jpg'
import hang from './components/hang.jpg'
import {Link} from 'react-router-dom';




var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${hang})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const App = () => {
  return (
    < >
      {/* Home Page page */}
     
      {/* <img src={process.env.PUBLIC_URL + '/remote.jpg'} alt="logo" /> */}
      {/* <img src={process.env.PUBLIC_URL + '/beach.jpg'} alt="logo" /> */}
      <section style={ sectionStyle }>
      </section>

      <Link style={ sectionStyle } to="/jobs"></Link>
    </>
  )
}

export default App