(() => {
  const cs = document.currentScript;
  let ROOT = "/";
  if (cs?.dataset?.root) {
    ROOT = cs.dataset.root.endsWith("/")
      ? cs.dataset.root
      : cs.dataset.root + "/";
  } else if (cs?.src) {
    try {
      const url = new URL(cs.src, window.location.href);
      const parts = url.pathname.split("/").filter(Boolean);
      ROOT =
        "/" + parts.slice(0, Math.max(0, parts.length - 2)).join("/") + "/";
    } catch (_) {
      ROOT = "/";
    }
  }

  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
 



        <footer id="footer" class="bg-[#273430] text-white py-[20px]">
  <div class="flex flex-row justify-around leading-relaxed">
    <div id="leader">
      <h3 class="font-bold text-[1rem] text-[#75d8bc]">Leader</h3>
      <h2>Mohamed Elsify</h2>
    </div>
    <div id="emplementers">
      <h2 class="font-bold text-[1rem] text-[#75d8bc]">Project Implementers</h2>
      <ul>
        <li>Osama Hamada</li>
        <li>Esraa Fayez</li>
        <li>Kero</li>
        <li>Mohamed Abo Arab</li>
        <li>Rehab</li>
      </ul>
    </div>
    <div id="Website">
      <h2 class="font-bold text-[1rem] text-[#75d8bc]">Website</h2>
      <ul>
        <li>Aya</li>
        <li>Donia</li>
        <li>Kareem</li>
        <li>Mahmoud Al-Amouri</li>
        <li>Yousif Zaki</li>
      </ul>
    </div>
    <div id="catalog">
      <h2 class="font-bold text-[1rem] text-[#75d8bc]">Catalog</h2>
      <ul>
        <li>Emaan Amr</li>
        <li>Mohamed Ebrahim</li>
      </ul>
    </div>
    <div id="Video">
      <h2 class="font-bold text-[1rem] text-[#75d8bc]">Video</h2>
      <ul>
        <li>Asmaa</li>
      </ul>
    </div>

    <!-- Social Media -->
    <div class="w-[180px]" id="social">
<img width="80px" height="80px" src="${ROOT}../assets/img/logo.ps.png" alt="Logo" />
        <p class="text-gray-600 dark:text-gray-400">
              © ${new Date().getFullYear()} 
              <a href="/index.html" class="text-blue-600 dark:text-blue-400 hover:underline">Logical Gates</a>. 
              All Rights Reserved.
            </p>
      <div class="flex flex-row justify-around">
        <a href="https://www.youtube.com/@yousifzaky3661 " target="_blank"
          ><img src="${ROOT}../assets/img/youtube-line.png" width="30px" alt="Youtube" />
<a href="https://www.linkedin.com/in/youssef-zakiz" target="_blank" rel="noopener noreferrer">
  <img src="${ROOT}../assets/img/linkedin (1).png" width="30px" alt="LinkedIn" style="filter: brightness(0) invert(1);" />
</a>

</a>
        <a href="https://github.com/cyto0plasm" target="_blank"
          ><img src="${ROOT}../assets/img/git.png" width="30px" alt="GitHub" style="filter: brightness(0) invert(1);"/>
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
