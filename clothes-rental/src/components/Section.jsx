import React from 'react'
import Card1 from './Images/car1.jpeg'
import Card2 from './Images/car2.jpeg'
import Card3 from './Images/cat3.jpeg'

const styles = {

    height: '900px',
    objectFit: 'cover'

};

function Section() {
    return (
        <div>

            {/* <h1>Section</h1> */}
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Card2} class="d-block w-100" alt="..." style={styles} />
                    </div>
                    <div class="carousel-item">
                        <img src={Card1} class="d-block w-100" alt="..." style={styles} />
                    </div>
                    <div class="carousel-item">
                        <img src={Card3} class="d-block w-100" alt="..." style={styles} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Section