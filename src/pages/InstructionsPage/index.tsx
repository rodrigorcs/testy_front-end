import React, { FC, ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import illustrationKeyPointsSrc from "../../assets/illustration-key_points.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import PageWrapper from "../../components/PageWrapper";
import Text from "../../components/Text";
import getSpacingStyles, { SpacingProps } from "../../components/utils/spacingStyles";
import theme from "../../theme";

interface InstructionsListProps extends SpacingProps {
  children: ReactNode;
}

const StyledInstructionsList: FC<InstructionsListProps> = styled.ul`
  ${(props) => getSpacingStyles(props)}
  padding: ${theme.spacing.xlarge};
  max-width: 40em;
  background-color: ${theme.colors.background.b200};
  border-radius: ${theme.sizing.xxsmall};
  border: 2px solid ${theme.colors.neutral.n500};
  & > :not(:first-child) {
    margin-top: ${theme.spacing.small};
  }
`;

const InstructionItem: FC<{ children: ReactNode }> = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > :not(:first-child) {
    margin-left: ${theme.spacing.small};
  }
`;

const InstructionIcon: FC<{ children: ReactNode }> = styled.span`
  width: 16px;
  height: 16px;
  align-items: center;
`;

const InstructionsList: FC = () => {
  const instructions = [
    "Do not answer how you think is the “correct” way, choose the option which is more suitable for you.",
    "If you don’t think you found the perfect answer, choose the closest one.",
    "If you are stuck, you can ask that person that know you better than yourself :)",
    "Keep in mind: there is no right or wrong answer.",
  ];

  return (
    <StyledInstructionsList marginTop="large">
      {instructions.map((instruction) => (
        <InstructionItem key={instruction}>
          <InstructionIcon>
            <FaCheckCircle color={theme.colors.secondary.s200} size={16} />
          </InstructionIcon>
          <Text type="p" size="regular">
            {instruction}
          </Text>
        </InstructionItem>
      ))}
    </StyledInstructionsList>
  );
};

const illustrations = [
  { src: illustrationKeyPointsSrc, marginRight: "6em", positionY: "-22em", height: "22em" },
];

const InstructionsPage: FC = () => {
  const navigate = useNavigate();
  const handleGoToQuestions = () => {
    navigate("/questions", { replace: true });
  };
  return (
    <PageWrapper>
      <Header hasBorder />
      <PageContent paddingVertical="xxlarge" paddingHorizontal="xxxlarge">
        <Text type="p" size="small" color="neutral.n200" fontWeight={500}>
          Are you more of an introvert or extrovert?
        </Text>
        <Text type="h2" marginTop="xxsmall">
          <span>Instructions</span>
        </Text>
        <Text type="p" size="small" marginTop="xxsmall">
          This test has 5 questions and will take less than 2 minutes
        </Text>
        <InstructionsList />
        <Button big marginTop="xxlarge" onClick={handleGoToQuestions}>
          Start the test!
        </Button>
      </PageContent>
      <Footer illustrations={illustrations} />
    </PageWrapper>
  );
};

export default InstructionsPage;
