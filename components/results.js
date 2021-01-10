import Header from "./headers";
import React, { useState } from "react";

import EORI from "./eori";
import TraderName from "./traderName";
import Address from "./address";
import Error from "./error";

export default function Results() {
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="bg-white shadow-xl sm:rounded-lg w-full">
      <Header
        searchResult={(s) => setResult(s)}
        errorMessage={(e) => setErrorMessage(e)}
      />
      <div className="border-t border-gray-200">
        {result && (
          <dl>
            {JSON.parse(result).eori && <EORI eori={JSON.parse(result).eori} />}
            {JSON.parse(result).companyDetails &&
              JSON.parse(result).companyDetails.traderName && (
                <TraderName
                  name={JSON.parse(result).companyDetails.traderName}
                />
              )}
            {JSON.parse(result).companyDetails &&
              JSON.parse(result).companyDetails.address && (
                <Address address={JSON.parse(result).companyDetails.address} />
              )}
          </dl>
        )}
        {errorMessage && <Error message={errorMessage} />}
      </div>
    </div>
  );
}
