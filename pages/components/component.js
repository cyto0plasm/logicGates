(() => {
  // figure out base path automatically
  let ROOT = "/";
  const path = window.location.pathname.split("/").filter(Boolean);

  // If hosted on GitHub Pages, add repo name as root
  if (window.location.hostname.includes("github.io") && path.length > 0) {
    ROOT = `/${path[0]}/`;
  }

  class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
       <nav class="bg-white border-gray-200 dark:bg-[#273430]">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"
      >
        <a
          href="${ROOT}index.html"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            id="logo"
            src="assets/img/logo.ps.png"
            alt="New Era Logo"
            width="70"
            height="70"
            class="object-contain"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Logical Gates</span
          >
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            id="nav-btns"
            class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
          >
            <li>
              <a
                href="${ROOT}index.html"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
                >Home</a
              >
            </li>
            <li class="relative">
              <a
                href="${ROOT}#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                id="gates-link"
                >Gates
                <img
                  src="assets/img/down-arrow.png"
                  width="30px"
                  style="display: inline; filter: invert(1)"
                  alt=""
                />
              </a>
              <!-- sublist -->
              <ul
                class="z-10 hidden md:pt-2 md:absolute md:top-[44px] md:left-[-45px] md:w-[150px] md:px-4 bg-[#273430] text-nowrap sm:pl-4"
                id="gates-list"
              >
                <li>
                  <a
                    href="${ROOT}pages/page/Gates.html"
                    class="block h-[35px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >Introduction</a
                  >
                </li>
                <li>
                  <a
                    href="${ROOT}pages/page/calculator.html"
                    class="block h-[35px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >Gates Calculator</a
                  >
                </li>
                <li>
                  <a
                    href="${ROOT}pages/page/board.html"
                    class="block h-[35px] py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >Gates Board</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a
                href="${ROOT}pages/page/Project.html"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Project</a
              >
            </li>
            <li>
              <a
                href="${ROOT}pages/page/Team.html"
                class="block py-2 px-3 text-grayf-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Team</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;

      // Mobile toggle (so you don't need Flowbite)
      const btn = this.querySelector('[data-collapse-toggle="navbar-default"]');
      const menu = this.querySelector("#navbar-default");
      btn?.addEventListener("click", () => {
        menu?.classList.toggle("hidden");
      });
    }
  }
  customElements.define("my-header", MyHeader);
})();
