import { useState } from 'react'
const Summary = ({title, codeEditor, rightBox}) => {
  return (
    <>
      <div>title: { title }</div>
      <div>{codeEditor()}</div>
      <div>{rightBox()}</div>
    </>
  )
};

export default Summary;
