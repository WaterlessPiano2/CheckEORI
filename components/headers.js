import Search from "./search";

export default function Header({ searchResult }) {
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-rows-2  gap-4 px-4 py-5 sm:px-6">
        <h3 className="text-3xl leading-6 font-medium text-gray-900">
          Enter the EORI number you want to check
        </h3>
        <p className="max-w-2xl text-lg text-gray-500">
          This will start with ‘GB’ or 'XI' followed by 12 numbers, for example
          GB123456789000.
        </p>
      </div>
      <Search result={(e) => searchResult(e)} />
    </div>
  );
}
