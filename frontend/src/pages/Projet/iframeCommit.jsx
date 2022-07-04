
import { useTheme, useFetch } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import styled from 'styled-components'
import React, { useEffect, useState, useRef } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import "prismjs/themes/prism.css"; //Example style, you can use another
import { Component } from 'react'
// import CodeEditor from '@uiw/react-textarea-code-editor';
import "../../utils/style/codeeditor.css"
import Prism from 'prismjs';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const IframeGit = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%,
`

const code = `function add(a, b) {
  return a + b;
}`;


class IframeCommit extends Component{
  state = { code }

  render() {
    // console.log(this.setState({ code }))
    // console.log(highlight(code, languages.js))
    // console.log(Prism.languages.js)
    return (
      <div data-color-mode="dark">
        <div className="App">
          <Editor
            value={this.state.code}
            // onValueChange={false}
            language="js"
            highlight={code => Prism.highlight(code, Prism.languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      </div>
      
    );
  }

}
export default IframeCommit

// export default function IframeCommit(id) {
//   const textRef = React.useRef();
//   // const [code, setCode] = React.useState(
//   //   `function add(a, b) {\n  return a + b;\n}`
//   // );
//   const code = `function add(a, b) {\n  return a + b;\n}`
//   // useEffect(() => {
//   //   if (textRef.current) {
//   //     const obj = new SelectionText(textRef.current);
//   //     console.log("obj:", obj);
//   //   }
//   // }, []);

//   const { data, isLoading, error } = fetch('https://api.github.com/repos/Heidet/dashboard_release/contents/backend/Project/admin.py')
//     .then(function(response) {
//         return response.json();
//     }).then(function(data) {
//         var iframe = document.getElementById('github-iframe');
//         // console.log(iframe)
//         // console.log(data['content'])
//         iframe.src = 'data:text/html;base64,' + encodeURIComponent(data['content']);
//         // console.log(iframe.src)
//     });

//   if (error) {
//     return <span>Il y a un problème</span>
//   }

//   return isLoading ? (
//       <LoaderWrapper>
//         <Loader data-testid="loader" />
//       </LoaderWrapper>
//     ) : (
//     console.log('data =>',data),
//     console.log('isLoading =>',isLoading),
//     console.log('error =>',error),
//     <div className="App">
//       <h3>Iframes in React</h3>
//       <IframeGit id="github-iframe" src="" ></IframeGit>
     
//       <script>
//           {/* {github}  */}
//       </script>
      
//       {/* <iframe src="https://github.com/Heidet/dashboard_release/commit/8a53e081a15c457273339641f09a3a3bd902ddd4"></iframe> */}
//     </div>
//   );
// }
