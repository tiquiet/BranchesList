import React from 'react';
import {Button, Form, Input, Modal} from "antd";
import './modalGeneralStyles.css';
import s from './modal.module.scss'
import classNames from 'classnames';
import InputMask from "react-input-mask";

const ModalAdd = (props) => {

   const [form] = Form.useForm();

   const onFinish = e => {
      props.addBranch({
         id: null,
         key: null,
         address: {
            street: e.address,
            city: "Новосибирск"
         },
         telephone: [
            e.telephone
         ],
         manager: "Не назначен",
         administrator: "Не назначен",
         status: false
      })
      props.setActive(false)
      form.resetFields()
   }

   return (
      <Modal title="Добавление филиала"
             visible={props.active}
             onCancel={() => {
                props.setActive(false)
                form.resetFields()
             }}
             footer={null}
             className={s.modal}>

         <Form name="basic"
               form={form}
               onFinish={onFinish}>

            <span className={s.modal__subtitle}>Адрес</span>

            <Form.Item
               name="address"
               rules={[
                  {
                     required: true,
                     message: 'Пожалуйста введите адрес!',
                  },
               ]}
            >
               <Input allowClear
                      className={s.modal__input}/>
            </Form.Item>

            <span className={s.modal__subtitle}>Телефон</span>
            <Form.Item
               name="telephone"
               rules={[
                  {
                     required: true,
                     message: 'Пожалуйста введите номер!',
                  },
               ]}
            >
               <InputMask mask={'+9 999 999-99-99'}
                          alwaysShowMask
                          type='tel'>
                  <Input allowClear
                         type='tel'
                         maxLength={18}
                         className={s.modal__input}/>
               </InputMask>
            </Form.Item>

            <Form.Item>
               <div className={s.modal__buttons}>

                  <Button type="primary"
                          htmlType="submit"
                          className={classNames(s.modal__button__active, s.modal__button__save)}>
                     Сохранить
                  </Button>

                  <Button className={s.modal__button__cancel}
                          onClick={() => {
                             props.setActive(false)
                             form.resetFields()
                          }}>
                     Отмена
                  </Button>

               </div>
            </Form.Item>

         </Form>
      </Modal>
   );
};

export default ModalAdd;