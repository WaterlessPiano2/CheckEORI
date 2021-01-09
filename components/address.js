export default function Address({ address }) {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-md font-medium text-gray-900 sm:col-span-3">
        Address{" "}
      </dt>
      <dt className="text-sm font-medium text-gray-500">Street and number</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {address.streetAndNumber}
      </dd>
      <dt className="text-sm font-medium text-gray-500">City Name </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {address.cityName}
      </dd>
      <dt className="text-sm font-medium text-gray-500">PostCode</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {address.postcode}
      </dd>
    </div>
  );
}
