# E-Commerce App (Docker + Caddy + Vite + Node)

This repo runs a multi-service app with Docker: **API (Node/Express)**, **Frontend (Vite/React)**, and **Admin (Vite/React)**. **Caddy** is used as a reverse proxy and provides **local HTTPS** using `local_certs`.

Open these URLs after you start the containers:
- https://auth.localhost (Frontend)
- https://api.auth.localhost (API)
- https://admin.auth.localhost (Admin)

---

## Setup

### 1) Hosts file
Add the following lines to your hosts file so these domains resolve locally:

- macOS / Linux: `/etc/hosts`
- Windows: `C:\Windows\System32\drivers\etc\hosts`

```txt
127.0.0.1 auth.localhost
127.0.0.1 api.auth.localhost
127.0.0.1 admin.auth.localhost
```

### 2) Environment files (.env)
This repo does not include real .env files (only .env.example). After cloning, you must create .env files by copying the examples, then edit them with your own values. Create .env files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp admin/.env.example admin/.env
```

Then edit the created .env files:

backend/.env: set database connection, JWT secret, Cloudinary keys, admin credentials, etc.

frontend/.env: set the API base URL

admin/.env: set the API base URL

Recommended for both frontend/.env and admin/.env:

VITE_BACKEND_URL=https://api.auth.localhost


Important: do not call the API with :4000 in the browser (for example https://api.auth.localhost:4000). Use:

https://api.auth.localhost

### 3) Run with Docker Compose

From the project root:

docker compose up --build

### 4) Trust the Caddy local HTTPS certificate (remove “Not Secure” warning)
Caddy generates a local root certificate when using `local_certs`. Your browser may show “Not Secure” until you trust this certificate on your machine.

1) Find the certificate path inside the Caddy container:
```bash
docker compose exec caddy sh -lc "find /data -name root.crt -print"
Most commonly it will be:

txt
Copy code
/data/caddy/pki/authorities/local/root.crt
Copy the certificate from the container to your host (project folder):

bash
Copy code
docker compose cp caddy:/data/caddy/pki/authorities/local/root.crt ./caddy/root.crt
Add it to your OS trust store (Keychain / Trusted Root):

macOS (Terminal):

bash
Copy code
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./caddy/root.crt
macOS (Keychain UI):

Open Keychain Access

Select System keychain

Import ./caddy/root.crt

Double-click the certificate → expand Trust → set Always Trust

Windows:

Double-click root.crt

Install Certificate → Local Machine

Place in Trusted Root Certification Authorities

Linux (example):

bash
Copy code
sudo cp ./caddy/root.crt /usr/local/share/ca-certificates/caddy-root.crt
sudo update-ca-certificates
Restart your browser completely and open:

https://auth.localhost

https://api.auth.localhost

https://admin.auth.localhost

