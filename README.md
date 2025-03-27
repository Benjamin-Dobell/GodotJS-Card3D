# About

This project is a partial port of the [GDScript Card3D project](https://github.com/tdecker91/Card3D) to TypeScript.

Game assets are taken from the original project. No code is shared, however
the logic is intended to be similar.

# Dependencies

```sh
pnpm i
```

If you don't have pnpm, run `corepack enable`.

# Build

Perform a one off build with:

```sh
pnpm exec tsc --build
```

# Development

Run the dev server with:

```sh
pnpm exec tsc -w
```

# Troubleshooting

If you've broken/deleted your typings/ folder you may end up in a situation
where you're unable to build due to type errors. This may seem like a catch 22
since this project contributes to the codegen process. If you find yourself
in that situation, just run:

```sh
pnpm exec tsc --build --noCheck
```

This builds without any type-checking enabled. Thus you latest code is avaiable
to contribute to the codegen process, which can be run with:

  Project -> Tools -> GodotJS -> Generate Godot.d.ts


