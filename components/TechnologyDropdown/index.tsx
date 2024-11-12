import { Filter } from '@/types/schema';
import { ExitIcon } from '../../assets/DropdownIcons/icons';
import {
  EnergyStorageIcon,
  GeothermalIcon,
  HydroelectricIcon,
  LandBasedWindIcon,
  OffshoreWindIcon,
  PumpedStorageIcon,
  SolarPvIcon,
} from '../../assets/Technology-Tag-Icons/icons';
import COLORS from '../../styles/colors';
import {
  ApplyButtonStyles,
  ButtonStyles,
  ButtonWithIconStyles,
  CategoryTitleStyles,
  CheckboxContainer,
  CheckboxStyles,
  ExitStyles,
  FilterDropdownStyles,
  IconStyles,
  OptionTitleStyles,
} from './styles';

interface TechnologyDropdownProps {
  selectedTechnologies: string[];
  setSelectedTechnologies: (technologies: string[]) => void;
  handleButtonClick: (filter: Filter) => void;
  icon: React.ReactNode;
  label: string;
  currFilter: Filter;
}

export default function TechnologyDropdown({
  selectedTechnologies,
  setSelectedTechnologies,
  handleButtonClick,
  icon,
  label,
  currFilter,
}: TechnologyDropdownProps) {
  const filter = {
    categories: [
      {
        category: 'SOURCE',
        options: [
          {
            title: 'Land-based Wind',
            icon: (
              <IconStyles>
                <LandBasedWindIcon fill={COLORS.grey} />
              </IconStyles>
            ),
          },
          {
            title: 'Hydroelectric',
            icon: (
              <IconStyles>
                <HydroelectricIcon fill={COLORS.grey} />
              </IconStyles>
            ),
          },
          {
            title: 'Offshore Wind',
            icon: (
              <IconStyles>
                <OffshoreWindIcon
                  fill={COLORS.grey}
                  stroke={COLORS.veryLightGrey}
                />
              </IconStyles>
            ),
          },
          {
            title: 'Solar PV',
            icon: (
              <IconStyles>
                <SolarPvIcon fill={COLORS.grey} />
              </IconStyles>
            ),
          },
          {
            title: 'Geothermal',
            icon: (
              <IconStyles>
                <GeothermalIcon fill={COLORS.grey} />
              </IconStyles>
            ),
          },
        ],
      },
      {
        category: 'STORAGE',
        options: [
          {
            title: 'Energy Storage',
            icon: (
              <IconStyles>
                <EnergyStorageIcon
                  fill={COLORS.grey}
                  stroke={COLORS.veryLightGrey}
                />
              </IconStyles>
            ),
          },
          {
            title: 'Pumped Storage',
            icon: (
              <IconStyles>
                <PumpedStorageIcon fill={COLORS.grey} />
              </IconStyles>
            ),
          },
        ],
      },
    ],
  };
  return (
    <FilterDropdownStyles>
      <ButtonWithIconStyles onClick={() => handleButtonClick(currFilter)}>
        {icon}
        <ButtonStyles>{label}</ButtonStyles>
        <ExitStyles>
          <ExitIcon />
        </ExitStyles>
      </ButtonWithIconStyles>
      {filter.categories.map(category => (
        <div key={category.category}>
          <CategoryTitleStyles>{category.category}</CategoryTitleStyles>
          {category.options.map(option => (
            <CheckboxContainer key={option.title}>
              {option.icon}
              <OptionTitleStyles>{option.title}</OptionTitleStyles>
              <CheckboxStyles
                type="checkbox"
                checked={selectedTechnologies.includes(option.title)}
                onChange={() => {
                  setSelectedTechnologies(
                    selectedTechnologies.includes(option.title)
                      ? selectedTechnologies.filter(o => o !== option.title)
                      : [...selectedTechnologies, option.title],
                  );
                }}
              />
            </CheckboxContainer>
          ))}
        </div>
      ))}
      <ApplyButtonStyles>APPLY</ApplyButtonStyles>
    </FilterDropdownStyles>
  );
}