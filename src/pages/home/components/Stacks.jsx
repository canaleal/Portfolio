import React from 'react';
import AttentionBar from '../../../common/AttentionBar';
import Footer from '../../../common/Footer';
import PageHeader from '../../../common/PageHeader';
import GridLayout from '../../../layouts/GridLayout';
import StackCard from './StackCard';

function Stacks() {
  const stackList = [
    {
      id: 0,
      title: 'Osteoporosis Canada',
      frontEndTools: ['python', 'r', 'jupyter', 'pandas', 'numpy', 'pytorch', 'pytest'],
      backEndTools: ['fastapi'],
      databaseTools: ['mysql'],
      deploymentTools: ['docker', 'googlecloud', 'gitlab'],
    },
    {
      id: 1,
      title: 'Geotab',
      frontEndTools: ['react', 'tailwindcss-plain', 'redux', 'jest-plain', 'webpack', 'nextjs', 'figma'],
      backEndTools: ['nodejs', 'express'],
      databaseTools: ['mongodb', 'postgresql'],
      deploymentTools: ['docker', 'googlecloud', 'gitlab'],
    },
    {
      id: 2,
      title: 'TD Bank',
      frontEndTools: ['angularjs', 'react', 'tailwindcss-plain', 'jquery', 'jest-plain', 'mocha-plain', 'webpack'],
      backEndTools: ['apache-plain', 'nodejs', 'express', 'spring', 'java', 'kotlin', 'dotnetcore'],
      databaseTools: ['mysql', 'postgresql'],
      deploymentTools: ['nginx', 'jenkins', 'docker', 'bitbucket', 'gitlab'],
    }];
  return (

    <div className="h-full w-full flex flex-col">

      <PageHeader title="Tech Stacks" color="bg-blue" />

      <AttentionBar message="These are some of the Tech Stacks/Tools I have used at different companies." />

      <GridLayout>
        {stackList.map((stackElement) => (
          <StackCard key={stackElement.id} stackElement={stackElement} />
        ))}
      </GridLayout>

      <Footer />

    </div>

  );
}

export default Stacks;
