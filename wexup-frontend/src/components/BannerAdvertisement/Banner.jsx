import React from 'react';
import "./Banner.css"
import beeline from "../images/picture-advertisement2.png";
import efes from "../images/picture_advertisement.png";
import {Carousel} from "../Carousel/Carousel";

const Banner = () => {
    return (
        <Carousel>
                <div className=" slider slider_first">
                    <img src={beeline}/>
                </div>
                <div className=" slider">
                    <img className="slider_second" src={efes}/>
                </div>
            </Carousel>
    )
}
export default Banner;