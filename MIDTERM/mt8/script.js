(function () {
    function setTheme(themeName) {
        document.body.classList.remove("theme-1", "theme-2", "theme-3", "theme-4"); 

        if(themeName && themeName !== "none"){
            document.body.classList.add(themeName);
        }

        document.querySelectorAll("nav ul li").forEach((li)=>{ 
            li.classList.remove("active");
            if (getThemeFromText(li.textContent || "") === themeName) {
                li.classList.add("active");
      }
    });
}

function getThemeFromText(text) { 
    const t = text.trim().toLowerCase().replace(/\s+/g, "");
    if (t.includes("stylesheet1")) return "theme-1";
    if (t.includes("stylesheet2")) return "theme-2";
    if (t.includes("stylesheet3")) return "theme-3";
    if (t.includes("stylesheet4")) return "theme-4";
    if (t.includes("nostylesheet")) return "none";
    return null;
}

function handleClick(e) {
    const el = e.currentTarget;
    const themeClass = getThemeFromText(el.textContent || "" );

    if (themeClass !== null) {
      setTheme(themeClass);
    }

    if (el.tagName="A"){
        e.preventDefault();
    }
}

function init (){
    document.querySelectorAll("nav ul li").forEach((li) => {
        li.addEventListener("click", handleClick);
    });
    setTheme("theme-1"); 
}

if(document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", init); 
} else {
    init();
}
})();