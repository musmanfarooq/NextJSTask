"use client";

import axios from "axios";
import useRequireAuth from "@/helpers/useAuth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setProducts,
  setLoading,
  setError,
} from "@/libs/productsSlice";
import { useGetProductsQuery } from "@/libs/apiSlice";
import Loader from "@/components/Loader/Loader";
import { Product } from "@/interfaces/products";
import Card from "@/components/Card/Card";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import Table from "@/components/Table/Table";

export default function Dashboard() {
  const { status } = useRequireAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { isLoading } = useGetProductsQuery({});
  const [inputData, setInputData] = useState("");
  const [copiedProducts, setCopiedProducts] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("api/auth/signin");
    }
  });

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(setLoading(true));
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          dispatch(setProducts(response.data.products));
          setCopiedProducts(response.data.products);
        })
        .catch((error) => {
          dispatch(setError(error.message));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, [dispatch]);

  const sumOfRatings = products.reduce(
    (acc: number, product: Product) => acc + product.rating,
    0
  );
  const averageRating = sumOfRatings / products.length;
  const roundedAverageRating = averageRating.toFixed(2);

  const onHandleSubmit = () => {
    if (inputData === "") {
      return setCopiedProducts(products);
    }
    const filteredProducts = products.filter((item: Product) => {
      return item.title === inputData;
    });
    setCopiedProducts(filteredProducts);
  };

  const columns = [
    {
      name: "Brand",
      selector: (data: Product) => data.brand,
      sortable: true,
    },
    {
      name: "Title",
      selector: (data: Product) => data.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (data: Product) => data.description,
      sortable: true,
    },
    {
      name: "$ Price",
      selector: (data: Product) => data.price,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (data: Product) => data.rating,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (data: Product) => data.stock,
      sortable: true,
    },
    {
      name: "Image",
      cell: (data: Product) => (
        <img src={data.images[0]} alt="Product Image" width="80px" />
      ),
      sortable: false,
    },
  ];

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <>
      {status === "authenticated" && (
        <div>
          <div className="flex content-center gap-3 pb-4">
            <Card title="Average Rating" number={roundedAverageRating} />
            <Card title="Total Products" number={products?.length || 0} />
          </div>
          <div className="pb-4">
            <Input
              placeholder="Search For Specific Title"
              setInputData={setInputData}
              onHandleSubmit={onHandleSubmit}
            />
          </div>
          <Table
            data={copiedProducts}
            colums={columns}
            title="List of Products"
          />
        </div>
      )}
    </>
  );
}
