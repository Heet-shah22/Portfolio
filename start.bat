@echo off
cd /d "%~dp0"
echo Starting Heet's Portfolio...
start http://localhost:3000
npm run dev
pause
