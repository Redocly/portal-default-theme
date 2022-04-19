## Overview

This package contains a set of react components that build a default theme for developer portal.


## Contributing

Once a new component is created, please, make sure to assign `data-component-name` attribute to it. Please check these examples: [regular component](https://github.com/Redocly/portal-default-theme/pull/2/files#diff-0cb16ab5c4a92c24769b0ca7589c523c4c82e2d1b943cec192ffc82228ab0bfaR5), [styled component](https://github.com/Redocly/portal-default-theme/pull/2/files#diff-5968e0ec965d5053166333c3a06cb8cd3d4c0701e181f22a7cbcc5e095fe3b09R3).
The value of `data-component-name` attribute should follow the hierarchical structure of the files inside a theme, for example for `FooterColumn.tsx` in the following structure the `data-component-name` will be `"Footer/FooterColumn"`:


```
├── ...
├── Footer
│   ├── FooterColumn.tsx
|   ├── FooterCopyright.tsx
│   └── ...
└── ...
```

