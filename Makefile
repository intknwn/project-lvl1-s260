install:
	npm install
start-even:
	npm run babel-node -- src/bin/brain-even.js
start-calc:
	npm run babel-node -- src/bin/brain-calc.js
publish:
	npm publish
lint:
	npm run eslint .
