import React, {  useEffect, useRef, useState } from 'react';
import styles from "./Modal.less";
interface Props {
  visible:boolean;
  onClose?:()=>void;
  children?:any;
}
const Modal: React.FC<Props> = ({visible,onClose,children}) => {
  const elRef = useRef(null)
  const [open,setOpen]=useState(false);

  const handleClose=(e:React.MouseEvent)=>{
    e.stopPropagation();
    if(onClose){
      onClose();
    }
  }
  useEffect(() => {

    if(visible){
      setOpen(true);
      document.body.style.overflow="hidden";
    }
  }, [ visible])

  useEffect(() => {
    function animateEnd(){
      if(!visible){
        setOpen(false)
        document.body.removeAttribute("style");
      }
    }
    console.log(elRef.current)
    const element:any=elRef.current;
    if(element){
      element.addEventListener("touchmove",(e:React.TouchEvent)=>{},{passive:false})
      element.addEventListener('animationend', animateEnd);
      element.addEventListener('webkitAnimationEnd', animateEnd);
    }
    return ()=>{
      if(element){
        element.removeEventListener('animationend', animateEnd);
        element.removeEventListener('webkitAnimationEnd', animateEnd);
      }
    }
  },)

  if(!open){
    return null
  }

  return(
    <div
    onClick={handleClose}
    ref={elRef}
     className={`${styles.animate} ${visible ? styles.fadeIn :styles.fadeOut}`}>
      <div onClick={(e:React.MouseEvent)=>{e.stopPropagation();}}>
          {children}
      </div>
       </div>
  );
}

export default  Modal;
