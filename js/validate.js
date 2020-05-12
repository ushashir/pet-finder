// Validate Zipcode
export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

// Display Alert Message
export function showAlert(message, className) {
  const div = document.createElement('div'); // Create div
  div.className = `alert alert-${className}`; // Add Classes
  div.appendChild(document.createTextNode(message)); // Add Text
  const container = document.querySelector('.container'); // Get Container
  const form = document.querySelector('#pet-form'); // Get Form
  container.insertBefore(div, form); // Insert Alert
  
  setTimeout(() => document.querySelector('.alert').remove(), 3000); //clear alert after 3 seconds
}
