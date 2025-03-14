window.onload = function () {
    console.log("JavaScript is running!");  
    const currentHour = new Date().getHours();
    const greetingElement = document.getElementById("greeting-text");
  
    if (greetingElement) {
      let greetingMessage;
  
      if (currentHour >= 6 && currentHour < 12) {
        greetingMessage = "Good Morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon";
      } else if (currentHour >= 18 && currentHour < 22) {
        greetingMessage = "Good Evening";
      } else {
        greetingMessage = "Good Night";
      }
  
      greetingElement.textContent = greetingMessage;
    } else {
      console.error("Greeting element not found!");
    }
  };
  