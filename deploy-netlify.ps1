Write-Host "🚀 DEPLOYING NETLIFY FUNCTIONS" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Navegar al directorio de API
Set-Location "netlify-bisonte-api"

Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "📋 Functions available:" -ForegroundColor Blue
Get-ChildItem "netlify\functions\" | Select-Object Name

Write-Host "✅ Functions ready for deployment:" -ForegroundColor Green
Write-Host "  - login.js (POST /login)" -ForegroundColor White
Write-Host "  - register.js (POST /register)" -ForegroundColor White
Write-Host "  - password-recovery.js (POST /password-recovery)" -ForegroundColor White
Write-Host "  - health-compact2.js (GET /health-compact2)" -ForegroundColor White
Write-Host "  - config.js (GET /config)" -ForegroundColor White
Write-Host "  - ping.js (GET /ping)" -ForegroundColor White
Write-Host "  - test-ok.js (GET /test-ok)" -ForegroundColor White
Write-Host "  - google2.js (OAuth Google)" -ForegroundColor White

Write-Host ""
Write-Host "🌐 Deploy to Netlify:" -ForegroundColor Cyan
Write-Host "1. Conectar repositorio a Netlify" -ForegroundColor White
Write-Host "2. Set build directory: netlify-bisonte-api" -ForegroundColor White
Write-Host "3. Set functions directory: netlify/functions" -ForegroundColor White
Write-Host "4. Deploy!" -ForegroundColor White

Write-Host ""
Write-Host "📝 Environment variables needed in Netlify:" -ForegroundColor Yellow
Write-Host "  - NODE_ENV=production" -ForegroundColor White

Write-Host ""
Write-Host "✅ Ready for deployment!" -ForegroundColor Green

# Volver al directorio raíz
Set-Location ".."
