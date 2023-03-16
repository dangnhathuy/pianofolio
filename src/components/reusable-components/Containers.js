import styled from 'styled-components';

const SectionMainContainer = styled.section`
  display: flex;
  padding: 0 150px;
  height: 120vh;
  flex-direction: ${(props) => props.flexDirection || ''};
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => props.alignItems || ''};

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  } 

`

export { SectionMainContainer };