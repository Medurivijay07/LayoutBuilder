// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const renderLeftNavbar = () => (
        <div className="leftnav-container">
          <h1>Left Navbar Menu</h1>
          <ul className="items-list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content-container">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="rightnav-container">
          <h1>Right Navbar</h1>
          <div className="box-container">Ad 1</div>
          <div className="box-container">Ad 2</div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            renderLeftNavbar()
          ) : (
            <div className="left-nav"></div>
          )}
          {showContent ? renderContent() : <div className="cont-cont"></div>}
          {showRightNavbar ? (
            renderRightNavbar()
          ) : (
            <div className="righ-cont"></div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
