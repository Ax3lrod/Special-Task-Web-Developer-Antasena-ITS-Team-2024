document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.getElementById('closeButton');

    menuButton.addEventListener('click', function() {
        sidebar.classList.remove('translate-x-full');
    });

    closeButton.addEventListener('click', function() {
        sidebar.classList.add('translate-x-full');
    });
});
