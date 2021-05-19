import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getCountries } from '../redux/actions/actions';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const AllCountries = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const allCountries = useSelector(state => state.countries);
    useEffect(() => {
        if(_.isEmpty(allCountries.countries)) {
            fetchData();
        }
    }, []);

    useEffect(() => {
        setPage(1)
    }, [search]);
    

    const fetchData = () => {
        dispatch(getCountries());
    }

    const pagiData = (data, page=1) => {
        const limit = 20;
        const offset = (page * limit) - limit;

        return data.slice(offset, limit + offset);
    }

    const showData = () => {
        const allData = allCountries;
        if(allData.loading){
            return (
                <div className='loading'>
                    Loading... 
                    <i className="fas fa-life-ring fa-spin"></i>
                </div>
            );
        }

        if(search){
            let sortedData = allData.countries.filter(card => {
                let cardCountry = card.name.toLowerCase();
                let termLow = search.toLowerCase();
                return cardCountry.includes(termLow);
            });

            return (
                <div className="list-wrapper">
                    {sortedData.map(item => (
                        <Link to={`/countries/${item.name}`} className="card" key={item.name}>
                            <div className="card-a">
                                <img src={item.flag} alt='country flag' />
                            </div>
                            <div className="card-b">
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            );
        }

        if(!_.isEmpty(allData.countries)){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            const list = pagiData(allData.countries, page);
            return (
                <div className="list-wrapper">
                    {list.map(item => (
                        <Link to={`/countries/${item.name}`} className="card" key={item.name}>
                            <div className="card-a">
                                <img src={item.flag} alt='country flag' />
                            </div>
                            <div className="card-b">
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            );
        }

        if(allData.errorMsg !== ''){
            return (
                <div className='loading'>
                    {allData.errorMsg}
                    <i className="fas fa-life-ring fa-spin"></i>
                </div>
            );
        }

        return (
            <div className='loading'>
                No countries found...404
                <i className="fas fa-life-ring fa-spin"></i>
            </div>
        );
    }

    let renderJSX = showData();

    return (
        <div className="main-wrapper">
            <div className="search-wrapper">
                <div className="search">
                    <input type='text' placeholder='Find country...' onChange={(e) => setSearch(e.target.value)} />
                    <button><i className="fas fa-search"></i></button>
                </div>
            </div>
            {renderJSX}

            {!_.isEmpty(allCountries.countries) &&  <ReactPaginate 
                pageCount={Math.ceil(allCountries.countries.length / 20)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                containerClassName='pagination'
                forcePage={page - 1}
                onPageChange={(num) => setPage(num.selected + 1)}
            />}
        </div>
    );
}

export default AllCountries;
