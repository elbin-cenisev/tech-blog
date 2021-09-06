document.getElementById("homeLink").addEventListener("click", async function () {
    const response = await fetch('/', {
      method: 'GET',
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to navigate to Home');
    }
  });
  
  document.getElementById("dashboardLink").addEventListener("click", async function () {
    const response = await fetch('/dashboard', {
      method: 'GET',
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to navigate to Dashboard');
    }
  });
  
  if (document.getElementById("loginLink")) {
    document.getElementById("loginLink").addEventListener("click", async function () {
      const response = await fetch('/login', {
        method: 'GET',
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to navigate to Login');
      }
    });
  }
  
  if (document.getElementById("logoutLink")) {
    document.querySelector('#logoutLink').addEventListener('click', async function () {
      const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    });
  }