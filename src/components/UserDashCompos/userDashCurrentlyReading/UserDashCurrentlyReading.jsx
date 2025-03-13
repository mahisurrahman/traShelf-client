import { Book, BookOpen, Clock } from "lucide-react";
import React from "react";

function UserDashCurrentlyReading({currentlyReading}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 col-span-full">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BookOpen className="mr-2 text-indigo-600" size={20} />
        Currently Reading
      </h2>
      <div className="space-y-4">
        {currentlyReading.map((book) => (
          <div
            key={book.id}
            className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              className={`${book.coverColor} w-12 h-16 rounded flex items-center justify-center text-white`}
            >
              <Book size={24} />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>{book.progress}% complete</span>
                  <span>{book.hoursRead} hours read</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1 text-gray-500" />$
                  {book.hourlyRate}/hour
                </span>
                <span className="text-indigo-600">
                  Total: ${book.totalCost.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashCurrentlyReading;
