import React from "react"
import {Link} from 'gatsby'

// components
import Layout from '../components/layout'

const IndexPage = ()=>{
  return (
    <div>
      <Layout>
        <h2>This is going to be the new Quercus Group website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis quia unde expedita possimus, nisi eaque amet corrupti necessitatibus maxime distinctio repellendus quibusdam consectetur veniam atque.</p>
        <p>Need to reach out? <Link to="/contact">Contact Us</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage
