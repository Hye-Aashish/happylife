@echo off
setlocal enabledelayedexpansion
title HappyLife LMS Client - Local Launcher
cls
echo ======================================================================
echo          HappyLife LMS - High Performance Local Launcher
echo ======================================================================
echo.

cd /d %~dp0

:: Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH! Please install Node.js.
    pause
    exit /b 1
)

:: Step 1: Ensure Web Dependencies
echo [1/3] Checking Frontend Web dependencies (node_modules)...
if not exist "web\node_modules\vite" (
    echo [INFO] Installing Web dependencies... Please wait a moment...
    cd web && npm install && cd ..
) else (
    echo [OK] Web dependencies verified.
)

:: Step 2: Ensure Admin Dependencies if Admin folder exists
if exist "admin" (
    if not exist "admin\node_modules\vite" (
        echo [INFO] Admin node_modules missing. You can install via: cd admin ^&^& npm install
    )
)

echo.
echo ======================================================================
echo   Select an option to run:
echo   [1] Start Web Learner Frontend (Modern Redesigned UI)
echo   [2] Start Full-Stack System (Backend + Web + Admin)
echo   [3] Build Production Bundle (Vite Build Test)
echo   [4] Open Project in File Explorer
echo ======================================================================
echo.

set /p choice="Enter choice (1-4) [Default is 1]: "
if "%choice%"=="" set choice=1

if "%choice%"=="1" goto run_web
if "%choice%"=="2" goto run_all
if "%choice%"=="3" goto run_build
if "%choice%"=="4" goto open_explorer
goto run_web

:run_web
echo.
echo [STARTING] Launching Web Frontend on port 5180 (to avoid port 5173 conflicts)...
start "Client LMS Web Frontend" cmd /k "cd /d %~dp0web && npx vite --port 5180 --open"
goto end

:run_all
echo.
echo [STARTING] Launching Backend API, Web Frontend, and Admin Console...
if exist "backend" start "LMS - Backend API (5000)" cmd /k "cd /d %~dp0backend && node index.js"
start "LMS - Web Frontend (5180)" cmd /k "cd /d %~dp0web && npx vite --port 5180 --open"
if exist "admin" start "LMS - Admin Panel (5174)" cmd /k "cd /d %~dp0admin && npx vite --port 5174"
goto end

:run_build
echo.
echo [BUILD] Testing Vite production build...
cd /d %~dp0web && npm run build
pause
goto end

:open_explorer
explorer .
goto end

:end
echo.
echo ======================================================================
echo   Launcher started! Your browser will open at http://localhost:5180
echo ======================================================================
