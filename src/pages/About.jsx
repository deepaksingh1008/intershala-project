import React from 'react'
import Layout from '../components/Layout'
import img from '../images/nityanand-charandas.jpg'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Layout>
            <div className="container">
                <h1>About the course</h1>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestias consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <p> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint at molestiae non recusandae Itaque earum rerum hic tanatur a sapiente delectus, ut aut reiciendis voluptatibus maiores allas consequatur aut perferendis doloribus asperiores repellat</p>
                <h2 style={{ marginTop: "20px" }}>What to expect from the course</h2>
                <p>✓ Learn to mange your relationships</p>
                <p>✓ Better comvnunication</p>
                <p>✓ Time management</p>
                <p>✓ Forgiveness</p>
                <h2 style={{ marginTop: "20px" }}>Key topic covered</h2>
                <p>emporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint at molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alas consequatur aut perferendis doloribus asperiores repeat</p>
                <p>✓  <b>written and audio sessions </b> guide you in decoding the Language of numbers so that you can easily receive their signs and messages</p>
                <p>✓ <b>Intuitive exercises and homework</b> walk you through the energies and values of numbers and number sequences sa you can become your own authority.</p>
                <p>✓ <b>Ahandy reference</b> to numerical meanings so you can uncover your sour's gifts, challenges, lessons, and purpose- and receive spiritual guidance along your purth</p>
                <p>✓ <b>Expert techniques</b> for manifestation offer simple ways to usa numbers to co-creata with the universa</p>
                <div className='instructor'>
                    <h1 style={{ marginTop: "30px" }}>About The Instructor</h1>
                    <div className='row'>
                        <img src={img} alt="" />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae villae dicta sunt explicabo.</p>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum ot dolorum fuga.</p>
                    </div>
                    <div className="social-media">
                        <Link to={'facebook.com'}><FaFacebook />&nbsp;Facebook</Link>
                        <Link to={'x.com'}><FaXTwitter /> &nbsp;X</Link>
                        <Link to={'youtube.com'}><FaYoutube /> &nbsp;Youtube</Link>
                        <Link to={'instagram.com'}><FaInstagram />&nbsp;Instagram </Link>
                    </div>

                </div>
            </div>
        </Layout >
    )
}

export default About