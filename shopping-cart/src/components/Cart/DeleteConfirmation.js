import { useEffect, useRef } from "react";

const DeleteConfirmation = ({
	title,
	isOpened,
	onProceed,
	onClose,
	children,
}) => {
	const ref = useRef(null);

	useEffect(() => {
		if (isOpened) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [isOpened]);

	const preventAutoClose = (e) => e.stopPropagation();

	return (
		<dialog ref={ref} onCancel={onClose} onClick={onClose}>
			<div onClick={preventAutoClose}>
				<h3>Hello</h3>

				{children}

				<button onClick={onClose}>Close</button>
			</div>
		</dialog>
	);
};

export default DeleteConfirmation;

/* export function Modal({ closeOnOutsideClick, onRequestClose, open, ...props }) {
    const dialogRef = React.useRef(null);
  
   
  
    React.useEffect(() => {
      // prevents calling imperative methods on mount since the polyfill will throw an error since we are not using the `open` attribute
      const dialogNode = dialogRef.current;
      if (open) {
        dialogNode.showModal();
      } else {
        dialogNode.close();
      }
    }, [open]);
  
    
  
    
  
    return (
      <dialog ref={dialogRef} style={{ padding: 0 }}>
        <div {...props} />
      </dialog>
    );
  }

  */
