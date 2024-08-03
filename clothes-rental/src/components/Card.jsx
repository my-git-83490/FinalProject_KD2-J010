import React from 'react'
import img from './Images/fashion-5320934_1920.jpg'
import "./CardStyles.css"

function Card() {
    return (
        <div >
            <div class="card h-100 shadow-sm custom-card " style={{ width: '18rem' }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default Card