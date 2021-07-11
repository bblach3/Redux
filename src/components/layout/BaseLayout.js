import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {Navbar, Nav} from 'react-bootstrap'
import hang from '../../components/remote.jpg'
//import '../images/remote.jpeg'

var sectionStyle = {
  width: "20%",
  height: "30px",
  backgroundImage: `url(${hang})`,
  backgroundPosition: 'center',
};
const BaseLayout = (props) => {
  const numberOfItems = useSelector(state => state.jobs.numberOfItems);
  return (
    <>
    <Navbar fixed="top" className="bg-white">
  <Navbar.Brand href="#"></Navbar.Brand>
  <Link style={ sectionStyle } to="/">
  {/* <section style={ sectionStyle }>
      </section> */}
      
      </Link>
  <Navbar.Toggle />
     
      <Nav.Link href="/jobs">Job Search</Nav.Link>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <div>
        {numberOfItems === 0 
            ?
            <div>You have no jobs saved</div>
            : 
            
            <div className="count">
                <b>Number of jobs saved:   <em>{numberOfItems}</em></b>
            </div>
            
        }
    </div>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>


        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Job Search</Link></li>
        </ul>
      {props.children}
    </>
  )
}

export default BaseLayout