import React, { useEffect, useState } from 'react';
import AttentionBar from '../../../common/AttentionBar';
import PageHeader from '../../../common/PageHeader';
import GridLayout from '../../../layouts/GridLayout';
import { getDataUsingFetch } from '../../../services/FetchingData';
import AboutCard from './AboutCard';

function AboutBody() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [workList, setWorkList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  async function getData() {
    try {
      const tempWorkList = await getDataUsingFetch('data/Work.json');
      const tempEducationList = await getDataUsingFetch('data/Education.json');

      if (tempWorkList && tempWorkList.length > 0
        && tempEducationList && tempEducationList.length > 0) {
        setWorkList(tempWorkList);
        setEducationList(tempEducationList);
      } else {
        throw new Error('Work list is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { };
  }, []);

  return (
    <div>

      {error === true
        ? <p>Error! Unable to load work list and education list.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <div>
            <PageHeader title="Work Experience" color="bg-dark" />
            <AttentionBar message="To view my full work list, please take a look at my Linkedin." />

            <GridLayout>
              { workList.map((aboutElement) => (
                <AboutCard key={aboutElement.id} aboutElement={aboutElement} />
              ))}
            </GridLayout>

            <PageHeader title="Education and Certificates" color="bg-dark" />
            <AttentionBar message="To view my full education list, please take a look at my Linkedin." />
            <GridLayout>
              { educationList.map((aboutElement) => (
                <AboutCard key={aboutElement.id} aboutElement={aboutElement} />
              ))}
            </GridLayout>

          </div>
        )
        : <p />}
    </div>
  );
}

AboutBody.propTypes = {};

export default AboutBody;
