install:
	npm ci
publish:
	npm publish --dry-run
lint:
	eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
