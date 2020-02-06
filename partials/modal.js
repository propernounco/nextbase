const Modal = (props) => (
  
<div id={`${props.id}`} className="modal micromodal-slide" aria-hidden="true">
    <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
        <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
          <header className="modal__header">            
            <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
          </header>
          <main className="modal__content" >
            {props.children}
          </main>          
        </div>
    </div>
</div>
 
)

export default Modal