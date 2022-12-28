import React from "react";
import { useParams } from "react-router-dom";

// style import
import { BookWrapper } from "./index.styled";

// hook import
import { useGraphSql } from "../../hooks/useGraphSql";

// component import
import BookCard from "../../components/architecture/card/book/BookCard";
import Loading from "../../components/loading/Loading";

const Book = () => {
  const { storeId } = useParams();
  const { data, isLoading, isError } = useGraphSql(
    `
      query {
        books(where: { store: { id: { _eq: "${storeId}" } } }) {
        name
          author
          type
          price
          id
          ratings
          description
          publisher
          language
          paperback
        }
      }
    `,
    `"${storeId}"`
  );

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <p>An error occurred</p>;
  } else {
    return (
      <BookWrapper>
        {data.books.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </BookWrapper>
    );
  }
};

export default Book;
