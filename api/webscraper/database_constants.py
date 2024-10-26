renewable_energy_set = {'Hydroelectric', 'Land Based Wind', 'Offshore Wind', 'Solar', 'Geothermal', 'Energy Storage', 'Pumped Storage'}

renewable_energy_map = {
  'H': 'Hydroelectric',
  'S': 'Solar',
  'ES': 'Energy Storage',
  'PS': 'Pumped Storage',
  'OSW': 'Offshore Wind',
}

initial_kdm_dict = [{
  'milestoneTitle': 'Entry to NYISO Queue',
  'completed': False,
  'date': None
},
  {'milestoneTitle': 'Application for permit to ORES',
  'completed': False,
  'date': None
},
  {'milestoneTitle': 'Issuance of permit from ORES',
  'completed': False,
  'date': None
},
  {'milestoneTitle': 'Winning a contract award from NYSERDA',
  'completed': False,
  'date': None
},
  {'milestoneTitle': 'Execution of an Interconnection Agreement (IA)',
  'completed': False,
  'date': None
},
  {'milestoneTitle': 'Start of operations',
  'completed': False,
  'date': None
}]