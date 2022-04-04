import React from "react";

import { Pagination } from "antd";

const PaginationData = ({ userDataSize, page, setPage }) => {
  return (
    <Pagination
      size="large"
      current={page}
      total={Math.ceil(userDataSize / 10) * 10}
      onChange={(value) => {
        setPage(value)
      }}
    />
  );
};

export default PaginationData;
