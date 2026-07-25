import '../../src/css/dashboard.css';


document.addEventListener("DOMContentLoaded", () => {
    const sidebarTriggerButton = document.getElementById("sidebar-trigger")
    const backdrop = document.getElementById("backdrop")


    const handleSidebar = () => {
        const sidebar = document.querySelector(".sidebar")

        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open")
            backdrop.classList.remove("open")
        } else {
            sidebar.classList.add("open")
            backdrop.classList.add("open")
        }
    }

    if (sidebarTriggerButton)
        sidebarTriggerButton.addEventListener("click", handleSidebar)

    if (backdrop) {
        backdrop.addEventListener("click", handleSidebar)
    }

})