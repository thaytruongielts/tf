
import { Passage } from './types';

export const PASSAGES: Passage[] = [
  {
    id: 'p1',
    title: 'The Rise of Vertical Farming',
    type: 'TFNG',
    content: `By the year 2050, nearly 80% of the Earth's population will reside in urban centers. Applying the most conservative estimates to current demographic trends, the human population will increase by about three billion people by then. An estimated 109 million hectares of new land (about 20% larger than Brazil) will be needed to grow enough food to feed them, if traditional farming practices continue as they are practiced today. At present, throughout the world, over 80% of the land that is suitable for raising crops is in use. Vertical farming, a concept that relies on growing food in skyscrapers, could be the answer. Proponents argue that indoor farming can protect crops from weather-related disasters like droughts or floods, which are becoming more frequent. Furthermore, indoor environments can be controlled to eliminate the need for herbicides or pesticides.`,
    questions: [
      { id: 'q1', text: 'Methods for predicting the earth’s population have recently changed.', correctAnswer: 'NOT_GIVEN', explanation: 'The text mentions "conservative estimates" but doesn\'t say methods have changed.' },
      { id: 'q2', text: 'Human population is expected to rise by around three billion by 2050.', correctAnswer: 'TRUE', explanation: 'The text states the population will increase by about three billion people by then (2050).' },
      { id: 'q3', text: 'More than 20% of Brazil is currently used for farming.', correctAnswer: 'NOT_GIVEN', explanation: 'The text compares the amount of NEW land needed to Brazil, but doesn\'t state Brazil\'s current land use.' },
      { id: 'q4', text: 'Most of the world\'s suitable farmland is already being cultivated.', correctAnswer: 'TRUE', explanation: 'The text says "over 80% of the land that is suitable... is in use".' },
      { id: 'q5', text: 'Vertical farming is currently only used for high-value vegetables.', correctAnswer: 'NOT_GIVEN', explanation: 'The text introduces vertical farming as a concept but doesn\'t list specific crops currently grown.' },
      { id: 'q6', text: 'Climate change is making traditional farming more difficult.', correctAnswer: 'TRUE', explanation: 'The text mentions droughts and floods are becoming "more frequent".' },
      { id: 'q7', text: 'Vertical farms would use less water than traditional farms.', correctAnswer: 'NOT_GIVEN', explanation: 'While often true in reality, this specific text does not mention water usage.' },
      { id: 'q8', text: 'Traditional farming requires more chemicals than indoor farming.', correctAnswer: 'TRUE', explanation: 'The text says indoor environments can "eliminate the need for herbicides or pesticides".' },
      { id: 'q9', text: 'Skyscrapers are the most expensive way to grow food.', correctAnswer: 'NOT_GIVEN', explanation: 'Costs are not discussed in the passage.' },
      { id: 'q10', text: 'The concept of vertical farming was invented in Brazil.', correctAnswer: 'FALSE', explanation: 'Brazil is only mentioned as a size comparison for land requirements.' }
    ]
  },
  {
    id: 'p2',
    title: 'The Psychology of Choice',
    type: 'YNNG',
    content: `Modern society is built on the principle that more choice is always better. We believe that having a vast array of options empowers the individual and leads to greater satisfaction. However, recent psychological studies suggest a 'paradox of choice'. When presented with too many options, consumers often experience 'decision paralysis' and a subsequent decrease in satisfaction with their final choice. Barry Schwartz, a prominent psychologist, argues that while some choice is better than none, it does not follow that more choice is better than some choice. He suggests that the effort required to compare dozens of similar products leads to exhaustion and regret. In one famous study, shoppers shown 24 varieties of jam were less likely to actually make a purchase than those shown only 6 varieties. This suggests that businesses might benefit from simplifying their offerings.`,
    questions: [
      { id: 'q11', text: 'People generally assume that having many options is beneficial.', correctAnswer: 'YES', explanation: 'The text says "We believe that having a vast array of options empowers the individual".' },
      { id: 'q12', text: 'A small amount of choice is worse than having no choice at all.', correctAnswer: 'NO', explanation: 'Schwartz argues "some choice is better than none".' },
      { id: 'q13', text: 'Decision paralysis is a physical condition caused by stress.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'The text mentions decision paralysis but doesn\'t define it as a physical condition.' },
      { id: 'q14', text: 'Comparing many items can be mentally draining for a shopper.', correctAnswer: 'YES', explanation: 'The text mentions "effort required... leads to exhaustion".' },
      { id: 'q15', text: 'Barry Schwartz believes there is a limit to how much choice is helpful.', correctAnswer: 'YES', explanation: 'He argues "it does not follow that more choice is better than some choice".' },
      { id: 'q16', text: 'Shoppers in the jam study bought more jam when they had 24 choices.', correctAnswer: 'NO', explanation: 'They were "less likely to actually make a purchase" compared to the group with 6 choices.' },
      { id: 'q17', text: 'The jam study has been criticized for being too simplistic.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'No criticism of the study is mentioned.' },
      { id: 'q18', text: 'Regret is a common outcome when faced with overwhelming options.', correctAnswer: 'YES', explanation: 'The text explicitly says comparing many products "leads to exhaustion and regret".' },
      { id: 'q19', text: 'All businesses should limit their product range to six items.', correctAnswer: 'NO', explanation: 'The text says businesses "might benefit from simplifying", but doesn\'t mandate a specific number like six.' },
      { id: 'q20', text: 'Modern society will soon move away from the "more is better" philosophy.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'The text describes the philosophy but doesn\'t predict its future.' }
    ]
  },
  {
    id: 'p3',
    title: 'Ocean Bio-luminescence',
    type: 'TFNG',
    content: `Deep below the ocean surface, where sunlight cannot reach, many marine organisms have developed the ability to produce their own light. This biological phenomenon, known as bio-luminescence, serves various purposes including hunting, defense, and communication. The chemical reaction usually involves a molecule called luciferin and an enzyme called luciferase. Some fish use a 'lure' of light to attract prey, while certain species of squid use flashes of light to startle predators. Interestingly, not all bio-luminescence is produced by the animal itself; some creatures host symbiotic bacteria that generate the light for them. Research into these light-producing mechanisms has led to breakthroughs in medical imaging, allowing scientists to track cancer cells inside the human body. However, the deep ocean remains one of the least explored environments on Earth, and many bio-luminescent species likely remain undiscovered.`,
    questions: [
      { id: 'q21', text: 'Bio-luminescence is only found in the deepest parts of the ocean.', correctAnswer: 'FALSE', explanation: 'The text says "many marine organisms" use it, and doesn\'t restrict it ONLY to the deepest parts, though it mentions where sunlight doesn\'t reach.' },
      { id: 'q22', text: 'The main purpose of bio-luminescence is to provide heat.', correctAnswer: 'FALSE', explanation: 'The text lists hunting, defense, and communication as purposes, not heat.' },
      { id: 'q23', text: 'Luciferin is an enzyme that helps produce light.', correctAnswer: 'FALSE', explanation: 'Luciferin is the molecule; luciferase is the enzyme.' },
      { id: 'q24', text: 'Flashes of light can be used as a defensive tactic.', correctAnswer: 'TRUE', explanation: 'The text mentions squid using flashes to "startle predators".' },
      { id: 'q25', text: 'Some animals produce light through a partnership with bacteria.', correctAnswer: 'TRUE', explanation: 'The text mentions "symbiotic bacteria that generate the light for them".' },
      { id: 'q26', text: 'The study of bio-luminescence has practical applications in medicine.', correctAnswer: 'TRUE', explanation: 'It is used in "medical imaging" to track cancer cells.' },
      { id: 'q27', text: 'Scientists have now mapped the entire deep ocean floor.', correctAnswer: 'FALSE', explanation: 'The text says it remains "one of the least explored environments".' },
      { id: 'q28', text: 'Cancer cells can be cured using bio-luminescent molecules.', correctAnswer: 'NOT_GIVEN', explanation: 'The text mentions tracking cells, not curing them.' },
      { id: 'q29', text: 'More than 50% of deep-sea species are bio-luminescent.', correctAnswer: 'NOT_GIVEN', explanation: 'No specific percentages are given.' },
      { id: 'q30', text: 'Light lures are the most effective hunting strategy for deep-sea fish.', correctAnswer: 'NOT_GIVEN', explanation: 'The text mentions they are used, but doesn\'t compare their effectiveness to other strategies.' }
    ]
  },
  {
    id: 'p4',
    title: 'The History of Ancient Libraries',
    type: 'YNNG',
    content: `The Great Library of Alexandria is perhaps the most famous institution of its kind, symbolizing the peak of ancient knowledge. Established in Egypt around the 3rd century BCE, it aimed to house 'all the books in the world'. Scholars from across the Mediterranean traveled there to study and copy manuscripts. However, Alexandria was not the first major library. The Library of Ashurbanipal in Nineveh (modern-day Iraq) predates it by several centuries and contained thousands of clay tablets. While the Alexandrian library focused on scrolls, the earlier Mesopotamian libraries used more durable materials. It is a common misconception that the Library of Alexandria was destroyed in a single, catastrophic fire. In reality, its decline was likely a gradual process involving budget cuts, neglect, and multiple smaller fires over several centuries. The loss of its contents is one of the greatest tragedies of the classical world.`,
    questions: [
      { id: 'q31', text: 'Alexandria was the most advanced city in the ancient world.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'The text mentions the library but not the status of the city as a whole.' },
      { id: 'q32', text: 'The goal of the Alexandrian library was to collect every existing book.', correctAnswer: 'YES', explanation: 'It aimed to house "all the books in the world".' },
      { id: 'q33', text: 'Alexandria hosted the world\'s very first major library.', correctAnswer: 'NO', explanation: 'The text says Ashurbanipal\'s library "predates it by several centuries".' },
      { id: 'q34', text: 'Clay tablets were less likely to be damaged than papyrus scrolls.', correctAnswer: 'YES', explanation: 'The text refers to clay tablets as "more durable materials".' },
      { id: 'q35', text: 'The Library of Alexandria was burnt down by a single invading army.', correctAnswer: 'NO', explanation: 'The text says it was a "gradual process" and not a "single, catastrophic fire".' },
      { id: 'q36', text: 'Budget issues contributed to the downfall of the library in Alexandria.', correctAnswer: 'YES', explanation: 'The text mentions "budget cuts" as a factor in its decline.' },
      { id: 'q37', text: 'Scholars were required to pay a fee to use the Alexandrian library.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'The text mentions scholars traveled there, but doesn\'t discuss fees.' },
      { id: 'q38', text: 'Some of the scrolls from Alexandria were successfully moved to Rome.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'Not mentioned in the text.' },
      { id: 'q39', text: 'The destruction of the ancient libraries was avoidable.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'The writer calls it a tragedy but doesn\'t explicitly say it was avoidable.' },
      { id: 'q40', text: 'Nineveh\'s library was primarily used for administrative records.', correctAnswer: 'NOT_GIVEN_YN', explanation: 'The text says it contained clay tablets but doesn\'t specify they were administrative.' }
    ]
  },
  {
    id: 'p5',
    title: 'The Evolution of Languages',
    type: 'TFNG',
    content: `Languages are living entities that evolve over time through migration, trade, and cultural exchange. Most European and South Asian languages share a common ancestor known as Proto-Indo-European (PIE). While PIE was never written down, linguists have reconstructed it by comparing 'cognates'—words that sound similar across different languages. For instance, the word for 'mother' is 'māter' in Latin, 'mutter' in German, and 'māthā' in Sanskrit. Interestingly, some languages like Basque have no known relatives and are called 'language isolates'. Technological advancement today is accelerating linguistic change, with new words entering the lexicon daily. However, globalization is also causing many indigenous languages to disappear at an alarming rate. It is estimated that a language dies every two weeks, taking with it a unique worldview.`,
    questions: [
      { id: 'q41', text: 'Linguistics is a relatively new field of scientific study.', correctAnswer: 'NOT_GIVEN', explanation: 'The text doesn\'t discuss the age of the field of linguistics.' },
      { id: 'q42', text: 'There are written records of the Proto-Indo-European language.', correctAnswer: 'FALSE', explanation: 'The text explicitly says PIE "was never written down".' },
      { id: 'q43', text: 'Cognates are words that have similar meanings and sounds across languages.', correctAnswer: 'TRUE', explanation: 'The text defines cognates as words that sound similar across different languages.' },
      { id: 'q44', text: 'Sanskrit and Latin are related languages.', correctAnswer: 'TRUE', explanation: 'They share the common ancestor PIE according to the text.' },
      { id: 'q45', text: 'The Basque language belongs to the Indo-European family.', correctAnswer: 'FALSE', explanation: 'The text says Basque has "no known relatives".' },
      { id: 'q46', text: 'Modern technology is preventing languages from changing.', correctAnswer: 'FALSE', explanation: 'Technology is "accelerating linguistic change".' },
      { id: 'q47', text: 'Globalization is helping to preserve minority languages.', correctAnswer: 'FALSE', explanation: 'Globalization is "causing many indigenous languages to disappear".' },
      { id: 'q48', text: 'Approximately 26 languages die every year.', correctAnswer: 'TRUE', explanation: 'If a language dies every two weeks, that\'s 26 per year.' },
      { id: 'q49', text: 'English is the fastest-growing language in history.', correctAnswer: 'NOT_GIVEN', explanation: 'English is not specifically discussed in this context.' },
      { id: 'q50', text: 'The loss of a language means the loss of a specific cultural perspective.', correctAnswer: 'TRUE', explanation: 'The text says it takes with it a "unique worldview".' }
    ]
  }
];
