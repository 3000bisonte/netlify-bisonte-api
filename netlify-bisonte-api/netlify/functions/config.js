exports.handler = async (event, context) => {
  // Headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const config = {
      appName: 'Bisonte Logística',
      version: '1.0.0',
      apiUrl: 'https://bisontebackend.netlify.app/.netlify/functions',
      frontendUrl: 'https://www.bisonteapp.com',
      features: {
        authentication: true,
        googleAuth: true,
        passwordRecovery: true,
        registration: true,
        admin: true
      },
      limits: {
        maxFileSize: '10MB',
        maxRequestsPerMinute: 100
      },
      contact: {
        email: 'soporte@bisonteapp.com',
        phone: '+57 300 123 4567'
      },
      social: {
        facebook: 'https://facebook.com/bisontelogistica',
        instagram: 'https://instagram.com/bisontelogistica'
      }
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(config),
    };

  } catch (error) {
    console.error('Config error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
