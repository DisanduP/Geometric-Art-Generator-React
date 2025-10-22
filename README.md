Geometric Component

Files added:
- `src/components/Geometric.js` — React functional component (no props) that renders the geometric grid and a Generate button.
- `src/components/Geometric.sass` — Sass styles converted from the original CSS.

How to use
1. Ensure your project supports SASS. If using Create React App, install `sass`:

```bash
npm install sass
```

2. Import and render the component:

```jsx
import Geometric from './components/Geometric';

function App() {
  return (
    <div>
      <Geometric />
    </div>
  );
}

export default App;
```

Notes & assumptions
- I converted inline behavior to a simple random color/shape generator using React state and hooks.
- The original JS file wasn't provided, so I implemented reasonable behavior: clicking "Generate" randomizes each tile's background color and shape class.
- If you have specific interactivity from your original `script.js`, paste it and I'll port it exactly.

Next steps
- I can add props to control grid size, palette, or animation.
- I can extract the randomization into a callback prop so the parent controls generation.
