import React, {useEffect} from 'react';
import {Table, Typography} from "antd";
import {PlusOutlined, SettingFilled} from '@ant-design/icons';
import './mainTableGeneralStyles.css';
import s from './MainTable.module.scss';
import classNames from "classnames";

const MainTable = (props) => {

   const {Text} = Typography;

   const columns = [
      {
         title: '№',
         dataIndex: 'id',
         key: 'id',
         sorter: (a, b) => a.id - b.id
      },
      {
         title: 'Адрес',
         dataIndex: 'address',
         key: 'address',
         sorter: (a, b) => a.address.street.slice(4).localeCompare(b.address.street.slice(4)),
         render: address => <div className={s.address}>
            <Text strong={true}
                  className={s.address__street}>
               {address.street}
            </Text>
            <Text type="secondary"
                  className={s.address__city}>{address.city}</Text>
         </div>
      },
      {
         title: 'Телефон',
         dataIndex: 'telephone',
         key: 'telephone',
         sorter: true,
         render: telephones => <div className={s.telephone}>
            {telephones.map(telephone => <span key={telephone}>{telephone}</span>)}
         </div>
      },
      {
         title: 'Управляющий офиса',
         dataIndex: 'manager',
         key: 'manager',
         sorter: (a, b) => a.manager.localeCompare(b.manager)
      },
      {
         title: 'Администратор офиса',
         dataIndex: 'administrator',
         key: 'administrator',
         sorter: (a, b) => a.administrator.localeCompare(b.administrator),
      },
      {
         title: 'Статус',
         dataIndex: 'status',
         key: 'status',
         sorter: (a, b) => +b.status - +a.status,
         render: status => status ? <Text className={classNames(s.status, s.status__active)}>Активный</Text> :
                                    <Text className={classNames(s.status, s.status__inactive)}
                                          type="secondary">Неактивный</Text>
      },
      {
         title: 'Действия',
         dataIndex: 'action',
         key: 'action',
         render: (_, data) => <PlusOutlined rotate={45}
                                            className={s.action}
                                            onClick={() => {
                                               props.setActive(true)
                                               props.setModalItem(data)
                                            }}/>
      },
   ]

   useEffect(() => {
      props.fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const dataFilter = (item) => {
      const compare = item => item.toLowerCase().includes(props.search.toLowerCase().trim())
      return compare(item.manager) ||
         compare(item.administrator) ||
         compare(item.address.street) ||
         compare(item.address.city) ||
         compare(item.telephone.join(''))
   }

   return !props.loading ?
      <Table columns={columns}
             dataSource={props.fetchedData.filter(dataFilter)}
             pagination={false}
      />
      : <div className={s.loading__container}>
         <SettingFilled spin
                        className={s.loading}/>
   </div>
};

export default MainTable;