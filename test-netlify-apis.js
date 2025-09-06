const https = require('https');

console.log('🧪 TESTING NETLIFY FUNCTIONS');
console.log('=============================');

const API_BASE = 'https://bisontebackend.netlify.app/.netlify/functions';

function testAPI(endpoint, method = 'GET', data = null) {
  return new Promise((resolve) => {
    const url = new URL(`${API_BASE}${endpoint}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Bisonte-Test-Client'
      }
    };

    if (data && method !== 'GET') {
      const postData = JSON.stringify(data);
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve({
            status: res.statusCode,
            statusText: res.statusMessage,
            data: parsed,
            success: res.statusCode >= 200 && res.statusCode < 300
          });
        } catch (error) {
          resolve({
            status: res.statusCode,
            statusText: res.statusMessage,
            data: responseData,
            success: res.statusCode >= 200 && res.statusCode < 300
          });
        }
      });
    });

    req.on('error', (error) => {
      resolve({
        status: 0,
        statusText: 'Network Error',
        data: { error: error.message },
        success: false
      });
    });

    if (data && method !== 'GET') {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function runTests() {
  console.log('\n🔍 Testing Health Check...');
  const healthResult = await testAPI('/health-compact2');
  console.log(`Status: ${healthResult.status} - ${healthResult.success ? '✅' : '❌'}`);
  if (healthResult.success) {
    console.log(`API Status: ${healthResult.data.status}`);
  }

  console.log('\n🔍 Testing Config...');
  const configResult = await testAPI('/config');
  console.log(`Status: ${configResult.status} - ${configResult.success ? '✅' : '❌'}`);
  if (configResult.success) {
    console.log(`App Name: ${configResult.data.appName}`);
  }

  console.log('\n🔍 Testing Login...');
  const loginResult = await testAPI('/login', 'POST', {
    email: 'admin@bisonteapp.com',
    password: 'admin123'
  });
  console.log(`Status: ${loginResult.status} - ${loginResult.success ? '✅' : '❌'}`);
  if (loginResult.success) {
    console.log(`User: ${loginResult.data.user.name}`);
    console.log(`Role: ${loginResult.data.user.role}`);
  }

  console.log('\n🔍 Testing Register...');
  const registerResult = await testAPI('/register', 'POST', {
    email: 'test@example.com',
    password: 'test123',
    name: 'Test User'
  });
  console.log(`Status: ${registerResult.status} - ${registerResult.success ? '✅' : '❌'}`);

  console.log('\n🔍 Testing Password Recovery...');
  const recoveryResult = await testAPI('/password-recovery', 'POST', {
    email: 'test@example.com'
  });
  console.log(`Status: ${recoveryResult.status} - ${recoveryResult.success ? '✅' : '❌'}`);

  console.log('\n🔍 Testing Ping...');
  const pingResult = await testAPI('/ping');
  console.log(`Status: ${pingResult.status} - ${pingResult.success ? '✅' : '❌'}`);

  console.log('\n📊 TESTING SUMMARY');
  console.log('==================');
  
  const tests = [
    { name: 'Health Check', result: healthResult },
    { name: 'Config', result: configResult },
    { name: 'Login', result: loginResult },
    { name: 'Register', result: registerResult },
    { name: 'Password Recovery', result: recoveryResult },
    { name: 'Ping', result: pingResult }
  ];

  const passed = tests.filter(t => t.result.success).length;
  const total = tests.length;

  console.log(`✅ Passed: ${passed}/${total}`);
  console.log(`❌ Failed: ${total - passed}/${total}`);

  if (passed === total) {
    console.log('\n🎉 ALL TESTS PASSED! APIs are ready for production.');
  } else {
    console.log('\n⚠️  Some tests failed. Check the APIs.');
  }
}

runTests().catch(console.error);
