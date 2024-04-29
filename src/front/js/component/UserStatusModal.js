import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import "../../styles/modal.css";


export const UserStatusModal = ({ title, info, action1, action2, onClose }) => {
   // const location = useLocation();
   // const allowedPaths = ['/nyc', '/la', '/houston', '/apify-near-you', '/google-maps-near-you'];
   const modalRef = useRef(null);

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

   // const hrtBtn = allowedPaths.some(path => location.pathname.startsWith(path));

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
                  <AlertDialog.Cancel asChild>
                     {/* <button className="unset Button mauve">Cancel</button> */}
                  </AlertDialog.Cancel>
                  {/* {hrtBtn && (
							<>
								<Link to="/registration">
									<AlertDialog.Action asChild>
										<button className="unset Button red">{action1}</button>
									</AlertDialog.Action>
								</Link>
								<Link to="/login">
									<AlertDialog.Action asChild>
										<button className="unset Button red">{action2}</button>
									</AlertDialog.Action>
								</Link>
							</>
						)} */}
               </div>
            </AlertDialog.Content>
         </AlertDialog.Portal>
      </AlertDialog.Root>
   );
};