import {useState, useEffect, Children, cloneElement} from "react";
import "./Carousel.css";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

const PAGE_WIDTH = 870;
export const Carousel = ({children})=> {

    const handleLeftArrowClick = ()=> {
         setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH

             return Math.min(newOffset,0)
        })
    }
    const handleRightArrowClick = ()=> {
        setOffset((currentOffset) => {
            const newOffset = currentOffset -PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH *(pages.length-1))
            return Math.max(newOffset,maxOffset)
        })
    }
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)


    useEffect(() => {
        setPages(
            Children.map(children,child => {
                return cloneElement(child,{
                    style:{
                        height:'100%',
                        minWidth:'100%',
                        maxWidth:'100%'


                    }
                })
            })
        )
    },[])

    return (
        <div className="main_container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
            <div className="window">
                <div className="all-items-container"
                style={{
                    transform: `translateX(${offset}px)`,
                }}>
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
        </div>
    )
}