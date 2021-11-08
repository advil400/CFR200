import React from "react";

function VariantPicker({ variantGroups = [], defaultValues = {}, ...props }) {
  if (!variantGroups || variantGroups.length === 0) return null;

  return (
    <div>
      {variantGroups.map(({ options, ...group }) => (
        <div className=""
          key={group.id}
        >
          {/*
          <label className="text-sm"  htmlFor={group.id}>
            {group.name}: {' '}   
          </label>
          */}

          <select className="cursor-pointer text-md my-1 bg-gray-50 text-black border-1 max-h-8 rounded-full border-gray-200 dark:bg-gray-100 dark:border-gray-400 hover:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-200 px-1.5 py-1"
            id={group.id}
            defaultValue={defaultValues[group.id]}
            {...props}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          
        </div>
      ))}
    </div>
  );
}

export default VariantPicker;