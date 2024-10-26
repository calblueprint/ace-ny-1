import { useMemo, useState } from 'react';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useMap } from '@vis.gl/react-google-maps';
import ProjectModal from '@/components/ProjectModal';
import { Project } from '../../types/schema';
import { MarkerInfoWindow } from './MarkerInfoWindow';

export default function AddMarker({
  projects,
}: {
  projects: Project[] | null;
}) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  ); // track currently open modal

  const handleMarkerClick = (projectId: number) => {
    setSelectedProjectId(prevId => (prevId === projectId ? null : projectId)); // close modal if same, open if different
  };

  const closeModal = () => {
    setSelectedProjectId(null); // close modal
  };

  const map = useMap();

  const clusterer = useMemo(() => {
    if (!map) return null;

    return new MarkerClusterer({ map });
  }, [map]);

  return (
    <>
      {projects?.map((project: Project) => {
        return (
          <MarkerInfoWindow
            key={project.id}
            position={{
              lat: project.latitude,
              lng: project.longitude,
            }}
            projectName={project.project_name}
            projectDev={project.developer}
            projectId={project.id}
            onMarkerClick={handleMarkerClick}
            clusterer={clusterer}
          />
        );
      })}

      {selectedProjectId && (
        <ProjectModal
          project_id={selectedProjectId}
          closeModal={closeModal}
          openFirst={true}
        />
      )}
    </>
  );
}
