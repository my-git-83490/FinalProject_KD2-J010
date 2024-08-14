import React from 'react'
// import img from './Images/fashion-5320934_1920.jpg'
import "./CardStyles.css"

function Card({ product }) {

    return (
        <div >
            <div className="card h-100 shadow-sm custom-card " style={{ width: '18rem' }}>
                <img src={product.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default Card