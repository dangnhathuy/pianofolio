import styled from 'styled-components'; 

const BigHeading = styled.h2`
  font-size: var(--big-heading);
  margin: 1rem;
  max-width: 900px;
  line-height: 0.85;
  animation: ${(props) => props.animation || ''}; 
`

const SubHeading = styled.h2`
  font-size: var(--subheading);
  line-height: 0.8;
  margin: ${(props) => props.margin || '0'};
  max-width: ${(props) => props.maxWidth || ''};
  text-align: ${(props) => props.textAlign || ''};
  animation: ${(props) => props.animation || ''}; 
`

const Text = styled.p`
  font-size: ${(props) => props.fontSize || 'var(--text)'};
  font-weight: ${(props) => props.fontWeight || ''};
  line-height: ${(props) => props.lineHeight || '1.1'};
  margin: ${(props) => props.margin || ''};
  text-indent: ${(props) => props.textIndent || ''};
  text-align: ${(props) => props.textAlign || ''};
  max-width: ${(props) => props.maxWidth || ''};
  animation: ${(props) => props.animation || ''}; 
  color: ${(props) => props.color || ''}; 
`

export { BigHeading, SubHeading, Text };