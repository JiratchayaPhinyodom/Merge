### Merge

## Setup typscript

# Initialize a new Node.js project
```
cd Merge
npm init -y
```

# Install TypeScript
```
npm install typescript --save-dev
```
# Create a tsconfig.json file
```
npx tsc --init
```
## Setup Jest to test the Typscript project

# Install Jest and related TypeScript packages
```
npm install jest ts-jest @types/jest --save-dev
```

# Configure Jest
Create a 'jest.config.js' file in the root of your project with the following content:

```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
```

## Create a TypeScript file
Create a file named 'merge.ts' in the root of your project and write down your code.

## Create a test file

# Create a folder named __tests__ in the root of your project and create a file named merge.test.ts inside it and write down your test code.

## Update package.json scripts
Modify the "scripts" section in your package.json file
```
"scripts": {
  "test": "jest"
}
```

## Run the tests
```
npm test
```
