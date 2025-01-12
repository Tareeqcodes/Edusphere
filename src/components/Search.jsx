import React from "react";
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Highlight,  Configure, Hits } from 'react-instantsearch';

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_ID
);
 
const Hit = ({ hit }) => (
  <div className="flex w-full text-center items-center justify-center">
    <img
    className="w-20"
    src={hit.image}
    alt="{hit.name}"
    />
    <div className="flex p-5 ml-2 text-white font-poppins flex-col items-start" >
      <h2 className="mb-5 font-semibold text-lg">{hit.description}</h2>
      <p>{hit.location}</p>
      <p>{hit.price}</p>
      
      <Highlight attribute="name" hit={hit} />
    </div>
  </div>
);

const Search = () => {
  return (
    <>
      <div className="main-content">    
            <InstantSearch
              indexName={import.meta.env.VITE_ALGOLIA_INDEX_ID}
              searchClient={searchClient}
            >
              <div className="flex flex-col items-center justify-center text-center">

              <SearchBox className="" placeholder="Search PDFs, Apartments and Products.. " />
              <Hits hitComponent={Hit} />
              <Configure hitsPerPage={40} />
              </div>
            </InstantSearch>
          </div>
        
    </>
  );
};

export default Search;
