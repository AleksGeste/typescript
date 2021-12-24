# TypeScript 2022 Edition
## Understanding TypeScript
### Day 1 (20.12.21) 
- To get started (preconditions)
1. Install node - visit https://nodejs.org/en/ and install NOT current version
2. Install Typescript - open terminal and run `sudo npm install -g typescript`
3. Create simple project with index.html and app.ts files
4. In index file point to app.js `<script src="app.js" defer></script>` file which will be generated when you run your app.ts file
5. In the terminal run `npm init` to create package file
6. Install lite-server by terminal run `npm install -—save-dev lite-server`
7. Add script to package file by `"start": "lite-server"` in script section
8. Run server by typing in terminal `npm start`
9. Write `console.log('Hello from Typescript!')` in app.ts file
10. Compile ts file by `tsc app.ts`
11. See result in the browser console

### Day 2 (21.12.21)
- What Is TypeScript | Core types
1. Using Types 
2. TypeScript Types vs JavaScript Types 
3. Working with Numbers, Strings & Booleans. Type Assignment & Type Inference
4. Object & Nested Objects & Types
5. Array Types & Working with Tuples
6. Working with Enums & The "any" Type
7. Union & Literal Types
8. Type Aliases / Custom Types
9. Type Aliases & Object Types
10. Function Return Types & "void"
11. Functions as Types & Function Types & Callbacks
12. The "unknown" & "never" Type

### Day 3 (22.12.21)
- Compiler (its Configuration) and Debugging Typescript
1. Run command `tsc --init` that will create tsconfig.json file
2. For auto compile run `tsc --watch` command
3. tsconfig file

### Day 4 (23.12.21)
- Next-generation JavaScript & TypeScript and Classes & Interfaces
1. "let" and "const" 
2. Arrow Functions
3. Default Function Parameters
4. The Spread Operator (...)
5. Rest Parameters
6. Array & Object Destructuring 
7. Creating a First Class 
8. Constructor Functions & The "this" Keyword
9. "private" and "public" Access Modifiers "readonly" Properties 
10. Inheritance 
11. Overriding Properties & The "protected" Modifier and Getters & Setters 
12. Static Methods & Properties 
13. Abstract Classes 
14. Singletons & Private Constructors 
15. A First Interface and Using Interfaces with Classes 
16. Readonly Interface Properties and Extending Interfaces as Function Types 
17. Optional Parameters & Properties

### Day 5 (24.12.21)
- Advanced Types, Generics, Decorators
1. 