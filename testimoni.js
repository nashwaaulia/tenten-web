// DATA TESTIMONI AWAL
const testimonials = [
    { 
        name: "Siti Maharani", 
        img: "https://randomuser.me/api/portraits/women/68.jpg", 
        rate: 4, 
        text: "Enak banget, teksturnya lembut dan aroma taronya pas!" 
    },
    { 
        name: "Rizal Hakim", 
        img: "https://randomuser.me/api/portraits/men/32.jpg", 
        rate: 5, 
        text: "Cokelatnya pekat, ketan hitamnya bikin unik dan nagih." 
    },
    { 
        name: "Nurul Aini", 
        img: "https://randomuser.me/api/portraits/women/45.jpg", 
        rate: 3, 
        text: "Cantik dilihat, lembut dimakan, manisnya pas!" 
    },
    { 
        name: "Ahmad Taufiq", 
        img: "https://randomuser.me/api/portraits/men/75.jpg", 
        rate: 4, 
        text: "Harumnya bikin lapar, rasa tapenya benar-benar terasa." 
    },
    { 
        name: "Fajar Kurniawan", 
        img: "https://randomuser.me/api/portraits/men/12.jpg", 
        rate: 4, 
        text: "Gurih dan manisnya balance, lembut banget!" 
    },
    { 
        name: "Maya Utami", 
        img: "https://randomuser.me/api/portraits/women/33.jpg", 
        rate: 4, 
        text: "Kulitnya renyah, brownies di dalamnya super moist!" 
    }
];


// FUNGSI RENDER TESTIMONI
function renderTestimonials() {
    let html = "";

    testimonials.forEach((t, i) => {
        html += `
        <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="${i * 100}">
            <div class="testimonial-card">
                <div class="d-flex align-items-center mb-3">
                    <img src="${t.img}" class="profile-img me-3">
                    <div>
                        <h5 class="mb-1">${t.name}</h5>
                        <div class="rating">
                            ${'<i class="fa-solid fa-star"></i>'.repeat(t.rate)}
                            ${'<i class="fa-regular fa-star"></i>'.repeat(5 - t.rate)}
                        </div>
                    </div>
                </div>
                <p>"${t.text}"</p>
            </div>
        </div>`;
    });

    document.getElementById("testimoniList").innerHTML = html;
}


// LOAD TESTIMONI AWAL
document.addEventListener("DOMContentLoaded", renderTestimonials);


// FORM INPUT TESTIMONI BARU
document.getElementById("testimoniForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const foto = document.getElementById("foto").value;
    const komentar = document.getElementById("komentar").value;
    const rating = parseInt(document.getElementById("rating").value);

    // MASUKKAN KE ARRAY
    testimonials.push({
        name: nama,
        img: foto,
        text: komentar,
        rate: rating
    });

    // UPDATE TAMPILAN
    renderTestimonials();

    // RESET FORM
    this.reset();
});
