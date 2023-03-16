import styled from 'styled-components'; 

const BigHeading = styled.h2`
  font-family: var(--unicaone);
  font-size: var(--big-heading);
  margin: 1rem;
  max-width: 400px;
  line-height: 0.85;
  animation: ${(props) => props.animation || ''}; 
`

const SubHeading = styled.h2`
  font-family: var(--unicaone);
  font-size: var(--subheading);
  line-height: 0.8;
  margin: ${(props) => props.margin || '0'};

  text-align: ${(props) => props.textAlign || ''};
  animation: ${(props) => props.animation || ''}; 
`

const Gloock = styled.p`
  font-family: var(--gloock);
  font-size: 30px;
  margin: ${(props) => props.margin || '0'};
  animation: ${(props) => props.animation || ''}; 
`

const Text = styled.p`
  font-size: ${(props) => props.fontSize || 'var(--text)'};
  line-height: ${(props) => props.lineHeight || '1.1'};
  margin: ${(props) => props.margin || ''};
  text-indent: ${(props) => props.textIndent || ''};
  text-align: ${(props) => props.textAlign || ''};
  max-width: ${(props) => props.maxWidth || ''};
  animation: ${(props) => props.animation || ''}; 
`

export { BigHeading, SubHeading, Gloock, Text };