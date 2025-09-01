(function () {
  const isGithub = window.location.hostname.includes("github.io");
  const base = document.createElement("base");

  // change this to your repo name
  base.href = isGithub ? "/logicGates/" : "/";
  document.head.appendChild(base);
})();
