import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { addCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api4286.s3.ap-south-1.amazonaws.com/products.json"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.type === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
      <h1 className="text-4xl font-semibold mb-5 text-white">Products</h1>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 p-4" key={product.id}>
                  <img
                    src={product.filename}
                    className=" w-96 h-72"
                    alt={product.title}
                    height=""
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold text-xl">
                      {product.title.substring(0, 12)}
                    </h4>
                    <p className="mt-3 text-lg">
                      {product.description.substring(0, 40)}
                    </p>
                    <p className="font-semibold text-xl my-3 float-right mt-4">
                      {product.price} Kr
                    </p>

                    <button
                      className="rounded-md text-white bg-indigo-600 mt-4 px-4 py-2"
                      onClick={() => addProduct(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
