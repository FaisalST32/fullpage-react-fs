# fullpage-react-fs

> A lightweight react library to create fullpage websites

[![NPM](https://img.shields.io/npm/v/fullpage-react-fs.svg)](https://www.npmjs.com/package/fullpage-react-fs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Here's a preview

![faisalrashid.online](https://apifr.azurewebsites.net/uploads/637241257217983881_faisalrashid.gif 'faisalrashid.online')

You can check out a live demo at [faisalrashid.online](https://www.faisalrashid.online)

## Install

```bash
npm install --save fullpage-react-fs
or
yarn add fullpage-react-fs
```

## Usage

```jsx
import React from 'react'

import { FullPageContainer, FullPagePanel } from 'fullpage-react-fs'
import 'fullpage-react-fs/dist/index.css'

export const App = () => {
  return (
    <FullPageContainer showIndicators={true}>

      {/* Panel 1 */}
      <FullPagePanel bgColor='azure'>
        Your Content
      </FullPagePanel>

      {/* Panel 2 */}
      <FullPagePanel bgColor='lightgoldenrodyellow'>
        <div>Goes</div>
      </FullPagePanel>

      {/* Panel 3 */}
      <FullPagePanel>
        <h1>here</h1>
      </FullPagePanel>

    </FullPageContainer>
  )
}
```

As shown in the sample code above do not forget to import the CSS file.

## License

MIT © [FaisalST32](https://github.com/FaisalST32)
