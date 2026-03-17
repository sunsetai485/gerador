# Pooh Deploy — Gerador de Esquema EasyPanel

Página estática que gera variáveis de ambiente e o JSON de schema para criar projetos no EasyPanel a partir do repositório GitHub.

## Deploy no EasyPanel (GitHub)

1. Envie este repositório para o GitHub (ex.: `sunsetai485/pooh-deploy` ou outro).
2. No EasyPanel: **Create** → **App** → **GitHub**.
3. Selecione o repositório e o branch (ex.: `main`).
4. **Build**: Dockerfile.
5. **Port**: `80` (ou configure o proxy para a porta que o serviço expõe).
6. Adicione o domínio desejado (ex.: `deploy.pooh.pro`) e faça o deploy.

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
