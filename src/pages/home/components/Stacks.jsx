import React from 'react';
import AttentionBar from '../../../components/AttentionBar';
import PageHeader from '../../../components/PageHeader';
import GridLayout from '../../../layouts/GridLayout';
import StackCard from './StackCard';

function Stacks() {
  const stackList = [
    {
      id: 0,
      title: 'CMI',
      description: 'The Centre for Mobile Innovation (CMI) creates innovative solutions to industry-relevant challenges in mobile health, in close collaboration with industry, community, and academic partners. ',
      frontEndTools: ['python', 'r', 'jupyter', 'pandas', 'numpy', 'pytorch', 'pytest'],
      backEndTools: ['fastapi'],
      databaseTools: ['mysql'],
      deploymentTools: ['docker', 'googlecloud', 'gitlab'],
    },
    {
      id: 1,
      title: 'Geotab',
      description: 'Geotab is advancing security, connecting commercial vehicles to the internet and providing web-based analytics to help customers better manage their fleets.',
      frontEndTools: ['react', 'tailwindcss-plain', 'redux', 'jest-plain', 'webpack', 'nextjs', 'figma'],
      backEndTools: ['nodejs', 'express'],
      databaseTools: ['mongodb', 'postgresql'],
      deploymentTools: ['docker', 'googlecloud', 'gitlab'],
    },
    {
      id: 2,
      title: 'TD Bank',
      description: 'The Toronto-Dominion Bank is a Canadian multinational banking and financial services corporation headquartered in Toronto, Ontario.',
      frontEndTools: ['angularjs', 'react', 'tailwindcss-plain', 'jquery', 'jest-plain', 'mocha-plain', 'webpack'],
      backEndTools: ['apache-plain', 'nodejs', 'express', 'spring', 'java', 'kotlin', 'dotnetcore'],
      databaseTools: ['mysql', 'postgresql'],
      deploymentTools: ['nginx', 'jenkins', 'docker', 'bitbucket', 'gitlab'],
    }];
  return (

    <>

      <PageHeader title="Tech Stacks" color="bg-blue" />

      <AttentionBar message="These are some of the Tech Stacks/Tools I have used at different companies." />

      <GridLayout>
        {stackList.map((stackElement) => (
          <StackCard key={stackElement.id} stackElement={stackElement} />
        ))}
      </GridLayout>

    </>

  );
}

export default Stacks;
