
const Confirmation = () => {
  return (
    <>
      <div className="bg-tourPurple flex flex-col h-screen items-center justify-center">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-badge-check text-white animate-bounce"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <p className="text-white text-xl px-2 py-2">
          Your booking has been confirmed
        </p>
        <p className="text-white text-xl px-2 py-2">
          Booking ID: <span className="font-bold">IKL4P0KN55</span>
        </p>
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-white text-lg px-2 py-2 underline font-semibold"
          >
            Home
          </a>
          <a
            href="/"
            className="text-white text-lg px-2 py-2 underline font-semibold"
          >
            Track Status
          </a>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
