export async function handler(event, context) {
  // This is just a passthrough function - in a real application
  // you might process form submissions here
  
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    // The actual email sending is done client-side with EmailJS
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submission successful" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error processing form submission" }),
    };
  }
}