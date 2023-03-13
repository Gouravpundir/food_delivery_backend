import React from 'react'
import ReactDom from 'react-dom'

// Styles for the modal window
const MODAL_STYLES = {
    position: 'fixed',              // The position of the modal is fixed so it will stay in place
    top: '50%',                     // The top of the modal is set to 50% of the screen
    left: '50%',                    // The left of the modal is set to 50% of the screen
    backgroundColor: 'rgb(34,34,34)', // The background color of the modal is set to a dark gray color
    transform: 'translate(-50%, -50%)', // This centers the modal both horizontally and vertically
    zIndex: 1000,                   // The z-index is set to a high number so it appears on top of other elements on the page
    height: '90%',                  // The height of the modal is set to 90% of the screen
    width: '90%'                    // The width of the modal is set to 90% of the screen
  }
  
  // Styles for the overlay (background) of the modal window
  const OVERLAY_STYLES = {
    position: 'fixed',              // The position of the overlay is fixed so it will stay in place
    top: 0,                         // The top of the overlay is set to 0
    left: 0,                        // The left of the overlay is set to 0
    right: 0,                       // The right of the overlay is set to 0
    bottom: 0,                      // The bottom of the overlay is set to 0
    backgroundColor: 'rgba(0, 0, 0, .7)', // The background color of the overlay is set to a semi-transparent black color
    zIndex: 1000                    // The z-index is set to a high number so it appears on top of other elements on the page
  }
  
// Component for a modal window
export default function Modal({ children, onClose }) {

  // Use ReactDom.createPortal to render the modal window as a child of an element with id 'cart-root' outside of the component's parent
  return ReactDom.createPortal(
    <>
      {/* Render the overlay */}
      <div style={OVERLAY_STYLES} />

      {/* Render the modal window */}
      <div style={MODAL_STYLES}>
        {/* Button to close the modal */}
        <button className='btn bg-danger fs-4' style={{ marginLeft: "90%", marginTop: "-35px" }} onClick={onClose}> X </button>
        {children} {/* Render the contents of the modal */}
      </div>
    </>,
    document.getElementById('cart-root') // Specify the DOM element to render the modal window as a child of
  )
}
