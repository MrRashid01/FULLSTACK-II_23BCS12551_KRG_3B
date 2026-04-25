import { useState } from 'react';

function App() {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic check to prevent submission if either field is empty
    if (patientName.trim() === '' || email.trim() === '') {
      alert('Please fill in both fields');
      return;
    }

    // Log the form values to the console
    console.log({ patientName, email });

    // Reset both fields to empty strings
    setPatientName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Patient Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
