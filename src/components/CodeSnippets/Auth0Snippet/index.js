import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { CopyBlockCodeSnippets } from '../../../utils'
import '../_codeSnippets.scss'

const Auth0Snippets = () => {
  const routeCode = CopyBlockCodeSnippets.routeCode
  const profileCode = CopyBlockCodeSnippets.profileCode

  return (
    <div className="auth0Snippet">
      <h4>
        <b>Auth0:</b> Authentication & Authorization
      </h4>
      <div className="accordion my-4" id="auth0Accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Protecting The Routes
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#auth0Accordion"
          >
            <div className="accordion-body">
              <p>
                If users want to enter a protected route from R0B, Auth0 will
                stop them and ask them to present their credentials. If Auth0
                can verify who they are and that they are supposed to go in
                there, Auth0 will let them in. Otherwise, Auth0 will take them
                back to a public application route.
              </p>
              <CopyBlock
                language="javascript"
                text={routeCode}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Profile Information
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#auth0Accordion"
          >
            <div className="accordion-body">
              <p>
                The Profile component renders user information that you could
                consider <i>protected</i>. Additionally, the <code>user</code>{' '}
                property is <code>null</code> if there is no logged-in user. So
                either way, this component should only render if Auth0 has
                authenticated the user. Destructure the user object we are able
                to obtain the user name, picture, and email. Then, we display
                these three properties in the user interface. Since the data
                comes from a simple object, you don't have to fetch it using any
                asynchronous calls. Finally, we can render content of the
                decoded ID token to see other properties available to use.
              </p>
              <CopyBlock
                language="javascript"
                text={profileCode}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth0Snippets
