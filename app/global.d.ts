// This handles all regular .css file imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// This is the important one for CSS Modules
// It tells TypeScript that .module.css files export an object with string keys
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// You can add these for other common style types if you use them
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}