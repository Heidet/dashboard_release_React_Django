import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'
import * as React from 'react';
import '../../utils/style/progress.css';

import {
    CardHeader,
    Progress,
} from "reactstrap";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Langagues(params) {
    const { theme } = useTheme();
    const { id } = params;
    const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/languages`);
  
    if (error) {
      return <span>Il y a un problème</span>
    }
    const itemRows = []
  
    function renderLangagues() {
        const languages = Object.entries(data);
        let sum = 0;
        const languagesReturn = [];
        for (var [key, value] of languages) {
            sum += value;
        }  

        for(let i = 0; i < languages.length; i++) {
            let total = (languages[i][1] / sum ) *100;
            let languagesName = languages[i][0];

            // Ici pour rajouter une couleur par language, rajouter dans '../../utils/style/progress.css';
            languagesName = languagesName.toLowerCase();
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
            >
            {item.langage}
            </Progress>
        );
        itemRows.push(row);
    }

    return isLoading ? (
        <LoaderWrapper>
            <Loader data-testid="loader" />
        </LoaderWrapper>
        ) : (            
        <CardHeader> 
            {itemRows}
        </CardHeader> 
    );
}
  
