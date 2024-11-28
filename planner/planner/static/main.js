function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    menu.classList.toggle('hidden');
    menu.classList.toggle('transform');
    menu.classList.toggle('scale-95');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('scale-100');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  }

  function toggleDropdown() {
    const dropdown = document.getElementById('user-menu');
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('transform');
    dropdown.classList.toggle('scale-95');
    dropdown.classList.toggle('opacity-0');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

function changeStatus(taskId, status, colorClass) {
    const statusElement = document.getElementById(`status-${taskId}`);
    statusElement.textContent = status;
    statusElement.className = `font-semibold ${colorClass}`;
}

document.addEventListener('click', (event) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdown = document.getElementById('user-menu');
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const dropdownButton = document.getElementById('user-menu-button');

    // Close mobile menu if clicking outside
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target) &&
      !mobileMenu.classList.contains('hidden')
    ) {
      mobileMenu.classList.add('hidden', 'transform', 'scale-95', 'opacity-0');
      mobileMenu.classList.remove('opacity-100', 'scale-100');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }

    // Close dropdown menu if clicking outside
    if (
      !dropdown.contains(event.target) &&
      !dropdownButton.contains(event.target) &&
      !dropdown.classList.contains('hidden')
    ) {
      dropdown.classList.add('hidden', 'transform', 'scale-95', 'opacity-0');
      dropdown.classList.remove('opacity-100', 'scale-100');
    }
  });