import React from 'react'
import "./Tech.css"
import { Techlist } from '../../Utils/Techlist'
function Tech() {
  return (
    <>
    <div className="container tech" id="4">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Professional Skills</h2>
    <hr/>
    <p className="pb-3 text-center"> 👉 including Programming Language,Framework,Database,Fontend and Backend tools and APIs</p>
    <div className="row">
        {Techlist.map (tech => (
          <div  key={tech._id} className="col-md-3">
            <div className="card m-2">
                <div className="card-content">
                    <div className="card-body">
                        <div className="media d-flex justify-content-center">
                            <div className="alig-self-center">
                            <tech.icon className="tech-icon"/>
                            </div>
                            <div className="media-body">
                                <h5>{tech.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    </>
  )
}
 
export default Tech