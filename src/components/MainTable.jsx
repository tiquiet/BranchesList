import React, {useEffect} from 'react';
import {Table, Typography} from "antd";
import {PlusOutlined, SettingFilled} from '@ant-design/icons';


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
         render: address => <div style={{
            display: 'flex',
            flexDirection: 'column'
         }}>
            <Text strong={true} style={{color: '#00A7C7'}}>{address.street}</Text>
            <Text type="secondary">{address.city}</Text>
         </div>,
      },
      {
         title: 'Телефон',
         dataIndex: 'telephone',
         key: 'telephone',
         sorter: true,
         render: telephones => <div style={{
            display: 'flex',
            flexDirection: 'column'
         }}>
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
         render: status => status ? <Text style={{
            background: 'rgba(25,187,80,0.2)',
            padding: '3px 9px',
            borderRadius: '16px',
            fontSize: '13px',
            fontWeight: 600
         }}>Активный</Text> : <Text type="secondary"
                                    style={{
                                       background: 'rgba(108, 119, 134, 0.2)',
                                       padding: '3px 9px',
                                       borderRadius: '16px',
                                       fontSize: '13px',
                                       fontWeight: 600
                                    }}>Неактивный</Text>

      },
      {
         title: 'Действия',
         dataIndex: 'action',
         key: 'action',
         render: (_, data) => <PlusOutlined onClick={() => {
            props.setActive(true)
            props.setModalItem(data)
         }}
                                            rotate={45}
                                            style={{
                                               display: 'block',
                                               fontSize: '32px',
                                               color: '#C4C4C4'
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
             pagination={false}/>
      : <div style={{display: 'flex'}}><SettingFilled spin style={{
         fontSize: '100px',
         textAlign: 'center',
         margin: '130px auto 0'
      }}/></div>
};

export default MainTable;