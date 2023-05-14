import L1 from './../../assets/img/german.jpg'
import L2 from './../../assets/img/italian.jpg'
import L3 from './../../assets/img/chinese.jpg'

const languages = [
    {
      title: 'German',
      href: '#',
      category: { name: 'Level A2', href: '#' },
      description:
        'Our German course is designed for learners of all levels, from beginners to advanced. You will learn the basics of grammar, vocabulary, pronunciation, and culture through engaging and interactive activities. You will also practice your listening, speaking, reading, and writing skills with authentic materials and real-life situations.',
      imageUrl: L1
    },
    {
      title: 'Italian',
      href: '#',
      category: { name: 'Level A1', href: '#' },
      description:
        'If you have no previous knowledge of Italian or just a few words, our Italian course level A1 is perfect for you. In this course, you will learn the basics of Italian grammar, vocabulary, pronunciation, and culture. You will be able to introduce yourself, ask and answer simple questions, talk about your family, hobbies, and daily routine',
      imageUrl: L2
    },
    {
      title: 'Chinese',
      href: '#',
      category: { name: 'Level B1', href: '#' },
      description:
        'You will be able to understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. You will also be able to deal with most situations likely to arise while traveling in an area where Chinese is spoken. ',
      imageUrl: L3
    },
  ]
  
  export default function Languages() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Languages Center</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Welcome to the Languages Center, a place where you can learn and practice different languages with qualified instructors
             and modern resources. Whether you want to improve your German, Italian, Chinese or Japanese, we have a course that suits 
             your needs and goals.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {languages.map((language) => (
              <div key={language.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={language.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={language.category.href} className="hover:underline">
                        {language.category.name}
                      </a>
                    </p>
                    <a href={language.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{language.title}</p>
                      <p className="mt-3 text-base text-gray-500">{language.description}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }