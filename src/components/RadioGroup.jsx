import React from 'react'

const RadioGroup = () => {
  return (
    <div className="flex">
      <div className="flex items-center me-4">
        <input
          id="inline-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="₹ IND"
          className="ms-2 text-sm font-medium text-black "
        >
          ₹ IND
        </label>
      </div>
      <div className="flex items-center me-4">
        <input
          id="inline-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="€ EUR"
          className="ms-2 text-sm font-medium text-black "
        >
          € EUR
        </label>
      </div>
      <div className="flex items-center me-4">
        <input
          checked
          id="inline-checked-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label 
          htmlFor="$ USD"
          className="ms-2 text-sm font-medium text-black "
        >
          $ USD
        </label>
      </div>
    </div>
  );
}

export default RadioGroup
