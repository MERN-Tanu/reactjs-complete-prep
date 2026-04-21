import { useEffect, useState } from "react";
import PaginationItem from "./PaginationItem";

const LIMIT = 20;
function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProduct] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&select=title,price,description,categories,thumbnail`,
    );
    const json = await data.json();
    setProduct(json.products); // products is coming from api
    setNoOfPages(Math.ceil(json.total / LIMIT)); // total is coming from api
    console.log(json);
  };
  return (
    <div className="flex flex-wrap">
      <div>
        {" "}
        {products.map((item) => (
          <PaginationItem key={item.id} {...item} />
        ))}
      </div>
      <div className="cursor-pointer p-2 m-2">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={
              "text-xl p-4" + (pN === currentPage && "font-bold underline")
            }
            key={pN}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages-1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
}

export default Pagination;
