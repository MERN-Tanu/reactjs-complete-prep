function PaginationItem({ title, description, price, thumbnail }) {
  return (
    <div className="flex border solid 1px black p-2 m-2">
      <div className="border solid 1px black">
        {" "}
        <img src={thumbnail} alt={title} />
      </div>

      <div>
        {" "}
        <h1 className="text-md p-2">{title}</h1>
        <p className="p1">{description}</p>
        <p className="p-1">Price: {price}</p>
      </div>
    </div>
  );
}

export default PaginationItem;
