const courses = [
  {name: 'Data Science',
    description: 'Data Science is a multidisciplinary field that combines skills and knowledge from mathematics, statistics, computer science, and domain expertise to extract insights and value from data. Data science can be applied to various domains such as business, health care, education, social sciences, and more ',
  },
  { name: 'Machine Learning', 
    description: 'Machine learning is a branch of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed. Machine learning can be applied to various domains such as computer vision, natural language processing, recommender systems, self-driving cars, and more. ' },
  {
    name: 'Deep Learning',
    description: 'Deep learning is a subset of machine learning that uses artificial neural networks to learn from data and perform complex tasks such as image recognition, natural language processing, speech synthesis, and more',
  },
  { name: 'Blockchain', 
  description: 'Blockchain is a distributed ledger technology that enables secure and transparent transactions without intermediaries. Blockchain can be used for various applications such as cryptocurrencies, smart contracts, supply chain management, digital identity, and more.' },
]

export default function Courses() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
          <p className="mt-4 text-lg text-gray-500">
          You will work on challenging data sets and tasks from various domains and industries. 
          You can also showcase your work by creating a portfolio of projects that demonstrate your capabilities.
          This technical courses require a solid foundation in mathematics, statistics, programming.

          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-1 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {courses.map((course) => (
              <div key={course.name} className="relative">
                <dt>
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{course.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{course.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}