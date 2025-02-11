'use client';

import Modal from 'react-modal';
import { GlobeIcon } from '@/assets/Project-Icons/icons';
import { SubHeading2 } from '@/styles/texts';
import { Project } from '../../types/schema';
import ProjectItem from '../ProjectItem';
import { SearchBar } from '../SearchBar';
import {
  AllProjectsHeader,
  ModalContents,
  modalContentStyles,
  modalOverlayStyles,
  ProjectDetails,
  ProjectItemsDiv,
} from './styles';

export default function ProjectsListingModal({
  projects,
  map,
  setSelectedProjectId,
  searchTerm,
  setSearchTerm,
}: {
  projects: Project[] | null;
  map: google.maps.Map | null;
  setSelectedProjectId: React.Dispatch<React.SetStateAction<number | null>>;
  searchTerm: string | null;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const projectItems = projects?.map((project: Project) => {
    return (
      <ProjectItem
        key={project.id}
        project_id={project.id}
        setSelectedProjectId={setSelectedProjectId}
        map={map}
        project={project}
      />
    );
  });

  return (
    <Modal
      isOpen={true}
      style={{
        overlay: modalOverlayStyles,
        content: modalContentStyles,
      }}
      ariaHideApp={false}
    >
      <ProjectDetails>
        <ModalContents>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          ></SearchBar>
          <AllProjectsHeader>
            <GlobeIcon width={'0.5625rem'} height={'0.5625rem'} />
            <SubHeading2>ALL PROJECTS</SubHeading2>
          </AllProjectsHeader>
          <ProjectItemsDiv>{projectItems}</ProjectItemsDiv>
        </ModalContents>
      </ProjectDetails>
    </Modal>
  );
}
