# Gerador Klinvia — Esquema EasyPanel

Página que gera variáveis de ambiente e o JSON de schema para criar projetos no EasyPanel a partir dos repositórios `klinvia_front` e `klinvia_back`.

## Deploy no EasyPanel (GitHub)

1. Repositório: `sunsetai485/gerador` (branch `main`).
2. No EasyPanel: **Create** → **App** → **GitHub**.
3. **Build**: Dockerfile.
4. **Port**: `80`.
5. Configure o domínio interno desejado e faça o deploy.

## Rodar localmente

```bash
npm start
# ou
python3 -m http.server 8888
```

Acesse: `http://localhost:8888/` (ou o IP/porta indicados). O arquivo servido é `gerador-easypanel.html` (no Docker é servido como `index.html` na raiz).

## Estrutura

- `gerador-easypanel.html` — aplicação única (HTML + CSS + JS).
- `Dockerfile` — build com nginx para servir a página na porta 80.
- `package.json` — scripts locais (opcional para o deploy).
