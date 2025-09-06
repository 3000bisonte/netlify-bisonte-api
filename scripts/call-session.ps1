# Generate JWT and call /api/auth/session with Authorization header
$ErrorActionPreference = 'Stop'

$base = $env:BASE
if (-not $base -or $base -eq '') { $base = 'http://localhost:8080' }

$token = (node scripts/gen-jwt.js).Trim()
Write-Host "Token (first 20):" ($token.Substring(0, [Math]::Min(20, $token.Length)))

$headers = @{ Authorization = "Bearer $token" }
$response = Invoke-WebRequest -Uri "$base/api/auth/session" -Headers $headers -UseBasicParsing
$response.Content
