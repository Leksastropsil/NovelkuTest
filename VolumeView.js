
    const navLinks = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.content');

    let currentIndex = 0; // Posisi awal adalah Preview (index 0)

    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        if (index === currentIndex) return; // Jika klik pada tab yang sama, tidak ada aksi

        // Tentukan arah animasi
        const isNext = index > currentIndex;

        // Sesuaikan transformasi konten
        contents[currentIndex].classList.remove('active');
        contents[currentIndex].classList.add(isNext ? 'left' : 'right'); // Geser ke kiri atau tetap di kanan

        // Tampilkan konten baru
        contents[index].classList.add('active');
        contents[index].classList.remove('left');

        // Perbarui navbar aktif
        navLinks[currentIndex].classList.remove('active');
        link.classList.add('active');

        // Perbarui indeks
        currentIndex = index;
      });
    });