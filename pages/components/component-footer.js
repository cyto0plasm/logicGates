(() => {
  // figure out base path automatically
  let ROOT = "/";
  const path = window.location.pathname.split("/").filter(Boolean);

  // If hosted on GitHub Pages, add repo name as root
  if (window.location.hostname.includes("github.io") && path.length > 0) {
    ROOT = `/${path[0]}/`;
  }

  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-[#273430] text-white py-[20px]">
          <div class="flex flex-row justify-around leading-relaxed">
            <div id="leader">
              <h3 class="font-bold text-[1rem] text-[#75d8bc]">Leader</h3>
              <h2>Mohamed Elsify</h2>
            </div>
            <!-- ... your other footer sections ... -->

            <div class="w-[180px]" id="social">
              <img width="80" height="80" src="${ROOT}assets/img/logo.ps.png" alt="Logo" />
              <p class="text-gray-600 dark:text-gray-400">
                © ${new Date().getFullYear()} 
                <a href="${ROOT}index.html" class="text-blue-600 dark:text-blue-400 hover:underline">Logical Gates</a>. 
                All Rights Reserved.
              </p>
              <div class="flex flex-row justify-around">
                <a href="https://www.youtube.com/@yousifzaky3661 " target="_blank">
                  <img src="${ROOT}assets/img/youtube-line.png" width="30" alt="Youtube" />
                </a>
                <a href="https://www.linkedin.com/in/youssef-zakiz" target="_blank" rel="noopener noreferrer">
                  <img src="${ROOT}assets/img/linkedin (1).png" width="30" alt="LinkedIn" style="filter: brightness(0) invert(1);" />
                </a>
                <a href="https://github.com/cyto0plasm" target="_blank">
                  <img src="${ROOT}assets/img/git.png" width="30" alt="GitHub" style="filter: brightness(0) invert(1);" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      `;
    }
  }

  customElements.define("my-footer", MyFooter);
})();
