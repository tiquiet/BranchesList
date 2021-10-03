import React from 'react';
import {Button, Modal} from "antd";
import './modalGeneralStyles.css';
import s from './modal.module.scss'
import classNames from "classnames";

const ModalRemove = (props) => {

   return (
      <Modal title="Удаление филиала" visible={props.active}
             onCancel={() => {
                props.setActive(false)
             }}
             className={s.modal}
             footer={null}>
         <div className={s['modal__delete-content']}>
            <span>Вы действительно хотите удалить филиал:</span>
            <span><b>{props.modalItem.address.city}, {props.modalItem.address.street}</b>?</span>
         </div>
         <div className={s.modal__buttons}>
            <Button type='primary'
                    className={classNames(s.modal__button__active, s.modal__button__delete)}
                    onClick={() => {
                       props.removeBranch(props.modalItem.id)
                       props.setActive(false)
                    }}>
               Удалить
            </Button>

            <Button onClick={() => {props.setActive(false)}}
                    className={s.modal__button__cancel}>
               Отмена
            </Button>
         </div>
      </Modal>
   );
};

export default ModalRemove;