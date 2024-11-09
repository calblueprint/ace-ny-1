import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa6';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdLightbulbOutline } from 'react-icons/md';
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
      icon: <IoIosCheckmarkCircleOutline />,
      categories: [],
    },
    {
      id: 'technology',
      label: 'TECHNOLOGY',
      icon: <FaBolt />,
      categories: [
        {
          category: 'Source',
          options: [
            'Land-based Wind',
            'Hydroelectric',
            'Offshore Wind',
            'Solar Power',
            'Geothermal',
          ],
        },
        { category: 'Storage', options: ['Energy Storage', 'Pumped Storage'] },
      ],
    },
    {
      id: 'projectSize',
      label: 'PROJECT SIZE',
      icon: <MdLightbulbOutline />,
      categories: [],
    },
    {
      id: 'location',
      label: 'LOCATION',
      icon: <FaMapMarkerAlt />,
      categories: [],
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
