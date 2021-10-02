import React from 'react';
import {Button, Modal} from "antd";
import './styleModal.css';

const ModalRemove = (props) => {

   return (
      <Modal title="Удаление филиала" visible={props.active}
             onCancel={() => {
                props.setActive(false)
             }}
             style={{
                maxWidth: '327px',
                maxHeight: '323px',
             }}
             footer={null}>
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center',
            height: '60px',
            marginBottom: '30px'

         }}>
            <span>Вы действительно хотите удалить филиал:</span>
            <span><b>{props.modalItem.address.city}, {props.modalItem.address.street}</b>?</span>
         </div>
         <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
         }}>
            <Button type='primary'
                    onClick={() => {
                       props.removeBranch(props.modalItem.id)
                       props.setActive(false)
                    }}
                    style={{
                       background: '#C44062',
                       width: '171px',
                       height: '44px',
                       borderRadius: '8px',
                       border: 'none',
                       fontWeight: 600
                    }}>
               Удалить
            </Button>

            <Button onClick={() => {
               props.setActive(false)
            }}
                    style={{
                       border: 'none',
                       boxShadow: 'none',
                       fontWeight: 600
                    }}>
               Отмена
            </Button>
         </div>
      </Modal>
   );
};

export default ModalRemove;