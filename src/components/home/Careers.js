import IM1 from '../../assets/img/electric.jpg'
import IM2 from '../../assets/img/civil.jpg'
import IM3 from '../../assets/img/industrial.jpg'
import IM4 from '../../assets/img/software.jpg'



const careers = [
    {
      name: 'Electrical Engineer',
      imageSrc: {IM1},
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: 'Civil Engineer',
      imageSrc: {IM2},
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Industrial Engineer',
      imageSrc: {IM3},
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
    {
        name: 'Software Engineer',
        imageSrc: {IM4},
        description:
          "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
      },
  ]

function Careers(){
    return(
<div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                The Best University Careers
              </h2>
              <p className="mt-4 text-gray-500">
              The university offers strong educational offer at the undergraduate level, composed of 4 careers in the areas of Physical-Mathematical and Engineering Sciences
               It has 10 academic campuses, both in Mexico City and in the interior of the Republic. 
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {careers.map((career) => (
                <div key={career.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={career.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{career.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{career.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Careers