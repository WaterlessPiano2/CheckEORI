export default function Address({ address }) {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-xl font-medium text-gray-900 sm:col-span-3">
        Address{" "}
      </dt>
      <dt className="text-lg font-medium text-gray-500">Street and number</dt>
      <dd className="mb-2 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
        {address.streetAndNumber}
      </dd>
      <dt className="text-lg font-medium text-gray-500">City Name </dt>
      <dd className="mb-2 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
        {address.cityName}
      </dd>
      <dt className="text-lg font-medium text-gray-500">PostCode</dt>
      <dd className="mb-2 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
        {address.postcode}
      </dd>
    </div>
  );
}
