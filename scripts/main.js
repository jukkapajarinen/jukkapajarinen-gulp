/**********************************************************************/
/* Document ready handler
/**********************************************************************/
const onReady = () => {
  $("#theme-toggler").on("click", (e) => {
    e.preventDefault();
    const currentTheme = $("html").attr("data-theme");
    $("html").attr("data-theme", currentTheme === "dark" ? "light" : "dark");
  });
};

/**********************************************************************/
/* Initially call the onReady handler
/**********************************************************************/
$(onReady);
