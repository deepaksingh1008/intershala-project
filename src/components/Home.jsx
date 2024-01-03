import React from 'react'
import img1 from '../images/images.jpg'
//import Layout from './Layout'
import Card from './Card'
const Home = () => {
    return (
        <div className='image'>
            <img src={img1} alt="img loading" />
            <div className='name'>
                <h3>NITYANAND CHARAN DAS</h3>
                <h1>Learn key life lessons from the</h1>
                <h1> Gita: Mind control and conflict</h1>
                <h1>resolution</h1>

            </div>
            <div className='card-item'>
                <Card
                    title="Example Card 1"
                    content="This is some content for the first card. You can add more details here."

                />
            </div>
        </div>

    )
}

export default Home