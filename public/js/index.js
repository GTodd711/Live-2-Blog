document.addEventListener('DOMContentLoaded', () => {
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');
        
        try {
          const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
          
          if (response.ok) {
            // Redirect to the homepage or dashboard after successful login
            window.location.href = '/';
          } else {
            // Handle login failure
            const responseData = await response.json();
            console.error('Login failed:', responseData.message);
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      });
    }
    
    // Create post form submission
    const postForm = document.getElementById('postForm');
    if (postForm) {
      postForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(postForm);
        const title = formData.get('title');
        const content = formData.get('content');
        
        try {
          const response = await fetch('/posts/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
          });
          
          if (response.ok) {
            // Redirect to the post detail page after successful post creation
            window.location.href = '/';
          } else {
            // Handle post creation failure
            const responseData = await response.json();
            console.error('Post creation failed:', responseData.message);
          }
        } catch (error) {
          console.error('Error during post creation:', error);
        }
      });
    }
    
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', async () => {
        try {
          const response = await fetch('/auth/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          if (response.ok) {
            // Redirect to the home page after successful logout
            window.location.href = '/';
          } else {
            // Handle logout failure
            console.error('Logout failed');
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      });
    }
    
  });
  