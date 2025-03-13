import { BarChart3 } from "lucide-react";
import React from "react";

function UserDashReadingActivity({ readingStats }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 col-span-full lg:col-span-2">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BarChart3 className="mr-2 text-indigo-600" size={20} />
        Your Reading Activity
      </h2>
      <div className="h-64 flex items-end space-x-2">
        {readingStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="bg-indigo-600 hover:bg-indigo-700 w-full rounded-t transition-all duration-300"
              style={{
                height: `${(stat.hours / 25) * 200}px`,
                animation: `growUp 1s ease-out ${index * 0.1}s`,
              }}
            ></div>
            <span className="text-xs mt-1">{stat.month}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes growUp {
          from {
            height: 0;
          }
        }
      `}</style>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <div>Total Reading Hours: 119</div>
        <div>Average: 19.8 hours/month</div>
      </div>
    </div>
  );
}

export default UserDashReadingActivity;
