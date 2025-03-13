import { DollarSign } from "lucide-react";
import React from "react";

function UserDashTotalEarned({myBooks}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <DollarSign className="mr-2 text-indigo-600" size={20} />
        Your Earnings
      </h2>
      <div className="text-3xl font-bold text-gray-900 mb-2">$291.25</div>
      <p className="text-green-600 text-sm flex items-center mb-4">
        <span className="mr-1">↑</span> 12% from last month
      </p>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span>Total Books Shared</span>
          <span className="font-medium">{myBooks.length}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>Total Rentals</span>
          <span className="font-medium">
            {myBooks.reduce((sum, book) => sum + book.rentedTimes, 0)}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>Most Popular</span>
          <span className="font-medium">
            {myBooks.sort((a, b) => b.rentedTimes - a.rentedTimes)[0].title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserDashTotalEarned;
