import React from 'react';
import {Button, Form, Input, Modal} from "antd";
import './styleModal.css';

const ModalAdd = (props) => {

   const [form] = Form.useForm();

   const onFinish = e => {
      props.addBranch(
         {
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
      <Modal title="Добавление филиала" visible={props.active}
             onCancel={() => {
                props.setActive(false)
                form.resetFields()
             }}
             footer={null}
             style={{
                maxWidth: '327px',
                maxHeight: '323px',
             }}
      >
         <Form
            name="basic"
            form={form}
            onFinish={onFinish}
         >
            <span className='subtitle'>Адрес</span>
            <Form.Item
               name="address"
               rules={[
                  {
                     required: true,
                     message: 'Пожалуйста введите адрес!',
                  },
               ]}
            >
               <Input allowClear={true} style={{borderRadius: '8px', height: '38px'}}/>
            </Form.Item>

            <span className='subtitle'>Телефон</span>
            <Form.Item
               name="telephone"
               rules={[
                  {
                     required: true,
                     message: 'Пожалуйста введите номер!',
                  },
               ]}
            >
               <Input allowClear={true} style={{borderRadius: '8px', height: '38px'}}/>
            </Form.Item>

            <Form.Item>
               <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
               }}>
                  <Button type="primary" htmlType="submit"
                          style={{
                             background: '#00A7C7',
                             width: '171px',
                             height: '44px',
                             borderRadius: '8px',
                             border: 'none',
                             fontWeight: 600
                          }}>
                     Сохранить
                  </Button>
                  <Button onClick={() => {
                     props.setActive(false)
                     form.resetFields()
                  }}
                          style={{
                             border: 'none',
                             boxShadow: 'none',
                             fontWeight: 600
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