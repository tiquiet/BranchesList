import React from 'react';
import {Button, Input, Typography} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import s from './header.module.scss';

const Header = (props) => {
   return (
      <div className={s.header}>
         <Typography.Title className={s.header__title}>Филиалы</Typography.Title>
         <div className={s.header__action}>
            <Input value={props.search}
                   allowClear={true}
                   onChange={e => {props.changeSearchString(e.target.value)}}
                   placeholder="Поиск"
                   className={s.header__input}/>
            <SearchOutlined className={s['header__search-icon']}/>
            <Button type="primary"
                    onClick={() => {props.setActive(true)}}
                    className={s['header__add-button']}>
               Добавить
            </Button>
         </div>
      </div>

   );
};

export default Header;