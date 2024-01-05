import React from 'react'
import styled from 'styled-components'

export const FooterYear = () => {
  return (
    <FooterYearSpan>{(new Date().getFullYear())}</FooterYearSpan>
  )
}

const FooterYearSpan = styled.span `
    margin-left: 4px;
`;