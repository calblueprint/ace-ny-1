import { CSSProperties } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const ModalOverlay = styled.div`
  width: 310px; //always the same
  height: 100%;
`;

export const ModalContent = styled(Modal)`
  display: flex;
  width: 360px;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const SearchBar = styled.div`
  width: 340px;
  height: 50px;
  display: flex;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(46, 58, 89, 0.5);
  background: ${COLORS.white};
  box-shadow: 0px 4px 5px rgba(255, 255, 255, 0.25);
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const ProjectDetailsBorder = styled.div`
  width: 356px;
  height: 82%;
  border-radius: var(--Spacing-Small, 16px);
  border: 0.75px solid var(--WorldPeas-White, #fff);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.32) 0%,
    rgba(238, 238, 238, 0.65) 100%
  );
  backdrop-filter: blur(7.5px);
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--Spacing-Small, 16px);
  height: 100%;
  background: ${COLORS.white};
  width: 340px;
`;

export const projectImageStyles: CSSProperties = {
  position: 'absolute',
  width: '340px',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '8px 8px 0px 0px',
};

export const ProjectOverview = styled.div`
  width: 316px;
  height: 129px;
  margin-top: 9.5rem;
  border-radius: 8px;
  background: ${COLORS.white};
  box-shadow:
    0px 2px 6px rgba(77, 87, 114, 0.08),
    0px -2px 5px rgba(255, 255, 255, 0.1);
  position: relative;
  padding: 1.25rem;
  box-sizing: border-box;
`;

export const Developer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 0.75rem;
`;

export const ProjectFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectFilter = styled.div`
  border-radius: 100px;
  border: 0.5px solid rgba(46, 58, 89, 0.25);
  display: inline-flex;
  height: 22px;
  padding: 0.1875rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  box-shadow: none;
  background: none;
  border: none;
`;

export const ProjectSize = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  padding: 1.25rem;
  gap: 0.5rem;
`;

export const Divider = styled.hr`
  width: 260px;
  border: 0;
  height: 1px;
  margin: 0px 0;
  background: rgba(46, 58, 89, 0.1);
`;

export const AdditionalInfo = styled.div`
  width: 260px;
  padding: 1.25rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

export const AdditionalText = styled.div`
  padding-top: 1.25rem;
`;
