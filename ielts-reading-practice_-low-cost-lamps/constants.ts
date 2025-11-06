import type { Question, CorrectAnswers } from './types';

export const passage: string[] = [
  "Until three months ago, life in this humble village without electricity would come to a halt after sunset. Inside his mud-and-clay home, Ganpat Jadhav's three children used to study in the dim, smoky glow of a kerosene lamp, when their monthly fuel quota of four litres dried up in just a fortnight, they had to strain their eyes using the light from a cooking fire. That all changed with the installation of low-cost, energy-efficient lamps that are powered entirely by the sun. The lights were installed by the Grameen Surya Bijli Foundation (GSBF), an Indian non-governmental organisation focused on bringing light to rural India. Some 100,000 Indian villages do not yet have electricity. The GSBF lamps use LEDs - light emitting diodes - that are four times more efficient than a normal bulb. After a $55 installation cost, solar energy lights the lamp free of charge. LED lighting, like cell phones, is another example of a technology whose low cost could allow the rural poor to leap into the 21st century.",
  "As many as 1.5 billion people - nearly 80 million in India alone - light their houses using kerosene as the primary lighting media. The fuel is dangerous, dirty, and - despite being subsidised - consumes nearly four per cent of a typical rural Indian household’s budget. A recent report by the Intermediate Technology Development Group suggests that indoor air pollution from such lighting media results in 1.6 million deaths worldwide every year. LED lamps, or more specifically white LEDs, are believed to produce nearly 200 times more useful light than a kerosene lamp and almost 50 times the amount of useful light of a conventional bulb. \"This technology can light an entire rural village with less energy than that used by a single conventional 100-watt light bulb,” says Dave Irvine-Halliday, a professor of electrical engineering at the University of Calgary, Canada and the founder of Light up the World Foundation (LUTW). Founded in 1997, LUTW has used LED technology to bring light to nearly 10,000 homes in remote and disadvantaged corners of some 27 countries like India, Nepal, Sri Lanka, Bolivia, and the Philippines.",
  "The technology, which is not yet widely known in India, faces some scepticism here. “LED systems are revolutionising rural lighting, but this isn’t a magic solution to the world’s energy problems,” says Ashok Jhunjhunwala, head of the electrical engineering department at the Indian Institute of Technology, Madras. In a scenario in which nearly 60 per cent of India’s rural population uses 180 million tons of biomass per year for cooking via primitive wood stoves - which are smoky and provide only 10-15 per cent efficiency in cooking -Jhunjhunwala emphasises the need for a clean energy source, not just for lighting but for other domestic purposes as well. The Indian government in April launched an ambitious project to bring electricity to 112,000 rural villages in the next decade. However, the remote locations of the village will make reaching this goal difficult. A. K. Lakhina, the chairman of India’s Rural Electrification Corporation, says the Indian government recognises the potential of LED lighting powered by solar technology, but expressed reservations about its high costs. “If only LEDs weren't imported but manufactured locally,” he says, “and in bulk.”",
  "The lamps installed in nearly 300 homes by GSBF cost nearly half the price of other solar lighting systems. Jasjeet Singh Chaddha, the founder of the NGO, currently imports his LEDs from China. He wants to set up an LED manufacturing unit and a solar panel manufacturing unit in India. If manufactured locally, the cost of his LED lamp could plummet to $22, as they will not incur heavy import duties. “We need close to $5 million for this,” he says. Mr. Chaddha says he has also asked the government to exempt the lamps from such duties, but to no avail. An entrepreneur who made his money in plastics, Chaddha, has poured his own money into the project, providing the initial installations free of charge. As he looks to make the project self-sustainable, he recognises that it is only urban markets -which have also shown an avid interest in LED lighting - that can pay. The rural markets in India cannot afford it, he says, until the prices are brought down. The rural markets would be able to afford it, says Mr. Irvine-Halliday, if they had access to microcredit. He says that in Tembisa, a shanty town in Johannesburg, he found that almost 10,000 homes spent more than $60 each on candles and paraffin every year. As calculations revealed, these families can afford to purchase a solid state lighting system in just over a year of paying per week what they would normally spend on candles and paraffin - if they have access to microcredit. LUTW is in the process of creating such a microcredit facility for South Africa.",
  "In villages near Khadakwadi, the newly installed LED lamps are a subject of envy, even for those connected to the grid. Those connected to the grid have to face power cuts up to 6 or 7 hours a day. Constant energy shortages and blackouts are a common problem due to a lack of power plants, transmission, and distribution losses caused by old technology and illegal stealing of electricity from the grid. LED systems require far less maintenance, a longer life, and as villagers jokingly say, “no electricity bills”. The lamps provided by GSBF have enough power to provide just four hours of light a day. However, that is enough for people to get their work done in the early hours of the night, and is more reliable than light generated off India’s electrical grid. Villagers are educated by GSBF officials to make the most of the new lamps. An official from GSBF instructs Jadhav and his family to clean the lamp regularly. “Its luminosity and life will diminish if you let the dust settle on it,” he warns them."
];

export const questions: Question[] = [
  {
    id: '27',
    type: 'multiple-choice',
    instructions: 'Choose the correct letter, A, B or C.',
    question: 'The GSBF lamps',
    options: ['provide light for 100,000 Indian villages.', 'are very expensive to install.', 'are powered by the sun.'],
  },
  {
    id: '28',
    type: 'multiple-choice',
    instructions: 'Choose the correct letter, A, B or C.',
    question: 'More than half of India’s population uses',
    options: ['kerosene as a cooking fuel.', 'biomass as a cooking fuel.', 'solar power as a cooking fuel.'],
  },
  {
    id: '29',
    type: 'multiple-choice',
    instructions: 'Choose the correct letter, A, B or C.',
    question: 'In India, the GSBF lamps are too expensive for most people',
    options: ['in rural areas.', 'in urban areas.', 'in all areas.'],
  },
  {
    id: '30',
    type: 'multiple-choice',
    instructions: 'Choose the correct letter, A, B or C.',
    question: 'The GSBF lamps',
    options: ['are not as reliable as electricity from the national power grid.', 'require skill to use.', 'only provide four hours of light a day.'],
  },
  {
    id: '31',
    type: 'sentence-completion',
    instructions: 'Complete the sentences below. Write NO MORE THAN THREE WORDS from the passage for each answer.',
    question: 'Another example of cheap technology helping poor people in the countryside is',
  },
  {
    id: '32',
    type: 'sentence-completion',
    instructions: '',
    question: 'Kerosene lamps and conventional bulbs give off less',
  },
  {
    id: '33',
    type: 'sentence-completion',
    instructions: '',
    question: 'It is unlikely that the Indian government will achieve its aim of connecting 112,000 villages to electricity because many villages are',
  },
  {
    id: '34',
    type: 'sentence-completion',
    instructions: '',
    question: 'GSBF lamps would be cheaper if it weren’t for',
  },
  {
    id: '35',
    type: 'sentence-completion',
    instructions: '',
    question: 'Users need to wipe',
  },
  {
    id: '36',
    type: 'true-false-not-given',
    instructions: 'Do the following statements agree with the information given in the reading passage?',
    question: 'Ganpat Jadhav’s monthly ration of kerosene was insufficient.',
  },
  {
    id: '37',
    type: 'true-false-not-given',
    instructions: '',
    question: 'Kerosene causes many fires in homes in developing countries.',
  },
  {
    id: '38',
    type: 'true-false-not-given',
    instructions: '',
    question: 'LED systems could solve the world’s energy problems.',
  },
  {
    id: '39',
    type: 'true-false-not-given',
    instructions: '',
    question: 'Chaddha has so far funded the GSBF lamp project himself.',
  },
  {
    id: '40',
    type: 'true-false-not-given',
    instructions: '',
    question: 'Microcredit would help to get more people to use LED lamps.',
  },
];

export const correctAnswers: CorrectAnswers = {
  '27': 'C',
  '28': 'B',
  '29': 'A',
  '30': 'C',
  '31': 'cell phones',
  '32': 'useful light',
  '33': 'remote',
  '34': ['heavy import duties', 'import duties'],
  '35': 'dust',
  '36': 'TRUE',
  '37': 'NOT GIVEN',
  '38': 'FALSE',
  '39': 'TRUE',
  '40': 'TRUE',
};