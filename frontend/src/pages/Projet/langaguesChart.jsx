import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import * as React from 'react';
import Grid from './grid';
import '../../utils/style/progress.css';
// import At

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
    // console.log(params)
    const { id } = params
    const { data, isLoading, error }  = useFetch(`https://api.github.com/repos/Heidet/${id}/languages`)
  
    // console.log(data)

    if (error) {
      return <span>Il y a un problème</span>
    }
    const itemRows = []
  
    function renderLangagues() {
        const languages = Object.entries(data)
        let sum = 0;
        const languagesReturn = []
        for (var [key, value] of languages) {
            sum += value
        }  

        for(let i = 0; i < languages.length; i++) {
            let total = (languages[i][1] / sum ) *100
            let languagesName = languages[i][0]
            console.log('languagesName =>',languagesName)
            console.log('total =>',total)

            if(languagesName === 'Python'){
                languagesName = 'bg-awesome'
            }
            else if(languagesName === 'JavaScript'){
                languagesName = 'warning'
            }else if(languagesName === 'HTML'){
                languagesName = 'danger'
            }else if(languagesName === 'CSS'){
                languagesName = 'null'
            }

            languagesReturn.push({langage: languagesName, valuePercent: total})
        }
        return languagesReturn
    }
    const render = renderLangagues();
    


    for (let item of render) {
        const row = (
            <Progress
                color={item.langage}
                value={item.valuePercent}
            />
        );
        itemRows.push(row);
    }

  
    return isLoading ? (
        <LoaderWrapper>
            <Loader data-testid="loader" />
        </LoaderWrapper>
        ) : (
        <CardHeader >
            File 
            {itemRows}
        </CardHeader> 
    );

}
  
