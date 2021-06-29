import React from 'react';
import './projects.css';
import data from '../../data';

// class component because projects will have a function to determine which projects to show

class projects extends React.Component {
    render() {
        return (
            <div className="container">
                <br></br>
                <h1 className="text-center">Projects</h1>
                <div>
                    {
                        data.map(function (company) {
                            return (
                                
                                <div key={company.id} id={company.id}>
                                    <br></br>
                                    <div className="text-center">
                                        {company.logo ? <img src={company.logo} alt={company.id + " logo"}></img> : null}
                                        {!company.logo ? <h1>{company.name}</h1> : null}
                                    </div>
                                    <div>
                                        {
                                            company.bios.map(function (bio) {
                                                return (
                                                    <p key={bio} className={company.projects.length == 0 ? "text-center" : null}>{bio}</p>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="row">
                                        {
                                            company.projects.map(function (project) {
                                                return (
                                                    <div key={project.name} className="col-md-4">
                                                        <div className="inner shadow">
                                                            <h4>{project.name}</h4>
                                                            {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fa fa-github"></i>&nbsp;&nbsp;GitHub</a> : null}
                                                            {
                                                                project.description.map(function (desc) {
                                                                    return (
                                                                        <p key={desc}>{desc}</p>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    setFilter() {
        return 1;
    }
}

export default projects;