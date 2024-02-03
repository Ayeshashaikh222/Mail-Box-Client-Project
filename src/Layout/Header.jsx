const Header = () => {
  return (
    <>
      <div className="flex min-w-screen justify-between p-4 bg-slate-100 rounded">
        <div className="flex  items-center">
          <h1 className="text-brown font-sans font-bold">Mail Box client</h1>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <button className="text-brown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </button>
          <span className="text-brown font-semibold">Log Out</span>
        </div>
      </div>
    </>
  );
};

export default Header;
