import React, { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import "../../styles/reactModal.css";


export const ReactModal = ({ title, info, action, onClose }) => {

	return (
		<AlertDialog.Root open={true} onOpenChange={onClose} >
			{/* <AlertDialog.Trigger /> */}
			<AlertDialog.Portal>
				<AlertDialog.Overlay />
				<AlertDialog.Content className="AlertDialogContent">
					<AlertDialog.Title className="AlertDialogTitle">{title}title</AlertDialog.Title>
					<AlertDialog.Description className="AlertDialogDescription">{info}info</AlertDialog.Description>
					<div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
						<AlertDialog.Cancel asChild>
							<button className="unset Button mauve">Cancel</button>
						</AlertDialog.Cancel>
						<AlertDialog.Action asChild>
							<button className="unset Button red">{action}</button>
						</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
};