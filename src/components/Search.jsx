import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Highlight,  Configure, Hits } from 'react-instantsearch';

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_ID
);
 
const Hit = ({ hit }) => (
  <Link>
  
  <div className="flex w-full text-center items-center justify-center">
    <img
    className="w-20"
    src={hit.image}
    alt="No image available"
    />
    <div className="flex p-5 ml-2 text-black font-poppins flex-col items-start" >
      <h2 className="mb-5 font-semibold text-lg">{hit.description}</h2>
      <p>{hit.location}</p>
      <p>{hit.price}</p>
      
      <Highlight attribute="name" hit={hit} />
    </div>
  </div>
  </Link>
);

const Search = () => {
  const [showHits, setShowHits] = useState(false);


  return (
    <>
      <div className="main-content">    
            <InstantSearch
              indexName={import.meta.env.COLLECTIONS_TO_INDEX}
              searchClient={searchClient}
            >
              <div className="flex flex-col items-center justify-center text-center">

              <SearchBox className="mb-4 rounded-2xl" placeholder="Search PDFs, Apartments and Products.." 
              searchAsYouType={true}
              
              onFocus={() => setShowHits(true)}
              onBlur={() => setShowHits(false)}
              />
                {showHits ?<Hits hitComponent={Hit} /> : null } 
              <Configure hitsPerPage={1} />
              </div>
            </InstantSearch>
          </div>
        
    </>
  );
};

export default Search;
