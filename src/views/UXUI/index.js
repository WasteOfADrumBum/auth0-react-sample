import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Grapes,
  GreenSock,
  KeyFrames,
  MUI,
  ScrollToTop,
} from '../../components'
import './_uxui.scss'

const UXUI = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="uxui">
      <div className="uxuiHdr m-0 m-auto mb-2 text-center text-uppercase">
        UX/UI
      </div>
      <div className="text-center mb-5">
        <i>The Front-End User Experience and User Interface</i>
      </div>
      {isAuthenticated && (
        <>
          <GreenSock />
          <hr />
          <Grapes />
          <hr />
          <MUI />
          <hr />
          <KeyFrames />
          <div className="comingSoon text-uppercase text-center text-info mt-5 pt-5 mb-2">
            <i className="bi bi-info-circle-fill mx-1" />
            More Animations Coming Soon
          </div>
          <ScrollToTop />
        </>
      )}
    </div>
  )
}

export default UXUI
