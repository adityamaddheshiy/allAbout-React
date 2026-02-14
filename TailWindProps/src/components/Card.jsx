import swampImage from "../assets/h.jpg";

export default function Card() {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      <img
        src={swampImage}
        alt="Swamp Landscape"
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Swamp Landscape
        </h2>

        <p className="text-gray-600 text-sm mt-2">
          A beautiful mysterious swamp scene displayed using Tailwind CSS in a Vite project.
        </p>

        <button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Explore
        </button>
      </div>
    </div>
  );
}
