"use client";
import Loader from "@/components/Loader/Loader";
import useRequireAuth from "@/helpers/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { session, status } = useRequireAuth();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("api/auth/signin");
    } else {
      router.push("/dashboard");
    }
  });

  return <Loader />;
}
