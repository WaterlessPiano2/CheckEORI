import Header from "./headers";
import EORI from "./eori";
import TraderName from "./traderName";
import Address from "./address";

export default function Results({ result }) {
  const parseddResults = JSON.parse(result);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <Header result={result} />

      <div className="border-t border-gray-200">
        <dl>
          {parseddResults.eori && <EORI eori={parseddResults.eori} />}
          {parseddResults.companyDetails &&
            parseddResults.companyDetails.traderName && (
              <TraderName name={parseddResults.companyDetails.traderName} />
            )}
          {parseddResults.companyDetails &&
            parseddResults.companyDetails.address && (
              <Address address={parseddResults.companyDetails.address} />
            )}
        </dl>
      </div>
    </div>
  );
}
