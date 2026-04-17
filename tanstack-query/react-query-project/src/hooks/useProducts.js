
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {

    
  const fetchProduct = async() => {
    const products = await fetch("https://dummyjson.com/products");
    const data = products.json();
    console.log("data", data);
    return data;
  };

  const {data,isloading,error} = useQuery({
    queryKey: ['products'],
    queryFunction: fetchProduct,
  })

  return {fetchProduct,data,isloading,error}
};

export default useProducts;
