import {
  LocationIcon,
  ProjectSizeIcon,
  StatusIcon,
  TechnologyIcon,
} from '@/assets/DropdownIcons/icons';
import { FilterBar } from '@/components/FilterBar';
import Map from '@/components/Map';
import { SearchBar } from '@/components/SearchBar';
import { Filter } from '@/types/schema';
import { Project } from '../../types/schema';

export default function MapViewScreen(props: { projects: Project[] | null }) {
  const filters: Filter[] = [
    {
      id: 'status',
      label: 'STATUS',
      icon: <StatusIcon />,
    },
    {
      id: 'technology',
      label: 'TECHNOLOGY',
      icon: <TechnologyIcon />,
    },
    {
      id: 'projectSize',
      label: 'PROJECT SIZE',
      icon: <ProjectSizeIcon />,
    },
    {
      id: 'location',
      label: 'LOCATION',
      icon: <LocationIcon />,
    },
  ];

  const handleFilterChange = (filter: Filter) => {
    console.log(filter);
  };

  return (
    <>
      <SearchBar />
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <Map projects={props.projects} />
    </>
  );
}