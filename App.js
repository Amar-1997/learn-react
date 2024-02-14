import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Herobanner from "./src/components/Herobanner";
import Card from "./src/components/Card";
import CardShimmer from "./src/components/CardsShimmer";
import { useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));


const Applayout = () => {
    const [reslist, setReslist] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let jsonData = await data.json();
        setReslist(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchFilter(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="app">
            <Header />
            <Herobanner />
            <section className="card-grid pt-20">
                <div className="container">
                    <div className="search text-right mb-5">
                        <input
                            className="outline-none border-b-2"
                            type="search"
                            placeholder="Search"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }} />

                        <button
                            className="text-blue-800 font-bold"
                            type="submit"
                            onClick={() => {
                                const filterCards = reslist.filter((val) => {
                                    return val?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                                });
                                // if (filterCards.length == 0) {
                                //     const noResult = [<h1>No results found</h1>];
                                //     setSearchFilter(noResult);
                                // }
                                // else {
                                setSearchFilter(filterCards);
                                // }
                            }}
                        >Search</button>
                    </div>
                    <div className="card-grid-wrapper min-h-96">
                        {reslist.length === 0 ?
                            Array.from({ length: 8 }).map((item, index) => (
                                //conditional rendering - (When data is not loaded but we show some placehlders untill then.)
                                <CardShimmer key={index} />
                            )) :
                            (
                                searchFilter.length === 0 ?
                                    <h1 className="text-gray-700 text-8xl font-semibold mb-10">No results Found</h1> :
                                    searchFilter.map((res) => <Card key={res?.info?.id} data={res} />
                                    )
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

root.render(<Applayout />);