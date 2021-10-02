import React from 'react';
import {Button, Input, Typography} from "antd";
import styled from 'styled-components';
import {SearchOutlined} from '@ant-design/icons';

const Header = (props) => {
   return (
      <Container>
         <Typography.Title style={{
            fontSize: '34px',
            fontWeight: 700,
         }}>Филиалы</Typography.Title>
         <ActionArea style={{position: 'relative'}}>
            <Input value={props.search}
                   allowClear={true}
                   onChange={e => {
                      props.changeSearchString(e.target.value)
                   }}
                   placeholder="Поиск"
                   style={{
                      borderRadius: '24px',
                      lineHeight: '30px',
                      width: '348px',
                      paddingLeft: '50px'
                   }}/>
            <SearchOutlined style={{
               position: 'absolute',
               fontSize: '20px',
               opacity: '.4',
               top: '13px',
               left: '20px',
               pointerEvents: 'none',
               zIndex: 1000
            }} />
            <Button type="primary"
                    onClick={() => {
                       props.setActive(true)
                    }}
                    style={{
                       background: '#00A7C7',
                       width: '134px',
                       height: '44px',
                       borderRadius: '8px',
                       border: 'none',
                       fontWeight: 600
                    }}>Добавить</Button>
         </ActionArea>
      </Container>

   );
};

const Container = styled.div`
  margin: 80px 0 20px;
`;

const ActionArea = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default Header;