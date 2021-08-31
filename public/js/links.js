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
  console.log("Responding");
  
  const response = await fetch('/dashboard', {
    method: 'GET',
});

document.getElementById("loginBtn").addEventListener("click", function()
{ 
  alert("Hello Login!"); 
});

document.getElementById("logoutBtn").addEventListener("click", function()
{ 
  alert("Hello Logout!"); 
});