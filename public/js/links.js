document.getElementById("homeBtn").addEventListener("click", async function()
{ 
  const response = await fetch('/', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to navigate to Home');
  }
});

document.getElementById("dashboardBtn").addEventListener("click", async function()
{ 
  const response = await fetch('/dashboard', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to navigate to Dashboard');
  }
});

// document.getElementById("loginBtn").addEventListener("click", async function()
// { 
//   const response = await fetch('/login', {
//     method: 'GET',
//   });

//   if (response.ok) {
//     document.location.replace('/login');
//   } else {
//     alert('Failed to navigate to Login');
//   }
// });