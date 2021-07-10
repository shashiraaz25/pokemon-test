import React, { useState } from "react";
import Pagination from "../ReusableComponents/Pagination";
const Exercise = (props) => {
  const [showPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App" data-test="test-Exercise">
      <div className="container py-4">
        <div className="row">
          {props.posts ?
            <>
              {props.posts.slice(pagination.start, pagination.end).map((post) => (
                <div className="col-md-4 mb-3" key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <div className="head-box">
                        <div className="float-start">{post.name.toUpperCase()}</div>
                        <div className="float-end"> ID:{post.id} {post.title}</div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="text-center"> <img style={{ width: "180px" }} src={post.imageUrl} className="logo" alt="logo" /></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
            : ""}
        </div>
        <Pagination
          data-test="test-Pagnation"
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={props.posts ? props.posts.length : ""}
        />
      </div>
    </div>
  );
}
export default Exercise;
