import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";

const App = () => {
  return (
    <Fragment>
      <Message header="나나" body="우우" />
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            img={faker.image.avatar()}
            time={faker.date.recent().toLocaleString()}
            body={faker.lorem.sentences()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            img={faker.image.avatar()}
            time={faker.date.recent().toLocaleString()}
            body={faker.lorem.sentences()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            img={faker.image.avatar()}
            time={faker.date.recent().toLocaleString()}
            body={faker.lorem.sentences()}
          />
        </ApprovalCard>
      </div>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
