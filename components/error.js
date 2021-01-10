export default function Error({ message }) {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:px-6 text-center">
      <div className="text-lg font-medium text-red-500 ">
        {message}{" "}
      </div>   
       </div>
  );
}
