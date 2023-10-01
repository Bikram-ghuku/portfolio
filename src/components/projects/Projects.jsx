import React from 'react'
import './projects.css'
import { projects_data } from '../../projects';
import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'

function Projects() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        if(windowWidth > 600){
            setCurrentSlide(currentSlide === Math.floor(projects_data.length/3)  ? 0 : currentSlide + 1);
        }else{
            setCurrentSlide(currentSlide ===  projects_data.length - 1 ? 0  : currentSlide + .93);
        }
    }
    const prevSlide = () => {
        if(windowWidth > 600){
            setCurrentSlide(currentSlide === 0 ? Math.floor(projects_data.length/3)  : currentSlide - 1);
        }else{
            setCurrentSlide(currentSlide === 0 ? projects_data.length - 1  : currentSlide - .93);
        }
    }

    return (
    <div className='p'>
        <h1 className='p-title'>Projects</h1>
        <div className="p-wrapper">
            <div className="p-car" style={{'translate': (currentSlide*-100)+'vw'}}>
                {projects_data.map((data) =>{
                    return(
                        <div className="p-car-wrap" key={data.id}>
                            <div className="p-car-item">
                                <div className="p-car-inner">
                                    <h1>{data.Name}</h1>
                                    <img src={data.img} alt="" className='p-car-img'/>
                                    <p>{data.about}</p>
                                    <a href={data.url}>
                                        <button >View Project</button>
                                    </a>
                                    <br/><br/>
                                    Tech Used: {data.tech}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="p-nav">
            <button className='p-next' onClick={nextSlide}><FcNext/></button>
            <button className='p-prev' onClick={prevSlide}><FcPrevious/></button>
        </div>
    </div>
    )
}

export default Projects