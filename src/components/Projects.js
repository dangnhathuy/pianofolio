import React from 'react';

import { SubHeading, Text} from './reusable-components/Texts';
import { SectionMainContainer } from './reusable-components/Containers';

const About = () => {

    return(
    <> 
    <SectionMainContainer 
      id = "projects" 
      flexDirection='column' 
      alignItems='center' 
      justifyContent='center'
    >
        <SubHeading textAlign = 'center' animation='translateYDown 700ms ease-out forwards'>
          PROJECTS
        </SubHeading >
        <Text 
         fontSize='var(--slightly-bigger-text)'
         textAlign = 'center' 
         animation='translateYDown 900ms ease-out forwards'
         >
          Coming soon...
        </Text>
    </SectionMainContainer>
    </>
    );
  };

export default About;
