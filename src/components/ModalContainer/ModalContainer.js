import { Modal } from "@mui/material";
import React from "react";
import './ModalContainer.scss'


export default function ModalContainer(props){
    const {isOpenModal, closeModal, children} = props
return (
    <Modal
        className="modal-container"
        open={isOpenModal}
        onClose={closeModal}
        closeAfterTransition
    >
        <div>{children}</div>
    </Modal>
)
}