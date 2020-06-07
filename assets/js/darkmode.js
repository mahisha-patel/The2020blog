let darkMode = sessionStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
	document.body.classList.add("dark-mode");
	sessionStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
	document.body.classList.remove("dark-mode");
	sessionStorage.setItem("darkMode", null);
}

if (darkMode === "enabled"){
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
	darkMode = sessionStorage.getItem("darkMode");
	if(darkMode !== "enabled"){
		enableDarkMode();
		//console.log(darkMode);
	}
	else{
		disableDarkMode();
		//console.log(darkMode);
	}
})