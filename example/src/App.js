import React from 'react'

import { FullPageContainer, FullPagePanel } from 'fullpage-react-fs'
import 'fullpage-react-fs/dist/index.css'

const App = () => {
  return (
    <FullPageContainer>
      <FullPagePanel>
        Hello
      </FullPagePanel>
      <FullPagePanel>
        and
      </FullPagePanel>
      <FullPagePanel>
        Welcome
      </FullPagePanel>
    </FullPageContainer>
  )
}

export default App
