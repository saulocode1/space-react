import React from "react";
import { DataText, DataTitle, DataWrapper } from "./styled";

const Data = ({ dataTitle, dataText }) => (
   <>
      <DataWrapper>
         <DataTitle>{dataTitle}</DataTitle>
         <DataText>{dataText}</DataText>
      </DataWrapper>
   </>
);

export default Data;
