// tabs.js
document.addEventListener('DOMContentLoaded', function() {
  // Tab Functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.dataset.tab;

      // Remove active classes
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active classes
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

document.querySelectorAll('.skill-header').forEach(header => {
  header.addEventListener('click', function(e) {
    e.stopPropagation();
    const parent = this.closest('.skill-item');
    
    document.querySelectorAll('.skill-item.active').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });
    
    parent.classList.toggle('active');
  });
});

// Inventory Accordion
document.querySelectorAll('.inv-header').forEach(header => {
  header.addEventListener('click', function(e) {
    e.stopPropagation();
    const parent = this.closest('.inv-item');
    
    document.querySelectorAll('.inv-item.active').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });
    
    parent.classList.toggle('active');
  });
});
});

// Close all accordions on page load (optional)
// document.querySelectorAll('.skill-item').forEach(item => item.classList.remove('active'))