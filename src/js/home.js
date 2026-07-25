import '../../src/css/home.css';

document.addEventListener("DOMContentLoaded", () => {
    const requestForm = document.getElementById("requestForm");
    const requestList = document.getElementById("requestList");

    let requests = JSON.parse(localStorage.getItem("requests")) || [];

    // ثبت درخواست جدید
    if (requestForm) {
        requestForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let phone = document.getElementById("phone-number").value.trim();
            let service = document.getElementById("services").value;

            if (!name || !phone || !service) {
                alert("لطفاً همه فیلدها را پر کنید.");
                return;
            }

            requests.push({ name, phone, service });
            localStorage.setItem("requests", JSON.stringify(requests));
            alert("درخواست ثبت شد!");
            requestForm.reset();
            renderRequests();
        });
    }




    function renderRequests() {
        const requestTableList = document.getElementById("requestTableList");
        const requestGridList = document.getElementById("requestGridList");

        requestTableList.innerHTML = "";
        requestGridList.innerHTML = "";

        requests.forEach((request, index) => {
            // نمایش جدول برای صفحه‌های بزرگ‌تر از 580px
            if (window.innerWidth > 580) {
                const row = document.createElement("tr");
                row.className = "border-b last:border-none hover:bg-gray-100 transition";

                row.innerHTML = `
                <td class="p-4">${request.name}</td>
                <td class="p-4">${request.phone}</td>
                <td class="p-4">${request.service}</td>
                <td class="p-4 text-center">
                    <button class="delete-btn bg-red-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-700 transition" data-index="${index}">
                        حذف
                    </button>
                </td>
            `;

                row.querySelector(".delete-btn").addEventListener("click", () => {
                    requests.splice(index, 1);
                    localStorage.setItem("requests", JSON.stringify(requests));
                    renderRequests();
                });

                requestTableList.appendChild(row);
            }
            // نمایش Grid برای صفحه‌های کوچکتر از 580px
            else {
                const row = document.createElement("div");
                row.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-b last:border-none hover:bg-gray-100 transition p-4 items-center";

                row.innerHTML = `
                <div class="p-4 bg-teal-200 rounded-md">نام و نام خانوادگی : ${request.name}</div>
                <div class="p-4 bg-teal-200 rounded-md">شماره تلفن : ${request.phone}</div>
                <div class="p-4 bg-teal-200 rounded-md">خدمت درخواستی : ${request.service}</div>
                <div class="p-4 text-center">
                    <button class="delete-btn bg-red-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-700 transition" data-index="${index}">
                        حذف
                    </button>
                </div>
            `;

                row.querySelector(".delete-btn").addEventListener("click", () => {
                    requests.splice(index, 1);
                    localStorage.setItem("requests", JSON.stringify(requests));
                    renderRequests();
                });

                requestGridList.appendChild(row);
            }
        });
    }

    // اجرای مجدد تابع هنگام تغییر سایز صفحه
    window.addEventListener("resize", renderRequests);

    // اجرای اولیه هنگام بارگذاری صفحه
    renderRequests();
});