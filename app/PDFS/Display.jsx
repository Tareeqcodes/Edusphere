import React, { useState } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  RefinementList,
  ClearRefinements,
  useInstantSearch,
} from "react-instantsearch";
import { FaSlidersH, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { storage } from "../config/appwrite";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_ID
);

const Display = () => {
  const [showFilters, setShowFilters] = useState(false);

  const getPreviewURL = (fileId) =>
    storage.getFilePreview(import.meta.env.VITE_BUCKECT_ID, fileId);
  const getDownloadURL = (fileId) =>
    storage.getFileDownload(import.meta.env.VITE_BUCKECT_ID, fileId);

  const Hit = ({ hit }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <h3 className="text-lg font-semibold mb-2">
        <span>Uploaded by: </span>
        {hit.uploadername}
      </h3>
      <p className="text-gray-600">
        <strong>Faculty:</strong> {hit.faculty}
      </p>
      <p className="text-gray-600">
        <strong>Department:</strong> {hit.department}
      </p>
      <p className="text-gray-600">
        <strong>Level:</strong> {hit.level}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Semester:</strong> {hit.semester}
      </p>
      <div className="flex space-x-2">
        <a
          href={getPreviewURL(hit.fileId)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Preview
        </a>
        <a
          href={getDownloadURL(hit.fileId)}
          download
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Download
        </a>
      </div>
    </div>
  );

  const NoResults = () => {
    const { results } = useInstantSearch();
    if (results?.nbHits === 0) {
      return (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-lg font-semibold">No results found</p>
          <p className="text-sm">Try adjusting your search or filters.</p>
        </div>
      );
    }
    return null;
  };

  // Accordion component for filters
  const FilterAccordion = ({ title, attribute }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-4 border-b border-gray-200 pb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left font-semibold flex justify-between items-center focus:outline-none"
        >
          <span className="text-gray-700">{title}</span>
          <span className="text-gray-500">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        {isOpen && (
          <div className="mt-2">
            <RefinementList
              attribute={attribute}
              className="space-y-2"
              classNames={{
                item: "flex items-center",
                label: "ml-2 text-gray-700",
                checkbox:
                  "form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out",
                count: "ml-auto text-gray-500 text-sm",
              }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="container mx-auto px-5 md:px-16">
      <h1 className="text-2xl font-bold text-center mt-10 mb-6">Study Materials</h1>

      {/* Search Box */}
      <InstantSearch searchClient={searchClient} indexName={import.meta.env.VITE_ALGOLIA_INDEX_ID_2}>
        <Configure hitsPerPage={10} />
        <SearchBox
          placeholder="Search pdfs..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-6"
          searchAsYouType={true}
          autoFocus={true}
        />
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className="relative">
            <FaSlidersH
              onClick={() => setShowFilters(!showFilters)}
              className="text-2xl cursor-pointer text-blue-500 md:hidden mb-4"
            />
            <div
              className={`w-full lg:w-64 bg-white shadow-lg rounded-lg p-6 ${
                showFilters ? "block" : "hidden md:block"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
                <ClearRefinements
                  translations={{ reset: "Clear All" }}
                  className="text-sm text-blue-600 hover:text-blue-700"
                />
              </div>
              <FilterAccordion title="Faculty" attribute="faculty" />
              <FilterAccordion title="Department" attribute="department" />
              <FilterAccordion title="Level" attribute="level" />
              <FilterAccordion title="Semester" attribute="semester" />
            </div>
          </div>

          {/* Hits Section */}
          <div className="flex-1">
            <NoResults />
            <div className="w-full">
              <Hits hitComponent={Hit} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </section>
  );
};

export default Display;