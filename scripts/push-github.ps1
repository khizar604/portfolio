$ErrorActionPreference = "Stop"

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

Set-Location (Split-Path $PSScriptRoot -Parent)

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Not logged into GitHub. Run: gh auth login --web"
  exit 1
}

$username = "khizar604"
$repoName = "portfolio"

git branch -M main

$remoteUrl = "https://github.com/$username/$repoName.git"
$existingRemote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
  git remote add origin $remoteUrl
} elseif ($existingRemote -ne $remoteUrl) {
  git remote set-url origin $remoteUrl
}

gh repo view "$username/$repoName" 2>$null
if ($LASTEXITCODE -ne 0) {
  gh repo create $repoName --public --source=. --remote=origin --push --description "Portfolio of Muhammad Khizar Irfan - MERN Stack Web Developer"
} else {
  git push -u origin main
}

Write-Host ""
Write-Host "Repository URL: https://github.com/$username/$repoName"
