import React, { useRef, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import "../../styles/modal.css";


export const UserStatusModal = ({ identify, title, info, action1, action2, onClose, link1, link2 }) => {
   const { actions } = useContext(Context);
   const modalRef = useRef(null);
   const navigate = useNavigate();

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [onClose]);

   function logOut() {
      actions.logout()
      console.log("Log out successful");
      if (window.location.pathname.includes('/favorites')) {
         window.location.href = process.env.FRONTEND_URL;
      } else {
         window.location.reload();
      }
   };


   return (
      <AlertDialog.Root open={true} onOpenChange={onClose} >
         {/* <AlertDialog.Trigger /> */}
         <AlertDialog.Portal>
            <AlertDialog.Overlay />
            <AlertDialog.Content ref={modalRef} className="AlertDialogContent">
               <div className="top-right">
                  <button className="unset mauve" onClick={onClose}>
                     X
                  </button>
               </div>
               <AlertDialog.Title className="AlertDialogTitle">{title}</AlertDialog.Title>
               <AlertDialog.Description className="AlertDialogDescription">{info}</AlertDialog.Description>
               <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                  {/* <AlertDialog.Cancel asChild>
                     <button className="unset Button mauve">Cancel</button>
                  </AlertDialog.Cancel> */}
                  {/* <Link to="/login">
                     <AlertDialog.Action asChild>
                        <button className="unset Button red">{action2}</button>
                     </AlertDialog.Action>
                  </Link> */}
                  {identify === "logOut" && (<>
                     <AlertDialog.Cancel asChild>
                        <button className="unset Button mauve">{action1}</button>
                     </AlertDialog.Cancel>
                     <button className="unset Button red" onClick={logOut}>{action2}</button>
                  </>)}
                  {action1 && link1 && !identify &&
                     <Link to={link1}>
                        <AlertDialog.Action asChild>
                           <button className="unset Button red">{action1}</button>
                        </AlertDialog.Action>
                     </Link>
                  }
                  {action2 && !identify &&
                     <button className="unset Button red" onclick={onClose}>{action2}</button>
                     || action2 && link2 && !identify &&
                     <Link to={link2}>
                        <AlertDialog.Action asChild>
                           <button className="unset Button red">{action2}</button>
                        </AlertDialog.Action>
                     </Link>
                  }
               </div>
            </AlertDialog.Content>
         </AlertDialog.Portal>
      </AlertDialog.Root>
   );
};