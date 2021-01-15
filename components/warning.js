export default function Warning() {
  return (
    <div className="border-gray-200 shadow-xl bg-gray-10 rounded-md my-4">
      <h3 className="bg-yellow-400 px-4 py-5 sm:px-6 text-3xl rounded-t-md leading-6 font-medium text-gray-900 flex">
        <div className="mx-0 w-6">
          <svg
            className="h-7 w-6 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        Warning!
        <p className="ml-4 text-lg">This website is work in progress!</p>
      </h3>
      <p className="px-4 pb-4 sm:px-6 text-md leading-6 font-medium text-gray-800">
        Data shown here is for test purposes only and it does not reflect real
        data.
        <br className="hidden sm:block" />
        While this is being built, you can{" "}
        <a
          className="underline text-blue-600 hover:text-green-600"
          href="https://www.gov.uk/check-eori-number"
        >
          click here
        </a>{" "}
        to use HMRC's official EORI look up feature.
      </p>
    </div>
  );
}
