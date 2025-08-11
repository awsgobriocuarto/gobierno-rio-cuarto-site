import React, { Suspense } from "react";
import ListNews from "../ui/news/ListNews";
import Pagination from "../ui/news/Pagination";

export default function News({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 12;

  return (
    <main>
      <ListNews page={page} limit={limit} />
      <Pagination currentPage={page} totalNews={200} limit={limit} />
    </main>
  );
}
