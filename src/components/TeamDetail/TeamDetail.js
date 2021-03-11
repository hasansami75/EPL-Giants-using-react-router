import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../TeamDetail/TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import facebook from '../../team-tracker/Icon/Facebook.png';
import twitter from '../../team-tracker/Icon/Twitter.png';
import youtube from '../../team-tracker/Icon/YouTube.png';
import Male from '../../team-tracker/Photo/male.png';
import Female from '../../team-tracker/Photo/female.png';


const TeamDetail = () => {
    const teamId = useParams();
    const [details, setDetails] = useState([]);
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTwitter, strFacebook, strYoutube } = details;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId.teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId.teamId]);
    return (
        <div className="bg-color">
            <div className="detail-bg-image">
                <Link to={`/home`}><button type="button" class="btn btn-success fixed-top ml-auto">HOME</button></Link>
                <img className="bg-text img-resize" src={details.strTeamBadge} alt="" />
            </div>
            <div className="container p-5">
                <div class="m-auto py-5">
                    <div class="row bg-info py-5 align-items-center rounded border border-primary shadow bg-body rounded">
                        <div class="col-md-6 text-left">
                            <h2>{strTeam}</h2>
                            <h4><FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} /><b>Founded:{intFormedYear}</b></h4>
                            <h4><FontAwesomeIcon className="mr-2" icon={faFlag} /><b>Country: {strCountry}</b></h4>
                            <h4><FontAwesomeIcon className="mr-2" icon={faFutbol} /><b>Sports Type: {strSport}</b></h4>
                            <h4><FontAwesomeIcon className="mr-2" icon={faMars} /><b>Gender: {strGender}</b></h4>
                        </div>
                        <div class="col-md-6">
                            {
                                strGender === 'Female' ? <img className="img-fluid" src={Female} alt=""></img> : <img className="img-fluid" src={Male} alt=""></img>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="pb-5 container text-left text-white">
                {strDescriptionEN}
            </div>
            <div>
                <a target="blank" href={`https://${strTwitter}`}><img className="icon-resize" src={twitter} alt="" /></a>
                <a target="blank" href={`https://${strFacebook}`}><img className="icon-resize" src={facebook} alt="" /></a>
                <a target="blank" href={`https://${strYoutube}`}><img className="icon-resize" src={youtube} alt="" /></a>
            </div>
        </div>
    );
};

export default TeamDetail;