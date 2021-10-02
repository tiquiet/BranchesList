import React from "react";
import Header from "./components/Header";
import MainTable from "./components/MainTable";
import {connect} from "react-redux";
import {
   addBranch,
   changeSearchString,
   fetchData,
   removeBranch,
   setModalActiveAdd,
   setModalActiveRemove, setModalItemRemove
} from "./redux/actions";
import ModalAdd from "./components/ModalAdd";
import ModalRemove from "./components/ModalRemove";
import {Col, Row} from "antd";

function App(props) {
   return (
      <Row>
         <Col xxl={{push: 5, span: 17 }} xl={{push: 2, span: 21}} sm={24}>
            <Header search={props.search}
                    changeSearchString={props.changeSearchString}
                    setActive={props.setModalActiveAdd}/>

            <MainTable search={props.search}
                       fetchedData={props.fetchedData}
                       loading={props.loading}
                       fetchData={props.fetchData}
                       removeBranch={props.removeBranch}
                       setActive={props.setModalActiveRemove}
                       setModalItem={props.setModalItemRemove}/>

            <ModalAdd active={props.modalActiveAdd}
                      setActive={props.setModalActiveAdd}
                      addBranch={props.addBranch}/>

            <ModalRemove active={props.modalActiveRemove}
                         setActive={props.setModalActiveRemove}
                         removeBranch={props.removeBranch}
                         modalItem={props.modalItemRemove}/>
         </Col>
      </Row>
   );
}

const mapStateToProps = state => ({
   loading: state.branches.loading,
   fetchedData: state.branches.fetchedData,
   search: state.branches.searchString,
   modalActiveAdd: state.branches.modalActiveAdd,
   modalActiveRemove: state.branches.modalActiveRemove,
   modalItemRemove: state.branches.modalItemRemove
})

export default connect(mapStateToProps, {
   changeSearchString,
   fetchData,
   setModalActiveAdd,
   setModalActiveRemove,
   addBranch,
   removeBranch,
   setModalItemRemove
})(App);