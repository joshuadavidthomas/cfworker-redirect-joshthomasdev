# cfworker-redirect-joshthomasdev

A simple Cloudflare Worker to redirect the domain I previously used for my personal site ([joshuadavidthomas.com](https://joshuadavidthomas.com)) to the new, cooler one 😎 ([joshthomas.dev](https://joshthomas.dev)).

## Getting Started

1. Clone the repo locally.

   ```bash
   git clone https://github.com/joshuadavidthomas/cfworker-redirect-joshthomasdev
   ```

2. Change into the project directory and install dependencies.

   ```bash
   cd cfworker-redirect-joshthomasdev
   npm install
   ```

3. Start the development server.

   ```bash
   npm run start
   ```

4. Make changes to the code in `src/index.ts` and test them out at `http://localhost:8787`.

5. Deploy to Cloudflare Workers when ready. You will be prompted to login to Cloudflare via OAuth if you haven't already.

   ```bash
   npm run deploy
   ```

## License

`cfworker-redirect-joshthomasdev` is licensed under the MIT License. See [LICENSE](./LICENSE) for more information.
