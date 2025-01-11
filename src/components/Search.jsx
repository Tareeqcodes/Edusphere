import React from "react";
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_ID
);
 
const Hit = ({ hit }) => (
  <p>{hit.name}</p>
  // <div className="w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
  //   {hit.image && (
  //     <img
  //       className="w-full h-64 object-cover"
  //       src={hit.image}
  //       alt={hit.name}
  //       />
  //   )}
  //    <div className="p-4">
  //     {/* Name */}
  //     <h3 className="text-lg font-semibold text-gray-800">{hit.name}</h3>

  //     {/* Description */}
  //     <p className="text-sm text-gray-600 mt-2">{hit.description}</p>

  //     {/* Price */}
  //     <p className="text-sm font-medium text-gray-700 mt-2">
  //       <span className="font-semibold">Price:</span> {hit.price}
  //     </p>

  //     {/* Location */}
  //     <p className="text-sm font-medium text-gray-700 mt-1">
  //       <span className="font-semibold">Location:</span> {hit.location}
  //     </p>

  //     {/* Amenities */}
  //     {hit.amenities && hit.amenities.length > 0 && (
  //       <p className="text-sm font-medium text-gray-700 mt-1">
  //         <span className="font-semibold">Amenities:</span>{" "}
  //         {/* {hit.amenities.join(", ")} */}
  //       </p>
  //     )}
  //   </div>
  
  // </div>
);

const Search = () => {
  return (
    <>
      <main className="main-content">
        
        <div className="container u-margin-block-start-negative-56">
          <div className="card u-flex u-gap-24 u-flex-vertical">
            <InstantSearch
              indexName={import.meta.env.VITE_ALGOLIA_INDEX_ID}
              searchClient={searchClient}
            >
              <SearchBox
                
               />
              <Hits hitComponent={Hit} />
            </InstantSearch>
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;
