import { useEffect } from 'react';

import Header from '@/modules/common/components/Header';
import Carousel from '@/shared/Carousel';
import ContentBox from '@/shared/ContentBox';
import MakeQuestionBox from '@/shared/MakeQuestionBox';
import QuestionBox from '@/shared/QuestionBox';
import SectionBordered, { BorderTypes } from '@/shared/SectionBordered';

import { Container } from '@/styles/pages/feed';

import subjects from 'data/subjects';

const Feed: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <div>
            <SectionBordered border={BorderTypes.TOP}>
              <MakeQuestionBox />
            </SectionBordered>
            <Carousel data={subjects} />
            <SectionBordered border={BorderTypes.BOTTOM}>
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
            </SectionBordered>
          </div>
          <div>
            <ContentBox>
              <h1>Teste</h1>
            </ContentBox>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Feed;