(() => {
  "use strict";
  const e = document.querySelector("form");
  e.addEventListener("submit", (t) => {
    t.preventDefault();
    const o = ((e) => {
      const t = e.querySelectorAll("input");
      let o = {};
      return (
        t.forEach((e) => {
          o[e.id] = e.value;
        }),
        o
      );
    })(e);
    console.log(o);
  });
})();
