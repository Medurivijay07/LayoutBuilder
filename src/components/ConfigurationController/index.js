// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value
      const handleContentChange = () => {
        onToggleShowContent()
      }

      const handleLeftNav = () => {
        onToggleShowLeftNavbar()
      }

      const handleRightNav = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-bg-container">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              value="Content"
              onChange={handleContentChange}
              checked={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftnavbar"
              value="leftnavbar"
              onChange={handleLeftNav}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftnavbar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightnavbar"
              value="rightnavbar"
              onChange={handleRightNav}
              checked={showRightNavbar}
            />
            <label htmlFor="rightnavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
