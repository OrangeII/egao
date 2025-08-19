# description of how npm run dev works so i dont forget

1. tsc --watch will compile js to build/
2. onchange \"src/main.css\" \"build/\*_/_.js\" -- \"postcss src/main.css -o dist/egao.css && cp dist/egao.css -o docs/egao.css\" will generate docs/egao.css
3. eleventy --serve will reload because docs/egao.css has changed
