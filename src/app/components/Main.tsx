export default function Main() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for AI components and buttons */}
        <div className="bg-gray-800 p-4 rounded-md text-white">AI Component 1</div>
        <div className="bg-gray-800 p-4 rounded-md text-white">AI Component 2</div>
        <div className="bg-gray-800 p-4 rounded-md text-white">AI Component 3</div>
      </div>
      <div className="mt-6 space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button 1
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
      </div>
    </>
  )
}