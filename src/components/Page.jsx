import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.publicapis.org/entries");
      console.log(result.data.entries);
      setData(result.data.entries);
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  if (!sortAscending) {
    currentItems = currentItems.reverse();
  }

  const renderItems = currentItems.map((item) => (
    <div key={item.API}>
      <p>{item.Description}</p>
      <p>{item.Auth}</p>
    </div>
  ));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortItems = () => setSortAscending(!sortAscending);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <button onClick={() => paginate(number)}>{number}</button>
    </li>
  ));

  return (
    <div>
      <div>
        <button onClick={sortItems}>
          {sortAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
        {renderItems}
      </div>
      <ul>{renderPageNumbers}</ul>
    </div>
  );
};

export default Page;
