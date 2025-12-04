"use strict";

(function () {

    window.addEventListener("load", init);

    function init() {
        const testimoniForm = document.getElementById("testimoniForm");
        if (testimoniForm) {
            testimoniForm.addEventListener("submit", tambahTestimoni);
        }
    }


    function tambahTestimoni(e) {
        e.preventDefault();

        const form = e.currentTarget;

        // Cek Validation
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        const nama = document.getElementById("nama").value;
        const foto = document.getElementById("foto").value;
        const komentar = document.getElementById("komentar").value;
        const rating = parseInt(document.getElementById("rating").value);
        const testimoniList = document.getElementById("testimoniList");

        // HTML untuk testimoni baru
        const htmlBaru = `
            <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="0">
                <div class="testimonial-card">
                    <div class="d-flex align-items-center mb-3">
                        <img src="${foto}" class="profile-img me-3" alt="${nama}">
                        <div>
                            <h5 class="mb-1">${nama}</h5>
                            <div class="rating">
                                ${'<i class="fa-solid fa-star"></i>'.repeat(rating)}
                                ${'<i class="fa-regular fa-star"></i>'.repeat(5 - rating)}
                            </div>
                        </div>
                    </div>
                    <p>"${komentar}"</p>
                </div>
            </div>`;

        if (testimoniList) {
            testimoniList.insertAdjacentHTML('afterbegin', htmlBaru);
        }

        if (typeof AOS !== 'undefined') {
            AOS.refreshHard();
        }

        form.reset();
        form.classList.remove("was-validated");
    }

})();


(() => {
    "use strict";
    const forms = document.querySelectorAll(".form-card form");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                form.classList.add("was-validated");
            },
            false
        );
    });
})();