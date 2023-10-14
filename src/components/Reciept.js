import React from "react";

const Reciept = (props) => {
  return (
    <div>
      <h1>Reciept</h1>
      <p>Transaction Hash:{` ${props?.reciept?.transactionHash}`}</p>
      <p>Block Hash:{`${props?.reciept?.blockHash}`}</p>
      <p>Block Number:{` ${props?.reciept?.blockNumber}`}</p>
      <p>From:{`${props?.reciept?.sender}`} </p>
      <p>To:{` ${props?.reciept?.reciever}`}</p>
      <p>Gas Used{`${props?.reciept?.gasUsed}`}</p>
    </div>
  );
};

export default Reciept;