export default function TraderName({ result }) {
  let parsedResult = JSON.parse(result);
  let name = "Not available";
  if (
    parsedResult &&
    parsedResult.companyDetails &&
    parsedResult.companyDetails.traderName
  ) {
    name = JSON.parse(result).companyDetails.traderName;
  }

  return (
    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-lg font-medium text-gray-500">Trader name</dt>
      <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
        {name}
      </dd>
    </div>
  );
}
