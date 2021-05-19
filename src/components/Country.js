import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { getCountries } from '../redux/actions/actions';

const Country = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    // dispatch(getCountries());
    const placeName = props.match.params.country;
    // const placeData = useSelector(state => {
    //     const data = state.countries.countries.filter(item => {
    //         return placeName.toLowerCase() === item.name.toLowerCase();
    //     });
    //     return data;
    // });

    const placeData = useSelector(state => state.countries);
    console.log(placeData)
    useEffect(() => {
        if(_.isEmpty(placeData.countries)){
            dispatch(getCountries());
        }
    }, []);
    const showData = () => {

        if(placeData.loading){
            return (
                <div className='loading'>
                    Loading... 
                    <i className="fas fa-life-ring fa-spin"></i>
                </div>
            );
        }

        if(!_.isEmpty(placeData.countries)){
            const place = placeData.countries.filter(item => {
                        return placeName.toLowerCase() === item.name.toLowerCase();
                    });
            const {name, capital, flag, area, population, callingCodes, currencies, languages, region, subregion, timezones} = place[0];
            return (
                <div className="travelCard  js-location">
                    <div className="travelCard-container">
                        <img src={flag} alt='flag' />
                        <div className="travelCard-location">
                            <h3 className="travelCard-location-name js-location-name">&nbsp;{name}</h3>
                        </div>

                        <div className="travelCard-info">
                            <div className="travelCard-info-details">
                                <span>Capital</span>
                                <span className="js-location-country">&nbsp;{capital}</span>
                            </div>    

                            <div className="travelCard-info-details">
                                <span>Area</span>
                                <span className="js-location-area">&nbsp;{numberWithCommas(area)}</span>
                            </div>   

                            <div className="travelCard-info-details">
                                <span>Population</span>
                                <span className="js-location-population">&nbsp;{numberWithCommas(population)}</span>
                            </div>
                        </div>

                        <div className="travelCard-info">
                            
                            <div className="travelCard-info-details">
                                <span>Phone code</span>
                                <span className="js-location-country">&nbsp;+{callingCodes[0]}</span>
                            </div>    

                            <div className="travelCard-info-details">
                                <span>Currency</span>
                                <span className="js-location-area">&nbsp;{`${currencies[0].name} ${currencies[0].symbol}`}</span>
                            </div>   

                            <div className="travelCard-info-details">
                                <span>Language</span>
                                <span className="js-location-population">&nbsp;{languages[0].name}</span>
                            </div>
                        </div>

                        <div className="travelCard-info">
                            
                            <div className="travelCard-info-details">
                                <span>Region</span>
                                <span className="js-location-country">&nbsp;{region}</span>
                            </div>    

                            <div className="travelCard-info-details">
                                <span>Sub-Region</span>
                                <span className="js-location-population">&nbsp;{subregion}</span>
                            </div>

                            <div className="travelCard-info-details">
                                <span>Time zone</span>
                                <span className="js-location-area">&nbsp;{timezones[0]}</span>
                            </div>   

                        </div>
                        
                        <div className="travelCard-button">
                            <a href={'https://www.google.com/search?q=' + name} className="button js-location-button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" data-icon="map-marker" data-container-transform="translate(6)" viewBox="0 0 32 32" fill="#fff">
                                <path d="M10 0c-5.523 0-10 4.477-10 10 0 7.5 10 22 10 22s10-14.5 10-22c0-5.523-4.477-10-10-10zm0 5c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z" transform="translate(6)" />
                            </svg>
                                
                                Google it.
                            </a>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className='loading'>
                Something went wrong... 
                <i className="fas fa-life-ring fa-spin"></i>
            </div>
        );
    }

    return (
        <div className="country">
            {showData()}
        </div>
    )
}

function numberWithCommas(x) {
    if(x){
        var parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
    return '-';
}

export default Country;
