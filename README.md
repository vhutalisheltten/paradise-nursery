# Paradise Nursery

A React + Vite shopping app for houseplants.

## Project features

- Landing page with a company overview, background image, and Get Started button
- Product listing page with plant categories, thumbnails, prices, and Add to Cart buttons
- Shopping cart page with quantity controls, item totals, delete actions, and a checkout placeholder
- Header navigation with a dynamic cart icon showing total items
- Redux Toolkit state management for cart actions

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at the URL shown in the terminal.

## Deploy to GitHub Pages

1. Create a public GitHub repository.
2. Add the repository as the origin remote:

```bash
git remote add origin https://github.com/<username>/<repository>.git
```

3. Push the project to GitHub:

```bash
git push -u origin master
```

4. Install dependencies if needed:

```bash
npm install
```

5. Deploy the production build to GitHub Pages:

```bash
npm run deploy
```

4. The site will be published to your GitHub Pages URL, typically:

```text
https://vhutalisheltten.github.io/paradise-nursery/
```

Because the app uses `HashRouter`, it will work correctly on GitHub Pages without extra base path configuration.
