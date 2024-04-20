"use client";

import ChartComponent from "@/components/charts/Chart";
import useRequireAuth from "@/helpers/useAuth";
import { Product } from "@/interfaces/products";
import { selectProducts } from "@/libs/productsSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { status } = useRequireAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("api/auth/signin");
    }
  });
  const products = useSelector(selectProducts);
  const titles = products?.map((item: Product) => item.title);
  const prices = products?.map((item: Product) => item.price);
  const discounts = products?.map((item: Product) => item.discountPercentage);

  return (
    <>
      {status === "authenticated" && (
        <div className="flex">
          <div className="w-[50%]">
            <ChartComponent
              type="line"
              xaxis={titles}
              seriesData={prices}
              seriesName="Prices"
            />
          </div>
          <div className="w-[50%]">
            <ChartComponent
              type="bar"
              xaxis={titles}
              seriesData={discounts}
              seriesName="Discounts"
            />
          </div>
        </div>
      )}
    </>
  );
}
