import React, { useState, useEffect } from 'react';
import { Button, TextInput, Label, ToggleSwitch } from 'flowbite-react';

export default function Settings() {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch user details from local storage or API
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserDetails(user);
    }

    // Fetch theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSaveDetails = () => {
    // Save user details to local storage or API
    localStorage.setItem('user', JSON.stringify(userDetails));
    alert('User details updated successfully!');
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Settings</h1>
      <div className="mb-4">
        <Label htmlFor="firstname">First Name</Label>
        <TextInput
          id="firstname"
          name="firstname"
          value={userDetails.firstname}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="lastname">Last Name</Label>
        <TextInput
          id="lastname"
          name="lastname"
          value={userDetails.lastname}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
        />
      </div>
      <Button onClick={handleSaveDetails}>Save Details</Button>

      <div className="mt-8">
        <Label htmlFor="theme-toggle">Dark Mode</Label>
        <ToggleSwitch
          id="theme-toggle"
          checked={theme === 'dark'}
          onChange={handleThemeToggle}
        />
      </div>
    </div>
  );
}