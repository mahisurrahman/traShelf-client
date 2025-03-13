import { Target } from "lucide-react";
import React from "react";

function UserDashReadingGoals({ readingGoals }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Target className="mr-2 text-indigo-600" size={20} />
        Reading Goals
      </h2>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-sm text-indigo-600">
            {readingGoals.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${readingGoals.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Weekly Goal</h3>
            <p className="text-sm text-gray-600">
              {readingGoals.weekly.current} of {readingGoals.weekly.target}{" "}
              {readingGoals.weekly.unit}
            </p>
          </div>
          <div className="relative h-10 w-10">
            <svg viewBox="0 0 36 36" className="h-10 w-10">
              <path
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray={`${
                  (readingGoals.weekly.current / readingGoals.weekly.target) *
                  100
                }, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
              {Math.round(
                (readingGoals.weekly.current / readingGoals.weekly.target) * 100
              )}
              %
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Monthly Goal</h3>
            <p className="text-sm text-gray-600">
              {readingGoals.monthly.current} of {readingGoals.monthly.target}{" "}
              {readingGoals.monthly.unit}
            </p>
          </div>
          <div className="relative h-10 w-10">
            <svg viewBox="0 0 36 36" className="h-10 w-10">
              <path
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray={`${
                  (readingGoals.monthly.current / readingGoals.monthly.target) *
                  100
                }, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
              {Math.round(
                (readingGoals.monthly.current / readingGoals.monthly.target) *
                  100
              )}
              %
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Annual Books Goal</h3>
            <p className="text-sm text-gray-600">
              {readingGoals.books.current} of {readingGoals.books.target}{" "}
              {readingGoals.books.unit}
            </p>
          </div>
          <div className="relative h-10 w-10">
            <svg viewBox="0 0 36 36" className="h-10 w-10">
              <path
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray={`${
                  (readingGoals.books.current / readingGoals.books.target) * 100
                }, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
              {Math.round(
                (readingGoals.books.current / readingGoals.books.target) * 100
              )}
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashReadingGoals;
