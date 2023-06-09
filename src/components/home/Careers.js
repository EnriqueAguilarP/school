import IM2 from './../../assets/img/civil.jpg'
import IM3 from './../../assets/img/industrial.jpg'
import IM4 from './../../assets/img/software.jpg'

const careers = [
    {
      name: 'Civil Engineer',
      imageSrc: IM2,
      description: "A civil engineer is someone who designs and executes structural works that serve the general public, such as dams, bridges, canals, highways, power plants, sewerage systems, and other infrastructure",
    },
    {
      name: 'Industrial Engineer',
      imageSrc: IM3,
      description:
        "An industrial engineer is someone who optimizes complex processes, systems, or organizations by developing, improving and implementing integrated systems of people, money, knowledge, information and equipment",
    },
    {
        name: 'Software Engineer',
        imageSrc: IM4,
        description:
          "Software engineering is a branch of computer science that deals with the design, development, testing, and maintenance of software applications",
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
                    <img className="h-30" src={career.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-3xl font-medium text-gray-900">{career.name}</h3>
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