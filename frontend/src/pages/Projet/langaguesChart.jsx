import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import * as React from 'react';
import Grid from './grid';

import {
    CardHeader,
    Progress,
  } from "reactstrap";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Langagues(params) {

    const { theme } = useTheme()
    console.log(params)
    const { id } = params
    const { data, isLoading, error }  = useFetch(`https://api.github.com/repos/Heidet/${id}/languages`)
  
    console.log(data)

    if (error) {
      return <span>Il y a un problème</span>
    }
  
    function renderLangagues() {

        const langagues = Object.entries(data)

        console.log(langagues)
        // for(let i = 0; i < this.state.users.length; i++) {
        //     let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
        //     let avatar = this.state.users[i].picture.thumbnail;
        //     let email = this.state.users[i].email;
        //     let key = this.state.users[i].id.value;
        //     userList.push(<User name={name} avatar={avatar} email={email} key={key}/>);
        // }
        // <Progress color="success" value={renderLangagues()}/>
        // return langagues;
    }

    // function renderLangaguesValues() {
    //     const userList = [];
    //     for(let i = 0; i < this.state.users.length; i++) {
    //         let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
    //         let avatar = this.state.users[i].picture.thumbnail;
    //         let email = this.state.users[i].email;
    //         let key = this.state.users[i].id.value;
    //         userList.push(<User name={name} avatar={avatar} email={email} key={key}/>);
    //     }
  
    //     return userList;
    // }

    return isLoading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : (
  
        <CardHeader >
            File 
            {/* {data.map(([key, value]) => (
            <Progress
                color={key}
                value={value}
                />
            ))} */}
            <Progress
                color="success"
                value={renderLangagues()}
                />
            <Progress
                color="info"
                value={50}
                />
            <Progress
                color="warning"
                value={75}
                />
            <Progress
                color="danger"
                value="100"
                /> 
        </CardHeader> 
    );
}
  
