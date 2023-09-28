import React from 'react'
import './projects.css'
import { projects_data } from '../../projects';


function Projects() {
  return (
    <div className='p'>
        <h1 className='p-title'>Projects</h1>
        <div className="p-wrapper">
            <div className="p-car">
                {projects_data.map((data) =>{
                    return(
                        <div className="p-car-wrap">
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
    </div>
  )
}

export default Projects