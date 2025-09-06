# Monorepo layout (Phase 1)

- frontend/ : commands to run/build the Next.js app at repo root (src/, public/).
- backend/  : commands to run APIs located in api-server/ (Express) and netlify-bisonte-api/ (Functions), plus prisma/.

Next steps (Phase 2):
1) Move src/, public/, next.config.js, tailwind.config.js, postcss.config.js, middleware.js into frontend/ and update tool configs.
2) Move api-server/, netlify-bisonte-api/, prisma/ into backend/ and fix import paths.
3) Split env files: frontend/.env, backend/.env; document shared vars in /.env.shared.
4) Set up workspaces if desired (npm, pnpm, or yarn) to dedupe deps.
