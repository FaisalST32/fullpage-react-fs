import React from 'react'

import { FullPageContainer, FullPagePanel } from 'fullpage-react-fs'
import 'fullpage-react-fs/dist/index.css'

const App = () => {
  return (
    <FullPageContainer>
      <FullPagePanel>
        <div>
          Use{' '}
          <a
            href='https://github.com/FaisalST32/fullpage-react-fs'
            target='_blank'
            style={{textDecoration: 'none', color: 'purple', fontWeight: 'bold'}}
          >
            fullpage-react-fs
          </a>{' '}
          to create beautiful webpages because
        </div>
        <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '4rem' }}>Sometimes</span>
          <br /> all you need in Life
        </div>
      </FullPagePanel>
      <FullPagePanel bgColor='azure'>
        <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          is a little bit of
          <br />
          <span style={{ fontSize: '4rem', color: 'blue' }}>Color</span>
        </div>
      </FullPagePanel>
      <FullPagePanel bgColor='#35437f'>
        <div
          style={{ fontSize: '1.5rem', textAlign: 'center', color: 'white' }}
        >
          and a little less
          <br />
          <span style={{ fontSize: '4rem', color: '#c8f193' }}>Scroll</span>
          <br />
          Touch or Drag to switch slides.<br/><br/><br/>
          <a
            href='https://github.com/FaisalST32/fullpage-react-fs'
            target='_blank'
            style={{textDecoration: 'none', color: 'white'}}
          >
            View on GitHub
          </a>
        </div>
      </FullPagePanel>
    </FullPageContainer>
  )
}

export default App
