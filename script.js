document.getElementById('searchBar').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let cars = document.querySelectorAll('.car');

    cars.forEach(car => {
        let title = car.querySelector('h3').textContent.toUpperCase();
        if (title.includes(filter)) {
            car.style.display = "";
        } else {
            car.style.display = "none";
        }
    });
});