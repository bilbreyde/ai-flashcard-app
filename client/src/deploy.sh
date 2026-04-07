@"
#!/bin/bash
cd server && npm install --production
cd ../client && npm install && npm run build
"@ | Out-File -FilePath deploy.sh -Encoding utf8