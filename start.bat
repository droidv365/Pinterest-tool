@echo off
title DroidV Pinterest Tool Local Server
echo ===================================================
echo   Starting DroidV Pinterest Tool Local Server...
echo ===================================================
echo.
timeout /t 1 /nobreak >nul
start http://127.0.0.1:3000
python -m http.server 3000 --bind 127.0.0.1
if %errorlevel% neq 0 (
    echo.
    echo Python failed. Trying py launcher...
    py -m http.server 3000 --bind 127.0.0.1
)
pause
