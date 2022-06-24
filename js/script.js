const headerLinks = document.querySelectorAll(".header-menu a");

if (headerLinks) {
  function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add("ativo");
    }
  }

  headerLinks.forEach(ativarLink);
}
