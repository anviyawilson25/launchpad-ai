// Check if a field is empty
export const isEmpty = (value) => {
  return value.trim() === "";
};

// Check minimum length
export const minLength = (value, length) => {
  return value.trim().length >= length;
};

// Basic email validation
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Basic phone number validation (10 digits)
export const isValidPhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

// Check if a dropdown value is selected
export const isSelected = (value) => {
  return value !== "";
};