exports.handler = async (event, context) => {
  // Headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, password } = JSON.parse(event.body);

    if (!email || !password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email and password are required' }),
      };
    }

    // Validaciones básicas para demo
    // En producción aquí iría la validación contra base de datos
    const validUsers = [
      {
        email: 'admin@bisonteapp.com',
        password: 'admin123',
        id: 'admin',
        name: 'Administrador',
        role: 'admin',
        esAdministrador: true,
        esRecolector: false
      },
      {
        email: 'user@bisonteapp.com', 
        password: 'user123',
        id: 'user1',
        name: 'Usuario Demo',
        role: 'user',
        esAdministrador: false,
        esRecolector: false
      },
      {
        email: 'recolector@bisonteapp.com',
        password: 'recolector123', 
        id: 'recolector1',
        name: 'Recolector Demo',
        role: 'recolector',
        esAdministrador: false,
        esRecolector: true
      }
    ];

    const user = validUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid credentials' }),
      };
    }

    // Generar token simple para demo
    const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

    // Remover password del objeto usuario
    const { password: _, ...userWithoutPassword } = user;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        token,
        user: userWithoutPassword,
        expiresIn: '30d'
      }),
    };

  } catch (error) {
    console.error('Login error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
