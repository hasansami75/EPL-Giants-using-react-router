import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../../components/Team/Team.css';
import { Link } from 'react-router-dom';
const Team = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card mb-5">
                <img src={strTeamBadge} className="card-img-top p-5" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Sports type: {strSport}</li>
                </ul>
                <div className="card-body">
                    <Link to={`/team/${idTeam}`}><button type="button" className="btn btn-warning"><b>Explore</b><FontAwesomeIcon className="ml-2" icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>




    );
};

export default Team;