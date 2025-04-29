(function () {
    async function initChatbot(options) {
      const { token, clientId } = options;
  
      try {
        const response = await fetch('http://localhost:3000/validate-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        });
  
        const result = await response.json();
  
        if (result.status === 'valid') {
          console.log('Token is valid. Loading chatbot...');
  
          
          const script = document.createElement('script');
          script.src = 'https://testmyprompt.com/widget/6809b3a1523186af0b2c9933/widget.js'; 
          document.body.appendChild(script);
  
        } else {
          console.error('Access denied: Invalid or expired token.');
        }
      } catch (error) {
        console.error('Error validating token:', error);
      }
    }
  
    window.MyChatWidget = {
      init: initChatbot
    };
  })();
  